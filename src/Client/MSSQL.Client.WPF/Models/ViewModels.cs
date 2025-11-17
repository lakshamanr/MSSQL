namespace MSSQL.Client.WPF.Models
{
    public class ViewMetadata
    {
        public string? ViewName { get; set; }
        public string? SchemaName { get; set; }
        public string? Description { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? ModifyDate { get; set; }
        public List<ViewColumn>? Columns { get; set; }
        public string? Definition { get; set; }
        public bool IsIndexed { get; set; }
        public bool IsSchemaBound { get; set; }
    }

    public class ViewColumn
    {
        public int ColumnId { get; set; }
        public string? ColumnName { get; set; }
        public string? DataType { get; set; }
        public int? MaxLength { get; set; }
        public int? Precision { get; set; }
        public int? Scale { get; set; }
        public bool IsNullable { get; set; }
        public string? Description { get; set; }
    }
}
