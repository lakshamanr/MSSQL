import { NgModule } from '@angular/core';
import { ProceduresComponent } from './components/procedures/procedures.component';
import { ProcedureComponent } from './components/procedure/procedure.component';

import { ProcedureService } from './service/procedure.service';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AmexioDataModule, AmexioWidgetModule, AmexioChartsModule, AmexioEnterpriseModule } from 'amexio-ng-extensions'; 
import { AccordionModule } from 'primeng/accordion';
import { TreeModule } from 'primeng/tree';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { TabViewModule } from 'primeng/tabview';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ProgressBarModule } from 'angular-progress-bar';
import { DialogModule } from 'primeng/dialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProceduresComponent, ProcedureComponent],
  imports: [
    CommonModule,
    HttpClientModule, 
        BrowserModule,
        FormsModule,
        AmexioDataModule,
        AmexioWidgetModule,
        AmexioChartsModule,
        AmexioEnterpriseModule,
        AccordionModule,
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
    providers:[ProcedureService],
    exports:[ProceduresComponent, ProcedureComponent]
})
export class ProcedureModule { }
