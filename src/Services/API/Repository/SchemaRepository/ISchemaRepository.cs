using API.Domain.Schemas;

namespace API.Repository.SchemaRepository
{
    public interface ISchemaRepository
    {
        Task<IEnumerable<SchemaDescription>> GetAllSchemaMetadataAsync();
        Task<SchemaMetadata> GetSchemaMetadataAsync(string schemaName);
    }
}