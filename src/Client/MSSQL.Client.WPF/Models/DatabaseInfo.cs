namespace MSSQL.Client.WPF.Models
{
    public class DatabaseInfo
    {
        public string? DatabaseName { get; set; }
        public string? Owner { get; set; }
        public DateTime? CreateDate { get; set; }
        public string? CompatibilityLevel { get; set; }
        public string? Collation { get; set; }
        public string? RecoveryModel { get; set; }
        public decimal? SizeMB { get; set; }
    }

    public class DatabaseMetaData
    {
        public string? DatabaseName { get; set; }
        public List<ServerProperty>? ServerProperties { get; set; }
        public DatabaseInfo? DatabaseInfo { get; set; }
    }

    public class ServerProperty
    {
        public string? PropertyName { get; set; }
        public string? PropertyValue { get; set; }
    }
}
