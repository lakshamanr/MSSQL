import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { FormsModule } from '@angular/forms'; // 
import { UserDefinedDataTypeComponent } from './components/user-defined-data-type/user-defined-data-type.component';
import { UserDefinedDataTypesComponent } from './components/user-defined-data-types/user-defined-data-types.component';
import { UserDefinedDataTypeService } from './services/user-defined-data-type.service';


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
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const routes: Routes =
  [
    { path: 's', component: UserDefinedDataTypesComponent },
    { path: ':objectname', component: UserDefinedDataTypeComponent }
  ]


@NgModule({
  declarations: [UserDefinedDataTypeComponent,UserDefinedDataTypesComponent ], 
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

    /* Other Third-Party Modules */
    ProgressBarModule
  ],
  providers: [UserDefinedDataTypeService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserDefinedDataTypesModule { }
