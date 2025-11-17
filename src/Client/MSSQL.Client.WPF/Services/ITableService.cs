using MSSQL.Client.WPF.Models;

namespace MSSQL.Client.WPF.Services
{
    public interface ITableService
    {
        Task<List<TableMetadata>?> GetAllTablesAsync();
        Task<TableMetadata?> GetTableMetaDataAsync(string tableName);
        Task<bool> UpdateTableDescriptionAsync(string tableName, string description);
        Task<bool> UpdateColumnDescriptionAsync(string tableName, string columnName, string description);
    }
}
