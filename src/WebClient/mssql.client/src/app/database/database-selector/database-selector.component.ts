import { Component, OnInit } from '@angular/core';
import { DatabaseMetadataService } from '../service/database-metadata.service';

@Component({
  selector: 'app-database-selector',
  templateUrl: './database-selector.component.html',
  styleUrls: ['./database-selector.component.css']
})
export class DatabaseSelectorComponent implements OnInit {

  public selectedDatabase: string = '';

  constructor(private databaseService: DatabaseMetadataService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onChangeDatabase() {
    this.databaseService.changeDatabase(this.selectedDatabase).subscribe(
      (response: { message: string }) => {
        console.log(response);
        alert(response.message);

        // 🔄 Force full reload (clears cache & reinitializes app)
        window.location.reload();
      },
      (error) => {
        console.error('❌ Error changing database:', error);
        alert('Failed to change database. Please try again.');
      }
    );
  }


}
