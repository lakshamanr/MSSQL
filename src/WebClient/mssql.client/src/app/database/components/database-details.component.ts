import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { DbXmlSchema } from '../models/DbXmlSchema';
import { DatabaseInfo } from '../models/DatabaseInfo';
import { ProcedureInfo } from '../models/ProcedureInfo';
import { FunctionInfo } from '../models/FunctionInfo';
import { ServerProperty } from '../models/ServerProperty';
import { TriggerInfo } from '../models/TriggerInfo';
import { UserType } from '../models/UserType';
import { ServerMetaData as DatabaseMetaData } from '../models/DatabaseMetaData';
import { DatabaseFile } from '../models/DatabaseFile';
import { ViewMetadata } from '../models/ViewMetadata';
import { TablesMetadata } from '../../table/models/TablesMetaData';

@Component({
  selector: 'app-database-details',
  templateUrl: './database-details.component.html',
  styleUrls: ['./database-details.component.css']
})
export class DatabaseDetailsComponent implements OnInit {

  constructor(private http: HttpClient, @Inject('API_URL') private primaryUrl: string,
    @Inject('ANOTHER_URL') private secondaryUrl: string) { }

  dbXmlSchemas: DbXmlSchema[];
  currentDatabaseName: string;
  databaseInfos: DatabaseInfo[];
  databaseServerName: string;
  procedureInfos: ProcedureInfo[];
  scalarFunctionInfos: FunctionInfo[];
  serverAdvanceProperties: ServerProperty[];
  serverProperties: ServerProperty[];
  triggerInfos: TriggerInfo[];
  tableFunctionInfos: FunctionInfo[];
  userTypes: UserType[];
  serverMetaData: DatabaseMetaData;
  fileInformations: DatabaseFile[];
  viewMetadata: ViewMetadata[];
  tablesMetadata: TablesMetadata[];
  ngOnInit()
  { 
    const primaryUrl = `${this.primaryUrl}/Database/database-meta-data`;
    const secondaryUrl = 'Database/database-meta-data'; // Fallback URL

    // First attempt with the primary URL
    this.http.get<DatabaseMetaData>(primaryUrl).subscribe(
      (result) => this.getServerMetaData(result),  // Success handler
      (error) => {
        console.error('Primary URL failed, trying secondary URL:', error);

        // If the primary URL fails, attempt with the secondary URL
        this.http.get<DatabaseMetaData>(secondaryUrl).subscribe(
          (secondaryResult) => this.getServerMetaData(secondaryResult), // Success handler
          (secondaryError) => this.handleLoadError(secondaryError)      // Error handler for secondary URL
        );
      }
    );
  }
   
  private getServerMetaData(serverMetaData :DatabaseMetaData) {
    this.dbXmlSchemas=serverMetaData.dbXmlSchemas;
    this.currentDatabaseName=serverMetaData.currentDatabaseName;
    this.databaseInfos=serverMetaData.databaseInfos;
    this.databaseServerName=serverMetaData.databaseServerName;
    this.procedureInfos=serverMetaData.procedureInfos;
    this.scalarFunctionInfos=serverMetaData.scalarFunctionInfos;
    this.serverAdvanceProperties=serverMetaData.serverAdvanceProperties;
    this.serverProperties=serverMetaData.serverProperties;
    this.triggerInfos=serverMetaData.triggerInfos;
    this.tableFunctionInfos=serverMetaData.tableFunctionInfos;
    this.userTypes = serverMetaData.userTypes;
    this.fileInformations = serverMetaData.fileInformations;
    this.viewMetadata =serverMetaData.viewMetadata;
    this.tablesMetadata = serverMetaData.tablesMetadata;
  }
  private handleLoadError(error: any): void {
    console.error(error);
  }



}
