import { Component, OnInit } from '@angular/core';
import { ScalarFunctionService } from '../../services/scalar-function.service';

@Component({
  selector: 'app-scalar-function',
  templateUrl: './scalar-function.component.html',
  styleUrls: ['./scalar-function.component.css']
})
export class ScalarFunctionComponent implements OnInit {

  constructor( private scalarFunctionService : ScalarFunctionService) { }

  ngOnInit() {
  }

}
