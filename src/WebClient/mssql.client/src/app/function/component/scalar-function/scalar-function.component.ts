import { Component, OnInit } from '@angular/core';
import { ScalarFunctionService } from '../../services/scalar-function.service';
import { SqlFunctionMetadata } from '../../model/SqlFunctionMetadata';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-scalar-function',
  templateUrl: './scalar-function.component.html',
  styleUrls: ['./scalar-function.component.css']
})
export class ScalarFunctionComponent implements OnInit {

  functionMetadata: SqlFunctionMetadata;
  selectedFunction: string;
  constructor(
    private route: ActivatedRoute,
    private scalarFunctionService: ScalarFunctionService,
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
