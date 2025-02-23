import { HttpClient } from "@angular/common/http";
import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";

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
  columns: TableColumn[] = [];
  tableFragmentations: TableFragmentation[] = [];
  createScript: TableCreateScript = { script: "" };
  descriptions: TableDescription[] = [];
  indices: TableIndex[] = [];
  foreignKeys: TableForeignKey[] = [];
  properties: TableProperty[] = [];
  displayDialog: boolean;
  displayColumnDialog: boolean;
  hasEditPermission: boolean;
  tableconstraint!: TableConstraint[];
  filesTree: any;
  selectedDescription: TableDescription = { name: "", value: "", table: "" };
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
  language = 'plsql';
  constructor(private tableService: TableService, private http: HttpClient, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.loadTableMetadata();
    this.loadData();
  }

  loadData() {
    this.hasEditPermission = true;
  }

  ngAfterViewInit() {
    (window as any).Prism.highlightAll();
  }

  private loadTableMetadata(): void {
    this.tableService.loadTableMetadata(this.tableName).subscribe({
      next: (metadata) => metadata ? this.handleLoadSuccess(metadata) : null,
      error: (error) => this.handleLoadError(error)
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
    this.filesTree = JSON.parse(result.tableDependenciesTree);
  }

  private handleLoadError(error: any): void {
    console.error(error);
  }

  editDescription(description: TableDescription): void {
    this.selectedDescription = { ...description };
    this.displayDialog = true;
  }

  saveDescription(): void {
    const index = this.descriptions.findIndex(
      (desc) => desc.name === this.selectedDescription.name && desc.table === this.selectedDescription.table
    );

    if (index !== -1) {
      this.descriptions[index] = { ...this.selectedDescription };
      this.tableService.updateTableExtendedProperties(this.selectedDescription).subscribe({
        next: () => this.displayDialog = false,
        error: (error) => console.error("Error:", error)
      });
    }
  }

  cancelEdit(): void {
    this.displayDialog = false;
  }

  editColumnDescription(selectedColumn: TableColumn): void {
    this.selectedColumn = { ...selectedColumn };
    this.displayColumnDialog = true;
  }

  saveColumnDescription(): void {
    const index = this.columns.findIndex(
      (desc) => desc.tableName === this.selectedColumn.tableName && desc.columnName === this.selectedColumn.columnName
    );

    if (index !== -1) {
      this.columns[index] = { ...this.selectedColumn };
      this.tableService.updateTableColumnExtendedProperty(this.selectedColumn).subscribe({
        next: () => this.displayColumnDialog = false,
        error: (error) => console.error("Error:", error)
      });
    }
  }

  cancelColumnEdit(): void {
    this.displayColumnDialog = false;
  }
}
