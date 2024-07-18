using mssql.server.Common.Model;

public interface ISqlServerInfoService
{
    DatabaseServerProperties GetDatabaserServiceProperties();
}