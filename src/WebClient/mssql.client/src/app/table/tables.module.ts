import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TablesComponent } from './components/tables/tables.component';

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
import { TreeDragDropService, MessageService } from 'primeng/api';
import { ProgressBarModule } from 'angular-progress-bar';
import { DialogModule } from 'primeng/dialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EditDescriptionDialogComponent } from './components/table/edit-description-dialog/edit-description-dialog.component';
import { EditColumnDescriptionDialogComponent } from './components/table/edit-column-description-dialog/edit-column-description-dialog.component';
import { SqlScriptViewerComponent } from './components/table/sql-script-viewer/sql-script-viewer.component';
import { TableService } from './service/table.service';
import { TablesService } from './service/tables.service';

@NgModule({
  declarations: [TableComponent, TablesComponent, EditDescriptionDialogComponent, EditColumnDescriptionDialogComponent, SqlScriptViewerComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AmexioDataModule,
    AmexioWidgetModule,
    AmexioChartsModule,
    AmexioEnterpriseModule,
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
    InputTextareaModule
  ],
  providers: [TreeDragDropService, MessageService,TableService,TablesService],
  exports:[TableComponent, TablesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // ✅ Add CUSTOM_ELEMENTS_SCHEMA
})
export class TablesModule { }
