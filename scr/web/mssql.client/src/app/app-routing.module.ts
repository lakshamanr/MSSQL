import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

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

const routes: Routes = [
  { path: "Home", component: MainPageComponent },
  { path: "DatabaseServerProperties", component: DatabaseServerPropertiesComponent },
  { path: "DatabaseProperties", component: DatabasePropertiesComponent },
  { path: "DatabaseTables", component: DatabaseTablesComponent },
  { path: "DatabaseTable", component: DatabaseTableComponent },
  { path: "DatabaseViews", component: DatabaseViewsComponent },
  { path: "DatabaseView", component: DatabaseViewComponent },
  { path: "DatabaseStoreProcedures", component: DatabaseStroreProceduresComponent },
  { path: "DatabaseStoreProcedure", component: DatabaseStroreProcedureComponent },
  { path: "DatabaseTableValueFunctions", component: DatabaseTableValueFunctionsComponent },
  { path: "DatabaseTableValueFunction", component: DatabaseTableValueFunctionComponent },
  { path: "DatabaseScalarValueFunctions", component: DatabaseScalarValueFunctionsComponent },
  { path: "DatabaseScalarValueFunction", component: DatabaseScalarValueFunctionComponent },
  { path: "DatabaseTriggers", component: DatabaseTriggersComponent },
  { path: "DatabaseTrigger", component: DatabaseTriggerComponent },
  { path: "DatabaseUserDefinedDataTypes", component: DatabaseUserDefinedDataTypesComponent },
  { path: "DatabaseUserDefinedDataType", component: DatabaseUserDefinedDataTypeComponent },
  { path: "DatabaseXMLSchemaCollections", component: DatabaseXMLSchemaCollectionsComponent },
  { path: "DatabaseXMLSchemaCollection", component: DatabaseXMLSchemaCollectionComponent },
  { path: "DatabaseFullTextCatalogs", component: DatabaseFullTextCatalogsComponent },
  { path: "DatabaseFullTextCatalog", component: DatabaseFullTextCatalogComponent },
  { path: "DatabaseUsers", component: DatabaseUsersComponent },
  { path: "DatabaseUser", component: DatabaseUserComponent },
  { path: "DatabaseRoles", component: DatabaseRolesComponent },
  { path: "DatabaseRole", component: DatabaseRoleComponent },
  { path: "DatabaseSchemas", component: DatabaseSchemasComponent },
  { path: "DatabaseSchema", component: DatabaseSchemaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
