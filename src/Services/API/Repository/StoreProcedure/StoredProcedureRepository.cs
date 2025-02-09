using API.Common.Queries;
using API.Domain.StoredProcedure;
using Dapper;
using System.Data;
using System.Data.SqlClient;

namespace API.Repository.StoreProcedure
{
 
    public class StoredProcedureRepository
    {
        private readonly string _connectionString;

        public StoredProcedureRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        private IDbConnection CreateConnection()
        {
            return new SqlConnection(_connectionString);
        }


        public async Task<IEnumerable<StoredProcedureInfo>> GetAllStoredProceduresAsync()
        {
            using (var connection = CreateConnection())
            {
                return await connection.QueryAsync<StoredProcedureInfo>(
                    SqlQueryConstantSp.FetchAllStoredProceduresWithDescriptions);
            }
        }

        public async Task<StoredProcedureMeta> GetStoredProcedureMetadataAsync(string storedProcedureName)
        {
            using (var connection = CreateConnection())
            {
                
                var dependencies = await connection.QueryAsync<DependencyResult>(
                    SqlQueryConstantSp.FetchStoredProcedureDependencies,
                    new { StoredProcedureName = storedProcedureName });

                var parameters = await connection.QueryAsync<StoredProcedureParameter>(
                    SqlQueryConstantSp.FetchStoredProcedureParametersWithDescriptions,
                    new { StoredProcedureName = storedProcedureName });

                var createScript = await connection.QueryFirstOrDefaultAsync<StoredProcedureCreateScript>(
                    SqlQueryConstantSp.FetchStoredProcedureCreateScript,
                    new { StoredProcedureName = storedProcedureName });

                var executionPlan = await connection.QueryFirstOrDefaultAsync<ExecutionPlanResult>(
                    SqlQueryConstantSp.FetchStoredProcedureExecutionPlan,
                    new { StoredProcedureName = storedProcedureName });

                return new StoredProcedureMeta
                {
                     
                    Dependencies = dependencies,
                    Parameters = parameters,
                    CreateScript = createScript,
                    ExecutionPlan = executionPlan
                };
            }
        }


        public async Task MergeStoredProcedureDescriptionAsync(string schemaName, string storedProcedureName, string description)
        {
            using (var connection = CreateConnection())
            {
                var existingDescription = await connection.ExecuteScalarAsync<string>(
                    SqlQueryConstantSp.FetchStoredProcedureDescription,
                    new { SchemaName = schemaName, StoredProcedureName = storedProcedureName });

                if (string.IsNullOrEmpty(existingDescription))
                {
                    await connection.ExecuteAsync(
                        SqlQueryConstantSp.InsertStoredProcedureExtendedProperty,
                        new { SchemaName = schemaName, StoredProcedureName = storedProcedureName, Description = description });
                }
                else
                {
                    await connection.ExecuteAsync(
                        SqlQueryConstantSp.UpdateStoredProcedureExtendedProperty,
                        new { SchemaName = schemaName, StoredProcedureName = storedProcedureName, Description = description });
                }
            }
        }

        public async Task MergeParameterDescriptionAsync(string schemaName, string storedProcedureName, string parameterName, string description)
        {
            using (var connection = CreateConnection())
            {
                var existingDescription = await connection.ExecuteScalarAsync<string>(
                    SqlQueryConstantSp.FetchStoredProcedureParameterDescription,
                    new { SchemaName = schemaName, StoredProcedureName = storedProcedureName, ParameterName = parameterName });

                if (string.IsNullOrEmpty(existingDescription))
                {
                    await connection.ExecuteAsync(
                        SqlQueryConstantSp.InsertStoredProcedureParameterExtendedProperty,
                        new { SchemaName = schemaName, StoredProcedureName = storedProcedureName, ParameterName = parameterName, Description = description });
                }
                else
                {
                    await connection.ExecuteAsync(
                        SqlQueryConstantSp.UpdateStoredProcedureParameterExtendedProperty,
                        new { SchemaName = schemaName, StoredProcedureName = storedProcedureName, ParameterName = parameterName, Description = description });
                }
            }
        }
    }
}