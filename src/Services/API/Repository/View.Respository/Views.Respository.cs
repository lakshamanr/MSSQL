using API.Domain.View;
using API.Repository.Common.Repository;
using Dapper;
using Microsoft.Extensions.Caching.Distributed;
using System.Data;
using System.Data.SqlClient;
using System.Text.Json;

namespace API.Repository.View.Respository
{
    public class ViewsRepository : BaseRepository
    {
        private readonly string _connectionString;
        private readonly ILogger<ViewsRepository> _logger;
        private readonly IDistributedCache _cache;
        private string _viewName { get;set;}
        public ViewsRepository(string connectionString, ILogger<ViewsRepository> logger, IDistributedCache cache) : base(connectionString, cache)
        {
            _connectionString = connectionString;
            _logger = logger;
            _cache = cache;
        }
        public async Task<IEnumerable<ViewDependancy>> GetViewDependenciesAsync()
        {

            try
            {
                using (var db = new SqlConnection(_connectionString))
                {

                    var parameters = new { ViewName = _viewName };
                    return await db.QueryAsync<ViewDependancy>(ViewSqlQueryConstant.GetViewDependencies, parameters);

                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error occured while loading the View Dependencies details {_viewName}");

                return null;
            }
        }
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
                _logger.LogError($"Error occured while loading the View Dependencies details {_viewName}");

                return null;
            }
        }

        private async Task<IEnumerable<ViewColumns>> GetViewColumnsAsync()
        {
            try
            {
                using (var db = new SqlConnection(_connectionString))
                {

                    var parameters = new { viewname = _viewName };
                    return await db.QueryAsync<ViewColumns>(ViewSqlQueryConstant.GetViewColumns, parameters);

                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error occured while loading the View Dependencies details {_viewName}");

                return null;
            }
        }

        private async Task<ViewCreateScript> GetViewCreateScriptAsync()
        {
            try
            {
                using (var db = new SqlConnection(_connectionString))
                {

                    var parameters = new { viewname = _viewName };
                    return await db.QueryFirstAsync<ViewCreateScript>(ViewSqlQueryConstant.GetViewCreateScript, parameters);

                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error occured while loading the View Dependencies details {_viewName}");

                return null;
            }
        }

        private async Task<IEnumerable<ViewDetails>> GetViewNameWithMsdescriptionAsync()
        {
            try
            {
               var allViewDetails= await GetDetailedViewsInfoAsync();
              return  allViewDetails.Where(x=>x.ViewName.Equals(_viewName));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error occured while loading the View Dependencies details {_viewName}");

                return null;
            }
        }

        public async Task<ViewMetaData> GetViewMetaDataAsync(string viewname)
        {
            ViewMetaData viewMetaData = new ViewMetaData();
            _viewName = viewname;
            try
            {
                using (var db = new SqlConnection(_connectionString))
                {
                  
                    viewMetaData.viewDetails = await GetViewNameWithMsdescriptionAsync();
                    viewMetaData.viewCreateScript = await GetViewCreateScriptAsync();
                    viewMetaData.viewColumns = await GetViewColumnsAsync();
                    viewMetaData.viewProperties = await GetViewPropertiesAsync();
                    viewMetaData.viewDependancies = await GetViewDependenciesAsync(); 
                    return viewMetaData; 
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error occured while loading the View Dependencies details {viewname}");

                return null;
            }
        }
    }
}
