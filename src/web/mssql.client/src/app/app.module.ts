import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'primeng/accordion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';   


import { MainPageComponent } from './main-page/main-page.component';
import { DatabasePropertiesComponent } from './database-properties/database-properties.component';
import { DatabaseTablesComponent } from './database-tables/database-tables.component';
import { DatabaseTableComponent } from './database-table/database-table.component';
import { DatabaseViewsComponent } from './database-views/database-views.component';
import { DatabaseViewComponent } from './database-view/database-view.component';
import { DatabaseTableValueFunctionsComponent } from './database-table-value-functions/database-table-value-functions.component';
import { DatabaseTableValueFunctionComponent } from './database-table-value-function/database-table-value-function.component';
import { DatabaseSchemasComponent } from './database-schemas/database-schemas.component';
import { DatabaseSchemaComponent } from './database-schema/database-schema.component';
import { DatabaseRolesComponent } from './database-roles/database-roles.component';
import { DatabaseRoleComponent } from './database-role/database-role.component';
import { DatabaseUsersComponent } from './database-users/database-users.component';
import { DatabaseUserComponent } from './database-user/database-user.component';
import { DatabaseFullTextCatalogsComponent } from './database-full-text-catalogs/database-full-text-catalogs.component';
import { DatabaseFullTextCatalogComponent } from './database-full-text-catalog/database-full-text-catalog.component';
import { DatabaseXMLSchemaCollectionsComponent } from './database-xmlschema-collections/database-xmlschema-collections.component';
import { DatabaseXMLSchemaCollectionComponent } from './database-xmlschema-collection/database-xmlschema-collection.component';
import { DatabaseStroreProceduresComponent } from './database-strore-procedures/database-strore-procedures.component';
import { DatabaseStroreProcedureComponent } from './database-strore-procedure/database-strore-procedure.component';
import { DatabaseTriggersComponent } from './database-triggers/database-triggers.component';
import { DatabaseTriggerComponent } from './database-trigger/database-trigger.component';
import { DatabaseServerPropertiesComponent } from './database-server-properties/database-server-properties.component';
import { DatabaseScalarValueFunctionsComponent } from './database-scalar-value-functions/database-scalar-value-functions.component';
import { DatabaseScalarValueFunctionComponent } from './database-scalar-value-function/database-scalar-value-function.component';
import { DatabaseUserDefinedDataTypesComponent } from './database-user-defined-data-types/database-user-defined-data-types.component';
import { DatabaseUserDefinedDataTypeComponent } from './database-user-defined-data-type/database-user-defined-data-type.component';


import { SplitterModule } from 'primeng/splitter';
import { FieldsetModule } from 'primeng/fieldset';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DatabasePropertiesComponent,
    DatabaseTablesComponent,
    DatabaseTableComponent,
    DatabaseViewsComponent,
    DatabaseViewComponent,
    DatabaseTableValueFunctionsComponent,
    DatabaseTableValueFunctionComponent,
    DatabaseSchemasComponent,
    DatabaseSchemaComponent,
    DatabaseRolesComponent,
    DatabaseRoleComponent,
    DatabaseUsersComponent,
    DatabaseUserComponent,
    DatabaseFullTextCatalogsComponent,
    DatabaseFullTextCatalogComponent,
    DatabaseXMLSchemaCollectionsComponent,
    DatabaseXMLSchemaCollectionComponent,
    DatabaseStroreProceduresComponent,
    DatabaseStroreProcedureComponent,
    DatabaseTriggersComponent,
    DatabaseTriggerComponent,
    DatabaseServerPropertiesComponent, 
    DatabaseScalarValueFunctionsComponent,
    DatabaseScalarValueFunctionComponent,
    DatabaseUserDefinedDataTypesComponent,
    DatabaseUserDefinedDataTypeComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    AccordionModule,
    SplitterModule,
    ScrollPanelModule,
    ToolbarModule,
    FieldsetModule,
    CardModule,
    TableModule,
    PanelModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule
  ],
  providers: [provideAnimations()  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
