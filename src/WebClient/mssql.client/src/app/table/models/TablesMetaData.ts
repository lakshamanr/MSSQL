import { TableColumn } from './TableColumn'; 

export class TablesMetadata {
  tableName: string;
  name: string;
  value: string;
  level: string;
  columnName: string;
  tableColumns: TableColumn[];
  extendedPropertyName: string;
  extendedPropertyValue: string;

  constructor(
      tableName: string,
      name: string,
      value: string,
      level: string,
      columnName: string,
      tableColumns: TableColumn[] = [],
      extendedPropertyName: string = '',
      extendedPropertyValue: string = ''
  ) {
      this.tableName = tableName;
      this.name = name;
      this.value = value;
      this.level = level;
      this.columnName = columnName;
      this.tableColumns = tableColumns;
      this.extendedPropertyName = extendedPropertyName;
      this.extendedPropertyValue = extendedPropertyValue;
  }
}
