using MSSQL.Client.WPF.Models;

namespace MSSQL.Client.WPF.Services
{
    public interface IViewService
    {
        Task<List<ViewMetadata>?> GetAllViewsAsync();
        Task<ViewMetadata?> GetViewMetaDataAsync(string viewName);
        Task<bool> UpdateViewDescriptionAsync(string viewName, string description);
    }
}
