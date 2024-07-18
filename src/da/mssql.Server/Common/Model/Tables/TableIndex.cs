namespace mssql.server.Common.Model.Tables
{
    public class TableIndex
    {
        public string IndexName { get; set; }
        public string Columns { get; set; }
        public string IndexType { get; set; }
        public string Unique { get; set; }
        public string TableView { get; set; }
        public string ObjectType { get; set; }
    }
}
