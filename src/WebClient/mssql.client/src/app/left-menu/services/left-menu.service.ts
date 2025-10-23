import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LeftMenuService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private primaryUrl: string,
    @Inject('ANOTHER_URL') private secondaryUrl: string,
    private authService: AuthService,
    private router: Router
  ) { }

  loadLeftMenuData(): Observable<any> {
    const primaryUrl = `${this.primaryUrl}/LeftMenu/left-menu`;
    const secondaryUrl = 'LeftMenu/left-menu'; // Fallback URL
    const headers = this.getAuthHeaders();
    return this.http.get<any>(primaryUrl, {headers}).pipe(
      catchError((error) => {
        console.error('Primary URL failed, trying secondary URL:', error);
        return this.http.get<any>(secondaryUrl).pipe(
          catchError((secondaryError) => {
            console.error('Both primary and secondary URLs failed:', secondaryError);
            return of(null); // Return a safe fallback
          })
        );
      })
    );
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
