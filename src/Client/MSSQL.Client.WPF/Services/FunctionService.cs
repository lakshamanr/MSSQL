using MSSQL.Client.WPF.Models;

namespace MSSQL.Client.WPF.Services
{
    public class FunctionService : IFunctionService
    {
        private readonly IApiService _apiService;

        public FunctionService(IApiService apiService)
        {
            _apiService = apiService;
        }

        public async Task<List<FunctionMetadata>?> GetAllFunctionsAsync()
        {
            // Combine all function types
            var scalarFunctions = await _apiService.GetAsync<List<FunctionMetadata>>("/ScalarFunction/AllScalarFunctions") ?? new List<FunctionMetadata>();
            var aggregateFunctions = await _apiService.GetAsync<List<FunctionMetadata>>("/AggregateFunction/AllAggregateFunctions") ?? new List<FunctionMetadata>();
            var tableFunctions = await _apiService.GetAsync<List<FunctionMetadata>>("/TableFunction/AllTableFunctions") ?? new List<FunctionMetadata>();

            var allFunctions = new List<FunctionMetadata>();
            allFunctions.AddRange(scalarFunctions);
            allFunctions.AddRange(aggregateFunctions);
            allFunctions.AddRange(tableFunctions);

            return allFunctions;
        }

        public async Task<FunctionMetadata?> GetFunctionMetaDataAsync(string functionName, string functionType)
        {
            return functionType.ToLower() switch
            {
                "scalar" => await _apiService.GetAsync<FunctionMetadata>($"/ScalarFunction/GetScalarFunctionMetaData?functionName={functionName}"),
                "aggregate" => await _apiService.GetAsync<FunctionMetadata>($"/AggregateFunction/GetAggregateFunctionMetaData?functionName={functionName}"),
                "table" => await _apiService.GetAsync<FunctionMetadata>($"/TableFunction/GetTableFunctionMetaData?functionName={functionName}"),
                _ => null
            };
        }
    }
}
