namespace API.Domain.View
{
    public class ViewColumns
    {
        public string TableSchema { get; set; } // Corresponds to TABLE_SCHEMA
        public string TableName { get; set; }   // Corresponds to TABLE_NAME
        public string ColumnName { get; set; }  // Corresponds to COLUMN_NAME
        public int OrdinalPosition { get; set; } // Corresponds to ORDINAL_POSITION
        public string DataType { get; set; }    // Corresponds to DATA_TYPE
        public int? MaxLength { get; set; }     // Corresponds to CHARACTER_MAXIMUM_LENGTH

    }
}
