export class ColumnInfo {
  columnName: string;

  constructor(data: any) {
    this.columnName = data.columnName || '';
  }
}
