using API.Repository.Functions;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers
{
  /// <summary>
  /// API Controller for managing aggregate SQL functions.
  /// </summary>
  [Route("[controller]")]
  [ApiController]
  public class AggregateFunctionController : ControllerBase
  {
    private readonly IAggregateFunctionRepository _aggregateFunctionRepository;

    /// <summary>
    /// Initializes a new instance of the <see cref="AggregateFunctionController"/> class.
    /// </summary>
    /// <param name="aggregateFunctionRepository">The repository for aggregate functions.</param>
    public AggregateFunctionController(IAggregateFunctionRepository aggregateFunctionRepository)
    {
      _aggregateFunctionRepository = aggregateFunctionRepository;
    }

    /// <summary>
    /// Fetches descriptions of all aggregate functions in the database.
    /// If a function appears multiple times, it removes duplicates.
    /// </summary>
    /// <returns>A dictionary of function names and their descriptions.</returns>
    ///
    [HttpGet("AggregateFunctionDescriptions")]
    public async Task<Dictionary<string, string>> FetchAggregateFunctionDescriptionsAsync()
    {
      return await _aggregateFunctionRepository.FetchAggregateFunctionDescriptionsAsync();
    }
    /// <summary>
    /// Retrieves metadata for a given aggregate function.
    /// </summary>
    /// <param name="functionName">The name of the function.</param>
    /// <returns>An <see cref="IActionResult"/> containing the function metadata.</returns>
    [HttpGet("{functionName}")]
    public async Task<IActionResult> GetFunctionMetadata(string functionName)
    {
      var metadata = await _aggregateFunctionRepository.GetFunctionMetadataAsync(functionName);
      if (metadata == null)
      {
        return NotFound($"Aggregate function '{functionName}' not found.");
      }
      return Ok(metadata);
    }

    /// <summary>
    /// Upserts the description of an aggregate function.
    /// </summary>
    /// <param name="schemaName">The schema name of the function.</param>
    /// <param name="functionName">The name of the function.</param>
    /// <param name="description">The description of the function.</param>
    /// <returns>An <see cref="IActionResult"/> indicating the result of the operation.</returns>
    [HttpPost("description/upsert")]
    public async Task<IActionResult> UpsertFunctionDescription(string schemaName, string functionName, string description)
    {
      await _aggregateFunctionRepository.UpsertFunctionDescriptionAsync(schemaName, functionName, description);
      return NoContent();
    }

    /// <summary>
    /// Retrieves descriptions for all aggregate functions.
    /// </summary>
    /// <returns>An <see cref="IActionResult"/> containing a dictionary of function names and their descriptions.</returns>
    [HttpGet("descriptions")]
    public async Task<IActionResult> GetAggregateFunctionDescriptions()
    {
      var descriptions = await _aggregateFunctionRepository.FetchAggregateFunctionDescriptionsAsync();
      return Ok(descriptions);
    }
  }
}
