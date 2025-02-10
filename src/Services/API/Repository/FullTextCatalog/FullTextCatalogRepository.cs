using API.Common.Queries;
using Dapper;
using System.Data.SqlClient;

namespace API.Repository.FullTextCatalog
{
    public class FullTextCatalogRepository 
    {
        private readonly string _connectionString;

        public FullTextCatalogRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<IEnumerable<API.Domain.FullTextCatalog.FullTextCatalog>> GetAllAsync()
        {
            using var connection = new SqlConnection(_connectionString);
            return await connection.QueryAsync<API.Domain.FullTextCatalog.FullTextCatalog>(SqlQueryConstant.GetAllFullTextCatalogs);
        }

        public async Task<API.Domain.FullTextCatalog.FullTextCatalog?> GetByNameAsync(string catalogName)
        {
            using var connection = new SqlConnection(_connectionString);

            var fullTextCatalog = await connection.QueryFirstOrDefaultAsync<API.Domain.FullTextCatalog.FullTextCatalog>(
                SqlQueryConstant.GetFullTextProperties,
                new { FullTextCatalog = catalogName });
            if (fullTextCatalog != null)
            {
                var createScript = await connection.QueryFirstOrDefaultAsync<string>(  SqlQueryConstant.GetFullTextCatalogCreateScript, new { FullTextCatalog = catalogName });

                fullTextCatalog.CreateScript = createScript ?? string.Empty;

                var indexScripts = await connection.QueryAsync<string>(SqlQueryConstant.GetFullTextIndexCreateScript, new { FullTextCatalog = catalogName });
                fullTextCatalog.IndexScripts = indexScripts ?? Enumerable.Empty<string>();
            }
            return fullTextCatalog;
        }
    }

}

