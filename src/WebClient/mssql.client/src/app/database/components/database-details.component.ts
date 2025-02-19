import { Component, Inject, OnInit } from '@angular/core';
 
import { DbXmlSchema } from '../models/DbXmlSchema';
import { DatabaseInfo } from '../models/DatabaseInfo';
import { ProcedureInfo } from '../models/ProcedureInfo';
import { FunctionInfo } from '../models/FunctionInfo';
import { ServerProperty } from '../models/ServerProperty';
import { TriggerInfo } from '../models/TriggerInfo';
import { UserType } from '../models/UserType';
import { DatabaseFile } from '../models/DatabaseFile';
import { ViewMetadata } from '../models/ViewMetadata';
import { TablesMetadata } from '../../table/models/TablesMetaData';
import { DatabaseMetadataService } from '../database-metadata.service';
import { DatabaseMetaData } from '../models/DatabaseMetaData';
 
@Component({
  selector: 'app-database-details',
  templateUrl: './database-details.component.html',
  styleUrls: ['./database-details.component.css']
})
export class DatabaseDetailsComponent implements OnInit {
  databaseMetaData: DatabaseMetaData;
  constructor(private databaseMetadataService: DatabaseMetadataService) { }

  ngOnInit() {
    this.databaseMetadataService.getDatabaseMetaData().subscribe(
      (databaseMetaData: DatabaseMetaData) => {
        if (databaseMetaData) {
          this.databaseMetaData = databaseMetaData;
        }
      },
      (error) => this.handleLoadError(error)
    );
  }
  private handleLoadError(error: any): void {
    console.error('Failed to load database metadata:', error);
  }
}
