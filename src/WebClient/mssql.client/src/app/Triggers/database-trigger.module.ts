import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseTriggerComponent } from './components/database-trigger/database-trigger.component';
import { DatabaseTriggersComponent } from './components/database-triggers/database-triggers.component';


/* ===== Amexio Modules ===== */
import { AmexioDataModule, AmexioWidgetModule, AmexioChartsModule, AmexioEnterpriseModule } from 'amexio-ng-extensions';

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
import { DatabaseTriggerService } from './services/database-trigger.service';
import { Routes, RouterModule } from '@angular/router';
 
const appRoutes: Routes =
  [
    {
      path: 'Triggers',
      component: DatabaseTriggersComponent,
    },
    {
      path: 'Trigger/:objectname',
      component: DatabaseTriggerComponent,
    }
  ]



@NgModule({
  declarations: [DatabaseTriggerComponent, DatabaseTriggersComponent],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
    /* Core Modules */
    CommonModule,
    FormsModule,
    HttpClientModule,

    /* Amexio Modules */
    AmexioDataModule,
    AmexioWidgetModule,
    AmexioChartsModule,
    AmexioEnterpriseModule,

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
    ProgressBarModule
     
  ],
  providers: [DatabaseTriggerService],
  exports: [DatabaseTriggerComponent, DatabaseTriggersComponent]
})
export class DatabaseTriggerModule { }
