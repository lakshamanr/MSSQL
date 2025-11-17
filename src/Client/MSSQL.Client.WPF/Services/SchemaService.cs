using MSSQL.Client.WPF.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MSSQL.Client.WPF.Services
{
    public class SchemaService : ISchemaService
    {
        private readonly IApiService _apiService;

        public SchemaService(IApiService apiService)
        {
            _apiService = apiService;
        }

        public async Task<List<SchemaInfo>?> GetAllSchemasAsync()
        {
            return await _apiService.GetAsync<List<SchemaInfo>>("/Schema/AllSchemas");
        }

        public async Task<SchemaInfo?> GetSchemaMetaDataAsync(string schemaName)
        {
            return await _apiService.GetAsync<SchemaInfo>($"/Schema/GetSchemaMetaData?schemaName={schemaName}");
        }
    }
}
