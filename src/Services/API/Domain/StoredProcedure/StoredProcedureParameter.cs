namespace API.Domain.StoredProcedure
{
    public class StoredProcedureParameter
{
    public string ParameterName { get; set; }
    public string Type { get; set; }
    public int Length { get; set; }
    public int Precision { get; set; }
    public int Scale { get; set; }
    public int ParameterOrder { get; set; }
    public string Collation { get; set; }
    public string ExtendedProperty { get; set; }
}

}
