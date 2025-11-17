using MSSQL.Client.WPF.Models;

namespace MSSQL.Client.WPF.Services
{
    public interface IDatabaseService
    {
        Task<List<DatabaseInfo>?> GetDatabasesAsync();
        Task<DatabaseMetaData?> GetDatabaseMetaDataAsync();
        Task<bool> ChangeDatabaseAsync(string databaseName);
    }
}
