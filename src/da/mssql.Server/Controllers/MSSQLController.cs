using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using mssql.server.Common;
using mssql.server.Common.Model.ServerProperties;
using mssql.server.Common.Model.Tables;
using mssql.server.Service;

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
        [HttpGet("GetDetailedTableInfo")]
        public async Task<DetailedTableInfo> GetDetailedTableInfoAsync(string tableName)
        { 
            return await tableInfoService.GetDetailedTableInfoAsync(tableName);
        }
    }
}
