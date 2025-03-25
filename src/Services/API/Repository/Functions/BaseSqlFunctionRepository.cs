using API.Common.Queries;
using API.Domain.Functions;
using API.Repository.Common;
using Dapper;
using Microsoft.Extensions.Caching.Distributed;
using System.Data.SqlClient;

namespace API.Repository.Functions
{
    /// <summary>
    /// Provides a base repository for SQL functions, including methods to retrieve metadata, parameters, definitions, and dependencies.
    /// </summary>
    public class BaseSqlFunctionRepository : BaseRepository, IBaseSqlFunctionRepository
    {
        /// <summary>
        /// 
        /// </summary>
        public string FunctionType { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string FunctionName { get; set; }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="cache"></param>
        /// <param name="configuration"></param>
        public BaseSqlFunctionRepository(IDistributedCache cache, IConfiguration configuration) : base(cache, configuration)
        {

        }

        /// <summary>
        /// Retrieves metadata for a given SQL function asynchronously.
        /// </summary>
        /// <returns>A task representing the asynchronous operation, containing function metadata.</returns>
        public async Task<SqlFunctionMetadata> GetFunctionMetadataAsync(string FunctionName)
        {
            this.FunctionName= FunctionName;
            var properties = await RetrieveFunctionPropertiesAsync();
            var parameters = await FetchFunctionParametersWithDescriptionsAsync();
            var definition = await RetrieveFunctionDefinitionAsync() ?? string.Empty; // Ensure non-null assignment
            var dependencies = await FetchFunctionDependenciesAsync();
            var extendedPropertyInfo = await FetchFunctionExtendedProperties();

            return new SqlFunctionMetadata
            {
                Properties = properties ?? new SqlFunctionPropertyInfo(), // Ensure non-null assignment
                Parameters = parameters,
                Definition = definition,
                Dependencies = dependencies,
                FunctionName = FunctionName,
                ExtendedPropertyInfo = extendedPropertyInfo,
            };
        }

        private async Task<FunctionExtendedPropertyInfo?> FetchFunctionExtendedProperties()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                return await connection.QueryFirstOrDefaultAsync<FunctionExtendedPropertyInfo>
                (
                    SqlQueryConstant.FetchSingleFunctionDescriptions,
                    new { function_Type = FunctionType, FunctionName }
                );
            }
        }


        /// <summary>
        /// Retrieves details of a given SQL function asynchronously.
        /// </summary>
        /// <returns>A task representing the asynchronous operation, containing function details.</returns>
        private async Task<SqlFunctionPropertyInfo?> RetrieveFunctionPropertiesAsync()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                return await connection.QueryFirstOrDefaultAsync<SqlFunctionPropertyInfo>(
                    SqlQueryConstant.RetrieveFunctionProperties,
                    new { function_Type = FunctionType, FunctionName }
                );
            }
        }

        /// <summary>
        /// Fetches parameters with descriptions for a given SQL function asynchronously.
        /// </summary>
        /// <returns>A task representing the asynchronous operation, containing function parameters.</returns>
        private async Task<IEnumerable<FunctionParameter>> FetchFunctionParametersWithDescriptionsAsync()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                return (await connection.QueryAsync<FunctionParameter>(
                    SqlQueryConstant.FetchFunctionParametersWithDescriptions,
                    new { function_Type = FunctionType, FunctionName }
                )).ToList();
            }
        }

        /// <summary>
        /// Retrieves the definition of a given SQL function asynchronously.
        /// </summary>
        /// <returns>A task representing the asynchronous operation, containing the function definition.</returns>
        private async Task<string?> RetrieveFunctionDefinitionAsync()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                return await connection.ExecuteScalarAsync<string?>(
                    SqlQueryConstant.RetrieveFunctionDefinition,
                    new { function_Type = FunctionType,  FunctionName }
                );
            }
        }

        /// <summary>
        /// Fetches dependencies of a given SQL function asynchronously.
        /// </summary>
        /// <returns>A task representing the asynchronous operation, containing function dependencies.</returns>
        private async Task<IEnumerable<FunctionDependency>> FetchFunctionDependenciesAsync()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                return (await connection.QueryAsync<FunctionDependency>(
                    SqlQueryConstant.FetchFunctionDependencies,
                    new {FunctionName }
                )).ToList();
            }
        }

        /// <summary>
        /// Modifies the description of an existing SQL function.
        /// </summary>
        /// <param name="schemaName">The schema name of the function.</param>
        /// <param name="description">The new description to be set.</param>
        private async Task ModifyFunctionDescriptionAsync(string schemaName, string description)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.ExecuteAsync(
                    SqlQueryConstant.ModifyFunctionDescription,
                    new { Schema_Name = schemaName, FunctionName, fun_value = description }
                );
            }
        }

        /// <summary>
        /// Adds a description to a new SQL function.
        /// </summary>
        /// <param name="schemaName">The schema name of the function.</param>
        /// <param name="description">The description to be added.</param>
        private async Task AddFunctionDescriptionAsync(string schemaName, string description)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.ExecuteAsync(
                    SqlQueryConstant.AddFunctionDescription,
                    new { Schema_Name = schemaName, FunctionName, fun_value = description }
                );
            }
        }

        /// <summary>
        /// Checks if function metadata exists and updates it if found; otherwise, creates a new entry.
        /// </summary>
        /// <param name="schemaName">The schema name of the function.</param>
        /// <param name="description">The function description.</param>
        public async Task UpsertFunctionDescriptionAsync(string schemaName, string description,string FunctionName)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var existingDescription = await connection.ExecuteScalarAsync<string>(
                    "SELECT value FROM sys.extended_properties WHERE major_id = OBJECT_ID(@FunctionName) AND name = 'MS_Description'",
                    new {  FunctionName }
                );

                if (existingDescription != null)
                {
                    await ModifyFunctionDescriptionAsync(schemaName, description);
                }
                else
                {
                    await AddFunctionDescriptionAsync(schemaName, description);
                }
            }
        }

        /// <summary>
        /// Fetches descriptions of all scalar functions in the database.
        /// If a function appears multiple times, it merges descriptions.
        /// </summary>
        /// <returns>A dictionary of function names and their descriptions.</returns>
        public async Task<Dictionary<string, string>> FetchScalarFunctionDescriptionsAsync()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var result = await connection.QueryAsync<(string FunctionName, string Description)>(
                    SqlQueryConstant.FetchFunctionDescriptions, new { FunctionType }
                ).ConfigureAwait(false);

                return result
                    .GroupBy(x => x.FunctionName)  // Group by function name
                    .ToDictionary(
                        g => g.Key,  // Use function name as the key
                        g => string.Join(" | ", g.Select(x => x.Description ?? "No Description Available")) // Merge descriptions
                    );
            }
        }

        /// <summary>
        /// Fetches descriptions of all table functions in the database.
        /// If a function appears multiple times, it removes duplicates.
        /// </summary>
        /// <returns>A dictionary of function names and their descriptions.</returns>
        public async Task<Dictionary<string, string>> FetchTableFunctionDescriptionsAsync()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var result = await connection.QueryAsync<(string FunctionName, string Description)>(
                     SqlQueryConstant.FetchFunctionDescriptions, new { FunctionType }
                ).ConfigureAwait(false);

                return result
                    .DistinctBy(x => x.FunctionName) // Removes duplicates (keeps first)
                    .ToDictionary(x => x.FunctionName, x => x.Description ?? "No Description Available");
            }
        }

        /// <summary>
        /// Fetches descriptions of all aggregate functions in the database.
        /// If a function appears multiple times, it removes duplicates.
        /// </summary>
        /// <returns>A dictionary of function names and their descriptions.</returns>
        public async Task<Dictionary<string, string>> FetchAggregateFunctionDescriptionsAsync()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var result = await connection
                                   .QueryAsync<(string FunctionName, string Description)>
                                   (SqlQueryConstant.FetchFunctionDescriptions, new { FunctionType });

                return result
                        .DistinctBy(x => x.FunctionName) // Removes duplicates (keeps first)
                        .ToDictionary(x => x.FunctionName, x => x.Description ?? "No Description Available");
            }
        }
    }
}
