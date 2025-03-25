import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDefinedDataType } from '../models/UserDefinedDataType';
import { UpsertExtendedPropertyRequest } from '../models/UpsertExtendedPropertyRequest';
 

@Injectable({
  providedIn: 'root',
})
export class UserDefinedDataTypeService {
  private apiUrl = 'http://localhost:5000/UserDefinedDataType'; // Change as needed

  constructor(private http: HttpClient) {}

  getAllUserDefinedDataTypes(): Observable<UserDefinedDataType[]> {
    return this.http.get<UserDefinedDataType[]>(`${this.apiUrl}/all`);
  }

  getUserDefinedDataTypeDetails(schemaName: string, typeName: string): Observable<UserDefinedDataType> {
    return this.http.get<UserDefinedDataType>(`${this.apiUrl}/details/${schemaName}/${typeName}`);
  }

  upsertExtendedProperty(request: UpsertExtendedPropertyRequest): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/upsert-extended-property`, request);
  }
}
