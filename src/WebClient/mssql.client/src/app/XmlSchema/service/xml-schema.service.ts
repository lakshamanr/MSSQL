import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { XmlSchemaDetails, XmlSchemaReference, XmlSchemaCollection } from '../model/xml-schema.model';
 

@Injectable({
  providedIn: 'root'
})
export class XmlSchemaService { 
  constructor(private http: HttpClient,
    @Inject('API_URL') private primaryUrl: string,
    @Inject('ANOTHER_URL') private secondaryUrl: string) {
    this.primaryUrl = `${this.primaryUrl}/XmlSchema`;
    this.secondaryUrl = `${this.secondaryUrl}/XmlSchema`;
  }



  getXmlSchemaDetails(schemaCollectionName: string): Observable<XmlSchemaDetails> {
    return this.http.get<XmlSchemaDetails>(`${this.primaryUrl}/details/${schemaCollectionName}`);
  }

  getXmlSchemaReferences(schemaCollectionName: string): Observable<XmlSchemaReference[]> {
    return this.http.get<XmlSchemaReference[]>(`${this.primaryUrl}/references/${schemaCollectionName}`);
  }

  getAllXmlSchemaCollections(): Observable<XmlSchemaCollection[]> {
    return this.http.get<XmlSchemaCollection[]>(`${this.primaryUrl}/collections`);
  }
}
