namespace API.Domain.FullTextCatalog
{
    public class FullTextCatalog
    {
        public string Name { get; set; }
        public string SchemaName { get; set; }
        public string Owner { get; set; }
        public bool IsDefault { get; set; }
        public bool IsAccentSensitive { get; set; }
        public string Description { get; set; }
        public string CreateScript { get; set; }
        public IEnumerable<string> IndexScripts
        {
            get; set;
        }
    }
}
