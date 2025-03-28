using API.Common.Queries;
using API.Domain.XMLSchemaCollections;
using API.Repository.Common;
using Dapper;
using Microsoft.Extensions.Caching.Distributed;
using System.Data.SqlClient;

namespace API.Repository.XMLSchemaCollections
{
  /// <summary>
  /// Repository class for handling XML Schema Collections
  /// </summary>
  public class XmlSchemaRepository : BaseRepository, IXmlSchemaRepository
  {

    /// <summary>
    /// Constructor to initialize the connection string
    /// </summary>
    /// <param name="connectionString">The connection string to the database</param>
    public XmlSchemaRepository(IConfiguration configuration, IDistributedCache cache) : base(cache, configuration)
    {

    }

    /// <summary>
    /// Method to fetch XML Schema Details
    /// </summary>
    /// <param name="schemaCollectionName">The name of the schema collection</param>
    /// <returns>Returns the details of the XML schema</returns>
        public XmlSchemaDetails? GetXmlSchemaDetails(string schemaCollectionName)
        {
            XmlSchemaDetails? xmlSchemaDetails = null;
            using (var connection = new SqlConnection(_connectionString))
            {
                xmlSchemaDetails = connection.QuerySingleOrDefault<XmlSchemaDetails>(SqlQueryConstant.XMLSchemaDetails, new { SchemaCollectionName = schemaCollectionName });
                if (xmlSchemaDetails != null)
                {
                    xmlSchemaDetails.xmlschemreference = connection.Query<XmlSchemaReference>(SqlQueryConstant.XMLSchemReference, new { SchemaCollectionName = schemaCollectionName });
                    xmlSchemaDetails.xmlschema= xmlSchemaDetails.xmlschemreference.DistinctBy(x=>x);
                }
            }

            return xmlSchemaDetails;
        }

    /// <summary>
    /// Method to fetch all XML Schema Collections
    /// </summary>
    /// <returns>Returns a collection of all XML schema collections</returns>
    public IEnumerable<XmlSchemaCollection> GetAllXmlSchemaCollections()
    {
      using (var connection = new SqlConnection(_connectionString))
      {
        return connection.Query<XmlSchemaCollection>(SqlQueryConstant.AllXMLSchemaDetails);
      }
    }
  }
}
