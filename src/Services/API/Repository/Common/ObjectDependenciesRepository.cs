using API.Common.Queries;
using API.Domain.Common;
using API.Domain.Table;
using Dapper;
using Microsoft.Extensions.Caching.Distributed;
using System.Data;
using System.Data.SqlClient;

namespace API.Repository.Common
{
    /// <summary>
    /// Repository for managing object dependencies.
    /// </summary>
    public class ObjectDependenciesRepository : BaseRepository, IObjectDependenciesRepository
    { 
        /// <summary>
        /// Initializes a new instance of the <see cref="ObjectDependenciesRepository"/> class.
        /// </summary>
        /// <param name="connectionString">The connection string.</param>
        /// <param name="logger">The logger instance.</param>
        /// <param name="cache">The distributed cache instance.</param>
        public ObjectDependenciesRepository(IConfiguration configuration,ILogger<ObjectDependenciesRepository> logger, IDistributedCache cache): base(cache, configuration)
        {
            _connectionString = configuration.GetConnectionString("SqlServerConnection");
        }

        /// <summary>
        /// Gets object dependencies based on a query template.
        /// </summary>
        /// <param name="cacheKeyPrefix">Cache key prefix.</param>
        /// <param name="astrObjectName">The object name.</param>
        /// <param name="sqlQueryTemplate">The SQL query template.</param>
        /// <returns>An enumerable of <see cref="ReferencesModel"/>.</returns>
        private async Task<IEnumerable<ReferencesModel>> GetObjectDependencies(string cacheKeyPrefix, string astrObjectName, string sqlQueryTemplate)
        {
            var newObjectName = astrObjectName[(astrObjectName.IndexOf(".", StringComparison.Ordinal) + 1)..];
            var query = sqlQueryTemplate.Replace("@ObjectName", $"'{newObjectName}'");
            using var db = new SqlConnection(_connectionString);
            var objectDependencies = await db.QueryAsync<ReferencesModel>(query);
            return objectDependencies ?? Enumerable.Empty<ReferencesModel>();
        }

        /// <summary>
        /// Gets objects that depend on a specific object.
        /// </summary>
        /// <param name="astrObjectName">The object name.</param>
        /// <returns>A JSON string representing the dependencies.</returns>
        private async Task<string> GetObjectThatDependsOn(string astrObjectName)
        {
            var dependencies = (List<ReferencesModel>)await GetObjectDependencies("GetObjectThatDependsOn", astrObjectName, SqlQueryConstant.ObjectThatDependsOn);
            return GetObjectThatDependsOnJson(dependencies);
        }

        /// <summary>
        /// Gets objects on which a specific object depends.
        /// </summary>
        /// <param name="astrObjectName">The object name.</param>
        /// <returns>A JSON string representing the dependencies.</returns>
        private async Task<string> GetObjectOnWhichDepends(string astrObjectName)
        {
            var dependencies = (List<ReferencesModel>)await GetObjectDependencies("GetObjectOnWhichDepends", astrObjectName, SqlQueryConstant.ObjectOnWhichDepends);
            return GetObjectOnWhichDependsOnJson(dependencies);
        }

        /// <summary>
        /// Adds type information to a list of references.
        /// </summary>
        /// <param name="referencesModels">The list of references.</param>
        /// <returns>The list of references with type information added.</returns>
        private List<ReferencesModel> AddObjectTypeInfo(List<ReferencesModel> referencesModels)
        {
            // Create a dictionary to map TheType values to their respective descriptions
            var typeDescriptionMap = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
                {
                    { "AF", "(Aggregate function)" },
                    { "C", "(CHECK constraint)" },
                    { "D", "(DEFAULT)" },
                    { "FN", "(SQL scalar function)" },
                    { "FS", "(Assembly (CLR) scalar-function)" },
                    { "FT", "(Assembly (CLR) table-valued function)" },
                    { "IF", "(SQL inline table-valued function)" },
                    { "IT", "(Internal table)" },
                    { "P", "(SQL Stored Procedure)" },
                    { "PC", "(Assembly (CLR) stored-procedure)" },
                    { "PG", "(Plan guide)" },
                    { "PK", "(PRIMARY KEY constraint)" },
                    { "R", "(Rule (old-style, stand-alone))" },
                    { "RF", "(Replication-filter-procedure)" },
                    { "S", "(System base table)" },
                    { "SN", "(Synonym)" },
                    { "SO", "(Sequence object)" },
                    { "U", "(Table - user-defined)" },
                    { "V", "(View)" },
                    { "EC", "(Edge constraint)" },
                    { "SQ", "(Service queue)" },
                    { "TA", "(Assembly (CLR) DML trigger)" },
                    { "TF", "(SQL table-valued-function)" },
                    { "TR", "(SQL DML trigger)" },
                    { "TT", "(Table type)" },
                    { "UQ", "(UNIQUE constraint)" },
                    { "X", "(Extended stored procedure)" },
                    { "XMLC", "(XML Data Type)" }
                };

            // Process distinct references based on ThePath
            foreach (var model in referencesModels.DistinctBy(x => x.ThePath))
            {
                var trimmedType = model.TheType.Trim();

                if (typeDescriptionMap.TryGetValue(trimmedType, out var description))
                {
                    model.ThePath += description;
                }
            }

            return referencesModels;
        }

        /// <summary>
        /// Converts a list of references to a JSON string representing objects that depend on a specific object.
        /// </summary>
        /// <param name="referencesModels">The list of references.</param>
        /// <returns>A JSON string representing the dependencies.</returns>
        private string GetObjectThatDependsOnJson(List<ReferencesModel> referencesModels)
        {
            var e = new HirechyJsonGenerator(
                AddObjectTypeInfo(referencesModels).Select(x => x.ThePath.Replace("\\", " ")).ToList(),
                "That Depends On"
            );
            return e.root.PrimengToJson();
        }

        /// <summary>
        /// Converts a list of references to a JSON string representing objects on which a specific object depends.
        /// </summary>
        /// <param name="referencesModels">The list of references.</param>
        /// <returns>A JSON string representing the dependencies.</returns>
        private string GetObjectOnWhichDependsOnJson(List<ReferencesModel> referencesModels)
        {
            var e = new HirechyJsonGenerator(
                AddObjectTypeInfo(referencesModels).Select(x => x.ThePath.Replace("\\", " ")).ToList(),
                "On Which Depends"
            );
            return e.root.PrimengToJson();
        }

        /// <summary>
        /// Generates a JSON result representing the dependency tree.
        /// </summary>
        /// <param name="ObjectThatDependsOn">JSON string representing objects that depend on the specified object.</param>
        /// <param name="ObjectOnWhichDepends">JSON string representing objects on which the specified object depends.</param>
        /// <param name="ObjectName">The name of the object.</param>
        /// <returns>A JSON string representing the dependency tree.</returns>
        private string JsonResult(string ObjectThatDependsOn, string ObjectOnWhichDepends, string ObjectName)
        {
            return $"[{{ \"label\": \"Dependency Tree\", \"expandedIcon\": \"fa fa-folder-open\", \"collapsedIcon\": \"fa fa-folder-close\", \"children\": [{ObjectThatDependsOn}, {ObjectOnWhichDepends}] }} ]";
        }

        /// <summary>
        /// Gets dependencies of a specific table.
        /// </summary>
        /// <param name="ObjectName">The name of the table.</param>
        /// <returns>A JSON string representing the dependencies.</returns>
        public async Task<string> ObjectsDependencies(string ObjectName)
        {
            var objThatDependsOn = await GetObjectThatDependsOn(ObjectName);
            var objOnWhichDepends = await GetObjectOnWhichDepends(ObjectName);
            return JsonResult(objThatDependsOn, objOnWhichDepends, ObjectName);
        }
    }
}
