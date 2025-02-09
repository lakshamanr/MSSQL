namespace API.Common.Queries
{
    public static partial class SqlQueryConstant
    {

        /// <summary>
        /// Query to fetch descriptions of all scalar functions.
        /// </summary>
        public const string FetchScalarFunctionDescriptions = @"
        SELECT 
            QUOTENAME(SCHEMA_NAME(O.[schema_id])) + '.' + QUOTENAME(O.[name]) AS FunctionName,
            sep.[value] AS Description
        FROM sys.objects AS O
        LEFT JOIN sys.extended_properties AS sep
            ON O.[object_id] = sep.[major_id]
            AND sep.[name] = 'MS_Description'
        WHERE O.[type] = 'FN';";   

    /// <summary>
    /// Query to fetch descriptions of all table-valued functions.
    /// </summary>
    public const string FetchTableFunctionDescriptions = @"
        SELECT 
            QUOTENAME(SCHEMA_NAME(O.[schema_id])) + '.' + QUOTENAME(O.[name]) AS FunctionName,
            sep.[value] AS Description
        FROM sys.objects AS O
        LEFT JOIN sys.extended_properties AS sep
            ON O.[object_id] = sep.[major_id]
            AND sep.[name] = 'MS_Description'
        WHERE O.[type] = 'TF';";  



        public static string RetrieveFunctionDetails =
            @"SELECT
            CONVERT(varchar(100), [uses_ansi_nulls]) AS [uses_ansi_nulls],
            CONVERT(varchar(100), [uses_quoted_identifier]) AS [uses_quoted_identifier],
            CONVERT(varchar(100), [create_date]) AS [create_date],
            CONVERT(varchar(100), [modify_date]) AS [modify_date],
            CONVERT(varchar(100), O.[name]) AS [name]
        FROM sys.sql_modules AS M
        INNER JOIN sys.objects AS O
            ON M.[object_id] = O.[object_id]
        WHERE
            O.[type] = @function_Type
            AND O.[name] = @function_name;";

        public static string FetchFunctionParametersWithDescriptions =
            @"SELECT
                    p.[name] AS [Parameter_name],
                    TYPE_NAME(p.[user_type_id]) AS [Type],
                    p.[max_length] AS [Length],
                    CASE 
                        WHEN TYPE_NAME(p.[system_type_id]) = 'uniqueidentifier' 
                        THEN p.[precision] 
                        ELSE OdbcPrec(p.[system_type_id], p.[max_length], p.[precision]) 
                    END AS [Prec],
                    OdbcScale(p.[system_type_id], p.[scale]) AS [Scale],
                    p.[parameter_id] AS [Param_order],
                    CONVERT(sysname, 
                        CASE WHEN p.[system_type_id] IN (35, 99, 167, 175, 231, 239)
                        THEN SERVERPROPERTY('collation') END) AS [Collation],
                    COALESCE(sep.[value], '') AS [ExtendedProperty]
                FROM sys.objects AS Obj
                INNER JOIN sys.parameters AS p
                    ON Obj.[object_id] = p.[object_id]
                LEFT JOIN sys.extended_properties AS sep
                    ON p.[object_id] = sep.[major_id]
                    AND p.[parameter_id] = sep.[minor_id]
                    AND sep.[name] = 'MS_Description'  -- Only join if the extended property exists
                WHERE
                    p.[name] IS NOT NULL AND  p.[name] <> '' AND
                    Obj.[type] = @function_Type
                    AND Obj.[object_id] = OBJECT_ID(@function_name);
                ";

        public static string RetrieveFunctionDefinition =
            @"SELECT
            M.[definition]
        FROM sys.sql_modules AS M
        INNER JOIN sys.objects AS Obj
            ON M.[object_id] = Obj.[object_id]
        WHERE
            Obj.[type] = @function_Type
            AND Obj.[object_id] = OBJECT_ID(@function_name);";

        public static string FetchFunctionDependencies =
            @"DECLARE @Dependencies TABLE (
            [name] varchar(100),
            [type] varchar(1000),
            [Updated] varchar(1000),
            [Selected] varchar(1000),
            [column_name] varchar(1000)
        );
        
        INSERT INTO @Dependencies
        EXEC sys.sp_depends @objname = @function_name;
        
        SELECT * FROM @Dependencies;";

        public static readonly string ModifyFunctionDescription =
            @"EXEC sys.sp_updateextendedproperty
            @name = N'MS_Description',
            @value = @fun_value,
            @level0type = N'SCHEMA',
            @level0name = @Schema_Name,
            @level1type = N'FUNCTION',
            @level1name = @FunctionName;";

        public static readonly string AddFunctionDescription =
            @"EXEC sys.sp_addextendedproperty
            @name = N'MS_Description',
            @value = @fun_value,
            @level0type = N'SCHEMA',
            @level0name = @Schema_Name,
            @level1type = N'FUNCTION',
            @level1name = @FunctionName;";
    }
}
