using MSSQL.Client.WPF.Models;
using System.Threading.Tasks;

namespace MSSQL.Client.WPF.Services
{
    public class LeftMenuService : ILeftMenuService
    {
        private readonly IApiService _apiService;

        public LeftMenuService(IApiService apiService)
        {
            _apiService = apiService;
        }

        public async Task<LeftMenuData?> GetLeftMenuDataAsync()
        {
            return await _apiService.GetAsync<LeftMenuData>("/LeftMenu/left-menu");
        }
    }
}
