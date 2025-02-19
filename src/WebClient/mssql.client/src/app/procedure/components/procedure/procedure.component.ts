import { Component, OnInit } from '@angular/core';
import { ProcedureService } from '../../service/procedure.service';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent implements OnInit {

public storeProcedure:string="";
  constructor(private procedureService:ProcedureService) { }

  ngOnInit() {
  }

}
