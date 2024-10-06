using API.Repository.Database.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DatabaseController : ControllerBase
    {
        private readonly DatabaseReposititory _repository;

        public DatabaseController(DatabaseReposititory repository)
        {
            _repository = repository;
        }

        [HttpGet("database-meta-data")]
        public async Task<IActionResult> GetDatabaseMetaData()
        {
            var result = await _repository.GetDatabaseMetaData();
            return Ok(result);
        }

    }
}
