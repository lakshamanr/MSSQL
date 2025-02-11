using API.Domain.Functions;
using API.Repository.Common;
using Microsoft.Extensions.Caching.Distributed;

namespace API.Repository.Functions
{
    /// <summary>
    /// Repository for table-valued functions.
    /// </summary>
    public class TableValuedFunctionRepository :BaseRepository,   ITableValuedFunctionRepository
    { 
        IBaseSqlFunctionRepository _IBaseSqlFunctionRepository;
        public TableValuedFunctionRepository(IBaseSqlFunctionRepository IBaseSqlFunctionRepository, IConfiguration configuration, IDistributedCache cache) : base(cache, configuration)
            {
                  _IBaseSqlFunctionRepository= IBaseSqlFunctionRepository;
                   _IBaseSqlFunctionRepository.FunctionType = "TF";
            _connectionString = configuration.GetConnectionString("SqlServerConnection");
        }

        public   async Task<Dictionary<string, string>> FetchTableFunctionDescriptionsAsync()
        {
            return await _IBaseSqlFunctionRepository.FetchTableFunctionDescriptionsAsync();
        }

        public   Task<SqlFunctionMetadata> GetFunctionMetadataAsync(string functionName)
        {
            return _IBaseSqlFunctionRepository.GetFunctionMetadataAsync(functionName);
        }

        public   async Task UpsertFunctionDescriptionAsync(string schemaName, string functionName, string description)
        {
            await _IBaseSqlFunctionRepository.UpsertFunctionDescriptionAsync(schemaName, functionName, description);
        }
    }
}
