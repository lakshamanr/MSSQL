using MSSQL.Client.WPF.Models;
using System.Threading.Tasks;

namespace MSSQL.Client.WPF.Services
{
    public interface ILeftMenuService
    {
        Task<LeftMenuData?> GetLeftMenuDataAsync();
    }
}
