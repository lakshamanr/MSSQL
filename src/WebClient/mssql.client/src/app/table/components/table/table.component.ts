import { HttpClient } from "@angular/common/http";
import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ChangeDetectorRef } from "@angular/core";

import { TableDescription } from "../../models/TableDescription";
import { TableMetadata } from "../../models/TableMetadata";
import { TableColumn } from "../../models/TableColumn";
import { TableConstraint } from "../../models/TableConstraint";
import { TableCreateScript } from "../../models/TableCreateScript";
import { TableIndex } from "../../models/TableIndex";
import { TableForeignKey } from "../../models/TableForeignKey";
import { TableProperty } from "../../models/TableProperty";
import { TableFragmentation } from "../../models/TableFragmentation";
import { TableService } from '../../service/table.service';

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class TableComponent implements OnInit, AfterViewInit {
  tableName: string = "HumanResources.Employee";
 //"http://localhost:5000/
  // Properties
  columns: TableColumn[] = [];
  tableFragmentations: TableFragmentation[] = [];
  createScript: TableCreateScript = { script: "" };
  descriptions: TableDescription[] = [];
  indices: TableIndex[] = [];
  foreignKeys: TableForeignKey[] = [];
  properties: TableProperty[] = [];
  displayDialog: boolean;
  displayColumnDialog: boolean ;
  hasEditPermission: boolean; // Set based on user permissions

  tableconstraint!: TableConstraint[];
  filesTree: any;

  public selectedDescription: TableDescription = { name: "", value: "", table: "" };
  selectedColumn: TableColumn = {
    tableName: "",
    columnName: "",
    key: "",
    identity: "",
    dataType: "",
    maxLength: "",
    allowNulls: "",
    default: "",
    description: "",
    descriptionname: "",
    extendedPropertyName: "",
    extendedPropertyValue: ""
  };

  // Constructor
  constructor(private tableService :TableService,private http: HttpClient, private cd: ChangeDetectorRef) { }

  // Lifecycle Hook
  ngOnInit() {
    this.loadTableMetadata();
    this.loadData();
  }

  loadData() { 
    this.hasEditPermission = true; // Set this based on actual permission checks
  }

  ngAfterViewInit() {
    (window as any).Prism.highlightAll();
  }

  // Data Loading
  private loadTableMetadata(): void { 

    this.tableService.loadTableMetadata(this.tableName).subscribe({
      next: (metadata) => {
        if (metadata) {

         this.handleLoadSuccess(metadata);
          
        } else {
        
           
        }
      },
      error: (error) => 
        {
        this.handleLoadError(error);
      },
      complete: () => {
        
      }
    });  
  }

  private handleLoadSuccess(result: TableMetadata): void {
    this.descriptions = result.descriptions;
    this.columns = result.columns;
    this.createScript = result.createScript;
    this.indices = result.indices;
    this.foreignKeys = result.foreignKeys;
    this.properties = result.properties;
    this.tableconstraint = result.constraint;
    this.tableFragmentations = result.tableFragmentations;
    this.filesTree = JSON.parse(result.tableDependices);
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
    const index = this.descriptions.findIndex(
      (desc) =>
        desc.name === this.selectedDescription.name &&
        desc.table === this.selectedDescription.table
    );

    if (index !== -1) {
      this.descriptions[index] = { ...this.selectedDescription };
      this.http
        .post("Tables/UpdateTableExtendedProperties", this.selectedDescription)
        .subscribe(
          (response) => {
            this.displayDialog = false;
          },
          (error) => {
            console.error("Error:", error);
          }
        );
    }
  }
  

  cancelEdit(): void {
    this.displayDialog = false;
  }

  // Column Description Editing
  editColumnDescription(selectedColumn: TableColumn): void {
    this.selectedColumn = { ...selectedColumn };
    this.displayColumnDialog = true;
  }

  saveColumnDescription(): void {
    const index = this.columns.findIndex(
      (desc) =>
        desc.tableName === this.selectedColumn.tableName &&
        desc.columnName === this.selectedColumn.columnName 
    );

    if (index !== -1) {
      this.columns[index] = { ...this.selectedColumn };
      this.http
        .post("Tables/UpdateTableColumnExtendedProperty", this.selectedColumn)
        .subscribe(
          (response) => {
            console.log("Success:", response);
            this.displayDialog = false;
          },
          (error) => {
            console.error("Error:", error);
          }
        );
    }

    this.displayColumnDialog = false;
  }

  cancelColumnEdit(): void {
    this.displayColumnDialog = false;
  }
}
