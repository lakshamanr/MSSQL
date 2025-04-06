import { Component, OnInit } from '@angular/core';
import { LeftMenuService } from '../../services/left-menu.service';
import { LeftMenuTreeViewJson } from '../../models/left-menu-tree-view-json';
import {  SchemaEnums } from '../../models/schemaenum.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html'
})
export class LeftmenuComponent implements OnInit {

  leftmenujsonvalues: any;

  constructor(private route: Router ,private leftMenuService: LeftMenuService) { }

  ngOnInit() {
    this.loadLeftMenuData();
  }

  private loadLeftMenuData(): void {
    this.leftMenuService.loadLeftMenuData().subscribe(
      (result) => this.handleLoadSuccess(result),
      (error) => this.handleLoadError(error)
    );
  }

  private handleLoadSuccess(result: any): void {
    this.leftmenujsonvalues = result;
  }

  private handleLoadError(error: any): void {
    console.error(error);
  } 
  getNodeData(data: LeftMenuTreeViewJson) {
    const schemaEnum = data.SchemaEnum;   
    const objectName = data.text;
    let routePath = '';  
    switch (schemaEnum) { 
      case SchemaEnums.Databases:
        routePath = "/Database";
        break;
      case SchemaEnums.Tables:
        routePath = "/Tables";
        break;
      case SchemaEnums.Views:
        routePath = "/Views";
        break;
      case SchemaEnums.StoredProcedures:
        routePath = "/Storeprocedures";
        break;
      case SchemaEnums.ScalarValuedFunctions:
        routePath = "/ScalarFunctions";
        break;
      case SchemaEnums.AggregateFunctions:
        routePath = "/AggregateFunctions";
        break;
      case SchemaEnums.TableValuedFunctions:
        routePath = "/TableValueFunctions";
        break;
      case SchemaEnums.Schemas:
        routePath = "/Schemas";
        break;
      case SchemaEnums.Triggers:
        routePath = "/Triggers";
        break;
      case SchemaEnums.UserDefinedDataTypes:
        routePath = "/UserDefinedDataTypes";
        break;
      case SchemaEnums.AllXmlSchemaCollections:
        routePath = "/XmlSchemas";
        break;
      case SchemaEnums.Programmability:
        return;
        break;
      case SchemaEnums.DatabaseDataTypes:
        return;
        break;

      case SchemaEnums.DatabaseServer:
        routePath = `/DatabaseServerDetails/${encodeURIComponent(objectName)}`;
        break;
      case SchemaEnums.Schema:
        routePath = `/Schema/${encodeURIComponent(objectName)}`;
        break;
      case SchemaEnums.Table:
        routePath = `/Table/${encodeURIComponent(objectName)}`;
        break;
      case SchemaEnums.View:
        routePath = `/View/${encodeURIComponent(objectName)}`;
        break;
      case SchemaEnums.StoredProcedure:
        routePath = `/Storeprocedure/${encodeURIComponent(objectName)}`;
        break;
      case SchemaEnums.ScalarValuedFunction:
        routePath = `/ScalarFunction/${encodeURIComponent(objectName)}`;
        break;
      case SchemaEnums.AggregateFunction:
        routePath = `/AggregateFunction/${encodeURIComponent(objectName)}`;
        break;
      case SchemaEnums.TableValuedFunction:
        routePath = `/TableValueFunction/${encodeURIComponent(objectName)}`;
        break;
      case SchemaEnums.Trigger:
        routePath = `/Trigger/${encodeURIComponent(objectName)}`;
        break;
      case SchemaEnums.UserDefinedDataType:
        routePath = `/UserDefinedDataType/${encodeURIComponent(objectName)}`;
        break;
      case SchemaEnums.XmlSchemaCollection:
        routePath = `/XmlSchema/${encodeURIComponent(objectName)}`;
        break;
      case SchemaEnums.ProjectInfo:
        routePath = `/ProjectInfo/${encodeURIComponent(objectName)}`;
        break;
      default:
        console.warn("Unhandled SchemaEnum:", schemaEnum);
        return;
    }

    // 🚀 Navigate to the route
    this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.route.navigate([routePath]);
    });

  }

}
