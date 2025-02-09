using API.Domain.View;
using API.Repository.Common.Repository;
using Dapper;
using Microsoft.Extensions.Caching.Distributed;
using System.Data;
using System.Data.SqlClient;
using System.Text.Json;

namespace API.Repository.View.Respository
{
    /// <summary>
    /// Repository for handling view-related database operations.
    /// </summary>
    public class ViewsRepository : BaseRepository
    {
        private readonly string _connectionString;
        private readonly ILogger<ViewsRepository> _logger;
        private readonly new IDistributedCache _cache;
        private string _viewName = string.Empty;

        /// <summary>
        /// Initializes a new instance of the <see cref="ViewsRepository"/> class.
        /// </summary>
        /// <param name="connectionString">The database connection string.</param>
        /// <param name="logger">The logger instance.</param>
        /// <param name="cache">The distributed cache instance.</param>
        public ViewsRepository(string connectionString, ILogger<ViewsRepository> logger, IDistributedCache cache) : base(connectionString, cache)
        {
            _connectionString = connectionString;
            _logger = logger;
            _cache = cache;
        }

        /// <summary>
        /// Gets the dependencies of the specified view.
        /// </summary>
        /// <returns>A collection of view dependencies.</returns>
        public async Task<IEnumerable<ViewDependency>> GetViewDependenciesAsync()
        {
            try
            {
                using (var db = new SqlConnection(_connectionString))
                {
                    var parameters = new { ViewName = _viewName };
                    return await db.QueryAsync<ViewDependency>(ViewSqlQueryConstant.GetViewDependencies, parameters);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while loading the view dependencies details for {_viewName}");
                return Enumerable.Empty<ViewDependency>();
            }
        }

        /// <summary>
        /// Gets the properties of the specified view.
        /// </summary>
        /// <returns>A collection of view properties.</returns>
        private async Task<IEnumerable<ViewProperties>> GetViewPropertiesAsync()
        {
            try
            {
                using (var db = new SqlConnection(_connectionString))
                {
                    var parameters = new { ViewName = _viewName };
                    return await db.QueryAsync<ViewProperties>(ViewSqlQueryConstant.GetViewProperties, parameters);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while loading the view properties details for {_viewName}");
                return Enumerable.Empty<ViewProperties>();
            }
        }

        /// <summary>
        /// Gets the columns of the specified view.
        /// </summary>
        /// <returns>A collection of view columns.</returns>
        private async Task<IEnumerable<ViewColumns>> GetViewColumnsAsync()
        {
            try
            {
                using (var db = new SqlConnection(_connectionString))
                {
                    var parameters = new { ViewName = _viewName };
                    return await db.QueryAsync<ViewColumns>(ViewSqlQueryConstant.GetViewColumns, parameters);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while loading the view columns details for {_viewName}");
                return Enumerable.Empty<ViewColumns>();
            }
        }

        /// <summary>
        /// Gets the create script of the specified view.
        /// </summary>
        /// <returns>The view create script.</returns>
        private async Task<ViewCreateScript?> GetViewCreateScriptAsync()
        {
            try
            {
                using (var db = new SqlConnection(_connectionString))
                {
                    var parameters = new { ViewName = _viewName };
                    return await db.QueryFirstAsync<ViewCreateScript>(ViewSqlQueryConstant.GetViewCreateScript, parameters);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while loading the view create script for {_viewName}");
                return null;
            }
        }

        /// <summary>
        /// Gets the name and description of the specified view.
        /// </summary>
        /// <returns>A collection of view details.</returns>
        private async Task<IEnumerable<ViewDetails>> GetViewNameWithDescriptionAsync()
        {
            try
            {
                var allViewDetails = await GetDetailedViewsInfoAsync();
                return allViewDetails.Where(x => x.ViewName.Equals(_viewName));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while loading the view details for {_viewName}");
                return Enumerable.Empty<ViewDetails>();
            }
        }

        /// <summary>
        /// Gets the metadata of the specified view.
        /// </summary>
        /// <param name="viewName">The name of the view.</param>
        /// <returns>The view metadata.</returns>
        public async Task<ViewMetaData?> GetViewMetaDataAsync(string viewName)
        {
            _viewName = viewName;
            ViewMetaData viewMetaData = new ViewMetaData();
            var cacheKey = "ViewCacheKey" + viewName + CurrentDatabases;
            var cacheData = await _cache.GetStringAsync(cacheKey);

            if (cacheData != null)
            {
                var cachedMetaData = JsonSerializer.Deserialize<ViewMetaData>(cacheData);
                if (cachedMetaData != null)
                {
                    return cachedMetaData;
                }
            }

            try
            {
                using (var db = new SqlConnection(_connectionString))
                {
                    viewMetaData.ViewDetails = await GetViewNameWithDescriptionAsync();
                    viewMetaData.ViewCreateScript = await GetViewCreateScriptAsync();
                    viewMetaData.ViewColumns = await GetViewColumnsAsync();
                    viewMetaData.ViewProperties = await GetViewPropertiesAsync();
                    viewMetaData.ViewDependencies = await GetViewDependenciesAsync();
                    return viewMetaData;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while loading the view metadata for {viewName}");
                return null;
            }
        }
    }
}
