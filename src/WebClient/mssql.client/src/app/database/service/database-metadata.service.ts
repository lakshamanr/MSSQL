import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DatabaseMetaData } from '../models/DatabaseMetaData';
 
 

@Injectable({
  providedIn: 'root'
})
export class DatabaseMetadataService {
  constructor(private http: HttpClient, 
              @Inject('API_URL') private primaryUrl: string,
              @Inject('ANOTHER_URL') private secondaryUrl: string) {}

  getDatabaseMetaData(): Observable<DatabaseMetaData> {
    const primaryUrl = `${this.primaryUrl}/Database/database-meta-data`;
    const secondaryUrl = 'Database/database-meta-data';

    return this.http.get<DatabaseMetaData>(primaryUrl).pipe(
      catchError((primaryError) => {
        console.error('Primary URL failed, trying secondary URL:', primaryError);
        return this.http.get<DatabaseMetaData>(secondaryUrl).pipe(
          catchError((secondaryError) => {
            console.error('Secondary URL also failed:', secondaryError);
            return of(null as DatabaseMetaData);
          })
        );
      })
    );
  }
  changeDatabase(databaseName: string) {
    return this.http.post(`${this.primaryUrl}/Database/ChangeDatabase`, { databaseName });
  }
  // Get list of available databases
  getDatabases(): Observable<string[]> {
    return this.http.get<string[]>(`${this.primaryUrl}/Database/list`);
  }

  // Get the currently active database
  getCurrentDatabase(): Observable<{ database: string }> {
    return this.http.get<{ database: string }>(`${this.primaryUrl}/Database/current`);
  }

   
}
