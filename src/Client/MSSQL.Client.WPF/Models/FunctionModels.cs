using System;
using System.Collections.Generic;

namespace MSSQL.Client.WPF.Models
{
    public class FunctionMetadata
    {
        public string? FunctionName { get; set; }
        public string? SchemaName { get; set; }
        public string? FunctionType { get; set; }
        public string? Description { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? ModifyDate { get; set; }
        public List<FunctionParameter>? Parameters { get; set; }
        public string? Definition { get; set; }
        public string? ReturnType { get; set; }
    }

    public class FunctionParameter
    {
        public int ParameterId { get; set; }
        public string? ParameterName { get; set; }
        public string? DataType { get; set; }
        public int? MaxLength { get; set; }
        public int? Precision { get; set; }
        public int? Scale { get; set; }
        public string? Description { get; set; }
    }
}
