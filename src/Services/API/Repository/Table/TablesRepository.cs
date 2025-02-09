using Microsoft.Extensions.Caching.Distributed;
using API.Repository.Common;


namespace API.Repository.Table
{
    public class TablesRepository : BaseRepository
    {

        /// <summary>
        /// Constructor for the TableInfoService.
        /// </summary>
        /// <param name="databaseSettings">Database settings injected via IOptions.</param>
        /// <param name="logger">Logger instance for logging information or errors.</param>
        public TablesRepository(string connectionString, IDistributedCache cache) : base(connectionString, cache)
        {
        }
    }
}
