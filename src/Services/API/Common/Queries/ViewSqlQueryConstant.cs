namespace API.Common.Queries
{

    public class ViewSqlQueryConstant
    {
        public static readonly string GetAllViewsDetailsWithMsDesc =
        @"SELECT SCHEMA_NAME(O.SCHEMA_ID) + '.' + O.[NAME] AS 'ViewName', ep.value AS ViewExtendedProperties
          FROM sys.extended_properties EP
          INNER JOIN SYS.OBJECTS O ON ep.major_id = O.object_id
          WHERE O.TYPE = 'V'";

        public static readonly string GetViewProperties =
            @"SELECT CAST(uses_ansi_nulls AS VARCHAR(1)) AS uses_ansi_nulls,
                 CAST(uses_quoted_identifier AS VARCHAR(1)) AS uses_quoted_identifier,
                 CAST(create_date AS VARCHAR(100)) AS create_date,
                 CAST(modify_date AS VARCHAR(100)) AS modify_date
          FROM sys.views vs
          INNER JOIN sys.sql_modules sqlM ON vs.object_id = sqlM.object_id
          WHERE vs.object_id = OBJECT_ID(@viewname)";

        public static readonly string GetViewColumns =
            @"SELECT 
                  (s.[name]+'.'+  v.[name]) AS ViewName,
				  c.[name] AS ColumnName,
				  c.column_id AS ColumnOrder,
				  t.[name] AS DataType,
				  c.max_length AS MaxLength,
				  c.precision,
				  c.scale
                FROM sys.views v
                JOIN sys.schemas s ON v.schema_id = s.schema_id
                JOIN sys.columns c ON v.object_id = c.object_id
                JOIN sys.types t ON c.user_type_id = t.user_type_id
                where (s.[name]+'.'+v.[name])=@viewname 
            ";

        public static readonly string GetViewCreateScript =
            @"select sqlM.definition as createViewScript FROM  sys.views vs inner join sys.sql_modules  
sqlM ON vs.object_id=sqlM.object_id where sqlM.object_id=OBJECT_ID(@viewname)";

        public static readonly string GetViewDependencies =
            @"
                SELECT  distinct  referenced_entity_name as  [name], is_updated as updated , is_select_all as selected ,referenced_entity_name as column_name,
                 (referenced_entity_name+'.'+ referenced_entity_name)AS FullReferenceName
                FROM sys.dm_sql_referenced_entities( @viewName, 'OBJECT');
                ";
    }
}
