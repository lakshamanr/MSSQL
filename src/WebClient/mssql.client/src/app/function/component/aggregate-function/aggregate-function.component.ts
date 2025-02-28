import { Component, OnInit } from '@angular/core';
import { AggregateFunctionService } from '../../services/aggregate-function.service';

@Component({
  selector: 'app-aggregate-function',
  templateUrl: './aggregate-function.component.html',
  styleUrls: ['./aggregate-function.component.css']
})
export class AggregateFunctionComponent implements OnInit {

  constructor(private aggregateFunctionService : AggregateFunctionService) { }

  ngOnInit() {
  }

}
