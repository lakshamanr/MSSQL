import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TableColumn, TableCreateScript, TableDescription, TableForeignKey, TableIndex, TableMetadata, TableProperty } from '../Model/databaseTable/table-metadata.models';

@Component({
  selector: 'app-database-table',
  templateUrl: './database-table.component.html',
  styleUrls: ['./database-table.component.css'] // corrected to styleUrls
})
export class DatabaseTableComponent implements OnInit
{
  tableName : string = "HumanResources.Department";
  // Properties
  columns: TableColumn[] = [];
  createScript: TableCreateScript = { script: '' };
  descriptions: TableDescription[] = [];
  indices: TableIndex[] = [];
  foreignKeys: TableForeignKey[] = [];
  properties: TableProperty[] = [];
  displayDialog: boolean = false;
  selectedDescription: TableDescription = { name: '', value: '' };

  // Constructor
  constructor(private http: HttpClient) { }

  // Lifecycle Hook
  ngOnInit() {
    this.loadTableMetadata();
  }

  // Data Loading
  private loadTableMetadata(): void {
    this.http.get<TableMetadata>("MSSQL/GetTableMetaData?tableName=" + this.tableName).subscribe(
      result => this.handleLoadSuccess(result),
      error => this.handleLoadError(error)
    );
  }

  private handleLoadSuccess(result: TableMetadata): void {
    this.descriptions = result.descriptions;
    this.columns = result.columns;
    this.createScript = result.createScript;
    this.indices = result.indices;
    this.foreignKeys = result.foreignKeys;
    this.properties = result.properties;
  }

  private handleLoadError(error: any): void {
    console.error(error);
  }

  // Description Editing
  editDescription(description: TableDescription): void {
    this.selectedDescription = { ...description };
    this.displayDialog = true;
  }

  saveDescription(): void {
    const index = this.descriptions.findIndex(desc =>
      desc.name === this.selectedDescription.name &&
      desc.value === this.selectedDescription.value
    );
    if (index !== -1) {
      this.descriptions[index] = { ...this.selectedDescription };
      console.log(`Updated description: ${this.selectedDescription.name} - ${this.selectedDescription.value}`);
    }
    this.displayDialog = false;
  }

  cancelEdit(): void {
    this.displayDialog = false;
  }
}
