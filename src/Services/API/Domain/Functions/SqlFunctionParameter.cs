namespace API.Domain.Functions
{
    public class SqlFunctionParameter
    {
        public string Parameter_name { get; set; }
        public string Type { get; set; }
        public int Length { get; set; }
        public int Prec { get; set; }
        public int Scale { get; set; }
        public int Param_order { get; set; }
        public string Collation { get; set; }
        public string ExtendedProperty { get; set; }
    }

}
