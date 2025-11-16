import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseTriggerComponent } from './components/database-trigger/database-trigger.component';
import { DatabaseTriggersComponent } from './components/database-triggers/database-triggers.component';


/* ===== PrimeNG Modules ===== */
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { TreeModule } from 'primeng/tree';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { TabViewModule } from 'primeng/tabview';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProgressBarModule } from 'angular-progress-bar';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { MessageService } from 'primeng/api';
import { DatabaseTriggerService } from './services/database-trigger.service';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
 
const routes: Routes =
  [
    { path: 's', component: DatabaseTriggersComponent },
    { path: ':objectname', component: DatabaseTriggerComponent }
  ]



@NgModule({
  declarations: [DatabaseTriggerComponent, DatabaseTriggersComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    /* Core Modules */
    HttpClientModule,

    /* PrimeNG Modules */
    AccordionModule,
    TableModule,
    TreeModule,
    ToastModule,
    ContextMenuModule,
    TabViewModule,
    CodeHighlighterModule,
    BreadcrumbModule,
    ButtonModule,
    DialogModule,
    InputTextareaModule,
    ProgressBarModule,
    CardModule,
    InputTextModule,
    TooltipModule

  ],
  providers: [DatabaseTriggerService, MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DatabaseTriggerModule { }
