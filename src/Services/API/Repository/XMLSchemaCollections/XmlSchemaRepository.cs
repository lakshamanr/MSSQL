using API.Common.Queries;
using API.Domain.XMLSchemaCollections;
using Dapper;
using System.Data.SqlClient;

namespace API.Repository.XMLSchemaCollections
{
    /// <summary>
    /// Repository class for handling XML Schema Collections
    /// </summary>
    public class XmlSchemaRepository
    {
        private readonly string _connectionString;

        /// <summary>
        /// Constructor to initialize the connection string
        /// </summary>
        /// <param name="connectionString">The connection string to the database</param>
        public XmlSchemaRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        /// <summary>
        /// Method to fetch XML Schema Details
        /// </summary>
        /// <param name="schemaCollectionName">The name of the schema collection</param>
        /// <returns>Returns the details of the XML schema</returns>
        public XmlSchemaDetails? GetXmlSchemaDetails(string schemaCollectionName)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                return connection.QuerySingleOrDefault<XmlSchemaDetails>(SqlQueryConstant.XMLSchemaDetails, new { SchemaCollectionName = schemaCollectionName });
            }
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

        /// <summary>
        /// Method to fetch XML Schema References
        /// </summary>
        /// <param name="schemaCollectionName">The name of the schema collection</param>
        /// <returns>Returns a collection of XML schema references</returns>
        public IEnumerable<XmlSchemaReference> GetXmlSchemaReferences(string schemaCollectionName)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                return connection.Query<XmlSchemaReference>(SqlQueryConstant.XMLSchemReference, new { SchemaCollectionName = schemaCollectionName });
            }
        }
    }
}
