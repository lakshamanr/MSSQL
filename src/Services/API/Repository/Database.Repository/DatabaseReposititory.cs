using API.Repository.Common.Repository;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Logging;

namespace API.Repository.Database.Repository
{
    public class DatabaseReposititory : BaseRepository
    {
        public DatabaseReposititory(string connectionString, ILogger<DatabaseReposititory> logger, IDistributedCache cache) : base(connectionString, cache)
        {
        }
    }
}
