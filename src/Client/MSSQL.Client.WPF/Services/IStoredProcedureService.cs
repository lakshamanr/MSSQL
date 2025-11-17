using MSSQL.Client.WPF.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MSSQL.Client.WPF.Services
{
    public interface IStoredProcedureService
    {
        Task<List<StoredProcedureMetadata>?> GetAllStoredProceduresAsync();
        Task<StoredProcedureMetadata?> GetStoredProcedureMetaDataAsync(string procedureName);
        Task<bool> UpdateStoredProcedureDescriptionAsync(string procedureName, string description);
    }
}
