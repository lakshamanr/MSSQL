import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core'; 
import { StoredProcedureInfo } from '../model/StoredProcedureInfo';
import { Observable } from 'rxjs';
import { StoredProcedureMeta } from '../model/StoredProcedureMeta';
import { StoredProcedureDescriptionRequest } from '../model/StoredProcedureDescriptionRequest';
import { ParameterDescriptionRequest } from '../model/ParameterDescriptionRequest';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  private baseUrl = ''; // Update this with actual API URL

  constructor(
      @Inject('API_URL') primaryUrl: string, 
    private http: HttpClient, private authService: AuthService,
    private router: Router) {
      this.baseUrl = primaryUrl +'/StoredProcedure';
    }
    
    
  /**
   * Get all stored procedures.
   */
  getAllStoredProcedures(): Observable<StoredProcedureInfo[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<StoredProcedureInfo[]>(`${this.baseUrl}/AllStoredProcedures`, { headers });
  }

  /**
   * Get metadata of a specific stored procedure.
   * @param storedProcedureName The name of the stored procedure.
   */
  getStoredProcedureMetadata(storedProcedureName: string): Observable<StoredProcedureMeta> {
    const headers = this.getAuthHeaders();
    return this.http.get<StoredProcedureMeta>(`${this.baseUrl}/${storedProcedureName}/metadata`, { headers });
  }

  /**
   * Merge stored procedure description.
   * @param request The request body containing schema name, stored procedure name, and description.
   */
  mergeStoredProcedureDescription(request: StoredProcedureDescriptionRequest): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.post<void>(`${this.baseUrl}/description`, request, { headers });
  }

  /**
   * Merge parameter description of a stored procedure.
   * @param request The request body containing schema name, stored procedure name, parameter name, and description.
   */
  mergeParameterDescription(request: ParameterDescriptionRequest): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.post<void>(`${this.baseUrl}/parameter/description`, request, { headers });
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
