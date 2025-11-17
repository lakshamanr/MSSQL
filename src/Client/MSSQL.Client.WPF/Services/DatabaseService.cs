using MSSQL.Client.WPF.Models;

namespace MSSQL.Client.WPF.Services
{
    public class DatabaseService : IDatabaseService
    {
        private readonly IApiService _apiService;

        public DatabaseService(IApiService apiService)
        {
            _apiService = apiService;
        }

        public async Task<List<DatabaseInfo>?> GetDatabasesAsync()
        {
            return await _apiService.GetAsync<List<DatabaseInfo>>("/Database/list");
        }

        public async Task<DatabaseMetaData?> GetDatabaseMetaDataAsync()
        {
            return await _apiService.GetAsync<DatabaseMetaData>("/Database/database-meta-data");
        }

        public async Task<bool> ChangeDatabaseAsync(string databaseName)
        {
            return await _apiService.PostAsync("/Database/ChangeDatabase", new { DatabaseName = databaseName });
        }
    }
}
