using API.Domain.Database;

namespace API.Repository.Database
{
    public interface IDatabaseReposititory
    {
        Task<DatabaseMetaData> GetDatabaseMetaData();
    }
}