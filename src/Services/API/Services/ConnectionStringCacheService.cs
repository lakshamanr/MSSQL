using Microsoft.Extensions.Caching.Distributed;
using StackExchange.Redis;
using System.Text.Json;

namespace API.Services
{
    /// <summary>
    /// Service for managing connection strings in Redis cache.
    /// </summary>
    public interface IConnectionStringCacheService
    {
        /// <summary>
        /// Initializes the cache with connection strings from appsettings.json at startup.
        /// </summary>
        Task InitializeCacheAsync();

        /// <summary>
        /// Gets the SQL Server connection string from cache for a specific user.
        /// </summary>
        /// <param name="userId">The user ID.</param>
        /// <returns>The SQL Server connection string.</returns>
        Task<string> GetSqlServerConnectionStringAsync(string userId);

        /// <summary>
        /// Updates the SQL Server connection string in cache for a specific user.
        /// </summary>
        /// <param name="connectionString">The new connection string.</param>
        /// <param name="userId">The user ID.</param>
        Task SetSqlServerConnectionStringAsync(string connectionString, string userId);

        /// <summary>
        /// Gets the default connection string from cache.
        /// </summary>
        /// <returns>The default connection string.</returns>
        Task<string> GetDefaultConnectionStringAsync();
    }

    /// <summary>
    /// Implementation of connection string cache service using Redis.
    /// </summary>
    public class ConnectionStringCacheService : IConnectionStringCacheService
    {
        private readonly IDistributedCache _cache;
        private readonly IConfiguration _configuration;
        private readonly ILogger<ConnectionStringCacheService> _logger;
        private readonly ConnectionMultiplexer _redisMultiplexer;

        // Cache keys
        private const string SQL_SERVER_CONNECTION_KEY = "ConnectionStrings:SqlServerConnection";
        private const string DEFAULT_CONNECTION_KEY = "ConnectionStrings:DefaultConnection";
        private const string REDIS_CONNECTION_KEY = "ConnectionStrings:RedisConnection";

        public ConnectionStringCacheService(
            IDistributedCache cache,
            IConfiguration configuration,
            ILogger<ConnectionStringCacheService> logger,
            ConnectionMultiplexer redisMultiplexer)
        {
            _cache = cache;
            _configuration = configuration;
            _logger = logger;
            _redisMultiplexer = redisMultiplexer;
        }

        /// <summary>
        /// Gets a user-specific cache key by combining user ID with the base cache key.
        /// </summary>
        /// <param name="baseCacheKey">The base cache key.</param>
        /// <param name="userId">The user ID.</param>
        /// <returns>User-specific cache key in format: "userId:baseCacheKey"</returns>
        private string GetUserSpecificCacheKey(string baseCacheKey, string userId)
        {
            return $"{userId}:{baseCacheKey}";
        }

        /// <summary>
        /// Initializes the cache with connection strings from appsettings.json at startup.
        /// </summary>
        public async Task InitializeCacheAsync()
        {
            try
            {
                _logger.LogInformation("Initializing connection string cache from appsettings.json");

                // Read connection strings from appsettings.json
                var sqlServerConnection = _configuration.GetConnectionString("SqlServerConnection");
                var defaultConnection = _configuration.GetConnectionString("DefaultConnection");
                var redisConnection = _configuration.GetConnectionString("RedisConnection");

                // Check if already cached
                var cachedSqlServer = await _cache.GetStringAsync(SQL_SERVER_CONNECTION_KEY);

                if (string.IsNullOrEmpty(cachedSqlServer))
                {
                    // Cache doesn't exist, initialize from appsettings
                    if (!string.IsNullOrEmpty(sqlServerConnection))
                    {
                        await _cache.SetStringAsync(
                            SQL_SERVER_CONNECTION_KEY,
                            sqlServerConnection,
                            new DistributedCacheEntryOptions
                            {
                                AbsoluteExpirationRelativeToNow = TimeSpan.FromDays(365) // Cache for 1 year
                            });
                        _logger.LogInformation("Cached SqlServerConnection from appsettings.json");
                    }

                    if (!string.IsNullOrEmpty(defaultConnection))
                    {
                        await _cache.SetStringAsync(
                            DEFAULT_CONNECTION_KEY,
                            defaultConnection,
                            new DistributedCacheEntryOptions
                            {
                                AbsoluteExpirationRelativeToNow = TimeSpan.FromDays(365)
                            });
                        _logger.LogInformation("Cached DefaultConnection from appsettings.json");
                    }

                    if (!string.IsNullOrEmpty(redisConnection))
                    {
                        await _cache.SetStringAsync(
                            REDIS_CONNECTION_KEY,
                            redisConnection,
                            new DistributedCacheEntryOptions
                            {
                                AbsoluteExpirationRelativeToNow = TimeSpan.FromDays(365)
                            });
                        _logger.LogInformation("Cached RedisConnection from appsettings.json");
                    }
                }
                else
                {
                    _logger.LogInformation("Connection strings already cached, skipping initialization");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error initializing connection string cache");
                throw;
            }
        }

        /// <summary>
        /// Gets the SQL Server connection string from cache for a specific user.
        /// </summary>
        /// <param name="userId">The user ID.</param>
        public async Task<string> GetSqlServerConnectionStringAsync(string userId)
        {
            try
            {
                if (string.IsNullOrEmpty(userId))
                {
                    throw new ArgumentNullException(nameof(userId), "User ID cannot be null or empty");
                }

                var userCacheKey = GetUserSpecificCacheKey(SQL_SERVER_CONNECTION_KEY, userId);

                // Try user-specific cache first
                var cachedConnectionString = await _cache.GetStringAsync(userCacheKey);

                if (string.IsNullOrEmpty(cachedConnectionString))
                {
                    // Fallback to global cache
                    cachedConnectionString = await _cache.GetStringAsync(SQL_SERVER_CONNECTION_KEY);
                }

                if (string.IsNullOrEmpty(cachedConnectionString))
                {
                    _logger.LogWarning("SQL Server connection string not found in cache for user {UserId}, falling back to appsettings", userId);
                    cachedConnectionString = _configuration.GetConnectionString("SqlServerConnection");

                    // Cache it for future use
                    if (!string.IsNullOrEmpty(cachedConnectionString))
                    {
                        await SetSqlServerConnectionStringAsync(cachedConnectionString, userId);
                    }
                }

                return cachedConnectionString ?? throw new InvalidOperationException("SQL Server connection string not found in cache or configuration");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving SQL Server connection string from cache");
                throw;
            }
        }

        /// <summary>
        /// Updates the SQL Server connection string in cache for a specific user.
        /// </summary>
        /// <param name="connectionString">The new connection string.</param>
        /// <param name="userId">The user ID.</param>
        public async Task SetSqlServerConnectionStringAsync(string connectionString, string userId)
        {
            try
            {
                if (string.IsNullOrEmpty(connectionString))
                {
                    throw new ArgumentNullException(nameof(connectionString), "Connection string cannot be null or empty");
                }

                if (string.IsNullOrEmpty(userId))
                {
                    throw new ArgumentNullException(nameof(userId), "User ID cannot be null or empty");
                }

                var userCacheKey = GetUserSpecificCacheKey(SQL_SERVER_CONNECTION_KEY, userId);

                await _cache.SetStringAsync(
                    userCacheKey,
                    connectionString,
                    new DistributedCacheEntryOptions
                    {
                        AbsoluteExpirationRelativeToNow = TimeSpan.FromDays(365)
                    });

                _logger.LogInformation("Updated SQL Server connection string in cache for user: {UserId}", userId);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error setting SQL Server connection string in cache");
                throw;
            }
        }

        /// <summary>
        /// Gets the default connection string from cache.
        /// </summary>
        public async Task<string> GetDefaultConnectionStringAsync()
        {
            try
            {
                var cachedConnectionString = await _cache.GetStringAsync(DEFAULT_CONNECTION_KEY);

                if (string.IsNullOrEmpty(cachedConnectionString))
                {
                    _logger.LogWarning("Default connection string not found in cache, falling back to appsettings");
                    cachedConnectionString = _configuration.GetConnectionString("DefaultConnection");

                    // Cache it for future use
                    if (!string.IsNullOrEmpty(cachedConnectionString))
                    {
                        await _cache.SetStringAsync(
                            DEFAULT_CONNECTION_KEY,
                            cachedConnectionString,
                            new DistributedCacheEntryOptions
                            {
                                AbsoluteExpirationRelativeToNow = TimeSpan.FromDays(365)
                            });
                    }
                }

                return cachedConnectionString ?? throw new InvalidOperationException("Default connection string not found in cache or configuration");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving default connection string from cache");
                throw;
            }
        }
    }
}
