using MSSQL.Client.WPF.Models;

namespace MSSQL.Client.WPF.Services
{
    public interface IFunctionService
    {
        Task<List<FunctionMetadata>?> GetAllFunctionsAsync();
        Task<FunctionMetadata?> GetFunctionMetaDataAsync(string functionName, string functionType);
    }
}
