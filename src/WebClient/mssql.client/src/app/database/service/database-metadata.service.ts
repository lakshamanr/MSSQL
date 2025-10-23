import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DatabaseMetaData } from '../models/DatabaseMetaData';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
 
 

@Injectable({
  providedIn: 'root'
})
export class DatabaseMetadataService {
  constructor(private http: HttpClient, 
              @Inject('API_URL') private primaryUrl: string,
    @Inject('ANOTHER_URL') private secondaryUrl: string, 
    private authService: AuthService,
    private router: Router) { }

  getDatabaseMetaData(): Observable<DatabaseMetaData> {
    const primaryUrl = `${this.primaryUrl}/Database/database-meta-data`;
    const secondaryUrl = 'Database/database-meta-data';
    const headers = this.getAuthHeaders();
    return this.http.get<DatabaseMetaData>(primaryUrl, { headers }).pipe(
      catchError((primaryError) => {
        console.error('Primary URL failed, trying secondary URL:', primaryError);
        return this.http.get<DatabaseMetaData>(secondaryUrl, { headers }).pipe(
          catchError((secondaryError) => {
            console.error('Secondary URL also failed:', secondaryError);
            return of(null as DatabaseMetaData);
          })
        );
      })
    );
  }
  changeDatabase(databaseName: string) {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.primaryUrl}/Database/ChangeDatabase`, { databaseName }, { headers });
  }
  // Get list of available databases
  getDatabases(): Observable<string[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<string[]>(`${this.primaryUrl}/Database/list`, { headers });
  }
  // Get the currently active database
  getCurrentDatabase(): Observable<{ database: string }> {
    const headers = this.getAuthHeaders();
    return this.http.get<{ database: string }>(`${this.primaryUrl}/Database/current`, { headers });
  }

  /**
 * Get HTTP headers with bearer token
 */
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return new HttpHeaders();
    }
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
 
   
}
