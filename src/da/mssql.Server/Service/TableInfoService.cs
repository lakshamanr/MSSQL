using mssql.server.Common.Model.Tables;
using System.Data.SqlClient;
using System.Data;
using Dapper;
using MSSQL.DIARY.COMN.Constant;

namespace mssql.server.Service
{
    public class TableInfoService 
    {
        private readonly string _connectionString;

        public TableInfoService(string connectionString)
        {
            _connectionString = connectionString;
        }
        public async Task<DetailedTableInfo> GetDetailedTableInfoAsync(string tableName)
        {
            var tableInfos = await GetTableColoumnInfoAsync(tableName);
            var tableCreateScript = await GetTableCreateScriptAsync(tableName);
            var tableDescriptions = await GetTableDescriptionAsync(tableName);
            var tableIndices = await GetTableIndexesAsync(tableName);
            var tableForeignKeys = await GetTableForeignKeysAsync(tableName);

            return new DetailedTableInfo
            {
                tableInfos = tableInfos,
                tableCreateScript = new TableCreateScript() { CreateScript=tableCreateScript },
                tableDescriptions = tableDescriptions,
                tableIndices = tableIndices,
                tableForeignKeys = tableForeignKeys
            };
        }

          async Task<IEnumerable<TableColumnInfo>> GetTableColoumnInfoAsync(string tableName)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                return await db.QueryAsync<TableColumnInfo>(sql:SqlQueryConstant.GetAllTablesColumn, new { tblName = tableName });
            }
        }

        async Task<string> GetTableCreateScriptAsync(string tableName)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            { 
                return await db.QueryFirstOrDefaultAsync<string>(sql: SqlQueryConstant.GetTableCreateScript.Replace("@tableName", $"'{tableName}'"));
            }
        }
          async Task<IEnumerable<TableDescription>> GetTableDescriptionAsync(string tableName)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
          
                return await db.QueryAsync<TableDescription>(SqlQueryConstant.GetAllExtendedPropertiesofTheTable.Replace("@SchemaName", $"'{tableName.Split('.')[0]}'").Replace("@TableName", $"'{tableName.Split('.')[1]}'"));
            }
        }

        public async Task<IEnumerable<TableIndex>> GetTableIndexesAsync(string tableName)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                return await db.QueryAsync<TableIndex>(SqlQueryConstant.GetTableIndex, new { tblName = tableName });
            }
        }

          async Task<IEnumerable<TableForeignKey>> GetTableForeignKeysAsync(string tableName)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
           
                return await db.QueryAsync<TableForeignKey>(sql:SqlQueryConstant.GetAllTableForeignKeys, new { tblName = tableName });
            }
        }

    }
}
