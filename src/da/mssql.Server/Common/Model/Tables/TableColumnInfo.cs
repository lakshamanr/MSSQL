namespace mssql.server.Common.Model.Tables
{
    public class TableColumnInfo
    {
        public string TableName { get; set; }
        public string ColumnName { get; set; }
        public string Key { get; set; }
        public string Identity { get; set; }
        public string DataType { get; set; }
        public string MaxLength { get; set; }
        public string AllowNulls { get; set; }
        public string Default { get; set; }
        public string Description { get; set; }
    }
}
