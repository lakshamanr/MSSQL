export class TableForeignKey {
    value!: string;
    fkName!: string;
    schemaName!: string;
    table!: string;
    column!: string;
    referencedTable!: string;
    referencedColumn!: string;

    constructor(data?: any) {
        if (data) {
            this.value = data.value;
            this.fkName = data.fkName;
            this.schemaName = data.schemaName;
            this.table = data.table;
            this.column = data.column;
            this.referencedTable = data.referencedTable;
            this.referencedColumn = data.referencedColumn;
        }
    }
}
