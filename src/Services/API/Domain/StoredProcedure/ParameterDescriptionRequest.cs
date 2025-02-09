namespace API.Domain.StoredProcedure
{
    public class ParameterDescriptionRequest
    {
        public string SchemaName { get; set; }
        public string StoredProcedureName { get; set; }
        public string ParameterName { get; set; }
        public string Description { get; set; }
    }

}
