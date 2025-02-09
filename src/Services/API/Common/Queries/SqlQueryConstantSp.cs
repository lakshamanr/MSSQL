namespace API.Common.Queries
{
    public static partial class SqlQueryConstantSp
    {
        public static readonly string FetchAllStoredProceduresWithDescriptions =
            @"SELECT ((SCHEMA_NAME(O.SCHEMA_ID) )+'.'+ O.[NAME]) AS 'StoredProcedure', 
                     EP.VALUE AS [ExtendedProperty] 
              FROM SYS.EXTENDED_PROPERTIES EP 
              LEFT JOIN SYS.OBJECTS O ON EP.MAJOR_ID = O.OBJECT_ID   
              WHERE O.TYPE='P' AND CLASS_DESC='OBJECT_OR_COLUMN'      
              UNION 
              SELECT ((SCHEMA_NAME(O.SCHEMA_ID) )+'.'+ O.[NAME]) AS 'StoredProcedure',  
                     '' AS [ExtendedProperty]     
              FROM SYS.OBJECTS O  
              WHERE O.TYPE='P'";

        public static readonly string FetchStoredProcedureDependencies =
            @"SELECT OBJECT_SCHEMA_NAME(referencing_id) + '.' + OBJECT_NAME(referencing_id) AS ReferencingObjectName,     
                     obj.type_desc AS ReferencingObjectType,     
                     referenced_schema_name + '.' + referenced_entity_name AS ReferencedObjectName 
              FROM sys.sql_expression_dependencies AS sed 
              INNER JOIN sys.objects AS obj ON sed.referencing_id = obj.object_id 
              WHERE referencing_id = OBJECT_ID(@StoredProcedureName)";

        public static readonly string FetchStoredProcedureParametersWithDescriptions =
            @"SELECT o.name AS ParameterName,    
                     type_name(user_type_id) AS Type,    
                     max_length AS Length,    
                     CASE WHEN type_name(system_type_id) = 'uniqueidentifier' 
                          THEN precision 
                          ELSE OdbcPrec(system_type_id, max_length, precision) 
                     END AS Precision,    
                     OdbcScale(system_type_id, scale) AS Scale,    
                     parameter_id AS ParameterOrder,    
                     CONVERT(sysname, CASE 
                          WHEN system_type_id IN (35, 99, 167, 175, 231, 239) 
                          THEN ServerProperty('collation') 
                     END) AS Collation,  
                     ep.value AS ExtendedProperty  
              FROM sys.parameters o 
              LEFT JOIN sys.extended_properties EP  
              ON ep.major_id = O.object_id AND ep.minor_id = o.parameter_id 
              WHERE object_id = OBJECT_ID(@StoredProcedureName)";

        public static readonly string FetchStoredProcedureCreateScript =
            @"SELECT SCHEMA_NAME(schema_id) + '.' + [name] AS StoredProcedureName, 
                     object_definition(object_id) AS [ProcedureDefinition] 
              FROM sys.objects 
              WHERE type='P' AND (SCHEMA_NAME(schema_id) + '.' + [name]) = @StoredProcedureName";

        public static readonly string FetchExecutionPlan =
            @"SELECT TOP 1  
                     CAST(qp.query_plan AS VARCHAR(MAX)) AS QueryPlan,      
                     CAST(CP.usecounts AS VARCHAR(1000)) AS UseCounts,        
                     CAST(cp.cacheobjtype AS VARCHAR(100)) AS CacheObjectType,        
                     CAST(cp.size_in_bytes AS VARCHAR(1000)) AS SizeInBytes,         
                     CAST(SQLText.text AS VARCHAR(1000)) AS SQLText  
              FROM sys.dm_exec_cached_plans AS CP  
              CROSS APPLY sys.dm_exec_sql_text(plan_handle) AS SQLText  
              CROSS APPLY sys.dm_exec_query_plan(plan_handle) AS QP  
              WHERE objtype = 'Adhoc' AND cp.cacheobjtype = 'Compiled Plan'";

        public static readonly string FetchStoredProcedureExecutionPlan =
            @"SELECT CAST([qp].[query_plan] AS VARCHAR(MAX)) AS QueryPlan,  
                     '' AS UseCounts, '' AS CacheObjectType, '' AS SizeInBytes, '' AS SQLText  
              FROM [sys].[dm_exec_procedure_stats] AS [ps]       
              JOIN [sys].[dm_exec_query_stats] AS [qs] 
              ON [ps].[plan_handle] = [qs].[plan_handle]       
              CROSS APPLY [sys].[dm_exec_query_plan]([qs].[plan_handle]) AS [qp] 
              WHERE OBJECT_NAME([ps].[object_id], [ps].[database_id]) = @StoredProcedureName";

        public static readonly string FetchStoredProcedureDescription =
            @"SELECT ((SCHEMA_NAME(O.SCHEMA_ID) )+'.'+ O.[NAME]) AS 'StoredProcedure', 
                     ep.value AS ExtendedProperty  
              FROM sys.extended_properties EP 
              LEFT JOIN SYS.OBJECTS O ON ep.major_id = O.object_id  
              WHERE O.TYPE='P' AND class_desc='OBJECT_OR_COLUMN' 
              AND ((SCHEMA_NAME(O.SCHEMA_ID) )+'.'+ O.[NAME]) = @StoredProcedureName";

        public static readonly string UpdateStoredProcedureExtendedProperty =
            @"EXEC sys.sp_updateextendedproperty
                 N'MS_Description',
                 @Description,
                 N'SCHEMA',
                 @SchemaName,
                 N'PROCEDURE',
                 @StoredProcedureName";

        public static readonly string InsertStoredProcedureExtendedProperty =
            @"EXEC sys.sp_addextendedproperty
                 N'MS_Description',
                 @Description,
                 N'SCHEMA',
                 @SchemaName,
                 N'PROCEDURE',
                 @StoredProcedureName";

        public static readonly string UpdateStoredProcedureParameterExtendedProperty =
            @"EXEC sys.sp_updateextendedproperty
                 N'MS_Description',
                 @Description,
                 N'SCHEMA',
                 @SchemaName,
                 N'PROCEDURE',
                 @StoredProcedureName,
                 N'PARAMETER',
                 @ParameterName";

        public static readonly string InsertStoredProcedureParameterExtendedProperty =
            @"EXEC sys.sp_addextendedproperty
                 N'MS_Description',
                 @Description,
                 N'SCHEMA',
                 @SchemaName,
                 N'PROCEDURE',
                 @StoredProcedureName,
                 N'PARAMETER',
                 @ParameterName";

        public static string FetchStoredProcedureParameterDescription= @"
                    SELECT 
                        ep.value AS Description
                    FROM 
                        sys.extended_properties ep
                    JOIN 
                        sys.parameters p ON ep.major_id = p.object_id AND ep.minor_id = p.parameter_id
                    JOIN 
                        sys.objects o ON p.object_id = o.object_id
                    JOIN 
                        sys.schemas s ON o.schema_id = s.schema_id
                    WHERE 
                        ep.name = 'MS_Description'
                        AND s.name = @SchemaName
                        AND o.name = @StoredProcedureName
                        AND p.name = @ParameterName;
                    ";
    }
}
