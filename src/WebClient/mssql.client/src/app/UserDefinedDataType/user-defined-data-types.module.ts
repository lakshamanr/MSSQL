import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { FormsModule } from '@angular/forms'; // 
import { UserDefinedDataTypeComponent } from './components/user-defined-data-type/user-defined-data-type.component';
import { UserDefinedDataTypesComponent } from './components/user-defined-data-types/user-defined-data-types.component';
import { UserDefinedDataTypeService } from './services/user-defined-data-type.service';


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
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [UserDefinedDataTypeComponent,UserDefinedDataTypesComponent ], 
  imports: [
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
  providers: [UserDefinedDataTypeService],
  exports:[UserDefinedDataTypeComponent,UserDefinedDataTypesComponent],
})
export class UserDefinedDataTypesModule { }
