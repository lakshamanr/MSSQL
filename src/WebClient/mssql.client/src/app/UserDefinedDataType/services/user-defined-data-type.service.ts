import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDefinedDataType } from '../models/UserDefinedDataType';
import { UpsertExtendedPropertyRequest } from '../models/UpsertExtendedPropertyRequest';


@Injectable({
  providedIn: 'root',
})
export class UserDefinedDataTypeService {
  private baseUrl = '/UserDefinedDataType'; // Adjust based on your API base path
  constructor(
    private http: HttpClient,
    @Inject('API_URL') private primaryUrl: string) {
    this.primaryUrl = this.primaryUrl + this.baseUrl
  }

  getAllUserDefinedDataTypes(): Observable<UserDefinedDataType[]> {
    return this.http.get<UserDefinedDataType[]>(`${this.primaryUrl}/all`);
  }

  getUserDefinedDataTypeDetails(schemaName: string, typeName: string): Observable<UserDefinedDataType> {
    return this.http.get<UserDefinedDataType>(`${this.primaryUrl}/details/${schemaName}/${typeName}`);
  }

  upsertExtendedProperty(request: UpsertExtendedPropertyRequest): Observable<string> {
    return this.http.post<string>(`${this.primaryUrl}/upsert-extended-property`, request);
  }

}
