using API.Domain.StoredProcedure;
using API.Repository.StoreProcedure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class StoredProcedureController : ControllerBase
    {
        private readonly IStoredProcedureRepository _repository;

        public StoredProcedureController(IStoredProcedureRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<StoredProcedureInfo>>> GetAllStoredProcedures()
        {
            var result = await _repository.GetAllStoredProceduresAsync();
            return Ok(result);
        }

        [HttpGet("{storedProcedureName}/metadata")]
        public async Task<ActionResult<StoredProcedureMeta>> GetStoredProcedureMetadata(string storedProcedureName)
        {
            var result = await _repository.GetStoredProcedureMetadataAsync(storedProcedureName);
            return Ok(result);
        }

        [HttpPost("description")]
        public async Task<IActionResult> MergeStoredProcedureDescription([FromBody] StoredProcedureDescriptionRequest request)
        {
            await _repository.MergeStoredProcedureDescriptionAsync(request.SchemaName, request.StoredProcedureName, request.Description);
            return Ok();
        }

        [HttpPost("parameter/description")]
        public async Task<IActionResult> MergeParameterDescription([FromBody] ParameterDescriptionRequest request)
        {
            await _repository.MergeParameterDescriptionAsync(request.SchemaName, request.StoredProcedureName, request.ParameterName, request.Description);
            return Ok();
        }
    }
}
