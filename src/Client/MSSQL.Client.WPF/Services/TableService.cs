using MSSQL.Client.WPF.Models;

namespace MSSQL.Client.WPF.Services
{
    public class TableService : ITableService
    {
        private readonly IApiService _apiService;

        public TableService(IApiService apiService)
        {
            _apiService = apiService;
        }

        public async Task<List<TableMetadata>?> GetAllTablesAsync()
        {
            return await _apiService.GetAsync<List<TableMetadata>>("/Tables/GetAllTables");
        }

        public async Task<TableMetadata?> GetTableMetaDataAsync(string tableName)
        {
            return await _apiService.GetAsync<TableMetadata>($"/Tables/GetTableMetaData?tableName={tableName}");
        }

        public async Task<bool> UpdateTableDescriptionAsync(string tableName, string description)
        {
            return await _apiService.PostAsync("/Tables/UpdateTableExtendedProperties",
                new { TableName = tableName, Description = description });
        }

        public async Task<bool> UpdateColumnDescriptionAsync(string tableName, string columnName, string description)
        {
            return await _apiService.PostAsync("/Tables/UpdateColumnExtendedProperties",
                new { TableName = tableName, ColumnName = columnName, Description = description });
        }
    }
}
