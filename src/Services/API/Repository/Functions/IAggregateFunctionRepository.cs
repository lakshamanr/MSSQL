using API.Domain.Functions;

namespace API.Repository.Functions
{
    public interface IAggregateFunctionRepository
    {
        Task<Dictionary<string, string>> FetchAggregateFunctionDescriptionsAsync();
        Task<SqlFunctionMetadata> GetFunctionMetadataAsync(string functionName);
        Task UpsertFunctionDescriptionAsync(string schemaName, string functionName, string description);
    }
}