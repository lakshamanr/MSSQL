import { Component, OnInit } from '@angular/core';
import { DatabaseMetaData } from '../../models/DatabaseMetaData';
import { DatabaseMetadataService } from '../../service/database-metadata.service';
import { ObjectTypeItems } from '../../models/ObjectTypeItems';
import { AuthService } from '../../../auth/services/auth.service';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-database-details',
  templateUrl: './database-details.component.html',
  styleUrls: ['./database-details.component.css']
})
export class DatabaseDetailsComponent implements OnInit{
  databaseMetaData: DatabaseMetaData;
  public objectTypeItems: ObjectTypeItems[] = [];
  isLoading: boolean = true;
  constructor(
    private databaseMetadataService: DatabaseMetadataService,
    private authService: AuthService
  ) { }
  ngOnInit() {
    // Wait for authentication before loading data
    this.authService.isAuthenticated.pipe(
      filter(isAuth => isAuth === true),
      take(1)
    ).subscribe(() => {
      this.loadDatabaseMetadata();
    });
  }

  private loadDatabaseMetadata(): void {
    this.isLoading = true;
    this.databaseMetadataService.getDatabaseMetaData().subscribe({
      next: (databaseMetaData: DatabaseMetaData) => {
        if (databaseMetaData) {
          this.databaseMetaData = databaseMetaData; 
          this.initializeObjectTypeItems();
          this.isLoading = false;
        }
      },
      error: (error) => { this.handleLoadError(error); this.isLoading = false; }
    });
  }

  private initializeObjectTypeItems(): void {
    const metadataConfig = [
      { icon: 'Table.png', label: 'Tables', data: this.databaseMetaData.tablesMetadata, routing:"/Tables"},
      { icon: 'View.png', label: 'View', data: this.databaseMetaData.viewMetadata, routing: "/Views" },
      { icon: 'StoredProcedure.png', label: 'Stored Procedure', data: this.databaseMetaData.procedureInfos, routing: "/Storeprocedures" },
      { icon: 'Function_Table.png', label: 'Aggregated-Valued Functions', data: this.databaseMetaData.tableFunctionInfos, routing: "/AggregateFunctions" },
      { icon: 'Function_Table.png', label: 'Table-Valued Functions', data: this.databaseMetaData.tableFunctionInfos, routing: "/TableValueFunctions" },
      { icon: 'Function_Scalar.png', label: 'Scalar-Valued Functions', data: this.databaseMetaData.scalarFunctionInfos, routing: "/ScalarFunctions" },
      { icon: 'DdlTrigger.png', label: 'Database Triggers', data: this.databaseMetaData.triggerInfos, routing: "/Triggers" },
      { icon: 'UserDefinedDataType.png', label: 'User-Defined Data Types', data: this.databaseMetaData.userTypes, routing: "/UserDefinedDataTypes" },
      { icon: 'XmlSchemaCollection.png', label: 'XML Schema Collections', data: this.databaseMetaData.dbXmlSchemas, routing: "/XmlSchemas" }
    ];

    this.objectTypeItems = metadataConfig.map(item => ({
      icon: `./assets/icons/${item.icon}`,
      label: item.label,
      count: item.data.length,
      visible: !!item.data.length,
      routing: item.routing
    }));
  }

  private handleLoadError(error: any): void {
    console.error('Failed to load database metadata:', error);
  }
}
