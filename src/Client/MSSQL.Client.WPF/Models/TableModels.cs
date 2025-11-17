using System.Collections.Generic;

namespace MSSQL.Client.WPF.Models
{
    public class TableMetadata
    {
        public string? TableName { get; set; }
        public string? SchemaName { get; set; }
        public string? Description { get; set; }
        public List<TableColumn>? Columns { get; set; }
        public List<TableIndex>? Indexes { get; set; }
        public List<TableForeignKey>? ForeignKeys { get; set; }
        public List<TableConstraint>? Constraints { get; set; }
        public List<TableProperty>? Properties { get; set; }
        public TableCreateScript? CreateScript { get; set; }
        public TableFragmentation? Fragmentation { get; set; }
    }

    public class TableColumn
    {
        public int ColumnId { get; set; }
        public string? ColumnName { get; set; }
        public string? DataType { get; set; }
        public int? MaxLength { get; set; }
        public int? Precision { get; set; }
        public int? Scale { get; set; }
        public bool IsNullable { get; set; }
        public bool IsIdentity { get; set; }
        public bool IsPrimaryKey { get; set; }
        public bool IsForeignKey { get; set; }
        public string? DefaultValue { get; set; }
        public string? Description { get; set; }
        public string? ComputedDefinition { get; set; }
    }

    public class TableIndex
    {
        public string? IndexName { get; set; }
        public string? IndexType { get; set; }
        public bool IsUnique { get; set; }
        public bool IsPrimaryKey { get; set; }
        public bool IsDisabled { get; set; }
        public string? Columns { get; set; }
        public string? IncludedColumns { get; set; }
        public string? FilterDefinition { get; set; }
    }

    public class TableForeignKey
    {
        public string? ForeignKeyName { get; set; }
        public string? ParentTable { get; set; }
        public string? ParentColumn { get; set; }
        public string? ReferencedTable { get; set; }
        public string? ReferencedColumn { get; set; }
        public string? DeleteAction { get; set; }
        public string? UpdateAction { get; set; }
        public bool IsDisabled { get; set; }
    }

    public class TableConstraint
    {
        public string? ConstraintName { get; set; }
        public string? ConstraintType { get; set; }
        public string? Definition { get; set; }
        public string? Columns { get; set; }
        public bool IsDisabled { get; set; }
    }

    public class TableProperty
    {
        public string? PropertyName { get; set; }
        public string? PropertyValue { get; set; }
    }

    public class TableCreateScript
    {
        public string? Script { get; set; }
    }

    public class TableFragmentation
    {
        public string? IndexName { get; set; }
        public decimal? FragmentationPercent { get; set; }
        public long? PageCount { get; set; }
    }
}
