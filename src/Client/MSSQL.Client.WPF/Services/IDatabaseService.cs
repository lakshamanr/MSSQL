using MSSQL.Client.WPF.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MSSQL.Client.WPF.Services
{
    public interface IDatabaseService
    {
        Task<List<DatabaseInfo>?> GetDatabasesAsync();
        Task<DatabaseMetaData?> GetDatabaseMetaDataAsync();
        Task<bool> ChangeDatabaseAsync(string databaseName);
    }
}
