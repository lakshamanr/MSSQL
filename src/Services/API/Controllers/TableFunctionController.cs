using API.Repository.Functions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TableFunctionController : ControllerBase
    {
        private readonly TableValuedFunctionRepository _tableValuedFunctionRepository;

        public TableFunctionController(TableValuedFunctionRepository tableValuedFunctionRepository)
        {
            _tableValuedFunctionRepository = tableValuedFunctionRepository;
        }

        [HttpGet("{functionName}")]
        public async Task<IActionResult> GetFunctionMetadata(string functionName)
        {
            var metadata = await _tableValuedFunctionRepository.GetFunctionMetadataAsync(functionName);
            return Ok(metadata);
        }

        [HttpPost("description/upsert")]
        public async Task<IActionResult> UpsertFunctionDescription(string schemaName, string functionName, string description)
        {
            await _tableValuedFunctionRepository.UpsertFunctionDescriptionAsync(schemaName, functionName, description);
            return NoContent();
        }
    }
}

