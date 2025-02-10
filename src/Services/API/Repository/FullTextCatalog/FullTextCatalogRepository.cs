using API.Common.Queries;
using Dapper;
using System.Data.SqlClient;

namespace API.Repository.FullTextCatalog
{
    /// <summary>
    /// Repository for managing Full Text Catalogs.
    /// </summary>
    public class FullTextCatalogRepository
    {
        private readonly string _connectionString;

        /// <summary>
        /// Initializes a new instance of the <see cref="FullTextCatalogRepository"/> class.
        /// </summary>
        /// <param name="connectionString">The connection string to the database.</param>
        public FullTextCatalogRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        /// <summary>
        /// Gets all Full Text Catalogs asynchronously.
        /// </summary>
        /// <returns>A collection of Full Text Catalogs.</returns>
        public async Task<IEnumerable<API.Domain.FullTextCatalog.FullTextCatalog>> GetAllAsync()
        {
            using var connection = new SqlConnection(_connectionString);
            return await connection.QueryAsync<API.Domain.FullTextCatalog.FullTextCatalog>(SqlQueryConstant.GetAllFullTextCatalogs);
        }

        /// <summary>
        /// Gets a Full Text Catalog by name asynchronously.
        /// </summary>
        /// <param name="catalogName">The name of the Full Text Catalog.</param>
        /// <returns>The Full Text Catalog if found; otherwise, null.</returns>
        public async Task<API.Domain.FullTextCatalog.FullTextCatalog?> GetByNameAsync(string catalogName)
        {
            using var connection = new SqlConnection(_connectionString);

            var fullTextCatalog = await connection.QueryFirstOrDefaultAsync<API.Domain.FullTextCatalog.FullTextCatalog>(
                SqlQueryConstant.GetFullTextProperties,
                new { FullTextCatalog = catalogName });
            if (fullTextCatalog == null) return null;

            var createScript = await connection.QueryFirstOrDefaultAsync<string>(SqlQueryConstant.GetFullTextCatalogCreateScript, new { FullTextCatalog = catalogName });
            fullTextCatalog.CreateScript = createScript ?? string.Empty;

            var indexScripts = await connection.QueryAsync<string>(SqlQueryConstant.GetFullTextIndexCreateScript, new { FullTextCatalog = catalogName });
            fullTextCatalog.IndexScripts = indexScripts ?? Enumerable.Empty<string>();

            return fullTextCatalog;
        }
    }

}

