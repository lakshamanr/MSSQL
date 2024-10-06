import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TableMetadata } from '../models/TableMetadata';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TableService {


  constructor(
    @Inject('API_URL') private primaryUrl: string,
    @Inject('ANOTHER_URL') private secondaryUrl: string,
    private http: HttpClient) {
  }
  loadTableMetadata(tableName: string): Observable<TableMetadata> {
    const primaryUrl = `${this.primaryUrl}/Tables/GetTableMetaData?tableName=${tableName}`;
    const secondaryUrl = `Tables/GetTableMetaData?tableName=${tableName}`;
  
    const primaryRequest = this.http.get<TableMetadata>(primaryUrl).pipe(
      retry(2) // Retry the primary request up to 2 times before failing over
    );
  
    const secondaryRequest = this.http.get<TableMetadata>(secondaryUrl).pipe(
      retry(2) // Optionally retry the secondary request as well
    );
  
    return primaryRequest.pipe(
      catchError((error) => {
        console.error('Primary API URL failed after retries:', error);
        return secondaryRequest.pipe(
          catchError((secondaryError) => {
            console.error('Secondary API URL failed after retries:', secondaryError);
            return of(null); // Handle the error or return a default value
          })
        );
      })
    );
  }
  
}
