import { Component, OnInit } from '@angular/core';
import { TableValueFunctionService } from '../../services/table-value-function.service';

@Component({
  selector: 'app-table-value-functions',
  templateUrl: './table-value-functions.component.html',
  styleUrls: ['./table-value-functions.component.css']
})
export class TableValueFunctionsComponent implements OnInit {

  constructor(private tableValueFunctionService : TableValueFunctionService) { }

  ngOnInit() {
  }

}
