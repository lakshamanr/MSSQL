using MSSQL.Client.WPF.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MSSQL.Client.WPF.Services
{
    public class ViewService : IViewService
    {
        private readonly IApiService _apiService;

        public ViewService(IApiService apiService)
        {
            _apiService = apiService;
        }

        public async Task<List<ViewMetadata>?> GetAllViewsAsync()
        {
            return await _apiService.GetAsync<List<ViewMetadata>>("/View/AllViews");
        }

        public async Task<ViewMetadata?> GetViewMetaDataAsync(string viewName)
        {
            return await _apiService.GetAsync<ViewMetadata>($"/View/GetViewMetaData?viewName={viewName}");
        }

        public async Task<bool> UpdateViewDescriptionAsync(string viewName, string description)
        {
            return await _apiService.PostAsync("/View/UpdateViewExtendedProperties",
                new { ViewName = viewName, Description = description });
        }
    }
}
