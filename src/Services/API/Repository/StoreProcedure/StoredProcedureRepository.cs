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
                    SqlQueryConstants.FetchAllStoredProceduresWithDescriptions);
            }
        }

        public async Task<StoredProcedureMeta> GetStoredProcedureMetadataAsync(string storedProcedureName)
        {
            using (var connection = CreateConnection())
            {
                
                var dependencies = await connection.QueryAsync<DependencyResult>(
                    SqlQueryConstants.FetchStoredProcedureDependencies,
                    new { StoredProcedureName = storedProcedureName });

                var parameters = await connection.QueryAsync<StoredProcedureParameter>(
                    SqlQueryConstants.FetchStoredProcedureParametersWithDescriptions,
                    new { StoredProcedureName = storedProcedureName });

                var createScript = await connection.QueryFirstOrDefaultAsync<StoredProcedureCreateScript>(
                    SqlQueryConstants.FetchStoredProcedureCreateScript,
                    new { StoredProcedureName = storedProcedureName });

                var executionPlan = await connection.QueryFirstOrDefaultAsync<ExecutionPlanResult>(
                    SqlQueryConstants.FetchStoredProcedureExecutionPlan,
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

                await connection.ExecuteAsync(
                          SqlQueryConstants.MergeStoredProcedureExtendedProperty,
                          new { SchemaName = schemaName, StoredProcedureName = storedProcedureName, Description = description });
            }
        }

        public async Task MergeParameterDescriptionAsync(string schemaName, string storedProcedureName, string parameterName, string description)
        {
            using (var connection = CreateConnection())
            {
             
                await connection.ExecuteAsync(
                                       SqlQueryConstants.MergeStoredProcedureParameterExtendedProperty,
                                       new { SchemaName = schemaName, StoredProcedureName = storedProcedureName, ParameterName = parameterName, Description = description });
            }
        }
    }
}