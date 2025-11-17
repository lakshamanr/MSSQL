using MSSQL.Client.WPF.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MSSQL.Client.WPF.Services
{
    public interface IViewService
    {
        Task<List<ViewMetadata>?> GetAllViewsAsync();
        Task<ViewMetadata?> GetViewMetaDataAsync(string viewName);
        Task<bool> UpdateViewDescriptionAsync(string viewName, string description);
    }
}
