import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(
    @Inject('API_URL') private apiUrl: string,
    @Inject('ANOTHER_URL') private anotherUrl: string)
  {
  }
}
