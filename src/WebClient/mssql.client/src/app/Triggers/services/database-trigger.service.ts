import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatabaseTrigger } from '../models/database-trigger.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseTriggerService {
 
  constructor(private http: HttpClient,
    @Inject('API_URL') private primaryUrl: string,
    @Inject('ANOTHER_URL') private secondaryUrl: string) {
      this.primaryUrl = `${this.primaryUrl}/DatabaseTrigger`;
    this.secondaryUrl = `${this.secondaryUrl}/DatabaseTrigger`;
  }



  getAllTriggers(): Observable<DatabaseTrigger[]> {
    return this.http.get<DatabaseTrigger[]>(`${this.primaryUrl}`);
  }

  getTriggerByName(name: string): Observable<DatabaseTrigger> {
    return this.http.get<DatabaseTrigger>(`${this.primaryUrl}/${name}`);
  }

  mergeTriggerProperty(trigger: DatabaseTrigger): Observable<string> {
    return this.http.post<string>(`${this.primaryUrl}`, trigger);
  }
}
