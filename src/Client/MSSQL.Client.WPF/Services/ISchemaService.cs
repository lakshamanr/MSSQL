using MSSQL.Client.WPF.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MSSQL.Client.WPF.Services
{
    public interface ISchemaService
    {
        Task<List<SchemaInfo>?> GetAllSchemasAsync();
        Task<SchemaInfo?> GetSchemaMetaDataAsync(string schemaName);
    }
}
