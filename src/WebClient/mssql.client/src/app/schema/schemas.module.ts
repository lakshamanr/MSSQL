import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemaService } from './services/schema.service';
import { SchemaComponent } from './components/schema/schema.component';
import { SchemasComponent } from './components/schemas/schemas.component';


import { AmexioDataModule, AmexioWidgetModule, AmexioChartsModule, AmexioEnterpriseModule } from 'amexio-ng-extensions';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { TreeModule } from 'primeng/tree';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { TabViewModule } from 'primeng/tabview';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { Routes, RouterModule } from '@angular/router';
 
const appRoutes: Routes =
  [
    {
      path: 'Schemas',
      component: SchemasComponent,
    },
    {
      path: 'Schema/:objectname',
      component: SchemaComponent,
    }
  ]


@NgModule({
  declarations: [SchemaComponent, SchemasComponent],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
    CommonModule,
    AmexioDataModule,
    AmexioWidgetModule,
    AmexioChartsModule,
    AmexioEnterpriseModule,
    AccordionModule,
    TableModule,
    TreeModule,
    ToastModule,
    ButtonModule,
    ContextMenuModule,
    TabViewModule,
    CodeHighlighterModule,
    BreadcrumbModule
  ],
  exports: [SchemaComponent, SchemasComponent] 
  , providers: [SchemaService]
})
export class SchemasModule { }
