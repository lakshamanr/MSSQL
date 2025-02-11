using API.Common.Queries;
using API.Domain.Schemas;
using Dapper;
using System.Data.SqlClient;

namespace API.Repository.SchemaRepository
{
    /// <summary>
    /// Repository class for handling schema-related database operations.
    /// </summary>
    public class SchemaRepository
    {
        private readonly string _connectionString;

        /// <summary>
        /// Initializes a new instance of the <see cref="SchemaRepository"/> class.
        /// </summary>
        /// <param name="connectionString">The connection string to the database.</param>
        public SchemaRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        /// <summary>
        /// Asynchronously retrieves all schema metadata.
        /// </summary>
        /// <returns>A task that represents the asynchronous operation. The task result contains a collection of <see cref="SchemaDescription"/>.</returns>
        public async Task<IEnumerable<SchemaDescription>> GetAllSchemaMetadataAsync()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                return await connection.QueryAsync<SchemaDescription>(SqlQueryConstant.GetAllSchemaMetadata);
            }
        }

        /// <summary>
        /// Asynchronously retrieves metadata for a specific schema.
        /// </summary>
        /// <param name="schemaName">The name of the schema.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the <see cref="SchemaMetadata"/> for the specified schema.</returns>
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
