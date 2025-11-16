import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemaService } from './services/schema.service';
import { SchemaComponent } from './components/schema/schema.component';
import { SchemasComponent } from './components/schemas/schemas.component';
import { SharedModule } from '../shared/shared.module';

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
 
const routes: Routes =
  [
    { path: 's', component: SchemasComponent },
    { path: ':objectname', component: SchemaComponent }
  ]


@NgModule({
  declarations: [SchemaComponent, SchemasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AccordionModule,
    TableModule,
    TreeModule,
    ToastModule,
    ButtonModule,
    ContextMenuModule,
    TabViewModule,
    CodeHighlighterModule,
    BreadcrumbModule,
    SharedModule
  ],
  providers: [SchemaService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SchemasModule { }
