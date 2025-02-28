import { Component, OnInit } from '@angular/core';
import { AggregateFunctionService } from '../../services/aggregate-function.service';

@Component({
  selector: 'app-aggregate-functions',
  templateUrl: './aggregate-functions.component.html',
  styleUrls: ['./aggregate-functions.component.css']
})
export class AggregateFunctionsComponent implements OnInit {

  constructor(private aggregateFunctionService : AggregateFunctionService) { }

  ngOnInit() {
  }

}
