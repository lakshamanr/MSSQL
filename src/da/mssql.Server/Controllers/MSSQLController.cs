using Microsoft.AspNetCore.Mvc;
using mssql.server.Common;
using mssql.server.Common.Model.ServerProperties;
using mssql.server.Service;
using Mssql.Server.Common.Model.Tables;

namespace mssql.server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MSSQLController : ControllerBase
    {
        ServerInfoService ServerInfoService;
        TableInfoService tableInfoService;
        public MSSQLController() 
        {
            ServerInfoService= new ServerInfoService(ConnectionConstants.connectionString);
            tableInfoService= new TableInfoService(ConnectionConstants.connectionString);
        }
        [HttpGet("GetDatabaserServiceProperties")]
        public DatabaseServerProperties GetDatabaserServiceProperties()
        {
           return ServerInfoService.GetDatabaserServiceProperties();
        }
        [HttpGet("GetTableMetaData")]
        public async Task<TableMetadata> GetDetailedTableInfoAsync(string tableName)
        { 
            return await tableInfoService.GetDetailedTableInfoAsync(tableName);
        }
        
        [HttpGet("GetTableDetails")]
        public async Task<IEnumerable<TableProperty>> GetTableDetailsAsync()
        {
            return await tableInfoService.GetTableDetailsAsync();
        }
    }
}
