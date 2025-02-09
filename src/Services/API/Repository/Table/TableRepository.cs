using API.Common.Queries;
using API.Domain.Table;
using API.Repository.Common;
using Dapper;
using Microsoft.Extensions.Caching.Distributed;
using System.Data;
using System.Data.SqlClient;
using System.Text.Json;

namespace API.Repository.Table
{
    /// <summary>
    /// Service for retrieving information about database tables.
    /// </summary>
    public class TableRepository : BaseRepository
    {
        private readonly string _connectionString;
        private readonly ILogger<TableRepository> _logger;
        private readonly new IDistributedCache _cache;

        /// <summary>
        /// Constructor for the TableInfoService.
        /// </summary>
        /// <param name="connectionString">Database connection string.</param>
        /// <param name="logger">Logger instance for logging information or errors.</param>
        /// <param name="cache">Distributed cache instance for caching data.</param>
        public TableRepository(string connectionString, ILogger<TableRepository> logger, IDistributedCache cache) : base(connectionString, cache)
        {
            _connectionString = connectionString;
            _logger = logger;
            _cache = cache;
        }

        /// <summary>
        /// Loads metadata for a specific table.
        /// </summary>
        /// <param name="tableName">The name of the table.</param>
        /// <returns>A <see cref="TableMetadata"/> object containing detailed information about the table.</returns>
        public async Task<TableMetadata?> LoadTableMetadata(string tableName)
        {
            var cacheKey = $"TableInfo_{tableName}";
            var cachedData = await _cache.GetStringAsync(cacheKey);
            if (!string.IsNullOrEmpty(cachedData))
            {
                return JsonSerializer.Deserialize<TableMetadata>(cachedData);
            }

            try
            {
                var schemaAndTableName = tableName.Split('.');
                var schemaName = schemaAndTableName[0];
                var tableNameOnly = schemaAndTableName[1];

                using (IDbConnection db = new SqlConnection(_connectionString))
                {
                    var descriptions = await GetTableDescriptionAsync(db, schemaName, tableNameOnly);
                    var columns = await GetTableColumnInfoAsync(db, tableName);
                    var createScript = await GetTableCreateScriptAsync(db, tableName);
                    var indices = await GetTableIndexesAsync(db, tableName);
                    var foreignKeys = await GetTableForeignKeysAsync(db, tableName);
                    var properties = await GetDetailedTablePropertiesAsync(db, tableName);
                    var constraint = await GetTableTableConstraintAsync(db, tableName);
                    var fragmentation = await GetTableFragmentation(db, tableName);
                    var tableDependencies = await GetTableDependencies(db, tableName);

                    var detailedTableInfo = new TableMetadata
                    {
                        Descriptions = descriptions,
                        Columns = columns,
                        CreateScript = new TableCreateScript { Script = createScript ?? string.Empty },
                        Indices = indices,
                        ForeignKeys = foreignKeys,
                        Properties = properties,
                        Constraints = constraint,
                        TableFragmentations = fragmentation,
                        TableDependencies = tableDependencies
                    };

                    var serializedData = JsonSerializer.Serialize(detailedTableInfo);
                    await _cache.SetStringAsync(cacheKey, serializedData, new DistributedCacheEntryOptions
                    {
                        AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(5)
                    });

                    return detailedTableInfo;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while getting detailed table info for {TableName}: {Message}", tableName, ex.Message);
                return null;
            }
        }

        /// <summary>
        /// Gets detailed properties of a specific table.
        /// </summary>
        /// <param name="db">Database connection.</param>
        /// <param name="tableName">The name of the table.</param>
        /// <returns>An enumerable of <see cref="TableProperty"/>.</returns>
        private async Task<IEnumerable<TableProperty>> GetDetailedTablePropertiesAsync(IDbConnection db, string tableName)
        {
            var schemaAndTableName = tableName.Split('.');
            var schemaName = schemaAndTableName[0];
            var tableNameOnly = schemaAndTableName[1];
            return await GetTablePropertiesAsync(db, schemaName, tableNameOnly);
        }

        /// <summary>
        /// Gets descriptions of a specific table.
        /// </summary>
        /// <param name="db">Database connection.</param>
        /// <param name="schemaName">The schema name of the table.</param>
        /// <param name="tableName">The name of the table.</param>
        /// <returns>An enumerable of <see cref="TableDescription"/>.</returns>
        private async Task<IEnumerable<TableDescription>> GetTableDescriptionAsync(IDbConnection db, string schemaName, string tableName)
        {
            var query = SqlQueryConstant.GetAllExtendedPropertiesofTheTable
                    .Replace("@SchemaName", $"'{schemaName}'")
                    .Replace("@TableName", $"'{tableName}'");

            return await db.QueryAsync<TableDescription>(query);
        }

        /// <summary>
        /// Gets properties of a specific table.
        /// </summary>
        /// <param name="db">Database connection.</param>
        /// <param name="schemaName">The schema name of the table.</param>
        /// <param name="tableName">The name of the table.</param>
        /// <returns>An enumerable of <see cref="TableProperty"/>.</returns>
        private async Task<IEnumerable<TableProperty>> GetTablePropertiesAsync(IDbConnection db, string schemaName, string tableName)
        {
            var query = SqlQueryConstant.GetTableProperties
                    .Replace("@SchemaName", $"'{schemaName}'")
                    .Replace("@TableName", $"'{tableName}'");

            return await db.QueryAsync<TableProperty>(query);
        }

        /// <summary>
        /// Gets column information of a specific table.
        /// </summary>
        /// <param name="db">Database connection.</param>
        /// <param name="tableName">The name of the table.</param>
        /// <returns>An enumerable of <see cref="TableColumns"/>.</returns>
        private async Task<IEnumerable<TableColumns>> GetTableColumnInfoAsync(IDbConnection db, string tableName)
        {
            return await db.QueryAsync<TableColumns>(SqlQueryConstant.GetAllTablesColumn, new { tblName = tableName });
        }

        /// <summary>
        /// Gets the create script of a specific table.
        /// </summary>
        /// <param name="db">Database connection.</param>
        /// <param name="tableName">The name of the table.</param>
        /// <returns>The create script as a string.</returns>
        private async Task<string?> GetTableCreateScriptAsync(IDbConnection db, string tableName)
        {
            return await db.QueryFirstOrDefaultAsync<string>(SqlQueryConstant.GetTableCreateScript.Replace("@tableName", $"'{tableName}'"));
        }

        /// <summary>
        /// Gets indexes of a specific table.
        /// </summary>
        /// <param name="db">Database connection.</param>
        /// <param name="tableName">The name of the table.</param>
        /// <returns>An enumerable of <see cref="TableIndex"/>.</returns>
        private async Task<IEnumerable<TableIndex>> GetTableIndexesAsync(IDbConnection db, string tableName)
        {
            return await db.QueryAsync<TableIndex>(SqlQueryConstant.GetTableIndex, new { tblName = tableName });
        }

        /// <summary>
        /// Gets foreign keys of a specific table.
        /// </summary>
        /// <param name="db">Database connection.</param>
        /// <param name="tableName">The name of the table.</param>
        /// <returns>An enumerable of <see cref="TableForeignKey"/>.</returns>
        private async Task<IEnumerable<TableForeignKey>> GetTableForeignKeysAsync(IDbConnection db, string tableName)
        {
            return await db.QueryAsync<TableForeignKey>(SqlQueryConstant.GetAllTableForeignKeys, new { tblName = tableName });
        }

        /// <summary>
        /// Gets constraints of a specific table.
        /// </summary>
        /// <param name="db">Database connection.</param>
        /// <param name="tableName">The name of the table.</param>
        /// <returns>An enumerable of <see cref="TableConstraint"/>.</returns>
        private async Task<IEnumerable<TableConstraint>> GetTableTableConstraintAsync(IDbConnection db, string tableName)
        {
            return await db.QueryAsync<TableConstraint>(SqlQueryConstant.GetAllKeyConstraints, new { tblName = tableName });
        }

        /// <summary>
        /// Updates extended property for a specific table.
        /// </summary>
        /// <param name="tableDescription">The table description to update.</param>
        public async Task UpdateTableExtendedProperty(TableDescription tableDescription)
        {
            try
            {
                using (IDbConnection db = new SqlConnection(_connectionString))
                {
                    var schemaAndTableName = tableDescription.Table.Split('.');
                    var schemaName = schemaAndTableName[0];
                    var tableNameOnly = schemaAndTableName[1];

                    var parameters = new DynamicParameters();
                    parameters.Add("@name", tableDescription.Name);
                    parameters.Add("@value", tableDescription.Value);
                    parameters.Add("@level0type", "SCHEMA");
                    parameters.Add("@level0name", schemaName);
                    parameters.Add("@level1type", "TABLE");
                    parameters.Add("@level1name", tableNameOnly);

                    await db.ExecuteAsync("sys.sp_updateextendedproperty", parameters, commandType: CommandType.StoredProcedure);
                    await _cache.RemoveAsync($"TableInfo_{tableDescription.Name}");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while updating table extended property for {TableDescription}: {Message}", tableDescription, ex.Message);
            }
        }

        /// <summary>
        /// Updates extended property for a specific table column.
        /// </summary>
        /// <param name="tableColumns">The table column description to update.</param>
        public async Task UpdateTableColumnExtendedPropertyAsync(TableColumns tableColumns)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var schemaAndTableName = tableColumns.TableName.Split('.');
                var schemaName = schemaAndTableName[0];
                var tableName = schemaAndTableName[1];

                var parameters = new DynamicParameters();
                parameters.Add("@name", "MS_Description");
                parameters.Add("@value", tableColumns.Description);
                parameters.Add("@level0type", "SCHEMA");
                parameters.Add("@level0name", schemaName);
                parameters.Add("@level1type", "TABLE");
                parameters.Add("@level1name", tableName);
                parameters.Add("@level2type", "COLUMN");
                parameters.Add("@level2name", tableColumns.ColumnName);

                await db.ExecuteAsync("sys.sp_updateextendedproperty", parameters, commandType: CommandType.StoredProcedure);

                await _cache.RemoveAsync($"TableInfo_{tableName}");
            }
        }

        /// <summary>
        /// Gets fragmentation details of a specific table.
        /// </summary>
        /// <param name="db">Database connection.</param>
        /// <param name="tableName">The name of the table.</param>
        /// <returns>An enumerable of <see cref="TableFragmentation"/>.</returns>
        private async Task<IEnumerable<TableFragmentation>> GetTableFragmentation(IDbConnection db, string tableName)
        {
            return (await LoadTableFragmentationDetailsAsync(db)).Where(tf => tf.TableName == tableName).ToList();
        }

        /// <summary>
        /// Loads fragmentation details for all tables.
        /// </summary>
        /// <param name="db">Database connection.</param>
        /// <returns>An enumerable of <see cref="TableFragmentation"/>.</returns>
        private async Task<IEnumerable<TableFragmentation>> LoadTableFragmentationDetailsAsync(IDbConnection db)
        {
            return await db.QueryAsync<TableFragmentation>(SqlQueryConstant.AllTableFragmentation);
        }

        /// <summary>
        /// Gets object dependencies based on a query template.
        /// </summary>
        /// <param name="cacheKeyPrefix">Cache key prefix.</param>
        /// <param name="db">Database connection.</param>
        /// <param name="astrObjectName">The object name.</param>
        /// <param name="sqlQueryTemplate">The SQL query template.</param>
        /// <returns>An enumerable of <see cref="ReferencesModel"/>.</returns>
        private async Task<IEnumerable<ReferencesModel>> GetObjectDependencies(string cacheKeyPrefix, IDbConnection db, string astrObjectName, string sqlQueryTemplate)
        {
            var newObjectName = astrObjectName.Substring(astrObjectName.IndexOf(".", StringComparison.Ordinal) + 1);
            var query = sqlQueryTemplate.Replace("@ObjectName", $"'{newObjectName}'");
            return await db.QueryAsync<ReferencesModel>(query);
        }

        /// <summary>
        /// Gets objects that depend on a specific object.
        /// </summary>
        /// <param name="db">Database connection.</param>
        /// <param name="astrObjectName">The object name.</param>
        /// <returns>A JSON string representing the dependencies.</returns>
        private async Task<string> GetObjectThatDependsOn(IDbConnection db, string astrObjectName)
        {
            var dependencies = (List<ReferencesModel>)await GetObjectDependencies("GetObjectThatDependsOn", db, astrObjectName, SqlQueryConstant.ObjectThatDependsOn);
            return GetObjectThatDependsOnJson(dependencies);
        }

        /// <summary>
        /// Gets objects on which a specific object depends.
        /// </summary>
        /// <param name="db">Database connection.</param>
        /// <param name="astrObjectName">The object name.</param>
        /// <returns>A JSON string representing the dependencies.</returns>
        private async Task<string> GetObjectOnWhichDepends(IDbConnection db, string astrObjectName)
        {
            var dependencies = (List<ReferencesModel>)await GetObjectDependencies("GetObjectOnWhichDepends", db, astrObjectName, SqlQueryConstant.ObjectOnWhichDepends);
            return GetObjectOnWhichDependsOnJson(dependencies);
        }

        /// <summary>
        /// Adds type information to a list of references.
        /// </summary>
        /// <param name="referencesModels">The list of references.</param>
        /// <returns>The list of references with type information added.</returns>
        private List<ReferencesModel> AddObjectTypeInfo(List<ReferencesModel> referencesModels)
        {
            // Create a dictionary to map TheType values to their respective descriptions
            var typeDescriptionMap = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
            {
                { "AF", "(Aggregate function)" },
                { "C", "(CHECK constraint)" },
                { "D", "(DEFAULT)" },
                { "FN", "(SQL scalar function)" },
                { "FS", "(Assembly (CLR) scalar-function)" },
                { "FT", "(Assembly (CLR) table-valued function)" },
                { "IF", "(SQL inline table-valued function)" },
                { "IT", "(Internal table)" },
                { "P", "(SQL Stored Procedure)" },
                { "PC", "(Assembly (CLR) stored-procedure)" },
                { "PG", "(Plan guide)" },
                { "PK", "(PRIMARY KEY constraint)" },
                { "R", "(Rule (old-style, stand-alone))" },
                { "RF", "(Replication-filter-procedure)" },
                { "S", "(System base table)" },
                { "SN", "(Synonym)" },
                { "SO", "(Sequence object)" },
                { "U", "(Table - user-defined)" },
                { "V", "(View)" },
                { "EC", "(Edge constraint)" },
                { "SQ", "(Service queue)" },
                { "TA", "(Assembly (CLR) DML trigger)" },
                { "TF", "(SQL table-valued-function)" },
                { "TR", "(SQL DML trigger)" },
                { "TT", "(Table type)" },
                { "UQ", "(UNIQUE constraint)" },
                { "X", "(Extended stored procedure)" },
                { "XMLC", "(XML Data Type)" }
            };

            // Process distinct references based on ThePath
            foreach (var model in referencesModels.DistinctBy(x => x.ThePath))
            {
                var trimmedType = model.TheType.Trim();

                if (typeDescriptionMap.TryGetValue(trimmedType, out var description))
                {
                    model.ThePath += description;
                }
            }

            return referencesModels;
        }

        /// <summary>
        /// Converts a list of references to a JSON string representing objects that depend on a specific object.
        /// </summary>
        /// <param name="referencesModels">The list of references.</param>
        /// <returns>A JSON string representing the dependencies.</returns>
        private string GetObjectThatDependsOnJson(List<ReferencesModel> referencesModels)
        {
            var e = new HirechyJsonGenerator(
                AddObjectTypeInfo(referencesModels).Select(x => x.ThePath.Replace("\\", " ")).ToList(),
                "That Depends On"
            );
            return e.root.PrimengToJson();
        }

        /// <summary>
        /// Converts a list of references to a JSON string representing objects on which a specific object depends.
        /// </summary>
        /// <param name="referencesModels">The list of references.</param>
        /// <returns>A JSON string representing the dependencies.</returns>
        private string GetObjectOnWhichDependsOnJson(List<ReferencesModel> referencesModels)
        {
            var e = new HirechyJsonGenerator(
                AddObjectTypeInfo(referencesModels).Select(x => x.ThePath.Replace("\\", " ")).ToList(),
                "On Which Depends"
            );
            return e.root.PrimengToJson();
        }

        /// <summary>
        /// Generates a JSON result representing the dependency tree.
        /// </summary>
        /// <param name="ObjectThatDependsOn">JSON string representing objects that depend on the specified object.</param>
        /// <param name="ObjectOnWhichDepends">JSON string representing objects on which the specified object depends.</param>
        /// <param name="ObjectName">The name of the object.</param>
        /// <returns>A JSON string representing the dependency tree.</returns>
        public string JsonResult(string ObjectThatDependsOn, string ObjectOnWhichDepends, string ObjectName)
        {
            return $"[{{ \"label\": \"Dependency Tree\", \"expandedIcon\": \"fa fa-folder-open\", \"collapsedIcon\": \"fa fa-folder-close\", \"children\": [{ObjectThatDependsOn}, {ObjectOnWhichDepends}] }} ]";
        }

        /// <summary>
        /// Gets dependencies of a specific table.
        /// </summary>
        /// <param name="db">Database connection.</param>
        /// <param name="tableName">The name of the table.</param>
        /// <returns>A JSON string representing the dependencies.</returns>
        public async Task<string> GetTableDependencies(IDbConnection db, string tableName)
        {
            var objThatDependsOn = await GetObjectThatDependsOn(db, tableName);
            var objOnWhichDepends = await GetObjectOnWhichDepends(db, tableName);
            return JsonResult(objThatDependsOn, objOnWhichDepends, tableName);
        }
    }
}
