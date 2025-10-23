import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViewDetails, ViewMetaData } from '../../model/view.model';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class ViewService {
    [x: string]: any;
 
  constructor(
    @Inject('API_URL') private primaryUrl: string,
    @Inject('ANOTHER_URL') private secondaryUrl: string,
    private http: HttpClient, private authService: AuthService,
    private router: Router) {
  }

  getAllViewData(): Observable<ViewDetails[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<ViewDetails[]>(`${this.primaryUrl}/View/GetAllViewData`, {headers});
  }

  getViewMetaData(viewname: string): Observable<ViewMetaData> {
    const headers = this.getAuthHeaders();
    return this.http.get<ViewMetaData>(`${this.primaryUrl}/View/GetViewMetaData${viewname}`, { headers });
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
