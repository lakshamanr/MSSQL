import { Component, OnInit } from '@angular/core';
import { DatabaseMetaData } from '../../models/DatabaseMetaData';
import { DatabaseMetadataService } from '../../service/database-metadata.service';
import { ObjectTypeItems } from '../../models/ObjectTypeItems';
 
@Component({
  selector: 'app-database-details',
  templateUrl: './database-details.component.html',
  styleUrls: ['./database-details.component.css']
})
export class DatabaseDetailsComponent implements OnInit{
  databaseMetaData: DatabaseMetaData;
  public objectTypeItems: ObjectTypeItems[] = [];

  constructor(private databaseMetadataService: DatabaseMetadataService) { }
  ngOnInit() {
    this.loadDatabaseMetadata();
  }

  private loadDatabaseMetadata(): void {
    this.databaseMetadataService.getDatabaseMetaData().subscribe({
      next: (databaseMetaData: DatabaseMetaData) => {
        if (databaseMetaData) {
          this.databaseMetaData = databaseMetaData; 
          this.initializeObjectTypeItems();
        }
      },
      error: (error) => this.handleLoadError(error)
    });
  }

  private initializeObjectTypeItems(): void {
    const metadataConfig = [
      { icon: 'Table.png', label: 'Tables', data: this.databaseMetaData.tablesMetadata },
      { icon: 'View.png', label: 'View', data: this.databaseMetaData.viewMetadata },
      { icon: 'StoredProcedure.png', label: 'Stored Procedure', data: this.databaseMetaData.procedureInfos },
      { icon: 'Function_Table.png', label: 'Table-Valued Functions', data: this.databaseMetaData.tableFunctionInfos },
      { icon: 'Function_Scalar.png', label: 'Scalar-Valued Functions', data: this.databaseMetaData.scalarFunctionInfos },
      { icon: 'DdlTrigger.png', label: 'Database Triggers', data: this.databaseMetaData.triggerInfos },
      { icon: 'UserDefinedDataType.png', label: 'User-Defined Data Types', data: this.databaseMetaData.userTypes },
      { icon: 'XmlSchemaCollection.png', label: 'XML Schema Collections', data: this.databaseMetaData.dbXmlSchemas }
    ];

    this.objectTypeItems = metadataConfig.map(item => ({
      icon: `./assets/icons/${item.icon}`,
      label: item.label,
      count: item.data.length,
      visible: !!item.data.length
    }));
  }

  private handleLoadError(error: any): void {
    console.error('Failed to load database metadata:', error);
  }
}
