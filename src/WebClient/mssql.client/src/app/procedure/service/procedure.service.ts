import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  constructor() { }

  public getProcedures():string{
    return "Hello from Procedure Service";
  }
}
