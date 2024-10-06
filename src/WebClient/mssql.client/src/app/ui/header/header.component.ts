 
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  onChangeServer(event: Event): void {
    const selectedServer = (event.target as HTMLSelectElement).value;
    console.log('Selected SQL Server:', selectedServer);
    // Handle the change as needed
  }
}
