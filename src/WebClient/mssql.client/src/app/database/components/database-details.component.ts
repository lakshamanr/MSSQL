import { Component, OnInit } from '@angular/core'; 
import { DatabaseMetadataService } from '../database-metadata.service';
import { DatabaseMetaData } from '../models/DatabaseMetaData';
import {ObjectTypeItems} from '../models/objectTypeItems';
@Component({
  selector: 'app-database-details',
  templateUrl: './database-details.component.html',
  styleUrls: ['./database-details.component.css']
})
export class DatabaseDetailsComponent implements OnInit {
  databaseMetaData: DatabaseMetaData;
  public ObjectTypeItemss: ObjectTypeItems[];
  constructor(private databaseMetadataService: DatabaseMetadataService) { }

  ngOnInit() {
    this.databaseMetadataService.getDatabaseMetaData().subscribe(
      (databaseMetaData: DatabaseMetaData) => {
        if (databaseMetaData) {
          this.databaseMetaData = databaseMetaData;
          this.ObjectTypeItemss = [
            {
              icon: './assets/icons/Table.png',
              label: 'Tables',
              count: this.databaseMetaData.tablesMetadata.length,
              visible: !!this.databaseMetaData.tablesMetadata.length,
            }
            ,
            {
              icon: './assets/icons/View.png',
              label: 'View',
              count: this.databaseMetaData.viewMetadata.length,
              visible: !!this.databaseMetaData.viewMetadata.length,
            },
            {
              icon: './assets/icons/StoredProcedure.png',
              label: 'Stored Procedure',
              count: this.databaseMetaData.procedureInfos.length,
              visible: !!this.databaseMetaData.procedureInfos.length,
            },
            {
              icon: './assets/icons/Function_Table.png',
              label: 'Table-Valued Functions',
              count: this.databaseMetaData.tableFunctionInfos.length,
              visible: !!this.databaseMetaData.tableFunctionInfos.length,
            },
            {
              icon: './assets/icons/Function_Scalar.png',
              label: 'Scalar-Valued Functions',
              count: this.databaseMetaData.scalarFunctionInfos.length,
              visible: !!this.databaseMetaData.scalarFunctionInfos.length,
            },
            {
              icon: './assets/icons/DdlTrigger.png',
              label: 'Database Triggers',
              count: this.databaseMetaData.triggerInfos.length,
              visible: !!this.databaseMetaData.triggerInfos.length,
            },
            {
              icon: './assets/icons/UserDefinedDataType.png',
              label: 'User-Defined Data Types',
              count: this.databaseMetaData.userTypes.length,
              visible: !!this.databaseMetaData.userTypes.length,
            },
            {
              icon: './assets/icons/XmlSchemaCollection.png',
              label: 'XML Schema Collections',
              count: this.databaseMetaData.dbXmlSchemas.length,
              visible: !!this.databaseMetaData.dbXmlSchemas.length,
            }
          ];
        }
      },
      (error) => this.handleLoadError(error)
    );
  }
  private handleLoadError(error: any): void {
    console.error('Failed to load database metadata:', error);
  }
}
