using API.Domain.Functions;
using Microsoft.Extensions.Caching.Distributed;

namespace API.Repository.Functions
{


    /// <summary>
    /// Repository for managing aggregate functions.
    /// </summary>
    public class AggregateFunctionRepository : BaseSqlFunctionRepository, IAggregateFunctionRepository
    {
        private readonly IBaseSqlFunctionRepository __IBaseSqlFunctionRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="AggregateFunctionRepository"/> class.
        /// </summary>
        /// <param name="iBaseSqlFunctionRepository">The base SQL function repository.</param>
        /// <param name="configuration">The configuration.</param>
        /// <param name="cache">The distributed cache.</param>
        public AggregateFunctionRepository(IBaseSqlFunctionRepository iBaseSqlFunctionRepository, IConfiguration configuration, IDistributedCache cache) : base(cache, configuration)
        {

            iBaseSqlFunctionRepository.FunctionType = "AF";
            __IBaseSqlFunctionRepository = iBaseSqlFunctionRepository;
        }

        /// <summary>
        /// Fetches the aggregate function descriptions asynchronously.
        /// </summary>
        /// <returns>A dictionary of function names and their descriptions.</returns>
        public new async Task<Dictionary<string, string>> FetchAggregateFunctionDescriptionsAsync()
        {
            return await base.FetchAggregateFunctionDescriptionsAsync();
        }

        /// <summary>
        /// Gets the metadata for a specific function asynchronously.
        /// </summary>
        /// <param name="functionName">The name of the function.</param>
        /// <returns>The metadata of the function.</returns>
        public new async Task<SqlFunctionMetadata> GetFunctionMetadataAsync(string functionName)
        {
            return await base.GetFunctionMetadataAsync(functionName);
        }

        /// <summary>
        /// Upserts the description for a specific function asynchronously.
        /// </summary>
        /// <param name="schemaName">The schema name.</param>
        /// <param name="functionName">The name of the function.</param>
        /// <param name="description">The description of the function.</param>
        public new async Task UpsertFunctionDescriptionAsync(string schemaName, string functionName, string description)
        {
            await base.UpsertFunctionDescriptionAsync(schemaName, functionName, description);
        }
    }

}
