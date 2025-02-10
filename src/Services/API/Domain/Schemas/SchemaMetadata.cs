namespace API.Domain.Schemas
{
    public class SchemaMetadata
    {
        public SchemaDescription Description { get; set; }
        public SchemaOwner Owner { get; set; }
        public string? Script { get; internal set; }
        public IEnumerable<SchemaObject>  ObjectsUsedBySchemaAsync { get; set; } 
    
    }
}
