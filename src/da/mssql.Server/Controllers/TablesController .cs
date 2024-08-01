using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using mssql.server.Common;
using mssql.server.Common.Model.ServerProperties;
using mssql.server.Service;
using mssql.server.Service.mssql.server.Service;
using Mssql.Server.Common.Model.Tables;

namespace mssql.server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TablesController : ControllerBase
    { 
        private readonly  TableInfoService _tableInfoService; 
        public TablesController(TableInfoService tableInfoService)
        {
            _tableInfoService = tableInfoService;
        }

        [HttpGet("GetTableMetaData")]
        public async Task<TableMetadata> GetDetailedTableInfoAsync(string tableName)
        { 
            return await _tableInfoService.GetDetailedTableInfoAsync(tableName);
        }
        
        [HttpGet("GetTableDetails")]
        public async Task<IEnumerable<TableProperty>> GetTableDetailsAsync()
        {
            return await _tableInfoService.GetTableDetailsAsync();
        }
        [HttpPost("UpdateTableExtendedProperties")]
        public async Task<IActionResult> UpdateTableExtendedProperties(TableDescription tableDescription)
        {
            await _tableInfoService.UpdateTableExtendedProperty(tableDescription);
            return Ok();
        }
    }
}
