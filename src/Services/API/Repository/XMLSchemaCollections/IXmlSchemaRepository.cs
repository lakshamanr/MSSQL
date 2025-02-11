using API.Domain.XMLSchemaCollections;

namespace API.Repository.XMLSchemaCollections
{
    public interface IXmlSchemaRepository
    {
        IEnumerable<XmlSchemaCollection> GetAllXmlSchemaCollections();
        XmlSchemaDetails? GetXmlSchemaDetails(string schemaCollectionName);
        IEnumerable<XmlSchemaReference> GetXmlSchemaReferences(string schemaCollectionName);
    }
}