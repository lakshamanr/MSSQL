import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Third-party UI Libraries
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { AngularSplitModule } from 'angular-split';
import { PrismModule } from '@ngx-prism/core';

// PrimeNG Modules
import { AccordionModule } from 'primeng/accordion';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MessageService } from 'primeng/api';
import { ProgressBarModule } from 'angular-progress-bar';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TreeModule } from 'primeng/tree';
import { TreeDragDropService } from 'primeng/api';

// Amexio Modules
import { AmexioChartsModule, AmexioDataModule, AmexioEnterpriseModule, AmexioWidgetModule } from 'amexio-ng-extensions';

// NGX-UI-Loader
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderConfig } from 'ngx-ui-loader';

// Routing
import { Routes, RouterModule } from '@angular/router';

// Application Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { MainPageComponent } from './ui/main-page/main-page.component';
import { LeftmenuComponent } from './left-menu/components/leftmenu/leftmenu.component';
import { DatabaseSelectorComponent } from './database/components/database-selector/database-selector.component';
// Feature Modules
import { TablesModule } from './table/tables.module';
import { DatabaseModule } from './database/database.module';
import { ProcedureModule } from './procedure/procedure.module';
import { FunctionModule } from './function/function.module';
import { ViewModule } from './view/views.module';
import { UserDefinedDataTypesModule } from './UserDefinedDataType/user-defined-data-types.module';
import { DatabaseTriggerModule } from './Triggers/database-trigger.module';
import { XmlSchemaModule } from './XmlSchema/xml-schema.module';
import { SchemasModule } from './schema/schemas.module';


// NGX-UI-Loader Configuration
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#1c749a',
  bgsOpacity: 0.7,
  bgsPosition: 'center-center',
  bgsSize: 80,
  bgsType: 'ball-spin-clockwise',
  blur: 5,
  delay: 0,
  fgsColor: '#1c749a',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'ball-spin-clockwise',
  gap: 10,
  logoPosition: 'center-center',
  logoSize: 120,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: 'red',
  pbDirection: 'ltr',
  pbThickness: 1,
  hasProgressBar: true,
  text: 'Loading',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  maxTime: -1,
  minTime: 300
};

// Application Routes
const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    LeftmenuComponent,
    DatabaseSelectorComponent, 
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // Amexio Modules
    AmexioDataModule,
    AmexioWidgetModule,
    AmexioChartsModule,
    AmexioEnterpriseModule,

    // PrimeNG Modules
    AccordionModule,
    BreadcrumbModule,
    ButtonModule,
    CodeHighlighterModule,
    ContextMenuModule,
    TableModule,
    TabViewModule,
    ToastModule,
    TreeModule,

    // Third-Party UI Libraries
    NgbModule,
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
    AngularMultiSelectModule,
    AngularSplitModule.forRoot(),
    PrismModule,
    ProgressBarModule,

    // NGX-UI-Loader
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule,

    // Feature Modules
    ViewModule,
    TablesModule,
    DatabaseModule,
    ProcedureModule,
    FunctionModule,
    UserDefinedDataTypesModule,
    DatabaseTriggerModule,
    XmlSchemaModule,
    SchemasModule,
    // Routing
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    TreeDragDropService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
