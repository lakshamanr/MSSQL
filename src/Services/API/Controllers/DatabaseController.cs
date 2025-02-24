using API.Domain.Database;
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

    /// <summary>
    /// Changes the current database to the specified database.
    /// </summary>
    /// <param name="request">The request containing the name of the database to switch to.</param>
    /// <returns>A response indicating the result of the operation.</returns>
    [HttpPost("ChangeDatabase")]
    public IActionResult ChangeDatabase([FromBody] DatabaseChangeRequest request)
    {
      _repository.SetDatabase(request.DatabaseName); 
      return Ok(new { message = $"Database changed to {request.DatabaseName}" });
    }
    /// <summary>
    /// Gets a list of available databases.
    /// </summary>
    /// <returns>A list of database names.</returns>
    [HttpGet("list")]
    public async Task<IActionResult> GetDatabases()
    {
      var databases = await _repository.GetAvailableDatabases();
      return Ok(databases);
    }

    /// <summary>
    /// Gets the currently active database.
    /// </summary>
    /// <returns>The name of the active database.</returns>
    [HttpGet("current")]
    public IActionResult GetCurrentDatabase()
    {
      string currentDatabase = _repository.GetCurrentDatabase();
      return Ok(new { database = currentDatabase });
    }

  }
}
