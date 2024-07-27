export interface TableMetadata {
  columns: TableColumn[];
  createScript: TableCreateScript;
  descriptions: TableDescription[];
  indices: TableIndex[];
  foreignKeys: TableForeignKey[];
  properties: TableProperty[];
  constraint: TableConstraint[];
}

export interface TableCreateScript {
  script: string;
}

export interface TableColumn {
  tableName: string;
  columnName: string;
  key: string;
  identity: string;
  dataType: string;
  maxLength: string;
  allowNulls: string;
  defaultValue: string;
  description: string;
}

export interface TableDescription {
  name: string;
  value: string;
}

export interface TableProperty {
  name: string;
  value: string;
}

export interface TableForeignKey {
  value: string;
  name: string;
  schemaName: string;
  tableName: string;
  columnName: string;
  referencedTable: string;
  referencedColumn: string;
}

export interface TableIndex {
  indexName: string;
  columns: string;
  indexType: string;
  isUnique: string;
  tableView: string;
  objectType: string;
}
export interface TableConstraint {
  table_view: string;
  object_type: string;
  constraint_type: string;
  constraint_name: string;
  details: string;
}
