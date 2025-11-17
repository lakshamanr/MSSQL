using MSSQL.Client.WPF.Models;

namespace MSSQL.Client.WPF.Services
{
    public interface ILeftMenuService
    {
        Task<LeftMenuData?> GetLeftMenuDataAsync();
    }
}
