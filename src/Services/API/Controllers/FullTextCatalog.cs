using API.Repository.FullTextCatalog;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FullTextCatalogController : ControllerBase
    {
        private readonly FullTextCatalogRepository _repository;

        public FullTextCatalogController(FullTextCatalogRepository repository)
        {
            _repository = repository;
        }

        // GET: api/FullTextCatalog
        [HttpGet]
        public async Task<ActionResult<IEnumerable<API.Domain.FullTextCatalog.FullTextCatalog>>> GetAll()
        {
            var catalogs = await _repository.GetAllAsync();
            return Ok(catalogs);
        }

        // GET: api/FullTextCatalog/{name}
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
