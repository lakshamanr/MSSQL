namespace API.Common.Helper
{
  internal static class ExecutionPlanDapperHelpers
  {


    /// <summary>
    /// Splits the stored procedure name into schema and name.
    /// </summary>
    /// <param name="spName">The stored procedure name.</param>
    /// <returns>A tuple containing the schema and name.</returns>
    /// <exception cref="ArgumentException">Thrown when the stored procedure name is invalid.</exception>
    private static (string Schema, string Name) SplitSchemaAndName(string spName)
    {
      var parts = spName.Split('.');
      return parts.Length switch
      {
        1 => (null, parts[0]), // Schema not specified
        2 => (parts[0], parts[1]),
        _ => throw new ArgumentException("Invalid stored procedure name")
      };
    }
  }
}