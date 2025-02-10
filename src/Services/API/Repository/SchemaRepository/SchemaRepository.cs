using API.Common.Queries;
using API.Domain.Schemas;
using Dapper;
using System.Data.SqlClient;

namespace API.Repository.SchemaRepository
{
    public class SchemaRepository
    {
        private readonly string _connectionString;

        public SchemaRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<IEnumerable<SchemaMetadata>> GetAllSchemaMetadataAsync()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                return await connection.QueryAsync<SchemaMetadata>(SqlQueryConstant.GetAllSchemaMetadata);
            }
        }

        public async Task<SchemaMetadata> GetSchemaMetadataAsync(string schemaName)
        {
            SchemaMetadata schemaMetadata = new SchemaMetadata();
            using (var connection = new SqlConnection(_connectionString))
            {
                schemaMetadata.Description = await connection.QueryFirstOrDefaultAsync<SchemaDescription>(SqlQueryConstant.GetSchemaDescription, new { SchemaName = schemaName }) ?? new SchemaDescription();
                schemaMetadata.Owner = await connection.QueryFirstOrDefaultAsync<SchemaOwner>(SqlQueryConstant.GetSchemaOwner, new { SchemaName = schemaName }) ?? new SchemaOwner();
                schemaMetadata.ObjectsUsedBySchemaAsync = await connection.QueryAsync<SchemaObject>(SqlQueryConstant.GetObjectsUsedBySchema, new { SchemaName = schemaName });
                schemaMetadata.Script = await connection.ExecuteScalarAsync<string>(SqlQueryConstant.GenerateSchemaScript, new { SchemaName = schemaName });
            }
            return schemaMetadata;
        }


        
    }

}
