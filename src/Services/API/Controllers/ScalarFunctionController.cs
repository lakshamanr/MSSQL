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
        private readonly IScalarFunctionRepository _scalarFunctionRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="ScalarFunctionController"/> class.
        /// </summary>
        /// <param name="scalarFunctionRepository">The repository for scalar functions.</param>
        public ScalarFunctionController(IScalarFunctionRepository scalarFunctionRepository)
        {
            _scalarFunctionRepository = scalarFunctionRepository;
        }

        /// <summary>
        /// Retrieves metadata for a given scalar function.
        /// </summary>
        /// <param name="functionName">The name of the function.</param>
        /// <returns>An <see cref="IActionResult"/> containing the function metadata.</returns>
        [HttpGet("{functionName}")]
        public async Task<IActionResult> GetFunctionMetadata(string functionName)
        {
            var metadata = await _scalarFunctionRepository.GetFunctionMetadataAsync(functionName);
            return Ok(metadata);
        }

        /// <summary>
        /// Upserts the description of a scalar function.
        /// </summary>
        /// <param name="schemaName">The schema name of the function.</param>
        /// <param name="functionName">The name of the function.</param>
        /// <param name="description">The description of the function.</param>
        /// <returns>An <see cref="IActionResult"/> indicating the result of the operation.</returns>
        [HttpPost("description/upsert")]
        public async Task<IActionResult> UpsertFunctionDescription(string schemaName, string functionName, string description)
        {
            await _scalarFunctionRepository.UpsertFunctionDescriptionAsync(schemaName, functionName, description);
            return NoContent();
        }

        /// <summary>
        /// Retrieves descriptions for all scalar functions.
        /// </summary>
        /// <returns>An <see cref="IActionResult"/> containing a dictionary of function names and their descriptions.</returns>
        [HttpGet("descriptions")]
        public async Task<IActionResult> GetScalarFunctionDescriptions()
        {
            var descriptions = await _scalarFunctionRepository.FetchScalarFunctionDescriptionsAsync();
            return Ok(descriptions);
        }
    }

}
