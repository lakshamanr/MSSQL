using API.Domain.Functions;
using Microsoft.Extensions.Caching.Distributed;

namespace API.Repository.Functions
{


    public class AggregateFunctionRepository : BaseSqlFunctionRepository, IAggregateFunctionRepository
    {
        //   protected override string FunctionType => "AF";
        IBaseSqlFunctionRepository __IBaseSqlFunctionRepository;
        public AggregateFunctionRepository(IBaseSqlFunctionRepository iBaseSqlFunctionRepository, IConfiguration configuration, IDistributedCache cache) : base(cache, configuration)
        {
            _connectionString = configuration.GetConnectionString("SqlServerConnection");
            iBaseSqlFunctionRepository.FunctionType="AF";
            __IBaseSqlFunctionRepository= iBaseSqlFunctionRepository;
        }

        public new async Task<Dictionary<string, string>> FetchAggregateFunctionDescriptionsAsync()
        {
            return await base.FetchAggregateFunctionDescriptionsAsync();
        }
        public new async Task<SqlFunctionMetadata> GetFunctionMetadataAsync(string functionName)
        {
            return await base.GetFunctionMetadataAsync(functionName);
        }

        public new async Task UpsertFunctionDescriptionAsync(string schemaName, string functionName, string description)
        {
            await base.UpsertFunctionDescriptionAsync(schemaName, functionName, description);
        }
    }

}
