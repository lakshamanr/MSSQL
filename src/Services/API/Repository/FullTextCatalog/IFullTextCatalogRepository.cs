





namespace API.Repository.FullTextCatalog
{
    public interface IFullTextCatalogRepository
    {
        Task<IEnumerable<Domain.FullTextCatalog.FullTextCatalog>> GetAllFullTextCatalogAsync();
        Task<Domain.FullTextCatalog.FullTextCatalog?> GetFullTextCatalogByNameAsync(string catalogName);
    }
}