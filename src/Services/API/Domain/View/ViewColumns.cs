namespace API.Domain.View
{
    public class ViewColumns
    {
        public string ViewName { get; set; } = string.Empty;
        public string ColumnName { get; set; } = string.Empty;
        public int ColumnOrder { get; set; }
        public string DataType { get; set; } = string.Empty;
        public int MaxLength { get; set; }
        public byte Precision { get; set; }
        public byte Scale { get; set; }

    }
}
