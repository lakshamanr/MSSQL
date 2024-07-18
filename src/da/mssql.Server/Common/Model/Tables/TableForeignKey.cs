namespace mssql.server.Common.Model.Tables
{
    public class TableForeignKey
    {
        public string Value { get; set; }
        public string FK_NAME { get; set; }
        public string SchemaName { get; set; }
        public string Table { get; set; }
        public string Column { get; set; }
        public string ReferencedTable { get; set; }
        public string ReferencedColumn { get; set; }
    }
}
