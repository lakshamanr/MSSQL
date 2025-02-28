import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
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
import { ViewComponent } from './components/view/view.component';
import { ViewsComponent } from './components/views/views.component';
import { ViewService } from './service/services/view.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ViewComponent,ViewsComponent],
  imports: [
        /* Core Modules */
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpClientModule, 
        AmexioDataModule,
        AmexioWidgetModule,
        AmexioChartsModule,
        AmexioEnterpriseModule,
        AccordionModule,
        TableModule,
        TreeModule,
        ToastModule,
        ButtonModule,
        ContextMenuModule,
        TabViewModule,
        CodeHighlighterModule,
        BreadcrumbModule
  ],
  providers: [ViewService],
  exports:[]
})
export class ViewModule { }
