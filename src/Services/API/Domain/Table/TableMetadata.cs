namespace API.Domain.Table
{
    public class TableMetadata
    {
        public IEnumerable<TableColumns> Columns { get; set; }
        public TableCreateScript CreateScript { get; set; }
        public IEnumerable<TableDescription> Descriptions { get; set; }
        public IEnumerable<TableIndex> Indices { get; set; }
        public IEnumerable<TableForeignKey> ForeignKeys { get; set; }
        public IEnumerable<TableProperty> Properties { get; set; }
        public IEnumerable<TableConstraint> Constraints { get; set; }
        public IEnumerable<TableFragmentation> TableFragmentations { get; set; }
        public string TableDependencies { get; set; }
    }
}
