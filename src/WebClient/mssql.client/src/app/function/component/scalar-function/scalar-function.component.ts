import { Component, OnInit } from '@angular/core';
import { ScalarFunctionService } from '../../services/scalar-function.service';
import { SqlFunctionMetadata } from '../../model/SqlFunctionMetadata';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scalar-function',
  templateUrl: './scalar-function.component.html',
  styleUrls: ['./scalar-function.component.css']
})
export class ScalarFunctionComponent implements OnInit {
  
  functionMetadata: SqlFunctionMetadata;
  selectedFunction: string;
  constructor(private route: ActivatedRoute, private scalarFunctionService: ScalarFunctionService) { } 
  ngOnInit() {
    this.selectedFunction = this.route.snapshot.params.objectname;
    this.fetchFunctionMetadata();
  }
  fetchFunctionMetadata(): void {
    if (this.selectedFunction) {
      this.scalarFunctionService.getFunctionMetadata(this.selectedFunction).subscribe((data) => {
        this.functionMetadata = data;
      });
    }
  }

  upsertFunctionDescription(): void {
    const schemaName = 'dbo';
    const description = 'Updated function description';
    this.scalarFunctionService.upsertFunctionDescription(schemaName, this.selectedFunction, description).subscribe(() => {
      alert('Description updated successfully!');
    });
  }
}
