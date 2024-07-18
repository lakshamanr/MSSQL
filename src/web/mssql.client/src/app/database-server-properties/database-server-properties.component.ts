import { Component, OnInit } from '@angular/core';
import { Customer } from '../Model/customer';
import { DatabaseServerProperties } from '../Model/databaseServerProperties/database-server-properties';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SqlServerProperty } from '../Model/databaseServerProperties/sql-server-property';
import { RegistryProperty } from '../Model/databaseServerProperties/registry-property';
import { DatabaseInfo } from '../Model/databaseServerProperties/database-info';
@Component({
  selector: 'app-database-server-properties',
  templateUrl: './database-server-properties.component.html',
  styleUrl: './database-server-properties.component.css', 
 
})
export class DatabaseServerPropertiesComponent implements OnInit { 

  customers!: Customer[];  
  public dataProperties!: DatabaseServerProperties ;
  
  public serverProperties!: SqlServerProperty[]; 
  public databaseInfos!: DatabaseInfo[];
  public  registryProperties!: RegistryProperty[];

  constructor( private http: HttpClient) {

  }

  ngOnInit() {
       this.getdatabaseServerProperties()
  }
  getdatabaseServerProperties()
  {
    this.http.get<DatabaseServerProperties>('MSSQL/GetDatabaserServiceProperties').subscribe(
      (result) => 
        {
        this.dataProperties = result;
        this.serverProperties=this.dataProperties.serverProperties;
        this.registryProperties= this.dataProperties.registryProperties;
        this.databaseInfos =this.dataProperties.databaseInfos;

      },
      (error) => {
        console.error(error);
      }
    );
  }
  }
