namespace MSSQL.DIARY.COMN.Constant
{
    public static partial class SqlQueryConstant
    {
        public static readonly string GetCurrentDatabaseName =
         @"SELECT DB_NAME() AS [Current_Database]";

    

        public static readonly string GetDatabaseServerName =
            @"SELECT @@SERVERNAME";

        public static readonly string GetTables =
            @"[sys].[sp_tables]";

        public static readonly string GetTableColumns =
            @"SELECT c.name AS column_name 
          FROM sys.tables AS t 
          INNER JOIN sys.columns c ON t.OBJECT_ID = c.OBJECT_ID 
          WHERE t.name LIKE '%@tableName%'";

        public static readonly string GetStoredProcedures =
            @"SELECT ((SCHEMA_NAME(O.SCHEMA_ID) )+'.'+ [NAME]) AS 'STOREDPROC' 
          FROM SYS.SQL_MODULES M 
          INNER JOIN SYS.OBJECTS O ON M.OBJECT_ID = O.OBJECT_ID
          WHERE O.TYPE='P'";

        public static readonly string GetTriggers =
            @"SELECT ((SCHEMA_NAME(O.SCHEMA_ID) )+'.'+ [NAME]) AS 'TRIGGERS' 
          FROM SYS.SQL_MODULES M 
          INNER JOIN SYS.OBJECTS O ON M.OBJECT_ID = O.OBJECT_ID
          WHERE O.TYPE='TR'";

        public static readonly string GetScalarFunctions =
            @"SELECT ((SCHEMA_NAME(O.SCHEMA_ID) )+'.'+ [NAME]) AS 'SQL_SCALAR_FUNCTION' 
          FROM SYS.SQL_MODULES M 
          INNER JOIN SYS.OBJECTS O ON M.OBJECT_ID = O.OBJECT_ID
          WHERE O.TYPE='FN'";

        public static readonly string GetTableValueFunctions =
            @"SELECT ((SCHEMA_NAME(O.SCHEMA_ID) )+'.'+ [NAME]) AS 'SQL_TABLE_VALUED_FUNCTION' 
          FROM SYS.SQL_MODULES M 
          INNER JOIN SYS.OBJECTS O ON M.OBJECT_ID = O.OBJECT_ID
          WHERE O.TYPE='TF'";

        public static readonly string GetAggregateFunctions =
            @"SELECT ((SCHEMA_NAME(O.SCHEMA_ID) )+'.'+ [NAME]) AS 'SQL_AGGREGATE_FUNCTION' 
          FROM SYS.SQL_MODULES M 
          INNER JOIN SYS.OBJECTS O ON M.OBJECT_ID = O.OBJECT_ID
          WHERE O.TYPE='IF'";

        public static readonly string GetUserDefinedDataTypes =
            @"SELECT (SCHEMA_NAME(SCHEMA_ID) +'.'+[NAME]) AS 'USER_DEFINED_DATA_TYPE' 
          FROM SYS.TYPES
          WHERE IS_USER_DEFINED = 1";

        public static readonly string GetXmlSchemaCollections =
            @"SELECT DISTINCT (SCHEMA_NAME(SCHEMA_ID)+'.'+XSC.NAME) AS 'NAME' 
          FROM SYS.XML_SCHEMA_COLLECTIONS XSC 
          JOIN SYS.XML_SCHEMA_NAMESPACES XSN ON (XSC.XML_COLLECTION_ID = XSN.XML_COLLECTION_ID)";


        public static readonly string GetAllDatabaseNames =
        @"SELECT NAME AS DatabaseName FROM MASTER.DBO.SYSDATABASES WHERE NAME NOT IN ('MASTER','TEMPDB','MODEL','MSDB')";

        public static readonly string GetServerProperties = @" SELECT 'ProductName' AS PropertyName, LEFT(@@VERSION, CHARINDEX(' - ', @@VERSION)) AS PropertyValue
                UNION ALL
                SELECT 'ProductMajorVersion', CAST(SERVERPROPERTY('ProductMajorVersion') AS VARCHAR(100))
                UNION ALL
                SELECT 'ProductBuild', CAST(SERVERPROPERTY('ProductBuild') AS VARCHAR(100))
                UNION ALL
                SELECT 'InstanceDefaultLogPath', CAST(SERVERPROPERTY('InstanceDefaultLogPath') AS VARCHAR(100))
                UNION ALL
                SELECT 'Edition', CAST(SERVERPROPERTY('Edition') AS VARCHAR(100))
                UNION ALL
                SELECT 'BuildClrVersion', CAST(SERVERPROPERTY('BuildClrVersion') AS VARCHAR(100))
                UNION ALL
                SELECT 'Collation', CAST(SERVERPROPERTY('Collation') AS VARCHAR(100))
                UNION ALL
                SELECT 'ComputerNamePhysicalNetBIOS', CAST(SERVERPROPERTY('ComputerNamePhysicalNetBIOS') AS VARCHAR(100))
                UNION ALL
                SELECT 'EngineEdition', 
                    CASE
                        WHEN SERVERPROPERTY('EngineEdition') = 1 THEN 'Personal or Desktop Engine (Not available in SQL Server 2005 (9.x) and later versions.)'
                        WHEN SERVERPROPERTY('EngineEdition') = 2 THEN 'Standard (This is returned for Standard, Web, and Business Intelligence.)'
                        WHEN SERVERPROPERTY('EngineEdition') = 3 THEN 'Enterprise (This is returned for Evaluation, Developer, and both Enterprise editions.)'
                        WHEN SERVERPROPERTY('EngineEdition') = 4 THEN 'Express (This is returned for Express, Express with Tools and Express with Advanced Services)'
                        WHEN SERVERPROPERTY('EngineEdition') = 5 THEN 'SQL Database'
                        WHEN SERVERPROPERTY('EngineEdition') = 6 THEN 'SQL Data Warehouse'
                        WHEN SERVERPROPERTY('EngineEdition') = 8 THEN 'Managed Instance'
                    END
                UNION ALL
                SELECT 'Language', @@LANGUAGE
                UNION ALL
                SELECT 'Platform', (SELECT TOP 1 value_data FROM sys.dm_server_registry WHERE value_name='ObjectName')
                UNION ALL
                SELECT 'IsClustered', 
                    CASE
                        WHEN SERVERPROPERTY('IsClustered') = 1 THEN 'Clustered'
                        WHEN SERVERPROPERTY('IsClustered') = 0 THEN 'Not Clustered'
                    END";
         

        public static readonly string GetAdvancedServerSettings =
            @"SELECT VALUE_NAME AS Property, CAST(VALUE_DATA AS VARCHAR(1000)) AS 'Value' FROM SYS.DM_SERVER_REGISTRY";
    }
}