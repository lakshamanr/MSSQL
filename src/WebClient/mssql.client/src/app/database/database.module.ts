import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { TreeDragDropService, MessageService } from 'primeng/api'; 
import { DatabaseMetadataService } from './services/database-metadata.service';
import { ObjectTypeItemComponent } from './components/object-type-item/object-type-item.component';
import { DatabaseDetailsComponent } from './components/database-details/database-details.component';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes =
  [
    { path: '', component: DatabaseDetailsComponent }
  ]


@NgModule({
  declarations: [DatabaseDetailsComponent,ObjectTypeItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,  // Provides Amexio modules
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
  providers: [TreeDragDropService, MessageService,DatabaseMetadataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DatabaseModule { }
