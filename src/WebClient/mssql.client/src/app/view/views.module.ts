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

/* ===== Other Third-Party Modules ===== */
import { ProgressBarModule } from 'angular-progress-bar';

/* ===== Components & Services ===== */
import { ViewComponent } from './components/view/view.component';
import { ViewsComponent } from './components/views/views.component';
import { ViewService } from './service/services/view.service';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes =
  [
    {
      path: 'Views',
      component: ViewsComponent,
    },
    {
      path: 'View/:objectname',
      component: ViewComponent,
    }
  ]


@NgModule({
  declarations: [
    ViewComponent,
    ViewsComponent
  ],
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

    /* Other Third-Party Modules */
    ProgressBarModule
  ],
  providers: [ViewService],
  exports: [ViewComponent, ViewsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // ✅ Keep this for custom elements
})
export class ViewModule { }
