import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TablesComponent } from './components/tables/tables.component';

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
import { ProgressBarModule } from 'angular-progress-bar';
import { DialogModule } from 'primeng/dialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { BrowserModule } from '@angular/platform-browser';
import { PrismModule } from '@ngx-prism/core';
import { FormsModule } from '@angular/forms';
import { EditDescriptionDialogComponent } from './components/table/edit-description-dialog/edit-description-dialog.component';
import { EditColumnDescriptionDialogComponent } from './components/table/edit-column-description-dialog/edit-column-description-dialog.component';
import { SqlScriptViewerComponent } from './components/table/sql-script-viewer/sql-script-viewer.component';
import { TableService } from './services/table.service';
import { TablesService } from './services/tables.service';
import { Router, Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes =
  [
    { path: 's', component: TablesComponent },
    { path: ':objectname', component: TableComponent }
  ]


@NgModule({
  declarations: [TableComponent, TablesComponent, EditDescriptionDialogComponent, EditColumnDescriptionDialogComponent, SqlScriptViewerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule,  // Provides Amexio modules
    AccordionModule,
    TableModule,
    TreeModule,
    ToastModule,
    ContextMenuModule,
    TabViewModule,
    CodeHighlighterModule,
    BreadcrumbModule,
    ProgressBarModule,
    ButtonModule,
    DialogModule,
    InputTextareaModule,
    PrismModule
  ],
  providers: [TreeDragDropService, MessageService,TableService,TablesService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // ✅ Add CUSTOM_ELEMENTS_SCHEMA
})
export class TablesModule { }


