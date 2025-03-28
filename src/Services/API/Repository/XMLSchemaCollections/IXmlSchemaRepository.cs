using API.Domain.XMLSchemaCollections;

namespace API.Repository.XMLSchemaCollections
{
    /// <summary>
    /// Interface for XML Schema Repository
    /// </summary>
    public interface IXmlSchemaRepository
    {
        /// <summary>
        /// Gets all XML schema collections.
        /// </summary>
        /// <returns>An enumerable of XML schema collections.</returns>
        IEnumerable<XmlSchemaCollection> GetAllXmlSchemaCollections();

        /// <summary>
        /// Gets the details of a specific XML schema collection.
        /// </summary>
        /// <param name="schemaCollectionName">The name of the schema collection.</param>
        /// <returns>The details of the XML schema collection.</returns>
        XmlSchemaDetails? GetXmlSchemaDetails(string schemaCollectionName);

    }
}
