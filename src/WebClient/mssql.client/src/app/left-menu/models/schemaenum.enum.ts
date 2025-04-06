/**
 * Represents schema elements in the order similar to SQL Server Object Explorer.
 */
export const SchemaEnums = {
  /** Represents all databases. */
  Databases: "Databases",

  /** Represents all schemas. */
  Schemas: "Schemas",

  /** Represents a schema. */
  Schema: "Schema",

  /** Represents all tables. */
  Tables: "Tables",

  /** Represents a table. */
  Table: "Table",

  /** Represents table columns. */
  TableColumns: "TableColumns",

  /** Represents all views. */
  Views: "Views",

  /** Represents a view. */
  View: "View",

  /** Represents programmability. */
  Programmability: "Programmability",

  /** Represents a table-valued function. */
  TableValuedFunction: "TableValuedFunction",

  /** Represents all table-valued functions. */
  TableValuedFunctions: "TableValuedFunctions",

  /** Represents a scalar-valued function. */
  ScalarValuedFunction: "ScalarValuedFunction",

  /** Represents all scalar-valued functions. */
  ScalarValuedFunctions: "ScalarValuedFunctions",

  /** Represents an aggregate function. */
  AggregateFunction: "AggregateFunction",

  /** Represents all aggregate functions. */
  AggregateFunctions: "AggregateFunctions",

  /** Represents a stored procedure. */
  StoredProcedure: "StoredProcedure",

  /** Represents all stored procedures. */
  StoredProcedures: "StoredProcedures",

  /** Represents a trigger. */
  Trigger: "Trigger",

  /** Represents all triggers. */
  Triggers: "Triggers",

  /** Represents a user-defined data type. */
  UserDefinedDataType: "UserDefinedDataType",

  /** Represents all user-defined data types. */
  UserDefinedDataTypes: "UserDefinedDataTypes",

  /** Represents an XML schema collection. */
  XmlSchemaCollection: "XmlSchemaCollection",

  /** Represents all XML schema collections. */
  AllXmlSchemaCollections: "XmlSchemaCollections",

  /** Represents all database data types. */
  DatabaseDataTypes: "DatabaseDataTypes",

  /** Represents project information. */
  ProjectInfo: "ProjectInfo",

  /** Represents a database server. */
  DatabaseServer: "DatabaseServer"
} as const;

// Optional: export the type
export type SchemaEnumType = (typeof SchemaEnums)[keyof typeof SchemaEnums];
