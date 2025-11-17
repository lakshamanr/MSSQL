namespace MSSQL.Client.WPF.Models
{
    public class SchemaInfo
    {
        public string? SchemaName { get; set; }
        public string? Owner { get; set; }
        public int TableCount { get; set; }
        public int ViewCount { get; set; }
        public int ProcedureCount { get; set; }
        public int FunctionCount { get; set; }
    }
}
