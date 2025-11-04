import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
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

/* ===== Other Third-Party Modules ===== */
import { ProgressBarModule } from 'angular-progress-bar';

/* ===== Components & Services ===== */
import { ViewComponent } from './components/view/view.component';
import { ViewsComponent } from './components/views/views.component';
import { ViewService } from './service/services/view.service';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const routes: Routes =
  [
    { path: 's', component: ViewsComponent },
    { path: ':objectname', component: ViewComponent }
  ]


@NgModule({
  declarations: [
    ViewComponent,
    ViewsComponent
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

    /* Other Third-Party Modules */
    ProgressBarModule
  ],
  providers: [ViewService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // ✅ Keep this for custom elements
})
export class ViewModule { }
