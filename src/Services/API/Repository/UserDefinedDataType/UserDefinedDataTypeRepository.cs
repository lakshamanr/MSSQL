using System.Data;
using System.Data.SqlClient;
using API.Common.Queries;
using API.Domain.UserDefinedDataType;
using Dapper;
namespace API.Repository.UserDefinedDataType
{
    public class UserDefinedDataTypeRepository
    {
        private readonly string _connectionString;

        public UserDefinedDataTypeRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        private IDbConnection Connection => new SqlConnection(_connectionString);

        public async Task<IEnumerable<API.Domain.UserDefinedDataType.UserDefinedDataType>> GetAllUserDefinedDataTypesAsync()
        {
            using (var db = Connection)
            {
                return await db.QueryAsync<API.Domain.UserDefinedDataType.UserDefinedDataType>(SqlQueryConstant.GetAllUserDefinedDataTypes);
            }
        }

        public async Task<API.Domain.UserDefinedDataType.UserDefinedDataType?> GetUserDefinedDataTypeWithExtendedPropertiesAsync(string schemaName, string typeName)
        {
            using (var db = Connection)
            {
                var userDefinedDataType = await db.QueryFirstOrDefaultAsync<API.Domain.UserDefinedDataType.UserDefinedDataType>(
                    SqlQueryConstant.GetUserDefinedDataTypeWithExtendedProperties,
                    new { SchemaName = schemaName, TypeName = typeName }
                );

                if (userDefinedDataType != null)
                {
                    userDefinedDataType.userDefinedDataTypeReference = await db.QueryAsync<UserDefinedDataTypeReference>(
                        SqlQueryConstant.GetUsedDefinedDataTypeReference,
                        new { SchemaName = schemaName, TypeName = typeName }
                    );
                }

                return userDefinedDataType;
            }
        }


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
