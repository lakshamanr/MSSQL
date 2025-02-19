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
import { TreeDragDropService, MessageService } from 'primeng/api'; 
import { DatabaseMetadataService } from './service/database-metadata.service';
import { ObjectTypeItemComponent } from './components/object-type-item/object-type-item.component';
import { DatabaseDetailsComponent } from './components/database-details/database-details.component';
 



@NgModule({
  declarations: [DatabaseDetailsComponent,ObjectTypeItemComponent],
  imports: [
    CommonModule,
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
  providers: [TreeDragDropService, MessageService,DatabaseMetadataService],
  exports:[DatabaseDetailsComponent]
})
export class DatabaseModule { }
