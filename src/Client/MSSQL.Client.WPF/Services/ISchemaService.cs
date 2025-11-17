using MSSQL.Client.WPF.Models;

namespace MSSQL.Client.WPF.Services
{
    public interface ISchemaService
    {
        Task<List<SchemaInfo>?> GetAllSchemasAsync();
        Task<SchemaInfo?> GetSchemaMetaDataAsync(string schemaName);
    }
}
