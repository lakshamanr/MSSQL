using MSSQL.Client.WPF.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MSSQL.Client.WPF.Services
{
    public interface IFunctionService
    {
        Task<List<FunctionMetadata>?> GetAllFunctionsAsync();
        Task<FunctionMetadata?> GetFunctionMetaDataAsync(string functionName, string functionType);
    }
}
