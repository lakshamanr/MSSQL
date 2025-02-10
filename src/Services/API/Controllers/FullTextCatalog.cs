using API.Repository.FullTextCatalog;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    /// <summary>
    /// Controller for managing Full Text Catalogs.
    /// </summary>
    [Route("[controller]")]
    [ApiController]
    public class FullTextCatalogController : ControllerBase
    {
        private readonly FullTextCatalogRepository _repository;

        /// <summary>
        /// Initializes a new instance of the <see cref="FullTextCatalogController"/> class.
        /// </summary>
        /// <param name="repository">The repository for Full Text Catalogs.</param>
        public FullTextCatalogController(FullTextCatalogRepository repository)
        {
            _repository = repository;
        }

        /// <summary>
        /// Gets all Full Text Catalogs.
        /// </summary>
        /// <returns>A collection of Full Text Catalogs.</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<API.Domain.FullTextCatalog.FullTextCatalog>>> GetAll()
        {
            var catalogs = await _repository.GetAllAsync();
            return Ok(catalogs);
        }

        /// <summary>
        /// Gets a Full Text Catalog by name.
        /// </summary>
        /// <param name="name">The name of the Full Text Catalog.</param>
        /// <returns>The Full Text Catalog if found; otherwise, NotFound.</returns>
        [HttpGet("{name}")]
        public async Task<ActionResult<API.Domain.FullTextCatalog.FullTextCatalog>> GetByName(string name)
        {
            var catalog = await _repository.GetByNameAsync(name);
            if (catalog == null)
                return NotFound($"Full-Text Catalog '{name}' not found.");

            return Ok(catalog);
        }
    }
}
