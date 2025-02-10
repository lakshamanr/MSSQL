namespace API.Domain.UserDefinedDataType
{
    /// <summary>
    /// Request model for updating extended properties.
    /// </summary>
    public class UpsertExtendedPropertyRequest
    {
        public string SchemaName { get; set; }
        public string TypeName { get; set; }
        public string Description { get; set; }
    }
}
