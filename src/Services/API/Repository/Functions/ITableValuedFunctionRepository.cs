using API.Domain.Functions;

namespace API.Repository.Functions
{
    public interface ITableValuedFunctionRepository
    {
        Task<Dictionary<string, string>> FetchTableFunctionDescriptionsAsync();
        Task<SqlFunctionMetadata> GetFunctionMetadataAsync(string functionName);
        Task UpsertFunctionDescriptionAsync(string schemaName, string functionName, string description);
    }
}