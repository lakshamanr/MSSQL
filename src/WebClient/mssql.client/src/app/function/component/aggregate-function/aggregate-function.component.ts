import { Component, OnInit } from '@angular/core';
import { AggregateFunctionService } from '../../services/aggregate-function.service';

@Component({
  selector: 'app-aggregate-function',
  templateUrl: './aggregate-function.component.html',
  styleUrls: ['./aggregate-function.component.css']
})
export class AggregateFunctionComponent implements OnInit {


  functionMetadata: any;
  selectedFunction: string = 'dbo.ufnGetContactInformation';
  constructor(private aggregateFunctionService: AggregateFunctionService) { }


 
  ngOnInit() {
    this.fetchFunctionMetadata();
  }
  fetchFunctionMetadata(): void {
    if (this.selectedFunction) {
      this.aggregateFunctionService.getFunctionMetadata(this.selectedFunction).subscribe((data) => {
        this.functionMetadata = data;
      });
    }
  }

  upsertFunctionDescription(): void {
    const schemaName = 'dbo';
    const description = 'Updated function description';
    this.aggregateFunctionService.upsertFunctionDescription(schemaName, this.selectedFunction, description).subscribe(() => {
      alert('Description updated successfully!');
    });
  }

}
