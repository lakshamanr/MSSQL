using API.Domain.StoredProcedure;

namespace API.Repository.StoreProcedure
{
    public interface IStoredProcedureRepository
    {
        Task<IEnumerable<StoredProcedureInfo>> GetAllStoredProceduresAsync();
        Task<StoredProcedureMeta> GetStoredProcedureMetadataAsync(string storedProcedureName);
        Task MergeParameterDescriptionAsync(string schemaName, string storedProcedureName, string parameterName, string description);
        Task MergeStoredProcedureDescriptionAsync(string schemaName, string storedProcedureName, string description);
    }
}