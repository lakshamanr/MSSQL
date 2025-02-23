import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core'; 
import { StoredProcedureInfo } from '../model/StoredProcedureInfo';
import { Observable } from 'rxjs';
import { StoredProcedureMeta } from '../model/StoredProcedureMeta';
import { StoredProcedureDescriptionRequest } from '../model/StoredProcedureDescriptionRequest';
import { ParameterDescriptionRequest } from '../model/ParameterDescriptionRequest';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  private baseUrl = ''; // Update this with actual API URL

  constructor(
      @Inject('API_URL') primaryUrl: string, 
      private http: HttpClient) {
      this.baseUrl = primaryUrl +'/StoredProcedure';
    }
    
    
  /**
   * Get all stored procedures.
   */
  getAllStoredProcedures(): Observable<StoredProcedureInfo[]> {
    return this.http.get<StoredProcedureInfo[]>(`${this.baseUrl}/AllStoredProcedures`);
  }

  /**
   * Get metadata of a specific stored procedure.
   * @param storedProcedureName The name of the stored procedure.
   */
  getStoredProcedureMetadata(storedProcedureName: string): Observable<StoredProcedureMeta> {
    return this.http.get<StoredProcedureMeta>(`${this.baseUrl}/${storedProcedureName}/metadata`);
  }

  /**
   * Merge stored procedure description.
   * @param request The request body containing schema name, stored procedure name, and description.
   */
  mergeStoredProcedureDescription(request: StoredProcedureDescriptionRequest): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/description`, request);
  }

  /**
   * Merge parameter description of a stored procedure.
   * @param request The request body containing schema name, stored procedure name, parameter name, and description.
   */
  mergeParameterDescription(request: ParameterDescriptionRequest): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/parameter/description`, request);
  }
}
