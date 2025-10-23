import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDefinedDataType } from '../models/UserDefinedDataType';
import { UpsertExtendedPropertyRequest } from '../models/UpsertExtendedPropertyRequest';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
 

@Injectable({
  providedIn: 'root',
})
export class UserDefinedDataTypeService { 
  private baseUrl = '/UserDefinedDataType'; // Adjust based on your API base path
  constructor(
    private http: HttpClient,
    @Inject('API_URL') private primaryUrl: string, private authService: AuthService,
    private router: Router) {
    this.primaryUrl = this.primaryUrl + this.baseUrl
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
  getAllUserDefinedDataTypes(): Observable<UserDefinedDataType[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<UserDefinedDataType[]>(`${this.primaryUrl}/all`, { headers });
  }

  getUserDefinedDataTypeDetails(schemaName: string, typeName: string): Observable<UserDefinedDataType> {
    const headers = this.getAuthHeaders();
    return this.http.get<UserDefinedDataType>(`${this.primaryUrl}/details/${schemaName}/${typeName}`, { headers });
  }

  upsertExtendedProperty(request: UpsertExtendedPropertyRequest): Observable<string> {
    const headers = this.getAuthHeaders();
    return this.http.post<string>(`${this.primaryUrl}/upsert-extended-property`, request, { headers });
  }

}
