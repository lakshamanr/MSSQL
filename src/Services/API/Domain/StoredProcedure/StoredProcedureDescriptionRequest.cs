namespace API.Domain.StoredProcedure
{
    public class StoredProcedureDescriptionRequest
    {
        public string SchemaName { get; set; }
        public string StoredProcedureName { get; set; }
        public string Description { get; set; }
    }
}
