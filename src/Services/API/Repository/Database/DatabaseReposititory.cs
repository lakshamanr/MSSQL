using API.Repository.Common;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Logging;

namespace API.Repository.Database
{
    public class DatabaseReposititory : BaseRepository
    {
        public DatabaseReposititory(string connectionString, ILogger<DatabaseReposititory> logger, IDistributedCache cache) : base(connectionString, cache)
        {
        }
    }
}
