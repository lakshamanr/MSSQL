using API.Repository.Functions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    /// <summary>
   /// API Controller for managing scalar SQL functions.
   /// </summary>
    [Route("[controller]")]
    [ApiController]
    public class ScalarFunctionController : ControllerBase
    {
        private readonly ScalarFunctionRepository _scalarFunctionRepository;

        public ScalarFunctionController(ScalarFunctionRepository scalarFunctionRepository)
        {
            _scalarFunctionRepository = scalarFunctionRepository;
        }

        [HttpGet("{functionName}")]
        public async Task<IActionResult> GetFunctionMetadata(string functionName)
        {
            var metadata = await _scalarFunctionRepository.GetFunctionMetadataAsync(functionName);
            return Ok(metadata);
        }

        [HttpPost("description/upsert")]
        public async Task<IActionResult> UpsertFunctionDescription( string schemaName,  string functionName,  string description)
        {
            await _scalarFunctionRepository.UpsertFunctionDescriptionAsync(schemaName, functionName, description);
            return NoContent();
        }
    }

}
