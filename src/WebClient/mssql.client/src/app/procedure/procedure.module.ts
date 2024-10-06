import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProceduresComponent } from './components/procedures/procedures.component';
import { ProcedureComponent } from './components/procedure/procedure.component';



@NgModule({
  declarations: [ProceduresComponent, ProcedureComponent],
  imports: [
    CommonModule
  ]
})
export class ProcedureModule { }
