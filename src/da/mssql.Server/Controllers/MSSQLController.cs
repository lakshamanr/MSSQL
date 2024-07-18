using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using mssql.server.Common;
using mssql.server.Common.Model;

namespace mssql.server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MSSQLController : ControllerBase
    {
        SqlServerInfoService ServerInfoService;
        public MSSQLController() 
        {
            ServerInfoService= new SqlServerInfoService(ConnectionConstants.connectionString);
        }
        [HttpGet("GetDatabaserServiceProperties")]
        public DatabaseServerProperties GetDatabaserServiceProperties()
        {
           return ServerInfoService.GetDatabaserServiceProperties();
        }
    }
}
