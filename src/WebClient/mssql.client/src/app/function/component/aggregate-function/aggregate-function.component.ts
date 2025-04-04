import { Component, OnInit } from '@angular/core';
import { AggregateFunctionService } from '../../services/aggregate-function.service';
import { SqlFunctionMetadata } from '../../model/SqlFunctionMetadata';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aggregate-function',
  templateUrl: './aggregate-function.component.html',
  styleUrls: ['./aggregate-function.component.css']
})
export class AggregateFunctionComponent implements OnInit {


  functionMetadata: SqlFunctionMetadata;
  selectedFunction: string;
  constructor(private route: ActivatedRoute, private aggregateFunctionService: AggregateFunctionService) { }


 
  ngOnInit() {
    this.selectedFunction = this.route.snapshot.params.objectname;
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
