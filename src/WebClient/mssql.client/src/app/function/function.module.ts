import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
/* ===== Other Third-Party Modules ===== */ 
import { AggregateFunctionComponent } from './component/aggregate-function/aggregate-function.component';
import { ScalarFunctionComponent } from './component/scalar-function/scalar-function.component';
import { TableValueFunctionComponent } from './component/table-value-function/table-value-function.component';
import { TableValueFunctionsComponent } from './component/table-value-functions/table-value-functions.component';
import { ScalarFunctionsComponent } from './component/scalar-functions/scalar-functions.component';
import { AggregateFunctionsComponent } from './component/aggregate-functions/aggregate-functions.component';
import { AggregateFunctionService } from './services/aggregate-function.service';
import { ScalarFunctionService } from './services/scalar-function.service';
import { TableValueFunctionService } from './services/table-value-function.service';
import { Routes, RouterModule } from '@angular/router';
import { DatabaseDetailsComponent } from '../database/components/database-details/database-details.component';

/* ===== Components & Services ===== */


const appRoutes: Routes =
  [
    {
      path: 'AggregateFunctions',
      component: AggregateFunctionsComponent,
    },
    {
      path: 'AggregateFunction/:objectname',
      component: AggregateFunctionComponent,
    },
    {
      path: 'ScalarFunctions',
      component: ScalarFunctionsComponent,
    },
    {
      path: 'ScalarFunction/:objectname',
      component: ScalarFunctionComponent,
    },
    {
      path: 'TableValueFunctions',
      component: TableValueFunctionsComponent,
    },
    {
      path: 'TableValueFunction/:objectname',
      component: TableValueFunctionComponent,
    },
  ]




@NgModule({
  declarations: [
    AggregateFunctionComponent,
    ScalarFunctionComponent, 
    TableValueFunctionComponent,
    TableValueFunctionsComponent,
    ScalarFunctionsComponent,
    AggregateFunctionsComponent
  ],
  imports: [
 
    CommonModule,
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

    /* Other Third-Party Modules */
    ProgressBarModule
  ],
  exports: [  
    AggregateFunctionComponent,
    ScalarFunctionComponent, 
    TableValueFunctionComponent,
    TableValueFunctionsComponent,
    ScalarFunctionsComponent,
    AggregateFunctionsComponent],
  providers: [AggregateFunctionService,ScalarFunctionService,TableValueFunctionService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // ✅ Keep this for custom elements
})
export class FunctionModule { }
