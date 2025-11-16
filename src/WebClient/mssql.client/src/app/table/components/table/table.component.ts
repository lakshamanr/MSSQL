import { HttpClient } from "@angular/common/http";
import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";

import { TableDescription } from "../../models/table-description.model";
import { TableMetadata } from "../../models/table-metadata.model";
import { TableColumn } from "../../models/table-column.model";
import { TableConstraint } from "../../models/table-constraint.model";
import { TableCreateScript } from "../../models/table-create-script.model";
import { TableIndex } from "../../models/table-index.model";
import { TableForeignKey } from "../../models/table-foreign-key.model";
import { TableProperty } from "../../models/table-property.model";
import { TableFragmentation } from "../../models/table-fragmentation.model";
import { TableService } from '../../services/table.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class TableComponent implements OnInit, AfterViewInit {
  tableName: string;
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
  isLoading: boolean = true;
  constructor(private route: ActivatedRoute, private tableService: TableService) {
  
  }

  ngOnInit() {
    this.tableName = this.route.snapshot.params.objectname;
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
    this.isLoading = true;
    this.tableService.loadTableMetadata(this.tableName).subscribe({
      next: (metadata) =>
      {
        metadata ? this.handleLoadSuccess(metadata) : null;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.handleLoadError(error)
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
    this.tableconstraint = result.constraints;
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
  getSafeProgress(value: any): number {
    // Handles undefined, null, or weird string values
    const val = Number(value);
    if (isNaN(val) || val < 0) return 0;
    if (val > 100) return 100;
    return val;
  }

  getDynamicColor(percent: number): { [key: string]: string } {
    // Convert to number just in case
    const value = Number(percent) || 0;

    // Dynamically map progress to color intensity
    if (value < 10) {
      return { 0: '#2ecc71', 50: '#2ecc71' }; // bright green
    } else if (value < 40) {
      return { 0: '#f1c40f', 50: '#f1c40f' }; // yellow
    } else if (value < 70) {
      return { 0: '#e67e22', 50: '#e67e22' }; // orange
    } else {
      return { 0: '#e74c3c', 50: '#e74c3c' }; // red
    }
  }


}
