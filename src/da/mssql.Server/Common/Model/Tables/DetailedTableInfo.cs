namespace mssql.server.Common.Model.Tables
{
    public class DetailedTableInfo
    {
        public IEnumerable<TableProperties> tableProperties; 
        public IEnumerable<TableColumnInfo> tableInfos { get; set; }
        public TableCreateScript tableCreateScript { get; set; }
        public IEnumerable<TableDescription> tableDescriptions { get; set; }
        public IEnumerable<TableIndex> tableIndices { get; set; }
        public IEnumerable<TableForeignKey> tableForeignKeys { get; set; }
    }
}
