export class TableColumnInfo 
{
    public tableName!: string;
    public columnName !: string;
    public key !: string;
    public identity !: string;
    public dataType !: string;
    public maxLength !: string;
    public allowNulls !: string;
    public default !: string;
    public description !: string; 

    constructor(data?: any) 
    {
        if (data) {
            this.tableName = data.TableName;
            this.columnName = data.ColumnName;
            this.key = data.Key;
            this.identity = data.Identity;
            this.dataType = data.DataType;
            this.maxLength = data.MaxLength;
            this.allowNulls = data.AllowNulls;
            this.default = data.Default;
            this.description = data.Description;
        }
}}
