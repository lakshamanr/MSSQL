using System.Data;
using System.Data.SqlClient;
using Dapper;
using MSSQL.DIARY.COMN.Constant;
using Mssql.Server.Common.Model.Tables;

namespace mssql.server.Service
{
    public class TableInfoService
    {
        private readonly string _connectionString;

        public TableInfoService(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<TableMetadata> GetDetailedTableInfoAsync(string tableName)
        {
            var schemaAndTableName = tableName.Split('.');
            var schemaName = schemaAndTableName[0];
            var tableNameOnly = schemaAndTableName[1];

            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var descriptions = await GetTableDescriptionAsync(db, schemaName, tableNameOnly);
                var columns = await GetTableColumnInfoAsync(db, tableName);
                var createScript = await GetTableCreateScriptAsync(db, tableName);
                var indices = await GetTableIndexesAsync(db, tableName);
                var foreignKeys = await GetTableForeignKeysAsync(db, tableName);
                var properties = await GetDetailedTablePropertiesAsync(db, tableName);

                var detailedTableInfo = new TableMetadata
                {
                    Descriptions = descriptions,
                    Columns = columns,
                    CreateScript = new TableCreateScript { Script = createScript },
                    Indices = indices,
                    ForeignKeys = foreignKeys,
                    Properties = properties
                };

                return detailedTableInfo;
            }
        }

        public async Task<IEnumerable<TableProperty>> GetDetailedTablePropertiesAsync(IDbConnection db, string tableName)
        {
            var schemaAndTableName = tableName.Split('.');
            var schemaName = schemaAndTableName[0];
            var tableNameOnly = schemaAndTableName[1];

            return await GetTablePropertiesAsync(db, schemaName, tableNameOnly);
        }

        private async Task<IEnumerable<TableDescription>> GetTableDescriptionAsync(IDbConnection db, string schemaName, string tableName)
        {
            var query = SqlQueryConstant.GetAllExtendedPropertiesofTheTable
                .Replace("@SchemaName", $"'{schemaName}'")
                .Replace("@TableName", $"'{tableName}'");

            return await db.QueryAsync<TableDescription>(query);
        }

        private async Task<IEnumerable<TableProperty>> GetTablePropertiesAsync(IDbConnection db, string schemaName, string tableName)
        {
            var query = SqlQueryConstant.GetTableProperties
                .Replace("@SchemaName", $"'{schemaName}'")
                .Replace("@TableName", $"'{tableName}'");

            return await db.QueryAsync<TableProperty>(query);
        }

        private async Task<IEnumerable<TableColumns>> GetTableColumnInfoAsync(IDbConnection db, string tableName)
        {
            return await db.QueryAsync<TableColumns>(SqlQueryConstant.GetAllTablesColumn, new { tblName = tableName });
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

        private async Task<IEnumerable<TableForeignKey>> GetTableForeignKeysAsync(IDbConnection db, string tableName)
        {
            return await db.QueryAsync<TableForeignKey>(SqlQueryConstant.GetAllTableForeignKeys, new { tblName = tableName });
        }

        public async Task<IEnumerable<TableProperty>> GetTableDetailsAsync()
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var result = await db.QueryAsync<TableProperty>(SqlQueryConstant.GetAllTablesExtendedProperties);
                return result;
            }
        }
    }
}
