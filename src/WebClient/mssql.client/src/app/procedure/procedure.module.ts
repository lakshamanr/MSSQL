import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProceduresComponent } from './components/procedures/procedures.component';
import { ProcedureComponent } from './components/procedure/procedure.component';
import { ProcedureService } from './service/procedure.service';

/* ===== Amexio Modules ===== */
import { AmexioDataModule, AmexioWidgetModule, AmexioChartsModule, AmexioEnterpriseModule } from 'amexio-ng-extensions';

/* ===== PrimeNG Modules ===== */
import { AccordionModule } from 'primeng/accordion';
import { TreeModule } from 'primeng/tree';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { TabViewModule } from 'primeng/tabview';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';

/* ===== Other Third-Party Modules ===== */
import { ProgressBarModule } from 'angular-progress-bar';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes =
  [
    {
      path: 'Storeprocedures',
      component: ProceduresComponent,
    },
    {
      path: 'Storeprocedure/:objectname',
      component: ProcedureComponent,
    } 
  ]


@NgModule({
  declarations: [
    ProceduresComponent,
    ProcedureComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
    /* Core Modules */
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,

    /* Amexio Modules */
    AmexioDataModule,
    AmexioWidgetModule,
    AmexioChartsModule,
    AmexioEnterpriseModule,

    /* PrimeNG Modules */
    AccordionModule,
    TreeModule,
    ToastModule,
    ContextMenuModule,
    TabViewModule,
    CodeHighlighterModule,
    BreadcrumbModule,
    ButtonModule,
    DialogModule,
    InputTextareaModule,
    /* Other Third-Party Modules */
    ProgressBarModule
  ],
  providers: [ProcedureService],
  exports: [
    ProceduresComponent,
    ProcedureComponent
  ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],  // ✅ Add CUSTOM_ELEMENTS_SCHEMA
})
export class ProcedureModule { }
