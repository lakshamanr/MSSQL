import { Component, OnInit } from '@angular/core';
import { LeftMenuService } from '../../services/left-menu.service';
import { LeftMenuTreeViewJson } from '../../models/left-menu-tree-view-json';
import { Schemaenum } from '../../models/schemaenum.enum';
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
    const pluralRoutes = {
      [Schemaenum.AllDatabase]: "/DatabaseDetails",
      [Schemaenum.AllTable]: "/Tables",
      [Schemaenum.AllViews]: "/Views",
      [Schemaenum.AllStoreprocedure]: "/Storeprocedures",
      [Schemaenum.AllScalarValueFunctions]: "/ScalarFunctions",
      [Schemaenum.AllAggregateFunciton]: "/AggregateFunctions",
      [Schemaenum.AllTableValueFunction]: "/TableValueFunctions",
      [Schemaenum.AllSchema]: "/Schemas",
      [Schemaenum.AllTriggers]: "/Triggers",
      [Schemaenum.AllUserDefinedDataType]: "/UserDefinedDataTypes",
      [Schemaenum.AllXMLSchemaCollection]: "/XmlSchemas",
      [Schemaenum.AllFunctions]: "/Functions",
      [Schemaenum.AllProgrammability]: "/AllProgrammability",
      [Schemaenum.AllDatabaseServer]: "/DatabaseServers",
      [Schemaenum.AllDatabaseDataTypes]: "/DatabaseDataTypes"
    };

    const dynamicRoutes = { 
      [Schemaenum.DatabaseServer]: "/DatabaseServerDetails",
      [Schemaenum.Schema]: "/Schema",
      [Schemaenum.Table]: "/Table", 
      [Schemaenum.Views]: "/View",
      [Schemaenum.Storeprocedure]: "/Storeprocedure",
      [Schemaenum.ScalarValueFunctions]: "/ScalarFunction",
      [Schemaenum.AggregateFunciton]: "/AggregateFunction",
      [Schemaenum.TableValueFunction]: "/TableValueFunction",
      [Schemaenum.Triggers]: "/Trigger",
      [Schemaenum.UserDefinedDataType]: "/UserDefinedDataType",
      [Schemaenum.XMLSchemaCollection]: "/XmlSchema",
      [Schemaenum.ProjectInfo]: "/ProjectInfo",
      [Schemaenum.Programmability]: "/Programmability"
    };

    const schemaEnum = data.SchemaEnums;
    const objectName = data.text;

    if (pluralRoutes[schemaEnum]) {
      this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.route.navigate([pluralRoutes[schemaEnum]]);
      });
    } else if (dynamicRoutes[schemaEnum]) {
      if (!objectName) {
        console.warn("Missing object name for:", schemaEnum);
        return;
      }

      const encodedName = encodeURIComponent(objectName);
      const fullPath = `${dynamicRoutes[schemaEnum]}/${encodedName}`;

      this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.route.navigate([fullPath]);
      });
    } else {
      console.warn("Unhandled SchemaEnum:", schemaEnum);
    }
  }

}
