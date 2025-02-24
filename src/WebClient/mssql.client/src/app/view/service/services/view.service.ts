import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViewDetails, ViewMetaData } from '../../model/view.model';
 
@Injectable({
  providedIn: 'root'
})
export class ViewService {
  private baseUrl = 'http://localhost:5000/View'; // Adjust the URL as per your backend

  constructor(private http: HttpClient) {}

  getAllViewData(): Observable<ViewDetails[]> {
    return this.http.get<ViewDetails[]>(`${this.baseUrl}/GetAllViewData`);
  }

  getViewMetaData(viewname: string): Observable<ViewMetaData> {
    return this.http.get<ViewMetaData>(`${this.baseUrl}/GetViewMetaData${viewname}`);
  }
}
