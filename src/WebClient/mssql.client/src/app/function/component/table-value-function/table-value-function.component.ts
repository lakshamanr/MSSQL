import { Component, OnInit } from '@angular/core';
import { TableValueFunctionService } from '../../services/table-value-function.service';
import { SqlFunctionMetadata } from '../../model/SqlFunctionMetadata';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-table-value-function',
  templateUrl: './table-value-function.component.html',
  styleUrls: ['./table-value-function.component.css']
})
export class TableValueFunctionComponent implements OnInit {

  functionMetadata: SqlFunctionMetadata;
  selectedFunction: string ;

  constructor(
    private route: ActivatedRoute,
    private tableValueFunctionService : TableValueFunctionService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.selectedFunction = this.route.snapshot.params.objectname;

    // Wait for authentication before loading data
    this.authService.isAuthenticated.pipe(
      filter(isAuth => isAuth === true),
      take(1)
    ).subscribe(() => {
      this.fetchFunctionMetadata();
    });
  } 
  fetchFunctionMetadata(): void {
    try {
      if (this.selectedFunction) {
        this.tableValueFunctionService.getFunctionMetadata(this.selectedFunction).subscribe((data) => {
          this.functionMetadata = data;
        });
      }
    } catch (e) {
      alert(e);
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
