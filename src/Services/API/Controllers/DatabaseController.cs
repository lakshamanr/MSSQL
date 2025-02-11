using API.Repository.Database;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    /// <summary>
    /// Controller to handle database related operations.
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class DatabaseController : ControllerBase
    {
        private readonly IDatabaseReposititory _repository;

        /// <summary>
        /// Initializes a new instance of the <see cref="DatabaseController"/> class.
        /// </summary>
        /// <param name="repository">The database repository.</param>
        public DatabaseController(IDatabaseReposititory repository)
        {
            _repository = repository;
        }

        /// <summary>
        /// Gets the metadata of the database.
        /// </summary>
        /// <returns>The metadata of the database.</returns>
        [HttpGet("database-meta-data")]
        public async Task<IActionResult> GetDatabaseMetaData()
        {
            var result = await _repository.GetDatabaseMetaData();
            return Ok(result);
        }
    }
}
