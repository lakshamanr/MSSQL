export class TableIndex {
    indexName!: string;
    columns!: string;
    indexType!: string;
    unique!: string;
    tableView!: string;
    objectType!: string;

    constructor(data?: any) {
        if (data) {
            this.indexName = data.indexName;
            this.columns = data.columns;
            this.indexType = data.indexType;
            this.unique = data.unique;
            this.tableView = data.tableView;
            this.objectType = data.objectType;
        }
    }
}
