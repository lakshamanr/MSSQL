using System.Data;
using System.Data.SqlClient;
using API.Common.Queries;
using API.Core.Domain.UserDefinedDataType;
using API.core.Services.Account.Interfaces;
using API.Data.Repositories.Common;
using Dapper;
using Microsoft.Extensions.Caching.Distributed;
namespace API.Data.Repositories.UserDefinedDataType
{
    /// <summary>
    /// Repository for managing user-defined data types.
    /// </summary>
    public class UserDefinedDataTypeRepository : BaseRepository, IUserDefinedDataTypeRepository
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UserDefinedDataTypeRepository"/> class.
        /// </summary>
        /// <param name="configuration">The configuration.</param>
        /// <param name="cache">The distributed cache.</param>
        /// <param name="userIdAccessor">The user ID accessor.</param>
        public UserDefinedDataTypeRepository(IConfiguration configuration, IDistributedCache cache, IUserIdAccessor userIdAccessor) : base(cache, configuration, userIdAccessor)
        {
        }

        private IDbConnection Connection => new SqlConnection(_connectionString);

        /// <summary>
        /// Gets all user-defined data types asynchronously.
        /// </summary>
        /// <returns>A collection of user-defined data types.</returns>
        public async Task<IEnumerable<API.Domain.UserDefinedDataType.UserDefinedDataType>> GetAllUserDefinedDataTypesAsync()
        {
            using (var db = Connection)
            {
                return await db.QueryAsync<API.Domain.UserDefinedDataType.UserDefinedDataType>(SqlQueryConstant.GetAllUserDefinedDataTypes);
            }
        }

    /// <summary>
    /// Gets a user-defined data type with extended properties asynchronously.
    /// </summary>
    /// <param name="schemaName">The schema name.</param>
    /// <param name="typeName">The type name.</param>
    /// <returns>The user-defined data type with extended properties.</returns>
    public async Task<API.Domain.UserDefinedDataType.UserDefinedDataType> GetUserDefinedDataTypeWithExtendedPropertiesAsync(string schemaName, string typeName)
    {
      using (var db = Connection)
      {
        var userDefinedDataType = await db.QueryFirstOrDefaultAsync<API.Domain.UserDefinedDataType.UserDefinedDataType>(
            SqlQueryConstant.GetUserDefinedDataTypeWithExtendedProperties,
            new { SchemaName = schemaName, TypeName = typeName }
        );

        if (userDefinedDataType != null)
        {
          var userDefinedDataTypeReference = await db.QueryAsync<UserDefinedDataTypeReference>(
              SqlQueryConstant.GetUsedDefinedDataTypeReference,
              new { SchemaName = schemaName, TypeName = typeName }
          );
          userDefinedDataType.userDefinedDataTypeReference = userDefinedDataTypeReference;
          return userDefinedDataType;
        }
      }

      return default;
    }

    /// <summary>
    /// Upserts a user-defined data type extended property asynchronously.
    /// </summary>
    /// <param name="schemaName">The schema name.</param>
    /// <param name="typeName">The type name.</param>
    /// <param name="description">The description.</param>
    public async Task UpsertUserDefinedDataTypeExtendedPropertyAsync(string schemaName, string typeName, string description)
        {
            using (var db = Connection)
            {
                await db.ExecuteAsync(
                    SqlQueryConstant.UpsertUserDefinedDataTypeExtendedProperty,
                    new { SchemaName = schemaName, TypeName = typeName, Desc = description }
                );
            }
        }
    }
}


