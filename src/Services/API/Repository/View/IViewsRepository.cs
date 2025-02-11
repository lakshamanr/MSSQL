using API.Domain.View;

namespace API.Repository.View
{
    public interface IViewsRepository
    {
        Task<IEnumerable<ViewDetails>> GetDetailedViewsInfoAsync();
        Task<IEnumerable<ViewDependency>> GetViewDependenciesAsync();
        Task<ViewMetaData?> GetViewMetaDataAsync(string viewName);
    }
}