import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { TableColumn, TableCreateScript, TableDescription, TableForeignKey, TableIndex, TableMetadata, TableProperty } from '../Model/databaseTable/table-metadata.models';
@Component({
  selector: 'app-database-table',
  templateUrl: './database-table.component.html',
  styleUrl: './database-table.component.css'
})
export class DatabaseTableComponent {
 
  columns!: TableColumn[];
  createScript!: TableCreateScript;
  descriptions!: TableDescription[];
  indices!: TableIndex[];
  foreignKeys!: TableForeignKey[];
  properties!: TableProperty[];

  constructor(private http: HttpClient)
   {

   }
   ngOnInit() {
     this.http.get<TableMetadata>("MSSQL/GetTableMetaData?tableName=HumanResources.Department").subscribe(
      (result) => 
       {
          this.descriptions = result.descriptions;  
          this.columns=result.columns;
          this.createScript=result.createScript;
          this.indices=result.indices;
          this.foreignKeys=result.foreignKeys
          this.properties =result.properties;

      },
      (error) => {
        console.error(error);
      }
     );

      
  }
  
}
