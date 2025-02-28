import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AggregateFunctionComponent } from './component/aggregate-function/aggregate-function.component';
import { ScalarFunctionComponent } from './component/scalar-function/scalar-function.component';
import { TableValueFunctionComponent } from './component/table-value-function/table-value-function.component';
import { AggregateFunctionService } from './services/aggregate-function.service';
import { ScalarFunctionService } from './services/scalar-function.service';
import { TableValueFunctionService } from './services/table-value-function.service';
import { TableValueFunctionsComponent } from './component/table-value-functions/table-value-functions.component';
import { ScalarFunctionsComponent } from './component/scalar-functions/scalar-functions.component';
import { AggregateFunctionsComponent } from './component/aggregate-functions/aggregate-functions.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 


@NgModule({
  declarations: [ 
      AggregateFunctionComponent,
      ScalarFunctionComponent, 
      TableValueFunctionComponent,
      TableValueFunctionsComponent,
      ScalarFunctionsComponent,
      AggregateFunctionsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [AggregateFunctionService,ScalarFunctionService,TableValueFunctionService]
})
export class FunctionModule { }
