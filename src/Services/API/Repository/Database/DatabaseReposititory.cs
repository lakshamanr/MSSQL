using API.Common;
using API.Common.Queries;
using API.Domain.Database;
using API.Repository.Common;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using StackExchange.Redis;
using System.Data;
using System.Data.SqlClient;
using System.Text.Json;

namespace API.Repository.Database
{    /// <summary>
     /// Repository class for database operations.
     /// </summary>
  public class DatabaseReposititory : BaseRepository, IDatabaseReposititory
  {
    private IConfiguration _configuration;
    private readonly ConnectionMultiplexer _redisMultiplexer;
    /// <summary>
    /// Initializes a new instance of the <see cref="DatabaseReposititory"/> class.
    /// </summary>
    /// <param name="logger">The logger instance.</param>
    /// <param name="cache">The distributed cache instance.</param>
    /// <param name="configuration">The configuration instance.</param>
    public DatabaseReposititory(ILogger<DatabaseReposititory> logger, IDistributedCache cache, IConfiguration configuration, ConnectionMultiplexer redisMultiplexer) : base(cache, configuration)
    {
      _configuration = configuration;
      _redisMultiplexer = redisMultiplexer;
    }

    /// <summary>
    /// Gets the metadata of the database.
    /// </summary>
    /// <returns>A <see cref="DatabaseMetaData"/> instance.</returns>
    public async Task<DatabaseMetaData> GetDatabaseMetaData()
    {
      DatabaseMetaData serverMetaData;
      var cachedData = await _cache.GetStringAsync(CacheConstants.DatabaseCache.ServerMetaDataCacheKey);
      if (!string.IsNullOrEmpty(cachedData))
      {
        serverMetaData = JsonSerializer.Deserialize<DatabaseMetaData>(cachedData) ?? new DatabaseMetaData();
      }
      else
      {
        using (IDbConnection db = new SqlConnection(_connectionString))
        {
          serverMetaData = new DatabaseMetaData();
          serverMetaData.CurrentDatabaseName = GetCurrentDatabaseName();
          serverMetaData.DatabaseInfos = await LoadDatabases(db);
          serverMetaData.DatabaseServerName = LoadDatabaseServerName();
          serverMetaData.ProcedureInfos = await LoadStoredProceduresAsync(serverMetaData.CurrentDatabaseName);
          serverMetaData.ScalarFunctionInfos = await LoadScalarFunctionsAsync(serverMetaData.CurrentDatabaseName);
          serverMetaData.TableFunctionInfos = await LoadTableValuedFunctionsAsync(serverMetaData.CurrentDatabaseName);
          serverMetaData.UserTypes = await LoadUserDefinedDataTypesAsync(serverMetaData.CurrentDatabaseName);
          serverMetaData.DbXmlSchemas = await LoadXmlSchemaCollectionsAsync(serverMetaData.CurrentDatabaseName);
          serverMetaData.ServerProperties = await LoadServerPropertiesAsync(db);
          serverMetaData.ServerAdvanceProperties = await LoadAdvancedServerSettingsAsync(db);
          serverMetaData.fileInformations = await LoadDatabaseFiles(db);
          serverMetaData.viewMetadata = await LoadViewAsync();
          serverMetaData.tablesMetadata = await LoadTablesAsync();
          serverMetaData.TriggerInfos = await LoadDatabaseTriggersAsync(serverMetaData.CurrentDatabaseName);
        }
        await _cache.SetStringAsync(
            CacheConstants.DatabaseCache.ServerMetaDataCacheKey,
            JsonSerializer.Serialize(serverMetaData),
            cacheEntryOptions);
      }

      return serverMetaData;
    }

    /// <summary>
    /// Loads database files from cache or queries the database.
    /// </summary>
    /// <param name="connection">The database connection.</param>
    /// <returns>A collection of <see cref="DatabaseFile"/> instances.</returns>
    private async Task<IEnumerable<DatabaseFile>> LoadDatabaseFiles(IDbConnection connection)
    {
      return await LoadFromCacheOrQueryAsync<DatabaseFile>(
          CacheConstants.DatabaseCache.DatabaseFiles,
          SqlQueryConstant.LoadDatabaseFiles
              .Replace("@DatabaseName", $"'{CurrentDatabases}'"),
          connection);
    }

    /// <summary>
    /// Sets the database to the specified name.
    /// </summary>
    /// <param name="databaseName">The name of the database.</param>
    public void SetDatabase(string databaseName)
    {
      // Extract and update only the database name in the connection string
      var updatedConnectionString = UpdateDatabaseName(_connectionString, databaseName);

      // Persist the updated connection string to both appsettings files
      UpdateAppSettings(updatedConnectionString);

      // Update the in-memory connection string
      _connectionString = updatedConnectionString;

      FlushCache();
    }

    /// <summary>
    /// Updates the database name in the connection string.
    /// </summary>
    /// <param name="connectionString">The original connection string.</param>
    /// <param name="newDatabase">The new database name.</param>
    /// <returns>The updated connection string.</returns>
    private string UpdateDatabaseName(string connectionString, string newDatabase)
    {
      var parts = connectionString.Split(';');
      for (int i = 0; i < parts.Length; i++)
      {
        if (parts[i].StartsWith("Initial Catalog=", StringComparison.OrdinalIgnoreCase) ||
            parts[i].StartsWith("Database=", StringComparison.OrdinalIgnoreCase))
        {
          parts[i] = $"Initial Catalog={newDatabase}"; // Standardizing to 'Initial Catalog'
        }
      }
      return string.Join(";", parts);
    }

    /// <summary>
    /// Updates the appsettings files with the new connection string.
    /// </summary>
    /// <param name="newConnectionString">The new connection string.</param>
    private void UpdateAppSettings(string newConnectionString)
    {
      UpdateConfigFile("appsettings.json", newConnectionString);
      UpdateConfigFile("appsettings.Development.json", newConnectionString); // Also update development config
    }

    /// <summary>
    /// Updates the specified configuration file with the new connection string.
    /// </summary>
    /// <param name="fileName">The name of the configuration file.</param>
    /// <param name="newConnectionString">The new connection string.</param>
    private void UpdateConfigFile(string fileName, string newConnectionString)
    {
      string filePath = Path.Combine(Directory.GetCurrentDirectory(), fileName);

      if (!File.Exists(filePath))
      {
        Console.WriteLine($"❌ Config file {fileName} not found.");
        return;
      }

      string json = File.ReadAllText(filePath);
      dynamic jsonObj = Newtonsoft.Json.JsonConvert.DeserializeObject(json);

      jsonObj["ConnectionStrings"]["SqlServerConnection"] = newConnectionString;

      File.WriteAllText(filePath, Newtonsoft.Json.JsonConvert.SerializeObject(jsonObj, Newtonsoft.Json.Formatting.Indented));

      Console.WriteLine($"✅ Updated {fileName} successfully!");
    }



    private async void FlushCache()
    {
      try
      {
        Console.WriteLine("🧹 Flushing cache...");

        // Assuming you're using Redis, you can clear all keys like this
        if (_cache is Microsoft.Extensions.Caching.StackExchangeRedis.RedisCache redisCache)
        {
          Console.WriteLine("🧹 Flushing Redis cache manually...");

          var db = _redisMultiplexer.GetDatabase();
          var endpoints = _redisMultiplexer.GetEndPoints(true);

          foreach (var endpoint in endpoints)
          {
            var server = _redisMultiplexer.GetServer(endpoint);

            if (server.IsConnected)
            {
              Console.WriteLine($"🔍 Retrieving keys from {endpoint}...");

              var keys = server.Keys(pattern: "*"); // Fetch all keys

              int deletedCount = 0;
              foreach (var key in keys)
              {
                await db.KeyDeleteAsync(key);
                deletedCount++;
              }

              Console.WriteLine($"✅ Deleted {deletedCount} keys from Redis.");
            }
          }
        }

        // If using SQL Server cache, you need to manually delete records
        if (_cache is Microsoft.Extensions.Caching.SqlServer.SqlServerCache sqlCache)
        {
          using (var connection = new SqlConnection(_configuration.GetConnectionString("SqlServerConnection")))
          {
            await connection.OpenAsync();
            using (var command = new SqlCommand("DELETE FROM dbo.CacheTable", connection))
            {
              await command.ExecuteNonQueryAsync();
            }
          }
        }

        Console.WriteLine("✅ Cache cleared successfully!");
      }
      catch (Exception ex)
      {
        Console.WriteLine($"❌ Error clearing cache: {ex.Message}");
      }
    }

    /// <summary>
    /// Fetches a list of all available databases in SQL Server.
    /// </summary>
    /// <returns>An array of database names.</returns>
    public async Task<string[]> GetAvailableDatabases()
    {
      var databases = new List<string>();

      try
      {
        using (var connection = new SqlConnection(_connectionString))
        {
          await connection.OpenAsync();
          using (var command = new SqlCommand(SqlQueryConstant.LoadAllDatabases, connection))
          using (var reader = await command.ExecuteReaderAsync())
          {
            while (await reader.ReadAsync())
            {
              databases.Add(reader.GetString(0));
            }
          }
        }
      }
      catch (Exception ex)
      {
        Console.WriteLine($"❌ Error fetching databases: {ex.Message}");
      }

      return databases.ToArray();
    }

    /// <summary>
    /// Fetches the currently active database name.
    /// </summary>
    /// <returns>The name of the active database.</returns>
    public string GetCurrentDatabase()
    {
      try
      {
        using (var connection = new SqlConnection(_connectionString))
        {
          connection.Open();
          using (var command = new SqlCommand("SELECT DB_NAME()", connection))
          {
            return command.ExecuteScalar()?.ToString() ?? "Unknown";
          }
        }
      }
      catch (Exception ex)
      {
        Console.WriteLine($"❌ Error fetching current database: {ex.Message}");
        return "Error";
      }
    }
  }
}
