namespace API.Domain.LeftMenu
{
  /// <summary>
  /// Represents schema elements in the order similar to SQL Server Object Explorer.
  /// </summary>
  public enum SchemaEnums
  {
    // High-level nodes
    AllDatabase,
    Database,
    AllDatabaseServer,
    DatabaseServer,

    // Inside a database
    AllSchema,
    Schema,

    // Tables and related
    AllTable,
    Table,
    TableCoumns,

    // Views
    AllViews,
    Views,

    // Programmability section
    Programmability,
    AllProgrammability,

    // Functions (inside Programmability)
    AllFunctions,
    TableValueFunction,
    AllTableValueFunction,
    ScalarValueFunctions,
    AllScalarValueFunctions,
    AggregateFunciton,
    AllAggregateFunciton,

    // Stored Procedures
    Storeprocedure,
    AllStoreprocedure,

    // Triggers
    Triggers,
    AllTriggers,

    // Types
    UserDefinedDataType,
    AllUserDefinedDataType,
    XMLSchemaCollection,
    AllXMLSchemaCollection,
    AllDatabaseDataTypes,

    // Misc
    ProjectInfo
  }
}
