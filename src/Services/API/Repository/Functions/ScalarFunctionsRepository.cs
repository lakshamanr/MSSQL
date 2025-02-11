using API.Domain.Functions;
using API.Repository.Common;
using Microsoft.Extensions.Caching.Distributed;

namespace API.Repository.Functions
{

    /// <summary>
    /// Repository for scalar-valued functions.
    /// </summary>
    public class ScalarFunctionRepository : BaseSqlFunctionRepository, IScalarFunctionRepository
    {
        
        IBaseSqlFunctionRepository __IBaseSqlFunctionRepository;
        public ScalarFunctionRepository(IBaseSqlFunctionRepository iBaseSqlFunctionRepository, IConfiguration configuration, IDistributedCache cache) : base(cache, configuration)
        {
            _connectionString = configuration.GetConnectionString("SqlServerConnection");
            iBaseSqlFunctionRepository.FunctionType = "FN";
            __IBaseSqlFunctionRepository = iBaseSqlFunctionRepository;
        }
        public new async Task<Dictionary<string, string>> FetchScalarFunctionDescriptionsAsync()
        {
            return await FetchScalarFunctionDescriptionsAsync();
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
