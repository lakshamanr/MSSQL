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
            var schemaAndTableName = tableName.Split('.');
            var schemaName = schemaAndTableName[0];
            var tableNameOnly = schemaAndTableName[1];

            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var tableDescriptions = await GetTableDescriptionAsync(db, schemaName, tableNameOnly);
                var tableProperties = await GetTablePropertiesAsync(db, schemaName, tableNameOnly);
                var tableInfos = await GetTableColumnInfoAsync(db, tableName);
                var tableCreateScript = await GetTableCreateScriptAsync(db, tableName);
                var tableIndices = await GetTableIndexesAsync(db, tableName);
                var tableForeignKeys = await GetTableForeignKeysAsync(db, tableName);
                DetailedTableInfo detailedTableInfo = new DetailedTableInfo
                {
                tableDescriptions = tableDescriptions,
                    tableProperties = tableProperties,
                    tableInfos = tableInfos,
                    tableCreateScript = new TableCreateScript { CreateScript = tableCreateScript },
                tableIndices = tableIndices,
                    tableForeignKeys = tableForeignKeys,
            };
                return detailedTableInfo;
        }
        }
        public async Task<IEnumerable<TableProperties>> GetDetailedTablePropertiesAsync(string tableName)
        {
            var schemaAndTableName = tableName.Split('.');
            var schemaName = schemaAndTableName[0];
            var tableNameOnly = schemaAndTableName[1];

            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var tableProperties = await GetTablePropertiesAsync(db, schemaName, tableNameOnly); 
                return tableProperties;
            }
        }

        private async Task<IEnumerable<TableDescription>> GetTableDescriptionAsync(IDbConnection db, string schemaName, string tableName)
        {
            var query = SqlQueryConstant.GetAllExtendedPropertiesofTheTable
                .Replace("@SchemaName", $"'{schemaName}'")
                .Replace("@TableName", $"'{tableName}'");

            return await db.QueryAsync<TableDescription>(query);
        }

        private async Task<IEnumerable<TableProperties>> GetTablePropertiesAsync(IDbConnection db, string schemaName, string tableName)
            {
            var query = SqlQueryConstant.GetTableProperties
                .Replace("@SchemaName", $"'{schemaName}'")
                .Replace("@TableName", $"'{tableName}'");
          
            return await db.QueryAsync<TableProperties>(query);
            }

        private async Task<IEnumerable<TableColumnInfo>> GetTableColumnInfoAsync(IDbConnection db, string tableName)
        {
            return await db.QueryAsync<TableColumnInfo>(SqlQueryConstant.GetAllTablesColumn, new { tblName = tableName });
        }

        private async Task<string> GetTableCreateScriptAsync(IDbConnection db, string tableName)
        {
            var query = SqlQueryConstant.GetTableCreateScript.Replace("@tableName", $"'{tableName}'");
            return await db.QueryFirstOrDefaultAsync<string>(query);
        }

        private async Task<IEnumerable<TableIndex>> GetTableIndexesAsync(IDbConnection db, string tableName)
            {
                return await db.QueryAsync<TableIndex>(SqlQueryConstant.GetTableIndex, new { tblName = tableName });
            }
        }

        private async Task<IEnumerable<TableForeignKey>> GetTableForeignKeysAsync(IDbConnection db, string tableName)
            {
            return await db.QueryAsync<TableForeignKey>(SqlQueryConstant.GetAllTableForeignKeys, new { tblName = tableName });
        }

    }
}
