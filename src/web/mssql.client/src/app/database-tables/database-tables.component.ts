import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Model/customer';  
import { TableProperty } from '../Model/databaseTable/table-metadata.models';
@Component({
  selector: 'app-database-tables',
  templateUrl: './database-tables.component.html',
  styleUrl: './database-tables.component.css'
})
export class DatabaseTablesComponent implements OnInit
{
  
  customers!: Customer[];
  tblProperties!: TableProperty[];
  constructor(private http: HttpClient)
   {

   }
   ngOnInit() {
     this.http.get<TableProperty[]>("MSSQL/GetTableDetails").subscribe(
       (result) => {

         this.tblProperties = result;
       },
       (error) => {
         console.error(error);
       }
     ); 
}
}
 
