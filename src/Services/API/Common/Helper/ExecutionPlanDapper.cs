namespace API.Common.Helper
{
  using System;
  using System.Collections.Generic;
  using System.Data;
  using System.Data.SqlClient;
  using Dapper;

    /// <summary>
    /// Provides methods to retrieve the estimated execution plan of a stored procedure using Dapper.
    /// </summary>
    public class ExecutionPlanDapper
    {
        /// <summary>
        /// Gets the estimated execution plan for the specified stored procedure.
        /// </summary>
        /// <param name="connection">The database connection.</param>
        /// <param name="storedProcedureName">The name of the stored procedure.</param>
        /// <returns>The estimated execution plan in XML format.</returns>
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

        /// <summary>
        /// Retrieves the parameters of the specified stored procedure.
        /// </summary>
        /// <param name="connection">The database connection.</param>
        /// <param name="spName">The name of the stored procedure.</param>
        /// <returns>A collection of parameter information.</returns>
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

        /// <summary>
        /// Builds an EXEC statement with dummy values for the specified stored procedure.
        /// </summary>
        /// <param name="spName">The name of the stored procedure.</param>
        /// <param name="parameters">The parameters of the stored procedure.</param>
        /// <returns>The EXEC statement with dummy values.</returns>
        private static string BuildExecStatement(string spName, IEnumerable<ParameterInfo> parameters)
        {
            var paramList = new List<string>();
            foreach (var param in parameters)
            {
                paramList.Add($"{param.ParameterName} = {GetDummyValue(param)}");
            }
            return $"EXEC {spName} {string.Join(", ", paramList)}";
        }

        /// <summary>
        /// Gets a dummy value for the specified parameter.
        /// </summary>
        /// <param name="param">The parameter information.</param>
        /// <returns>The dummy value for the parameter.</returns>
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

        /// <summary>
        /// Retrieves the execution plan for the specified EXEC statement.
        /// </summary>
        /// <param name="connection">The database connection.</param>
        /// <param name="execStatement">The EXEC statement.</param>
        /// <returns>The execution plan in XML format.</returns>
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

    /// <summary>
    /// Represents information about a stored procedure parameter.
    /// </summary>
    public class ParameterInfo
    {
        /// <summary>
        /// Gets or sets the name of the parameter.
        /// </summary>
        public string ParameterName { get; set; }

        /// <summary>
        /// Gets or sets the type name of the parameter.
        /// </summary>
        public string TypeName { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether the parameter is nullable.
        /// </summary>
        public bool IsNullable { get; set; }
    }
}
