import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SchemaMetadata } from '../models/schema-metadata';
import { SchemaDescription } from '../models/schema-description';


@Injectable({
  providedIn: 'root'
})
export class SchemaService {
 
  constructor(private http: HttpClient,
    @Inject('API_URL') private primaryUrl: string,
    @Inject('ANOTHER_URL') private secondaryUrl: string) {
    this.primaryUrl = `${this.primaryUrl}/Schema`;
    this.secondaryUrl = `${this.secondaryUrl}/Schema`;
  }


  getAllSchemas(): Observable<SchemaDescription[]> {
    return this.http.get<SchemaDescription[]>(`${this.primaryUrl}`);
  }

  getSchemaMetadata(schemaName: string): Observable<SchemaMetadata> {
    return this.http.get<SchemaMetadata>(`${this.primaryUrl}/metadata/${schemaName}`);
  }
}
