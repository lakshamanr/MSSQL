using API.Domain.Functions;
using API.Repository.Common;
using Microsoft.Extensions.Caching.Distributed;

namespace API.Repository.Functions
{
    /// <summary>
    /// Repository for handling table-valued functions.
    /// </summary>
    public class TableValuedFunctionRepository : BaseSqlFunctionRepository, ITableValuedFunctionRepository
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TableValuedFunctionRepository"/> class.
        /// </summary>
        /// <param name="IBaseSqlFunctionRepository">The base SQL function repository.</param>
        /// <param name="configuration">The configuration.</param>
        /// <param name="cache">The distributed cache.</param>
        public TableValuedFunctionRepository( IConfiguration configuration, IDistributedCache cache)
            : base(cache, configuration)
        {
            FunctionType = "TF";
      
        }

        /// <summary>
        /// Fetches the descriptions of table-valued functions.
        /// </summary>
        /// <returns>A dictionary containing function names and their descriptions.</returns>
        public async Task<Dictionary<string, string>> FetchTableFunctionDescriptionsAsync()
        {
            return await base.FetchTableFunctionDescriptionsAsync();
        }

        /// <summary>
        /// Gets the metadata of a specific function.
        /// </summary>
        /// <param name="functionName">The name of the function.</param>
        /// <returns>The metadata of the function.</returns>
        public Task<SqlFunctionMetadata> GetFunctionMetadataAsync(string functionName)
        {
            return base.GetFunctionMetadataAsync(functionName);
        }

        /// <summary>
        /// Upserts the description of a specific function.
        /// </summary>
        /// <param name="schemaName">The schema name.</param>
        /// <param name="functionName">The function name.</param>
        /// <param name="description">The description of the function.</param>
        /// <returns>A task representing the asynchronous operation.</returns>
        public async Task UpsertFunctionDescriptionAsync(string schemaName, string functionName, string description)
        {
            await base.UpsertFunctionDescriptionAsync(schemaName, functionName, description);
        }
    }
}
