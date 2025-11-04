using Microsoft.Extensions.Caching.Distributed;
using API.core.Services.Account.Interfaces;
using API.Data.Repositories.Common;
using System.Data.SqlClient;
using API.Core.Domain.Table;


namespace API.Data.Repositories.Table
{
    /// <summary>
    /// Repository class for handling table-related database operations.
    /// </summary>
    public class TablesRepository : BaseRepository, ITablesRepository
    {
        /// <summary>
        /// Constructor for the TableInfoService.
        /// </summary>
        /// <param name="databaseSettings">Database settings injected via IOptions.</param>
        /// <param name="logger">Logger instance for logging information or errors.</param>
        /// <param name="userIdAccessor">The user ID accessor.</param>
        public TablesRepository(IConfiguration configuration, IDistributedCache cache, IUserIdAccessor userIdAccessor) : base(cache, configuration, userIdAccessor)
        {
            // Connection string is now inherited from BaseRepository and read from cache
        }

        /// <summary>
        /// Loads tables metadata from cache or queries the database.
        /// </summary>
        /// <returns>A collection of <see cref="TablesMetadata"/> instances.</returns>
        public async Task<IEnumerable<TablesMetadata>> LoadTablesAsync()
        {
            return await LoadTablesAsync(currentDbName: CurrentDatabases ?? "");
        }
    }
}


