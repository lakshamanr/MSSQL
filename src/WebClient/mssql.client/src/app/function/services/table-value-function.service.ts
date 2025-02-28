import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SqlFunctionMetadata } from '../model/SqlFunctionMetadata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableValueFunctionService {
  private baseUrl = '/TableFunction'; // Adjust based on your API base path
  constructor(private http: HttpClient) {}

  /**
   * Retrieves metadata for a specified table-valued function.
   * @param functionName Name of the function.
   * @returns Observable of SqlFunctionMetadata.
   */
  getFunctionMetadata(functionName: string): Observable<SqlFunctionMetadata> {
    return this.http.get<SqlFunctionMetadata>(`${this.baseUrl}/${functionName}`);
  }

  /**
   * Upserts the description of a specified table-valued function.
   * @param schemaName Schema name of the function.
   * @param functionName Name of the function.
   * @param description Description to be upserted.
   * @returns Observable of void.
   */
  upsertFunctionDescription(schemaName: string, functionName: string, description: string): Observable<void> {
    return this.http.post<void>(
      `${this.baseUrl}/description/upsert`,
      null, // No request body, only query parameters
      { params: { schemaName, functionName, description } }
    );
  }

  /**
   * Retrieves descriptions for all table-valued functions.
   * @returns Observable containing a dictionary of function names and their descriptions.
   */
  getFunctionDescriptions(): Observable<{ [key: string]: string }> {
    return this.http.get<{ [key: string]: string }>(`${this.baseUrl}/descriptions`);
  }
}
