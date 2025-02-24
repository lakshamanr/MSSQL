using API.Common.Helper;
using API.Common.Queries;
using API.Domain.StoredProcedure;
using API.Repository.Common;
using Dapper;
using Microsoft.Extensions.Caching.Distributed;
using System.Data;
using System.Data.SqlClient;

namespace API.Repository.StoreProcedure
{

  /// <summary>
  /// Repository for handling stored procedures.
  /// </summary>
  public class StoredProcedureRepository : BaseRepository, IStoredProcedureRepository
  {
    private readonly IObjectDependenciesRepository _objectDependenciesRepository;
    /// <summary>
    /// Initializes a new instance of the <see cref="StoredProcedureRepository"/> class.
    /// </summary>
    /// <param name="connectionString">The connection string to the database.</param>
    public StoredProcedureRepository(IObjectDependenciesRepository objectDependenciesRepository, IConfiguration configuration, IDistributedCache cache) : base(cache, configuration)
    {
      _objectDependenciesRepository = objectDependenciesRepository;

    }

    /// <summary>
    /// Creates a new database connection.
    /// </summary>
    /// <returns>A new <see cref="IDbConnection"/> instance.</returns>
    private IDbConnection CreateConnection()
    {
      return new SqlConnection(_connectionString);
    }

    /// <summary>
    /// Gets all stored procedures asynchronously.
    /// </summary>
    /// <returns>A collection of <see cref="StoredProcedureInfo"/>.</returns>
    public async Task<IEnumerable<StoredProcedureInfo>> GetAllStoredProceduresAsync()
    {
      using (var connection = CreateConnection())
      {
        return await connection.QueryAsync<StoredProcedureInfo>(
            SqlQueryConstant.FetchAllStoredProceduresWithDescriptions);
      }
    }

    /// <summary>
    /// Gets the metadata of a stored procedure asynchronously.
    /// </summary>
    /// <param name="storedProcedureName">The name of the stored procedure.</param>
    /// <returns>A <see cref="StoredProcedureMeta"/> instance containing the metadata.</returns>
    public async Task<StoredProcedureMeta> GetStoredProcedureMetadataAsync(string storedProcedureName)
    {
      using (var connection = CreateConnection())
      {
        var dependencies = await connection.QueryAsync<DependencyResult>(
            SqlQueryConstant.FetchStoredProcedureDependencies,
            new { StoredProcedureName = storedProcedureName });

        var parameters = await connection.QueryAsync<StoredProcedureParameter>(
            SqlQueryConstant.FetchStoredProcedureParametersWithDescriptions,
            new { StoredProcedureName = storedProcedureName });

        var createScript = await connection.QueryFirstOrDefaultAsync<StoredProcedureCreateScript>(
            SqlQueryConstant.FetchStoredProcedureCreateScript,
            new { StoredProcedureName = storedProcedureName });

        var executionPlan = ExecutionPlanDapper.GetEstimatedPlan(connection, storedProcedureName);

        var storedProcedureInfo = await connection.QueryFirstOrDefaultAsync<StoredProcedureInfo>(
            SqlQueryConstant.FetchStoredProceduresWithDescriptions,
            new { StoredProcedureName = storedProcedureName });

        var StoredProcedureDependencies = await _objectDependenciesRepository.ObjectsDependencies(storedProcedureName);

        return new StoredProcedureMeta
        {
          Dependencies = dependencies,
          Parameters = parameters,
          CreateScript = createScript,
          ExecutionPlan = new ExecutionPlanResult() { QueryPlan= executionPlan },
          StoredProcedureDependenciesTree = StoredProcedureDependencies,
          storedProcedureInfo = storedProcedureInfo
        };
      }
    }

    /// <summary>
    /// Merges the description of a stored procedure asynchronously.
    /// </summary>
    /// <param name="schemaName">The schema name of the stored procedure.</param>
    /// <param name="storedProcedureName">The name of the stored procedure.</param>
    /// <param name="description">The description to merge.</param>
    /// <returns>A task representing the asynchronous operation.</returns>
    public async Task MergeStoredProcedureDescriptionAsync(string schemaName, string storedProcedureName, string description)
    {
      using (var connection = CreateConnection())
      {
        await connection.ExecuteAsync(
            SqlQueryConstant.MergeStoredProcedureExtendedProperty,
            new { SchemaName = schemaName, StoredProcedureName = storedProcedureName, Description = description });
      }
    }

    /// <summary>
    /// Merges the description of a stored procedure parameter asynchronously.
    /// </summary>
    /// <param name="schemaName">The schema name of the stored procedure.</param>
    /// <param name="storedProcedureName">The name of the stored procedure.</param>
    /// <param name="parameterName">The name of the parameter.</param>
    /// <param name="description">The description to merge.</param>
    /// <returns>A task representing the asynchronous operation.</returns>
    public async Task MergeParameterDescriptionAsync(string schemaName, string storedProcedureName, string parameterName, string description)
    {
      using (var connection = CreateConnection())
      {
        await connection.ExecuteAsync(
            SqlQueryConstant.MergeStoredProcedureParameterExtendedProperty,
            new { SchemaName = schemaName, StoredProcedureName = storedProcedureName, ParameterName = parameterName, Description = description });
      }
    }
  }
}
