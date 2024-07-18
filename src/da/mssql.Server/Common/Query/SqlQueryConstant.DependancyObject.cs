using static System.Net.Mime.MediaTypeNames;

namespace MSSQL.DIARY.COMN.Constant
{
    public static partial class SqlQueryConstant
    {
        public static readonly string ObjectThatDependsOn =
          @"CREATE TABLE #references 
          ( 
              thepath           VARCHAR(max), 
              thefullentityname VARCHAR(200), 
              thetype           VARCHAR(20), 
              iteration         INT 
          ) 
          CREATE TABLE #databasedependencies 
          ( 
              entityname        VARCHAR(200), 
              entitytype        CHAR(5), 
              dependencytype    CHAR(4), 
              thereferredentity VARCHAR(200), 
              thereferredtype   CHAR(5) 
          ) 
          INSERT INTO #databasedependencies 
                      (entityname, 
                       entitytype, 
                       dependencytype, 
                       thereferredentity, 
                       thereferredtype)  
          SELECT Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type, 
                 'hard', 
                 ty.NAME, 
                 'UDT' 
          FROM   sys.objects o 
                 INNER JOIN sys.columns AS c 
                         ON c.object_id = o.object_id 
                 INNER JOIN sys.types ty 
                         ON ty.user_type_id = c.user_type_id 
          WHERE  is_user_defined = 1 
          UNION ALL  
          SELECT Object_schema_name(tt.type_table_object_id) 
                 + '.' + tt.NAME, 
                 'UDTT', 
                 'hard', 
                 ty.NAME, 
                 'UDT' 
          FROM   sys.table_types tt 
                 INNER JOIN sys.columns AS c 
                         ON c.object_id = tt.type_table_object_id 
                 INNER JOIN sys.types ty 
                         ON ty.user_type_id = c.user_type_id 
          WHERE  ty.is_user_defined = 1 
          UNION ALL  
          SELECT Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type, 
                 'hard', 
                 Object_schema_name(t.object_id) + '.' + t.NAME, 
                 t.type 
          FROM   sys.objects t 
                 INNER JOIN sys.objects AS o 
                         ON o.parent_object_id = t.object_id 
          WHERE  o.type = 'TR' 
          UNION ALL  
          SELECT Object_schema_name(clmns.object_id) + '.' 
                 + Object_name(clmns.object_id), 
                 'U', 
                 'hard', 
                 Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type 
          FROM   sys.objects o 
                 INNER JOIN sys.columns AS clmns 
                         ON clmns.default_object_id = o.object_id 
          WHERE  o.parent_object_id = 0 
          UNION ALL  
          SELECT types.NAME, 
                 'UDT', 
                 'hard', 
                 Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type 
          FROM   sys.objects o 
                 INNER JOIN sys.types AS types 
                         ON types.default_object_id = o.object_id 
          WHERE  o.parent_object_id = 0 
          UNION ALL  
          SELECT Object_schema_name(clmns.object_id) + '.' 
                 + Object_name(clmns.object_id), 
                 'U', 
                 'hard', 
                 Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type 
          FROM   sys.objects o 
                 INNER JOIN sys.columns AS clmns 
                         ON clmns.rule_object_id = o.object_id 
          UNION ALL  
          SELECT types.NAME, 
                 'UDT', 
                 'hard', 
                 Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type 
          FROM   sys.objects o 
                 INNER JOIN sys.types AS types 
                         ON types.rule_object_id = o.object_id 
          UNION ALL  
          SELECT Object_schema_name(clmns.object_id) + '.' 
                 + Object_name(clmns.object_id), 
                 'U', 
                 'hard', 
                 xml_schema_collections.NAME, 
                 'XMLC' 
          FROM   sys.columns clmns 
                  INNER JOIN sys.xml_schema_collections 
                         ON xml_schema_collections.xml_collection_id = 
                            clmns.xml_collection_id 
          UNION ALL  
          SELECT Object_schema_name(clmns.object_id) + '.' 
                 + Object_name(clmns.object_id), 
                 'UDTT', 
                 'hard', 
                 xml_schema_collections.NAME, 
                 'XMLC' 
          FROM   sys.columns AS clmns 
                 INNER JOIN sys.table_types AS tt 
                         ON tt.type_table_object_id = clmns.object_id 
                 INNER JOIN sys.xml_schema_collections 
                         ON xml_schema_collections.xml_collection_id = 
                            clmns.xml_collection_id 
          UNION ALL  
          SELECT Object_schema_name(params.object_id) + '.' 
                 + o.NAME, 
                 o.type, 
                 'hard', 
                 xml_schema_collections.NAME, 
                 'XMLC' 
          FROM   sys.parameters AS params 
                 INNER JOIN sys.xml_schema_collections 
                         ON xml_schema_collections.xml_collection_id = 
                            params.xml_collection_id 
                 INNER JOIN sys.objects o 
                         ON o.object_id = params.object_id 
          UNION ALL  
          SELECT Object_schema_name(tbl.object_id) + '.' 
                 + tbl.NAME, 
                 tbl.type, 
                 'hard', 
                 Object_schema_name(referenced_object_id) 
                 + '.' + Object_name(referenced_object_id), 
                 'U' 
          FROM   sys.foreign_keys AS fk 
                 INNER JOIN sys.tables AS tbl 
                         ON tbl.object_id = fk.parent_object_id 
          UNION ALL  
          SELECT Object_schema_name(params.object_id) + '.' 
                 + o.NAME, 
                 o.type, 
                 'hard', 
                 types.NAME, 
                 'UDT' 
          FROM   sys.parameters AS params 
                 INNER JOIN sys.types 
                         ON types.user_type_id = params.user_type_id 
                 INNER JOIN sys.objects o 
                         ON o.object_id = params.object_id 
          WHERE  is_user_defined <> 0 
          UNION ALL  
          SELECT Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type, 
                 'hard', 
                 ps.NAME, 
                 'PS' 
          FROM   sys.indexes AS idx 
                 INNER JOIN sys.partitions p 
                         ON idx.object_id = p.object_id 
                            AND idx.index_id = p.index_id 
                 INNER JOIN sys.partition_schemes ps 
                         ON idx.data_space_id = ps.data_space_id 
                 INNER JOIN sys.objects AS o 
                         ON o.object_id = idx.object_id 
          UNION ALL  
          SELECT ps.NAME, 
                 'PS', 
                 'hard', 
                 Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type 
          FROM   sys.partition_schemes ps 
                 INNER JOIN sys.objects AS o 
                         ON ps.function_id = o.object_id 
          UNION ALL  
          SELECT pg.NAME, 
                 'PG', 
                 'hard', 
                 Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type 
          FROM   sys.objects o 
                 INNER JOIN sys.plan_guides AS pg 
                         ON pg.scope_object_id = o.object_id 
          UNION ALL  
          SELECT s.NAME, 
                 'SYN', 
                 'hard', 
                 Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type 
          FROM   sys.objects o 
                 INNER JOIN sys.synonyms AS s 
                         ON Object_id(s.base_object_name) = o.object_id 
          UNION ALL  
          SELECT s.NAME, 
                 'SYN', 
                 'hard', 
                 Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type 
          FROM   sys.objects o 
                 INNER JOIN sys.sequences AS s 
                         ON s.user_type_id = o.object_id 
          UNION ALL 
          SELECT DISTINCT COALESCE(Object_schema_name(referencing_id) + '.', '') 
                          + Object_name(referencing_id), 
                          referencer.type, 
                          'soft', 
                          COALESCE(referenced_schema_name + '.', '') 
                          + 
                          COALESCE(referenced_entity_name, ''), 
                          referenced.type 
          FROM   sys.sql_expression_dependencies 
                 INNER JOIN sys.objects referencer 
                         ON referencing_id = referencer.object_id 
                 INNER JOIN sys.objects referenced 
                         ON referenced_id = referenced.object_id 
          WHERE  referencing_class = 1 
                 AND referenced_class = 1 
                 AND referencer.type IN ( 'v', 'tf', 'fn', 'p', 
                                          'tr', 'u' ) 
          DECLARE @RowCount INT 
          DECLARE @ii INT  
          INSERT INTO #references 
                      (thepath, 
                       thefullentityname, 
                       thetype, 
                       iteration) 
          SELECT COALESCE(Object_schema_name(object_id) + '.', '') 
                 + NAME, 
                 COALESCE(Object_schema_name(object_id) + '.', '') 
                 + NAME, 
                 type, 
                 1 
          FROM   sys.objects 
          WHERE  NAME LIKE @ObjectName  
          SELECT @rowcount = @@ROWCOUNT, 
                 @ii = 2 
          IF 0 <> 0 
          WHILE @ii < 20 
                 AND @rowcount > 0 
          BEGIN 
              INSERT INTO #references 
                          (thepath, 
                           thefullentityname, 
                           thetype, 
                           iteration) 
              SELECT DISTINCT thepath + '/' + thereferredentity, 
                              thereferredentity, 
                              thereferredtype, 
                              @ii 
              FROM   #references 
                     INNER JOIN #databasedependencies 
                             ON thereferredentity = entityname 
              WHERE  iteration = @ii - 1 
                     AND @ii < 20 
              SELECT @rowcount = @@ROWCOUNT, 
                     @ii = @ii + 1 
          END 
          SELECT DISTINCT thepath, 
                          thefullentityname, 
                          thetype 
          FROM   #references 
          ORDER  BY thepath 
          DROP TABLE #databasedependencies 
          DROP TABLE #references";

        public static readonly string ObjectOnWhichDepends =
            @"CREATE TABLE #references 
          ( 
              thepath           VARCHAR(max), 
              thefullentityname VARCHAR(200), 
              thetype           VARCHAR(20), 
              iteration         INT 
          ) 
          CREATE TABLE #databasedependencies 
          ( 
              entityname        VARCHAR(200), 
              entitytype        CHAR(5), 
              dependencytype    CHAR(4), 
              thereferredentity VARCHAR(200), 
              thereferredtype   CHAR(5) 
          ) 
          INSERT INTO #databasedependencies 
                      (entityname, 
                       entitytype, 
                       dependencytype, 
                       thereferredentity, 
                       thereferredtype)  
          SELECT Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type, 
                 'hard', 
                 ty.NAME, 
                 'UDT' 
          FROM   sys.objects o 
                 INNER JOIN sys.columns AS c 
                         ON c.object_id = o.object_id 
                 INNER JOIN sys.types ty 
                         ON ty.user_type_id = c.user_type_id 
          WHERE  is_user_defined = 1 
          UNION ALL  
          SELECT Object_schema_name(tt.type_table_object_id) 
                 + '.' + tt.NAME, 
                 'UDTT', 
                 'hard', 
                 ty.NAME, 
                 'UDT' 
          FROM   sys.table_types tt 
                 INNER JOIN sys.columns AS c 
                         ON c.object_id = tt.type_table_object_id 
                 INNER JOIN sys.types ty 
                         ON ty.user_type_id = c.user_type_id 
          WHERE  ty.is_user_defined = 1 
          UNION ALL  
          SELECT Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type, 
                 'hard', 
                 Object_schema_name(t.object_id) + '.' + t.NAME, 
                 t.type 
          FROM   sys.objects t 
                 INNER JOIN sys.objects AS o 
                         ON o.parent_object_id = t.object_id 
          WHERE  o.type = 'TR' 
          UNION ALL  
          SELECT Object_schema_name(clmns.object_id) + '.' 
                 + Object_name(clmns.object_id), 
                 'U', 
                 'hard', 
                 Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type 
          FROM   sys.objects o 
                 INNER JOIN sys.columns AS clmns 
                         ON clmns.default_object_id = o.object_id 
          WHERE  o.parent_object_id = 0 
          UNION ALL  
          SELECT types.NAME, 
                 'UDT', 
                 'hard', 
                 Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type 
          FROM   sys.objects o 
                 INNER JOIN sys.types AS types 
                         ON types.default_object_id = o.object_id 
          WHERE  o.parent_object_id = 0 
          UNION ALL  
          SELECT Object_schema_name(clmns.object_id) + '.' 
                 + Object_name(clmns.object_id), 
                 'U', 
                 'hard', 
                 Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type 
          FROM   sys.objects o 
                 INNER JOIN sys.columns AS clmns 
                         ON clmns.rule_object_id = o.object_id 
          UNION ALL  
          SELECT types.NAME, 
                 'UDT', 
                 'hard', 
                 Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type 
          FROM   sys.objects o 
                 INNER JOIN sys.types AS types 
                         ON types.rule_object_id = o.object_id 
          UNION ALL  
          SELECT Object_schema_name(clmns.object_id) + '.' 
                 + Object_name(clmns.object_id), 
                 'U', 
                 'hard', 
                 xml_schema_collections.NAME, 
                 'XMLC' 
          FROM   sys.columns clmns 
                  INNER JOIN sys.xml_schema_collections 
                         ON xml_schema_collections.xml_collection_id = 
                            clmns.xml_collection_id 
          UNION ALL  
          SELECT Object_schema_name(clmns.object_id) + '.' 
                 + Object_name(clmns.object_id), 
                 'UDTT', 
                 'hard', 
                 xml_schema_collections.NAME, 
                 'XMLC' 
          FROM   sys.columns AS clmns 
                 INNER JOIN sys.table_types AS tt 
                         ON tt.type_table_object_id = clmns.object_id 
                 INNER JOIN sys.xml_schema_collections 
                         ON xml_schema_collections.xml_collection_id = 
                            clmns.xml_collection_id 
          UNION ALL  
          SELECT Object_schema_name(params.object_id) + '.' 
                 + o.NAME, 
                 o.type, 
                 'hard', 
                 xml_schema_collections.NAME, 
                 'XMLC' 
          FROM   sys.parameters AS params 
                 INNER JOIN sys.xml_schema_collections 
                         ON xml_schema_collections.xml_collection_id = 
                            params.xml_collection_id 
                 INNER JOIN sys.objects o 
                         ON o.object_id = params.object_id 
          UNION ALL  
          SELECT Object_schema_name(tbl.object_id) + '.' 
                 + tbl.NAME, 
                 tbl.type, 
                 'hard', 
                 Object_schema_name(referenced_object_id) 
                 + '.' + Object_name(referenced_object_id), 
                 'U' 
          FROM   sys.foreign_keys AS fk 
                 INNER JOIN sys.tables AS tbl 
                         ON tbl.object_id = fk.parent_object_id 
          UNION ALL  
          SELECT Object_schema_name(params.object_id) + '.' 
                 + o.NAME, 
                 o.type, 
                 'hard', 
                 types.NAME, 
                 'UDT' 
          FROM   sys.parameters AS params 
                 INNER JOIN sys.types 
                         ON types.user_type_id = params.user_type_id 
                 INNER JOIN sys.objects o 
                         ON o.object_id = params.object_id 
          WHERE  is_user_defined <> 0 
          UNION ALL  
          SELECT Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type, 
                 'hard', 
                 ps.NAME, 
                 'PS' 
          FROM   sys.indexes AS idx 
                 INNER JOIN sys.partitions p 
                         ON idx.object_id = p.object_id 
                            AND idx.index_id = p.index_id 
                 INNER JOIN sys.partition_schemes ps 
                         ON idx.data_space_id = ps.data_space_id 
                 INNER JOIN sys.objects AS o 
                         ON o.object_id = idx.object_id 
          UNION ALL  
          SELECT ps.NAME, 
                 'PS', 
                 'hard', 
                 Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type 
          FROM   sys.partition_schemes ps 
                 INNER JOIN sys.objects AS o 
                         ON ps.function_id = o.object_id 
          UNION ALL  
          SELECT pg.NAME, 
                 'PG', 
                 'hard', 
                 Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type 
          FROM   sys.objects o 
                 INNER JOIN sys.plan_guides AS pg 
                         ON pg.scope_object_id = o.object_id 
          UNION ALL  
          SELECT s.NAME, 
                 'SYN', 
                 'hard', 
                 Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type 
          FROM   sys.objects o 
                 INNER JOIN sys.synonyms AS s 
                         ON Object_id(s.base_object_name) = o.object_id 
          UNION ALL  
          SELECT s.NAME, 
                 'SYN', 
                 'hard', 
                 Object_schema_name(o.object_id) + '.' + o.NAME, 
                 o.type 
          FROM   sys.objects o 
                 INNER JOIN sys.sequences AS s 
                         ON s.user_type_id = o.object_id 
          UNION ALL 
          SELECT DISTINCT COALESCE(Object_schema_name(referencing_id) + '.', '') 
                          + Object_name(referencing_id), 
                          referencer.type, 
                          'soft', 
                          COALESCE(referenced_schema_name + '.', '') 
                          + 
                          COALESCE(referenced_entity_name, ''), 
                          referenced.type 
          FROM   sys.sql_expression_dependencies 
                 INNER JOIN sys.objects referencer 
                         ON referencing_id = referencer.object_id 
                 INNER JOIN sys.objects referenced 
                         ON referenced_id = referenced.object_id 
          WHERE  referencing_class = 1 
                 AND referenced_class = 1 
                 AND referencer.type IN ( 'v', 'tf', 'fn', 'p', 
                                          'tr', 'u' ) 
          DECLARE @RowCount INT 
          DECLARE @ii INT  
          INSERT INTO #references 
                      (thepath, 
                       thefullentityname, 
                       thetype, 
                       iteration) 
          SELECT COALESCE(Object_schema_name(object_id) + '.', '') 
                 + NAME, 
                 COALESCE(Object_schema_name(object_id) + '.', '') 
                 + NAME, 
                 type, 
                 1 
          FROM   sys.objects 
          WHERE  NAME LIKE @ObjectName  
          SELECT @rowcount = @@ROWCOUNT, 
                 @ii = 1 
          WHILE @rowcount > 0 
            BEGIN 
                INSERT INTO #references 
                            (thepath, 
                             thefullentityname, 
                             thetype, 
                             iteration) 
                SELECT r.thepath + '->' + COALESCE(Object_schema_name(d.object_id) 
                                                   + '.', '') 
                       + d.NAME, 
                       COALESCE(Object_schema_name(d.object_id) + '.', '') 
                       + d.NAME, 
                       d.type, 
                       @ii + 1 
                FROM   #references r 
                       INNER JOIN sys.sql_expression_dependencies e 
                               ON r.thefullentityname = 
                                  COALESCE(e.referenced_schema_name + 
                                           '.', '') 
                                  + COALESCE(e.referenced_entity_name, '') 
                       INNER JOIN sys.objects d 
                               ON d.object_id = e.referencing_id 
                WHERE  iteration = @ii 
                       AND d.type IN ( 'v', 'tr', 'fn', 'p' ) 
                UNION ALL  
                SELECT r.thepath + '->' + 
                       COALESCE(Object_schema_name(referencing_id) + '.', '') 
                       + Object_name(referencing_id), 
                       COALESCE(Object_schema_name(referencing_id) + '.', '') 
                       + Object_name(referencing_id), 
                       referencer.type, 
                       @ii + 1 
                FROM   #references r 
                       INNER JOIN sys.sql_expression_dependencies 
                               ON COALESCE(Object_schema_name(object_id) 
                                           + '.', '') 
                                  + NAME = 
                                  COALESCE(referenced_schema_name + '.', '') 
                                  + COALESCE(referenced_entity_name, '') 
                       INNER JOIN sys.objects referencer 
                               ON referencing_id = referencer.object_id 
                WHERE  iteration = @ii 
                       AND referencer.type IN ( 'v', 'tf', 'fn', 'p', 
                                                'tr', 'u' ) 
                UNION ALL  
                SELECT r.thepath + '->' + 
                       COALESCE(Object_schema_name(d.object_id) + '.', '') 
                       + d.NAME, 
                       COALESCE(Object_schema_name(d.object_id) + '.', '') 
                       + d.NAME, 
                       d.type, 
                       @ii + 1 
                FROM   #references r 
                       INNER JOIN sys.sql_expression_dependencies e 
                               ON r.thefullentityname = 
                                  COALESCE(Object_schema_name(e.referencing_id) 
                                           + '.', '') 
                                  + Object_name(referencing_id) 
                       INNER JOIN sys.objects d 
                               ON d.object_id = e.referenced_id 
                WHERE  iteration = @ii 
                       AND r.thetype = 'SYN' 
                       AND d.type NOT IN ( 'u', 'v', 'p', 'fn', 'tr', 
                                           'tf' ) 
                UNION ALL  
                SELECT r.thepath + '->' + 
                       COALESCE(Object_schema_name(d.object_id) + '.', '') 
                       + d.NAME, 
                       COALESCE(Object_schema_name(d.object_id) + '.', '') 
                       + d.NAME, 
                       d.type, 
                       @ii + 1 
                FROM   #references r 
                       INNER JOIN sys.sql_expression_dependencies e 
                               ON r.thefullentityname = 
                                  COALESCE(Object_schema_name(e.referencing_id) 
                                           + '.', '') 
                                  + Object_name(referencing_id) 
                       INNER JOIN sys.objects d 
                               ON d.object_id = e.referenced_id 
                WHERE  iteration = @ii 
                       AND r.thetype = 'PS' 
                       AND d.type NOT IN ( 'u', 'v', 'p', 'fn', 'tr', 
                                           'tf' ) 
                SELECT @rowcount = @@ROWCOUNT, 
                       @ii = @ii + 1 
            END 
          SELECT DISTINCT thepath, 
                          thefullentityname, 
                          thetype 
          FROM   #references 
          ORDER  BY thepath 
          DROP TABLE #databasedependencies 
          DROP TABLE #references";
    }
}