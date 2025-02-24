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
    private IConfiguration _configuration;
    /// <summary>
    /// Initializes a new instance of the <see cref="DatabaseController"/> class.
    /// </summary>
    /// <param name="repository">The database repository.</param>
    public DatabaseController(IDatabaseReposititory repository, IConfiguration configuration)
    {
      _repository = repository;
      _configuration= configuration;
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
      ReloadConfiguration();
      return Ok(new { message = $"Database changed to {request.DatabaseName}" });
    }
    private void ReloadConfiguration()
    {
      var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production";
      string configFileName = environment == "Development" ? "appsettings.Development.json" : "appsettings.json";

      var config = new ConfigurationBuilder()
          .SetBasePath(Directory.GetCurrentDirectory())
          .AddJsonFile(configFileName, optional: false, reloadOnChange: true)
          .Build();

      _configuration = config; // Reload the configuration

      Console.WriteLine($"🔄 Configuration reloaded from {configFileName}");
    }
  }
}
