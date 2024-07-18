using Dapper;
using mssql.server.Common.Model;
using MSSQL.DIARY.COMN.Constant;
using System.Data.SqlClient;

public class SqlServerInfoService 
{
    private readonly string _connectionString;

    public SqlServerInfoService(string connectionString)
    {
        _connectionString = connectionString;
    }

    IEnumerable<SqlServerProperty> GetSqlServerProperties()
    {
        using (var connection = new SqlConnection(_connectionString))
        {
            return connection.Query<SqlServerProperty>(SqlQueryConstant.GetServerProperties);
        }
    }

    IEnumerable<DatabaseInfo> GetDatabases()
    {
        using (var connection = new SqlConnection(_connectionString))
        {
            return connection.Query<DatabaseInfo>(SqlQueryConstant.GetAllDatabaseNames);
        }
    }

    IEnumerable<RegistryProperty> GetRegistryProperties()
    {
        using (var connection = new SqlConnection(_connectionString))
        {
            return connection.Query<RegistryProperty>(SqlQueryConstant.GetAdvancedServerSettings);
        }
    }
    public DatabaseServerProperties GetDatabaserServiceProperties()
    {
        DatabaseServerProperties databaseServerProperties = new DatabaseServerProperties();
        databaseServerProperties.ServerProperties=GetSqlServerProperties();
        databaseServerProperties.databaseInfos=GetDatabases();
        databaseServerProperties.registryProperties=GetRegistryProperties();

        return databaseServerProperties;
    }
}
