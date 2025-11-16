import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XmlSchemaListComponent } from './component/xml-schema-list/xml-schema-list.component';
import { XmlSchemaDetailsComponent } from './component/xml-schema-details/xml-schema-details.component';
import { XmlSchemaService } from './services/xml-schema.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes =
  [
    { path: 's', component: XmlSchemaListComponent },
    { path: ':objectname', component: XmlSchemaDetailsComponent }
  ]



@NgModule({
  declarations:
    [
      XmlSchemaListComponent,
      XmlSchemaDetailsComponent
    ],
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
    ProgressBarModule
  ],
  providers: [XmlSchemaService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class XmlSchemaModule { }
