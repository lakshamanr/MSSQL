using API.Domain.Functions;

namespace API.Repository.Functions
{
    public interface IScalarFunctionRepository
    {
        Task<Dictionary<string, string>> FetchAggregateFunctionDescriptionsAsync();
        Task<Dictionary<string, string>> FetchScalarFunctionDescriptionsAsync();
        Task<Dictionary<string, string>> FetchTableFunctionDescriptionsAsync();
        Task<SqlFunctionMetadata> GetFunctionMetadataAsync(string functionName);
        Task UpsertFunctionDescriptionAsync(string schemaName, string functionName, string description);
    }
}