using Microsoft.Extensions.Caching.Distributed;
using API.Repository.Common;
using API.Domain.Table;
using System.Data.SqlClient;


namespace API.Repository.Table
{
    public class TablesRepository : BaseRepository, ITablesRepository
    {
        /// <summary>
        /// Constructor for the TableInfoService.
        /// </summary>
        /// <param name="databaseSettings">Database settings injected via IOptions.</param>
        /// <param name="logger">Logger instance for logging information or errors.</param>
        public TablesRepository(IConfiguration configuration, IDistributedCache cache) : base(cache, configuration)
        {
            _connectionString = configuration.GetConnectionString("SqlServerConnection");
        }
        /// <summary>
        /// Loads tables metadata from cache or queries the database.
        /// </summary>
        /// <returns>A collection of <see cref="TablesMetadata"/> instances.</returns>
        public async Task<IEnumerable<TablesMetadata>> LoadTablesAsync()
        {
            //SqlConnectionStringBuilder sqlConnectionStringBuilder = new SqlConnectionStringBuilder()
            return await LoadTablesAsync(currentDbName: CurrentDatabases ?? "");
        }
    }
}
