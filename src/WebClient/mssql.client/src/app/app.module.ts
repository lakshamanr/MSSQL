import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AuthModule } from './auth/auth.module';
import { AuthInterceptor } from './auth/interceptors/auth.interceptor';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { TablesComponent } from './table/components/tables/tables.component';
import { TableComponent } from './table/components/table/table.component';
import { ProceduresComponent } from './procedure/components/procedures/procedures.component';
import { ProcedureComponent } from './procedure/components/procedure/procedure.component';
import { ViewsComponent } from './view/components/views/views.component';
import { ViewComponent } from './view/components/view/view.component';
import { AggregateFunctionsComponent } from './function/component/aggregate-functions/aggregate-functions.component';
import { AggregateFunctionComponent } from './function/component/aggregate-function/aggregate-function.component';
import { ScalarFunctionsComponent } from './function/component/scalar-functions/scalar-functions.component';
import { ScalarFunctionComponent } from './function/component/scalar-function/scalar-function.component';
import { TableValueFunctionsComponent } from './function/component/table-value-functions/table-value-functions.component';
import { TableValueFunctionComponent } from './function/component/table-value-function/table-value-function.component';
import { DatabaseTriggersComponent } from './Triggers/components/database-triggers/database-triggers.component';
import { DatabaseTriggerComponent } from './Triggers/components/database-trigger/database-trigger.component';
import { SchemasComponent } from './schema/components/schemas/schemas.component';
import { SchemaComponent } from './schema/components/schema/schema.component';
import { XmlSchemaListComponent } from './XmlSchema/component/xml-schema-list/xml-schema-list.component';
import { XmlSchemaDetailsComponent } from './XmlSchema/component/xml-schema-details/xml-schema-details.component';
import { UserDefinedDataTypesComponent } from './UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component';
import { UserDefinedDataTypeComponent } from './UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component';
import { DatabaseDetailsComponent } from './database/components/database-details/database-details.component';
import { SharedModule } from './shared/shared.module';

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
//const appRoutes: Routes = [
//  { path: 'login', component: LoginComponent },
//  { path: '', redirectTo: '/', pathMatch: 'full' }
//];

const appRoutes: Routes = [
  // Login route (public, no guard, no layout)
  {
    path: 'login',
    component: LoginComponent
  },

  // Main protected area with child routes
  {
    path: '',
    component: MainPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'Tables', component: TablesComponent },
      { path: 'Table/:objectname', component: TableComponent },
      { path: 'Storeprocedures', component: ProceduresComponent },
      { path: 'Storeprocedure/:objectname', component: ProcedureComponent },
      { path: 'Views', component: ViewsComponent },
      { path: 'View/:objectname', component: ViewComponent },
      { path: 'AggregateFunctions', component: AggregateFunctionsComponent },
      { path: 'AggregateFunction/:objectname', component: AggregateFunctionComponent },
      { path: 'ScalarFunctions', component: ScalarFunctionsComponent },
      { path: 'ScalarFunction/:objectname', component: ScalarFunctionComponent },
      { path: 'TableValueFunctions', component: TableValueFunctionsComponent },
      { path: 'TableValueFunction/:objectname', component: TableValueFunctionComponent },
      { path: 'Triggers', component: DatabaseTriggersComponent },
      { path: 'Trigger/:objectname', component: DatabaseTriggerComponent },
      { path: 'Schemas', component: SchemasComponent },
      { path: 'Schema/:objectname', component: SchemaComponent },
      { path: 'XmlSchemas', component: XmlSchemaListComponent },
      { path: 'XmlSchema/:objectname', component: XmlSchemaDetailsComponent },
      { path: 'UserDefinedDataTypes', component: UserDefinedDataTypesComponent },
      { path: 'UserDefinedDataType/:objectname', component: UserDefinedDataTypeComponent },
      { path: 'Database', component: DatabaseDetailsComponent },
      { path: '', redirectTo: 'Database', pathMatch: 'full' }
    ]
  },

  // Fallback
  { path: '**', redirectTo: '' }
];


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

    // Shared Module
    SharedModule,

    // Feature Modules (these have their own routes)
    ViewModule,
    TablesModule,
    DatabaseModule,
    ProcedureModule,
    FunctionModule,
    UserDefinedDataTypesModule,
    DatabaseTriggerModule,
    XmlSchemaModule,
    SchemasModule,
    AuthModule,

    // Routing - MUST BE LAST
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    TreeDragDropService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
