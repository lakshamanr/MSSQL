import { Component, OnInit } from '@angular/core';
import { TableValueFunctionService } from '../../services/table-value-function.service';

@Component({
  selector: 'app-table-value-functions',
  templateUrl: './table-value-functions.component.html',
  styleUrls: ['./table-value-functions.component.css']
})
export class TableValueFunctionsComponent implements OnInit {
  public functionDescriptions: { [key: string]: string } = {};
  constructor(private tableValueFunctionService : TableValueFunctionService) { }

  ngOnInit() {
    this.loadFunctionDescriptions();
  }
  loadFunctionDescriptions(): void {
    this.tableValueFunctionService.getTableFunctionDescriptions().subscribe((data) => {
      this.functionDescriptions = data;
    });
  }

}
