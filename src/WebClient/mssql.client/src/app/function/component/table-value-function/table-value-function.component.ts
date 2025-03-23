import { Component, OnInit } from '@angular/core';
import { TableValueFunctionService } from '../../services/table-value-function.service';
import { SqlFunctionMetadata } from '../../model/SqlFunctionMetadata';

@Component({
  selector: 'app-table-value-function',
  templateUrl: './table-value-function.component.html',
  styleUrls: ['./table-value-function.component.css']
})
export class TableValueFunctionComponent implements OnInit {

  functionMetadata: SqlFunctionMetadata;
  selectedFunction: string = 'dbo.ufnGetContactInformation';
 
  constructor(private tableValueFunctionService : TableValueFunctionService) { }

  ngOnInit() { 
    this.fetchFunctionMetadata();
  } 
  fetchFunctionMetadata(): void {
    if (this.selectedFunction) {
      this.tableValueFunctionService.getFunctionMetadata(this.selectedFunction).subscribe((data) => {
        this.functionMetadata = data;
      });
    }
  }

  upsertFunctionDescription(): void {
    const schemaName = 'dbo';
    const description = 'Updated function description';
    this.tableValueFunctionService.upsertFunctionDescription(schemaName, this.selectedFunction, description).subscribe(() => {
      alert('Description updated successfully!');
    });
  }
}
