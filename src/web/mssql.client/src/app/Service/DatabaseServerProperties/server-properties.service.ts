import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { DatabaseServerProperties } from '../../Model/databaseServerProperties/database-server-properties';
@Injectable({
  providedIn: 'root'
})
export class ServerPropertiesService {
 
  constructor(private http: HttpClient) {}

  getSqlServerProperties(): Observable<DatabaseServerProperties> {
    return this.http.get<DatabaseServerProperties>('MSSQL/GetDatabaserServiceProperties');
  }
 
}
