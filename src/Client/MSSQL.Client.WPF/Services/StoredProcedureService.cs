using MSSQL.Client.WPF.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MSSQL.Client.WPF.Services
{
    public class StoredProcedureService : IStoredProcedureService
    {
        private readonly IApiService _apiService;

        public StoredProcedureService(IApiService apiService)
        {
            _apiService = apiService;
        }

        public async Task<List<StoredProcedureMetadata>?> GetAllStoredProceduresAsync()
        {
            return await _apiService.GetAsync<List<StoredProcedureMetadata>>("/StoredProcedure/AllStoredProcedures");
        }

        public async Task<StoredProcedureMetadata?> GetStoredProcedureMetaDataAsync(string procedureName)
        {
            return await _apiService.GetAsync<StoredProcedureMetadata>($"/StoredProcedure/GetStoredProcedureMetaData?procedureName={procedureName}");
        }

        public async Task<bool> UpdateStoredProcedureDescriptionAsync(string procedureName, string description)
        {
            return await _apiService.PostAsync("/StoredProcedure/description",
                new { ProcedureName = procedureName, Description = description });
        }
    }
}
