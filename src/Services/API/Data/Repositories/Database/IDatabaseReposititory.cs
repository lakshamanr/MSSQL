using API.Domain.Database;

namespace API.Data.Repositories.Database
{
  /// <summary>
  /// Interface for database repository operations.
  /// </summary>
  public interface IDatabaseReposititory
  {
    /// <summary>
    /// Gets the metadata of the database.
    /// </summary>
    /// <returns>A task that represents the asynchronous operation. The task result contains the database metadata.</returns>
    Task<DatabaseMetaData> GetDatabaseMetaData();
    /// <summary>
    /// Sets the current database to the specified database name.
    /// </summary>
    /// <param name="database">The name of the database to set as current.</param>
    void SetDatabase(string database);
    Task<string[]> GetAvailableDatabases();
    string GetCurrentDatabase();
  }
}


