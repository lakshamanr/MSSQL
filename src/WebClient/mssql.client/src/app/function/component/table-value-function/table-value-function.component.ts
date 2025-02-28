import { Component, OnInit } from '@angular/core';
import { TableValueFunctionService } from '../../services/table-value-function.service';

@Component({
  selector: 'app-table-value-function',
  templateUrl: './table-value-function.component.html',
  styleUrls: ['./table-value-function.component.css']
})
export class TableValueFunctionComponent implements OnInit {

  constructor(private tableValueFunctionService : TableValueFunctionService) { }

  ngOnInit() {
  }

}
