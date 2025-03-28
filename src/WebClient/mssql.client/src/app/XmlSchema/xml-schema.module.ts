import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XmlSchemaListComponent } from './component/xml-schema-list/xml-schema-list.component';
import { XmlSchemaDetailsComponent } from './component/xml-schema-details/xml-schema-details.component';
import { XmlSchemaService } from './service/xml-schema.service';
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

 

@NgModule({
  declarations:
    [
      XmlSchemaListComponent,
      XmlSchemaDetailsComponent
    ],
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
    ProgressBarModule
  ],
  providers: [XmlSchemaService],
  exports: [XmlSchemaListComponent, XmlSchemaDetailsComponent], 
})
export class XmlSchemaModule { }
