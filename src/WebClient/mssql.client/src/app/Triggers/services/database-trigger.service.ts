import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatabaseTrigger } from '../models/database-trigger.model';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatabaseTriggerService {
 
  constructor(private http: HttpClient,
    @Inject('API_URL') private primaryUrl: string,
    @Inject('ANOTHER_URL') private secondaryUrl: string, private authService: AuthService,
    private router: Router) {
      this.primaryUrl = `${this.primaryUrl}/DatabaseTrigger`;
    this.secondaryUrl = `${this.secondaryUrl}/DatabaseTrigger`;
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
  getAllTriggers(): Observable<DatabaseTrigger[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<DatabaseTrigger[]>(`${this.primaryUrl}`, { headers });
  }

  getTriggerByName(name: string): Observable<DatabaseTrigger> {
    const headers = this.getAuthHeaders();
    return this.http.get<DatabaseTrigger>(`${this.primaryUrl}/${name}`,{ headers });
  }

  mergeTriggerProperty(trigger: DatabaseTrigger): Observable<string> {
    const headers = this.getAuthHeaders();
    return this.http.post<string>(`${this.primaryUrl}`, trigger, { headers });
  }
}
