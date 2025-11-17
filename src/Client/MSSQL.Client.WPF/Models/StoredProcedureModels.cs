using System;
using System.Collections.Generic;

namespace MSSQL.Client.WPF.Models
{
    public class StoredProcedureMetadata
    {
        public string? ProcedureName { get; set; }
        public string? SchemaName { get; set; }
        public string? Description { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? ModifyDate { get; set; }
        public List<ProcedureParameter>? Parameters { get; set; }
        public string? Definition { get; set; }
    }

    public class ProcedureParameter
    {
        public int ParameterId { get; set; }
        public string? ParameterName { get; set; }
        public string? DataType { get; set; }
        public int? MaxLength { get; set; }
        public int? Precision { get; set; }
        public int? Scale { get; set; }
        public bool IsOutput { get; set; }
        public bool HasDefaultValue { get; set; }
        public string? DefaultValue { get; set; }
        public string? Description { get; set; }
    }
}
