namespace API.Common.Helper
{
  using System;
  using System.Collections.Generic;
  using System.Data;
  using System.Data.SqlClient;
  using Dapper;

  public class ExecutionPlanDapper
  {
    public static string GetEstimatedPlan(IDbConnection connection, string storedProcedureName)
    {
      connection.Open();

      // 1. Get stored procedure parameters
      var parameters = GetParameters(connection, storedProcedureName);

      // 2. Build EXEC statement with dummy values
      var execStatement = BuildExecStatement(storedProcedureName, parameters);

      // 3. Retrieve execution plan
      return GetPlan(connection, execStatement);
    }

    private static IEnumerable<ParameterInfo> GetParameters(IDbConnection connection, string spName)
    {
      // Split schema and procedure name
      var (schema, name) = SplitSchemaAndName(spName);

      return connection.Query<ParameterInfo>(@"
            SELECT 
                p.name AS ParameterName,
                TYPE_NAME(p.user_type_id) AS TypeName,
                p.is_nullable AS IsNullable
            FROM sys.parameters p
            JOIN sys.objects o ON p.object_id = o.object_id
            JOIN sys.schemas s ON o.schema_id = s.schema_id
            WHERE o.name = @name AND s.name = @schema
            ORDER BY p.parameter_id;",
          new { name, schema });
    }

    private static string BuildExecStatement(string spName, IEnumerable<ParameterInfo> parameters)
    {
      var paramList = new List<string>();
      foreach (var param in parameters)
      {
        paramList.Add($"{param.ParameterName} = {GetDummyValue(param)}");
      }
      return $"EXEC {spName} {string.Join(", ", paramList)}";
    }

    private static string GetDummyValue(ParameterInfo param)
    {
      if (param.IsNullable) return "NULL";

      return param.TypeName.ToLower() switch
      {
        "int" or "bigint" => "0",
        "varchar" or "nvarchar" => "'dummy'",
        "datetime" => "'19000101'",
        "bit" => "0",
        "uniqueidentifier" => "'00000000-0000-0000-0000-000000000000'",
        "decimal" => "0.0",
        _ => "NULL"
      };
    }

    private static string GetPlan(IDbConnection connection, string execStatement)
    {
      try
      {
        // Enable showplan
        connection.Execute("SET SHOWPLAN_XML ON;");

        // Execute and get XML plan
        return connection.QuerySingle<string>(execStatement);
      }
      finally
      {
        // Cleanup
        connection.Execute("SET SHOWPLAN_XML OFF;");
      }
    }

    private static  (string Schema, string Name) SplitSchemaAndName(string spName)
    {
      var parts = spName.Split('.');
      return parts.Length switch
      {
        1 => ("dbo", parts[0]),
        2 => (parts[0], parts[1]),
        _ => throw new ArgumentException("Invalid stored procedure name")
      };
    }
  }

  public class ParameterInfo
  {
    public string ParameterName { get; set; }
    public string TypeName { get; set; }
    public bool IsNullable { get; set; }
  }
}
