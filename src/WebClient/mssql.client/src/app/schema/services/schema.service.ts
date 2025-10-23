import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SchemaMetadata } from '../models/schema-metadata';
import { SchemaDescription } from '../models/schema-description';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SchemaService {
 
  constructor(private http: HttpClient,
    @Inject('API_URL') private primaryUrl: string,
    @Inject('ANOTHER_URL') private secondaryUrl: string, private authService: AuthService,
    private router: Router) {
    this.primaryUrl = `${this.primaryUrl}/Schema`;
    this.secondaryUrl = `${this.secondaryUrl}/Schema`;
  }


  getAllSchemas(): Observable<SchemaDescription[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<SchemaDescription[]>(`${this.primaryUrl}`, { headers });
  }

  getSchemaMetadata(schemaName: string): Observable<SchemaMetadata> {
    const headers = this.getAuthHeaders();
    return this.http.get<SchemaMetadata>(`${this.primaryUrl}/metadata/${schemaName}`, {headers});
  }
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
