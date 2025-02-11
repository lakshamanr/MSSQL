using API.Domain.Functions;

namespace API.Repository.Functions
{
    public interface IBaseSqlFunctionRepository
    {
         string FunctionType { get; set; }
        Task<Dictionary<string, string>> FetchAggregateFunctionDescriptionsAsync();
        Task<Dictionary<string, string>> FetchScalarFunctionDescriptionsAsync();
        Task<Dictionary<string, string>> FetchTableFunctionDescriptionsAsync();
        Task<SqlFunctionMetadata> GetFunctionMetadataAsync(string functionName);
        Task UpsertFunctionDescriptionAsync(string schemaName, string functionName, string description);
    }
}