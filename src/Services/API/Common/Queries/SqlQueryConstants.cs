namespace API.Common.Queries
{
    /// <summary>
    /// Contains SQL query constants used for various database operations.
    /// </summary>
    public static class SqlQueryConstants
    {
        /// <summary>
        /// SQL query to load all stored procedures.
        /// </summary>
        public const string LoadStoredProcedures = @"
                SELECT ((SCHEMA_NAME(O.SCHEMA_ID) )+'.'+ [NAME]) AS 'ProcedureName' 
                FROM SYS.SQL_MODULES M 
                INNER JOIN SYS.OBJECTS O ON M.OBJECT_ID = O.OBJECT_ID
                WHERE O.TYPE = 'P'";

        /// <summary>
        /// SQL query to load all database triggers.
        /// </summary>
        public const string LoadDatabaseTriggers = @"
                SELECT ((SCHEMA_NAME(O.SCHEMA_ID) )+'.'+ [NAME]) AS 'TriggerName' 
                FROM SYS.SQL_MODULES M 
                INNER JOIN SYS.OBJECTS O ON M.OBJECT_ID = O.OBJECT_ID
                WHERE O.TYPE = 'TR'";

        /// <summary>
        /// SQL query to load all user-defined data types.
        /// </summary>
        public const string LoadUserDefinedDataTypes = @"
                SELECT (SCHEMA_NAME(SCHEMA_ID) +'.'+[NAME]) AS 'UserTypeName' 
                FROM SYS.TYPES
                WHERE IS_USER_DEFINED = 1";

        /// <summary>
        /// SQL query to load all XML schema collections.
        /// </summary>
        public const string LoadXmlSchemaCollections = @"
                SELECT DISTINCT (SCHEMA_NAME(SCHEMA_ID)+'.'+XSC.NAME) AS 'SchemaName' 
                FROM SYS.XML_SCHEMA_COLLECTIONS XSC 
                JOIN SYS.XML_SCHEMA_NAMESPACES XSN  
                ON (XSC.XML_COLLECTION_ID = XSN.XML_COLLECTION_ID)";

        /// <summary>
        /// SQL query to load server properties.
        /// </summary>
        public const string LoadServerProperties = @"
                SELECT 
                    LEFT(@@VERSION, CHARINDEX(' - ', @@VERSION)) AS ProductName,
                    SERVERPROPERTY('ProductMajorVersion') AS ProductMajorVersion,
                    SERVERPROPERTY('ProductBuild') AS ProductBuild,
                    SERVERPROPERTY('InstanceDefaultLogPath') AS InstanceDefaultLogPath,
                    SERVERPROPERTY('Edition') AS Edition,
                    SERVERPROPERTY('BuildClrVersion') AS BuildClrVersion,
                    SERVERPROPERTY('Collation') AS Collation,
                    SERVERPROPERTY('ComputerNamePhysicalNetBIOS') AS ComputerNamePhysicalNetBIOS,
                    CASE
                        WHEN SERVERPROPERTY('EngineEdition') = 1 THEN 'Personal or Desktop Engine'
                        WHEN SERVERPROPERTY('EngineEdition') = 2 THEN 'Standard'
                        WHEN SERVERPROPERTY('EngineEdition') = 3 THEN 'Enterprise'
                        WHEN SERVERPROPERTY('EngineEdition') = 4 THEN 'Express'
                        WHEN SERVERPROPERTY('EngineEdition') = 5 THEN 'SQL Database'
                        WHEN SERVERPROPERTY('EngineEdition') = 6 THEN 'SQL Data Warehouse'
                        WHEN SERVERPROPERTY('EngineEdition') = 8 THEN 'Managed Instance'
                    END AS EngineEdition,
                    @@LANGUAGE AS Language,
                    (SELECT TOP 1 value_data 
                     FROM sys.dm_server_registry 
                     WHERE value_name = 'ObjectName') AS Platform,
                    CASE
                        WHEN SERVERPROPERTY('IsClustered') = 1 THEN 'Clustered'
                        WHEN SERVERPROPERTY('IsClustered') = 0 THEN 'Not Clustered'
                    END AS IsClustered";

        /// <summary>
        /// SQL query to load advanced server settings.
        /// </summary>
        public const string LoadAdvancedServerSettings = @"
                SELECT value_name AS name, 
                       CAST(value_data AS VARCHAR(1000)) AS Value 
                FROM sys.dm_server_registry";

        /// <summary>
        /// SQL query to load all databases excluding system databases.
        /// </summary>
        public const string LoadDatabases = @"
                SELECT name FROM master.dbo.sysdatabases 
                WHERE name NOT IN ('master', 'tempdb', 'model', 'msdb')";

        /// <summary>
        /// SQL query to load database files for a specific database.
        /// </summary>
        public static readonly string LoadDatabaseFiles = @"
                SELECT 
                    MF.NAME AS FileName,
                    CASE MF.type_desc 
                        WHEN 'ROWS' THEN 'DATA' 
                        ELSE MF.type_desc 
                    END AS FileType,
                    MF.physical_name AS FileLocation,
                    MF.size / 128 AS CurrentSizeMB,
                    CASE MF.max_size 
                        WHEN -1 THEN 'Unlimited' 
                        ELSE CONVERT(VARCHAR(20), MF.max_size / 128) 
                    END AS MaxSizeMB,
                    CONVERT(VARCHAR(20), MF.growth) + 
                    CASE MF.is_percent_growth 
                        WHEN 1 THEN ' Percent' 
                        ELSE ' Pages of 8KB' 
                    END AS GrowthType
                FROM 
                    master.sys.master_files MF
                JOIN 
                    master.sys.databases D 
                    ON MF.database_id = D.database_id
                WHERE 
                    D.name = @DatabaseName";

        /// <summary>
        /// SQL query to load view details.
        /// </summary>
        public static readonly string LoadViewDetails = @"
                SELECT 
                    SCHEMA_NAME(o.schema_id) + '.' + o.name AS ViewName,
                    ep.value AS ExtendedProperty
                FROM 
                    sys.extended_properties ep
                INNER JOIN 
                    sys.objects o ON ep.major_id = o.object_id
                WHERE 
                    o.type = 'V'";

        /// <summary>
        /// SQL query to load aggregate functions.
        /// </summary>
        public static readonly string LoadAggregateFunctions = @"
                SELECT SCHEMA_NAME(O.SCHEMA_ID) + '.' + O.NAME AS FunctionName
                FROM SYS.OBJECTS O
                INNER JOIN SYS.SQL_MODULES M ON O.OBJECT_ID = M.OBJECT_ID
                WHERE O.TYPE = 'IF'";

        /// <summary>
        /// SQL query to load scalar functions.
        /// </summary>
        public const string LoadScalarFunctions = @"
                SELECT ((SCHEMA_NAME(O.SCHEMA_ID) )+'.'+ [NAME]) AS 'FunctionName' 
                FROM SYS.SQL_MODULES M 
                INNER JOIN SYS.OBJECTS O ON M.OBJECT_ID = O.OBJECT_ID
                WHERE O.TYPE = 'FN'";

        /// <summary>
        /// SQL query to load table-valued functions.
        /// </summary>
        public const string LoadTableValuedFunctions = @"
                SELECT ((SCHEMA_NAME(O.SCHEMA_ID) )+'.'+ [NAME]) AS 'FunctionName' 
                FROM SYS.SQL_MODULES M 
                INNER JOIN SYS.OBJECTS O ON M.OBJECT_ID = O.OBJECT_ID
                WHERE O.TYPE = 'TF'";

        /// <summary>
        /// SQL query to load storage information.
        /// </summary>
        public const string LoadStorage = @"
                SELECT 
                    fg.name AS FileGroupName,
                    mf.name AS FileName,
                    mf.physical_name AS PhysicalPath,
                    mf.type_desc AS FileType,
                    mf.size / 128 AS SizeMB, 
                    mf.max_size / 128 AS MaxSizeMB,
                    mf.growth / 128 AS GrowthMB
                FROM sys.filegroups fg
                JOIN sys.master_files mf 
                    ON fg.data_space_id = mf.data_space_id";

        /// <summary>
        /// SQL query to load full-text catalogs.
        /// </summary>
        public const string LoadFullTextCatalogs = @"
                SELECT 
                    c.name AS CatalogName, 
                    ISNULL(SCHEMA_NAME(c.principal_id), 'dbo') AS SchemaName, 
                    c.is_default AS IsDefault,
                    c.is_accent_sensitivity_on AS IsAccentSensitive
                FROM sys.fulltext_catalogs c";

        /// <summary>
        /// SQL query to load security information.
        /// </summary>
        public const string LoadSecurity = @"
                SELECT 
                    dp.name AS PrincipalName,
                    dp.type_desc AS PrincipalType,
                    p.permission_name AS PermissionName,
                    p.state_desc AS PermissionState
                FROM sys.database_principals dp
                LEFT JOIN sys.database_permissions p 
                    ON dp.principal_id = p.grantee_principal_id";

        /// <summary>
        /// SQL query to load security users.
        /// </summary>
        public const string LoadSecurityUsers = @"
                SELECT 
                    dp.name AS UserName,
                    dp.type_desc AS UserType,
                    ISNULL(dp.default_schema_name, 'dbo') AS DefaultSchema
                FROM sys.database_principals dp
                WHERE dp.type IN ('S', 'U', 'G', 'C')"; // Filters for users and groups

        /// <summary>
        /// SQL query to get security roles.
        /// </summary>
        public const string GetSecurityRoles = @"
                SELECT 
                    r.name AS RoleName,
                    rl.name AS MemberName
                FROM sys.database_principals r
                LEFT JOIN sys.database_role_members drm 
                    ON r.principal_id = drm.role_principal_id
                LEFT JOIN sys.database_principals rl 
                    ON drm.member_principal_id = rl.principal_id
                WHERE r.type = 'R'"; // Filters only for roles

        /// <summary>
        /// SQL query to get security schemas.
        /// </summary>
        public const string GetSecuritySchemas = @"
                SELECT 
                    s.name AS SchemaName,
                    dp.name AS PrincipalName
                FROM sys.schemas s
                LEFT JOIN sys.database_principals dp 
                    ON s.principal_id = dp.principal_id";
    }
}
