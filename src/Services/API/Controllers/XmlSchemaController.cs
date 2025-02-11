using API.Domain.XMLSchemaCollections;
using API.Repository.XMLSchemaCollections;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class XmlSchemaController : ControllerBase
    {
        private readonly IXmlSchemaRepository _repository;

        // Injecting the repository via constructor
        public XmlSchemaController(IXmlSchemaRepository repository)
        {
            _repository = repository;
        }

        /// <summary>
        /// Endpoint to get XML Schema Details
        /// </summary>
        /// <param name="schemaCollectionName">The name of the schema collection</param>
        /// <returns>Details of the XML Schema</returns>
        [HttpGet("details/{schemaCollectionName}")]
        public ActionResult<XmlSchemaDetails> GetXmlSchemaDetails(string schemaCollectionName)
        {
            var schemaDetails = _repository.GetXmlSchemaDetails(schemaCollectionName);

            if (schemaDetails == null)
            {
                return NotFound($"XML Schema Collection '{schemaCollectionName}' not found.");
            }

            return Ok(schemaDetails);
        }

        /// <summary>
        /// Endpoint to get XML Schema References
        /// </summary>
        /// <param name="schemaCollectionName">The name of the schema collection</param>
        /// <returns>References of the XML Schema</returns>
        [HttpGet("references/{schemaCollectionName}")]
        public ActionResult<IEnumerable<XmlSchemaReference>> GetXmlSchemaReferences(string schemaCollectionName)
        {
            var references = _repository.GetXmlSchemaReferences(schemaCollectionName);

            if (references == null || !System.Linq.Enumerable.Any(references))
            {
                return NotFound($"No references found for XML Schema Collection '{schemaCollectionName}'.");
            }

            return Ok(references);
        }

        /// <summary>
        /// New endpoint to get all XML Schema Collections
        /// </summary>
        /// <returns>All XML Schema Collections</returns>
        [HttpGet("collections")]
        public ActionResult<IEnumerable<XmlSchemaCollection>> GetAllXmlSchemaCollections()
        {
            var collections = _repository.GetAllXmlSchemaCollections();

            if (collections == null || !System.Linq.Enumerable.Any(collections))
            {
                return NotFound("No XML Schema Collections found.");
            }

            return Ok(collections);
        }
    }
}
