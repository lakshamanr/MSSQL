import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { TableColumn, TableConstraint, TableCreateScript, TableDescription, TableForeignKey, TableIndex, TableMetadata, TableProperty } from '../Model/databaseTable/table-metadata.models';

@Component({
  selector: 'app-database-table',
  templateUrl: './database-table.component.html',
  styleUrls: ['./database-table.component.css'] // corrected to styleUrls
})
export class DatabaseTableComponent implements OnInit, AfterViewInit {

  tableName: string = "HumanResources.Department";
  // Properties
  columns: TableColumn[] = [];
  createScript: TableCreateScript = { script: '' };
  descriptions: TableDescription[] = [];
  indices: TableIndex[] = [];
  foreignKeys: TableForeignKey[] = [];
  properties: TableProperty[] = [];
  displayDialog: boolean = false; 
  displayColumnDialog: boolean = false;
  hasEditPermission: boolean = false; // Set based on user permissions

  constraint !: TableConstraint[];

  //selected Properties

  selectedDescription: TableDescription = { name: '', value: '', table:'' };
  selectedColumn: TableColumn = {
    tableName:'',
    columnName: '',
    key: '',
    identity: '',
    dataType: '',
    maxLength: '',
    allowNulls: '',
    default: '',
    description:''
}

  // Constructor
  constructor(private http: HttpClient) { }

  // Lifecycle Hook
  ngOnInit() {
    this.loadTableMetadata();
    this.loadData();
  }
  loadData() {
    // Load your data and set permissions here
    this.hasEditPermission = true; // Set this based on actual permission checks
  }
  ngAfterViewInit() {
    (window as any).Prism.highlightAll();
  }
  // Data Loading
  private loadTableMetadata(): void {
    this.http.get<TableMetadata>("Tables/GetTableMetaData?tableName=" + this.tableName).subscribe(
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
    this.constraint = result.constraint;
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
      desc.table == this.selectedDescription.table
    );
    if (index !== -1)
    {
      this.descriptions[index] = { ...this.selectedDescription };
      this.http.post("Tables/UpdateTableExtendedProperties", this.selectedDescription).subscribe(
        response => {
          console.log('Success:', response);
          this.displayDialog = false;
        },
        error => {
          console.error('Error:', error);
        }
      );
    } 
  }

  cancelEdit(): void {
    this.displayDialog = false;
  }

  // Description Editing
  editColumnDescription(selectedColumn: TableColumn): void
  {
    this.selectedColumn = { ...selectedColumn };
    this.displayColumnDialog = true;
  }

  saveColumnDescription(): void {
    const index = this.columns.findIndex(desc =>
      desc.tableName === this.selectedColumn.tableName &&
      desc.columnName === this.selectedColumn.columnName &&  
            desc.dataType === this.selectedColumn.dataType &&
              desc.description === this.selectedColumn.description
    );
    if (index !== -1)
    {
      this.columns[index] = { ...this.selectedColumn };
      console.log(`Updated description: ${this.selectedColumn.columnName} - ${this.selectedColumn.description}`);
    }
    this.displayColumnDialog = false;
  }

  cancelColumnEdit(): void {
    this.displayColumnDialog = false;
  }
}
