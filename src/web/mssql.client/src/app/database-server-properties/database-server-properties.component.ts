import { Component, OnInit } from '@angular/core';
import { Customer } from '../Model/customer';
import { ServerPropertiesService } from '../Service/DatabaseServerProperties/server-properties.service';
import { DatabaseServerProperties } from '../Model/databaseServerProperties/database-server-properties';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-database-server-properties',
  templateUrl: './database-server-properties.component.html',
  styleUrl: './database-server-properties.component.css', 
  providers:  [ ServerPropertiesService ]
})
export class DatabaseServerPropertiesComponent implements OnInit { 

  customers!: Customer[]; 
 // dataProperties: DatabaseServerProperties | undefined;  // Corrected property name and added $ suffix for observable
  public dataProperties: DatabaseServerProperties | undefined;
  constructor(private serverPropertiesService: ServerPropertiesService, private http: HttpClient) {}

  ngOnInit() {
    //this.dataProperties = this.serverPropertiesService.getSqlServerProperties();  // Corrected method name and service call
    this.getdatabaseServerProperties()
  }
  getdatabaseServerProperties()
  {
    this.http.get<DatabaseServerProperties>('MSSQL/GetDatabaserServiceProperties').subscribe(
      (result) => {
        this.dataProperties = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  }
