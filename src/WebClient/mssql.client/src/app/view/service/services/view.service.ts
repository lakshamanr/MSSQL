import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViewDetails, ViewMetaData } from '../../model/view.model';
 
@Injectable({
  providedIn: 'root'
})
export class ViewService {
    [x: string]: any;
 
  constructor(
    @Inject('API_URL') private primaryUrl: string,
    @Inject('ANOTHER_URL') private secondaryUrl: string,
    private http: HttpClient) {
  }

  getAllViewData(): Observable<ViewDetails[]> {
    return this.http.get<ViewDetails[]>(`${this.primaryUrl}/View/GetAllViewData`);
  }

  getViewMetaData(viewname: string): Observable<ViewMetaData> {
    return this.http.get<ViewMetaData>(`${this.primaryUrl}/View/GetViewMetaData${viewname}`);
  }
}
