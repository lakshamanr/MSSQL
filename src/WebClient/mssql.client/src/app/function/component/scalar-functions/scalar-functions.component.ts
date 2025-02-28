import { Component, OnInit } from '@angular/core';
import { ScalarFunctionService } from '../../services/scalar-function.service';

@Component({
  selector: 'app-scalar-functions',
  templateUrl: './scalar-functions.component.html',
  styleUrls: ['./scalar-functions.component.css']
})
export class ScalarFunctionsComponent implements OnInit {
  
  functionDescriptions: { [key: string]: string } = {};
  constructor(private scalarFunctionService: ScalarFunctionService) { }

  ngOnInit() {
    this.loadFunctionDescriptions();
  }
  loadFunctionDescriptions(): void {
    this.scalarFunctionService.getScalarFunctionDescriptions().subscribe((data) => {
      this.functionDescriptions = data;
    });
  }
}
