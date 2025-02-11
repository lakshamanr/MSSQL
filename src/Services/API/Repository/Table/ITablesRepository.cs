using API.Domain.Table;

namespace API.Repository.Table
{
    public interface ITablesRepository
    {
        Task<IEnumerable<TablesMetadata>> LoadTablesAsync();
    }
}