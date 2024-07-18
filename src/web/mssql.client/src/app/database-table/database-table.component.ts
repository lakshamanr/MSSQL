import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Model/customer';
import { DetailedTableInfo } from '../Model/databaseTable/detailed-table-info.model';
import { TableColumnInfo } from '../Model/databaseTable/table-columns.model';
import { TableCreateScript } from '../Model/databaseTable/table-create-script.model';
import { TableDescription } from '../Model/databaseTable/table-description.model';
import { TableIndex } from '../Model/databaseTable/table-index.model';
import { TableForeignKey } from '../Model/databaseTable/table-foreign-key.model';
import { TableProperties } from '../Model/databaseTable/table-properties.model';
@Component({
  selector: 'app-database-table',
  templateUrl: './database-table.component.html',
  styleUrl: './database-table.component.css'
})
export class DatabaseTableComponent {

  public customers!: Customer[]; 
  public tableInfos!: TableColumnInfo[];
  public tableCreateScript!: TableCreateScript;
  public tableDescriptions!: TableDescription[];
  public tableIndices!: TableIndex[];
  public tableForeignKeys!: TableForeignKey[];
  public tableProperties !: TableProperties[];

  constructor(private http: HttpClient)
   {

   }
   ngOnInit() {
     this.http.get<DetailedTableInfo>("MSSQL/GetDetailedTableInfo?tableName=HumanResources.Department").subscribe(
      (result) => 
       {
         this.tableDescriptions = result.tableDescriptions; 
         this.tableProperties = result.tableProperties;
          this.tableInfos=result.tableInfos;
          this.tableCreateScript=result.tableCreateScript;
          this.tableIndices=result.tableIndices;
          this.tableForeignKeys=result.tableForeignKeys

      },
      (error) => {
        console.error(error);
      }
     );

     this.http.get<TableProperties[]>("MSSQL/GetDetailedTableProperties?tableName=HumanResources.Department").subscribe(
       (result) => { 
         this.tableProperties = result; 

       },
       (error) => {
         console.error(error);
       }
     );
  }
  
}
