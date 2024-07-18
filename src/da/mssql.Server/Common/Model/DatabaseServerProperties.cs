namespace mssql.server.Common.Model
{
    public class DatabaseServerProperties
    {
        public IEnumerable<SqlServerProperty> ServerProperties { get; set; }
        public IEnumerable<DatabaseInfo> databaseInfos { get; set; }
        public IEnumerable<RegistryProperty> registryProperties { get; set; }
    }
}
