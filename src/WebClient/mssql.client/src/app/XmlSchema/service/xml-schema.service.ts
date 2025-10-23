import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { XmlSchemaDetails, XmlSchemaReference, XmlSchemaCollection } from '../model/xml-schema.model';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
 

@Injectable({
  providedIn: 'root'
})
export class XmlSchemaService { 
  constructor(private http: HttpClient,
    @Inject('API_URL') private primaryUrl: string,
    @Inject('ANOTHER_URL') private secondaryUrl: string, private authService: AuthService,
    private router: Router) {
    this.primaryUrl = `${this.primaryUrl}/XmlSchema`;
    this.secondaryUrl = `${this.secondaryUrl}/XmlSchema`;
  }



  getXmlSchemaDetails(schemaCollectionName: string): Observable<XmlSchemaDetails> {
    const headers = this.getAuthHeaders();
    return this.http.get<XmlSchemaDetails>(`${this.primaryUrl}/details/${schemaCollectionName}`, {headers});
  }

  getXmlSchemaReferences(schemaCollectionName: string): Observable<XmlSchemaReference[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<XmlSchemaReference[]>(`${this.primaryUrl}/references/${schemaCollectionName}`, { headers });
  }

  getAllXmlSchemaCollections(): Observable<XmlSchemaCollection[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<XmlSchemaCollection[]>(`${this.primaryUrl}/collections`, { headers });
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
