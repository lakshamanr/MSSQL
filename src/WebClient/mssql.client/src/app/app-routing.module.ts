import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { MainPageComponent } from './ui/main-page/main-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  // Login route (public, no guard, no layout)
  {
    path: 'login',
    component: LoginComponent
  },

  // Main protected area with lazy-loaded child routes
  {
    path: '',
    component: MainPageComponent,
    canActivate: [AuthGuard],
    children: [
      // Singular routes (for detail views)
      { path: 'Table', loadChildren: () => import('./table/tables.module').then(m => m.TablesModule) },
      { path: 'Storeprocedure', loadChildren: () => import('./procedure/procedure.module').then(m => m.ProcedureModule) },
      { path: 'View', loadChildren: () => import('./view/views.module').then(m => m.ViewModule) },
      { path: 'AggregateFunction', loadChildren: () => import('./function/function.module').then(m => m.FunctionModule) },
      { path: 'ScalarFunction', loadChildren: () => import('./function/function.module').then(m => m.FunctionModule) },
      { path: 'TableValueFunction', loadChildren: () => import('./function/function.module').then(m => m.FunctionModule) },
      { path: 'Trigger', loadChildren: () => import('./Triggers/database-trigger.module').then(m => m.DatabaseTriggerModule) },
      { path: 'Schema', loadChildren: () => import('./schema/schemas.module').then(m => m.SchemasModule) },
      { path: 'XmlSchema', loadChildren: () => import('./XmlSchema/xml-schema.module').then(m => m.XmlSchemaModule) },
      { path: 'UserDefinedDataType', loadChildren: () => import('./UserDefinedDataType/user-defined-data-types.module').then(m => m.UserDefinedDataTypesModule) },
      { path: 'Database', loadChildren: () => import('./database/database.module').then(m => m.DatabaseModule) },

      // Plural routes (redirects to list views)
      { path: 'Tables', redirectTo: 'Table/s', pathMatch: 'full' },
      { path: 'Views', redirectTo: 'View/s', pathMatch: 'full' },
      { path: 'Storeprocedures', redirectTo: 'Storeprocedure/s', pathMatch: 'full' },
      { path: 'ScalarFunctions', redirectTo: 'ScalarFunction/s', pathMatch: 'full' },
      { path: 'AggregateFunctions', redirectTo: 'AggregateFunction/s', pathMatch: 'full' },
      { path: 'TableValueFunctions', redirectTo: 'TableValueFunction/s', pathMatch: 'full' },
      { path: 'Triggers', redirectTo: 'Trigger/s', pathMatch: 'full' },
      { path: 'Schemas', redirectTo: 'Schema/s', pathMatch: 'full' },
      { path: 'XmlSchemas', redirectTo: 'XmlSchema/s', pathMatch: 'full' },
      { path: 'UserDefinedDataTypes', redirectTo: 'UserDefinedDataType/s', pathMatch: 'full' },

      { path: '', redirectTo: 'Database', pathMatch: 'full' }
    ]
  },

  // Fallback
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
