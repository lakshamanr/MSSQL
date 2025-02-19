import { Component, OnInit } from '@angular/core';
import { ProcedureService } from '../../service/procedure.service';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.css']
})
export class ProceduresComponent implements OnInit {

  constructor(private procedureService:ProcedureService) { }

  ngOnInit() {
  }

}
