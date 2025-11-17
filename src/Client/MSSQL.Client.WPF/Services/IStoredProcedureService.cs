using MSSQL.Client.WPF.Models;

namespace MSSQL.Client.WPF.Services
{
    public interface IStoredProcedureService
    {
        Task<List<StoredProcedureMetadata>?> GetAllStoredProceduresAsync();
        Task<StoredProcedureMetadata?> GetStoredProcedureMetaDataAsync(string procedureName);
        Task<bool> UpdateStoredProcedureDescriptionAsync(string procedureName, string description);
    }
}
