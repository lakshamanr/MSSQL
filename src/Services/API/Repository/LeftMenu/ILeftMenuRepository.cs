using API.Domain.LeftMenu;

namespace API.Repository.LeftMenu
{
    public interface ILeftMenuRepository
    {
        Task<List<TreeViewJson>> GenerateLeftMenuJsonAsync();
        Task<string> GetLeftMenuAsync();
    }
}