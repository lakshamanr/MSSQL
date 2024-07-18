import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-database-properties',
  templateUrl: './database-properties.component.html',
  styleUrl: './database-properties.component.css'
})
export class DatabasePropertiesComponent {
  public forecasts: WeatherForecast[] = [];

  constructor(private http: HttpClient)
  {

  }
  ngOnInit() {
    this.getForecasts();
   }
 
   getForecasts() {
     this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
       (result) => {
         this.forecasts = result;
       },
       (error) => {
         console.error(error);
       }
     );
   }
}

