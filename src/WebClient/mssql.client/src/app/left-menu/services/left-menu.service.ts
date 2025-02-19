import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeftMenuService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private primaryUrl: string,
    @Inject('ANOTHER_URL') private secondaryUrl: string
  ) { }

  loadLeftMenuData(): Observable<any> {
    const primaryUrl = `${this.primaryUrl}/LeftMenu/left-menu`;
    const secondaryUrl = 'LeftMenu/left-menu'; // Fallback URL

    return this.http.get<any>(primaryUrl).pipe(
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
}
