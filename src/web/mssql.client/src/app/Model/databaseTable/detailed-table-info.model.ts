import { TableColumnInfo } from './table-columns.model';
import { TableCreateScript } from './table-create-script.model';
import { TableDescription } from './table-description.model';
import { TableIndex } from './table-index.model';
import { TableForeignKey } from './table-foreign-key.model';

export class DetailedTableInfo {
    tableInfos!: TableColumnInfo[];
    tableCreateScript!: TableCreateScript;
    tableDescriptions!: TableDescription[];
    tableIndices!: TableIndex[];
    tableForeignKeys!: TableForeignKey[];

    constructor(data?: any) {
        if (data) {
            this.tableInfos = data.tableInfos.map((info: any) => new TableColumnInfo(info));
            this.tableCreateScript = new TableCreateScript(data.tableCreateScript);
            this.tableDescriptions = data.tableDescriptions.map((desc: any) => new TableDescription(desc));
            this.tableIndices = data.tableIndices.map((index: any) => new TableIndex(index));
            this.tableForeignKeys = data.tableForeignKeys.map((key: any) => new TableForeignKey(key));
        }
    }
}