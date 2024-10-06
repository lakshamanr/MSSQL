export interface TableForeignKey {
    value: string;
    name: string;
    schemaName: string;
    tableName: string;
    columnName: string;
    referencedTable: string;
    referencedColumn: string;
}
