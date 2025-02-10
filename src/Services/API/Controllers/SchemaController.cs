using API.Repository.SchemaRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SchemaController : ControllerBase
    {
        private readonly SchemaRepository _repository;

        public SchemaController(SchemaRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetAllSchemaMetadataAsync()
        {
            var metadata = await _repository.GetAllSchemaMetadataAsync();
            if (metadata == null)
                return NotFound();
            return Ok(metadata);
        }
        [HttpGet("metadata/{schemaName}")]
        public async Task<IActionResult> GetSchemaMetadata(string schemaName)
        {
            var metadata = await _repository.GetSchemaMetadataAsync(schemaName);
            if (metadata == null)
                return NotFound();
            return Ok(metadata);
        }

        
    }
}
