using API.Repository.Functions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    /// <summary>
    /// Controller for handling table-valued function operations.
    /// </summary>
    [Route("[controller]")]
    [ApiController]
    public class TableFunctionController : ControllerBase
    {
        private readonly ITableValuedFunctionRepository _tableValuedFunctionRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="TableFunctionController"/> class.
        /// </summary>
        /// <param name="tableValuedFunctionRepository">The repository for table-valued functions.</param>
        public TableFunctionController(ITableValuedFunctionRepository tableValuedFunctionRepository)
        {
            _tableValuedFunctionRepository = tableValuedFunctionRepository;
        }

        /// <summary>
        /// Retrieves metadata for a specified table-valued function.
        /// </summary>
        /// <param name="functionName">The name of the function.</param>
        /// <returns>An <see cref="IActionResult"/> containing the function metadata.</returns>
        [HttpGet("{functionName}")]
        public async Task<IActionResult> GetFunctionMetadata(string functionName)
        {
            var metadata = await _tableValuedFunctionRepository.GetFunctionMetadataAsync(functionName);
            return Ok(metadata);
        }

        /// <summary>
        /// Upserts the description of a specified table-valued function.
        /// </summary>
        /// <param name="schemaName">The schema name of the function.</param>
        /// <param name="functionName">The name of the function.</param>
        /// <param name="description">The description to be upserted.</param>
        /// <returns>An <see cref="IActionResult"/> indicating the result of the operation.</returns>
        [HttpPost("description/upsert")]
        public async Task<IActionResult> UpsertFunctionDescription(string schemaName, string functionName, string description)
        {
            await _tableValuedFunctionRepository.UpsertFunctionDescriptionAsync(schemaName, functionName, description);
            return NoContent();
        }

        /// <summary>
        /// Retrieves descriptions for all table-valued functions.
        /// </summary>
        /// <returns>An <see cref="IActionResult"/> containing a dictionary of function names and their descriptions.</returns>
        [HttpGet("descriptions")]
        public async Task<IActionResult> GetTableFunctionDescriptions()
        {
            var descriptions = await _tableValuedFunctionRepository.FetchTableFunctionDescriptionsAsync();
            return Ok(descriptions);
        }
    }
}

