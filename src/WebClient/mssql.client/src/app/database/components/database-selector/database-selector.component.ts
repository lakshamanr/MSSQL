import { Component, OnInit } from '@angular/core';
import { DatabaseMetadataService } from '../../service/database-metadata.service';
 

@Component({
  selector: 'app-database-selector',
  templateUrl: './database-selector.component.html',
  styleUrls: ['./database-selector.component.css']
})
export class DatabaseSelectorComponent implements OnInit {
  public selectedDatabase: string = '';
  public databases: string[] = []; // List of available databases

  constructor(private databaseService: DatabaseMetadataService) { }

  ngOnInit(): void {
    this.loadDatabases();
  }

  // Load available databases from backend
  loadDatabases() {
    this.databaseService.getDatabases().subscribe(
      (response: string[]) => {
        this.databases = response;

        // Set default to the currently active database
        this.getCurrentDatabase();
      },
      (error) => console.error('❌ Error fetching databases:', error)
    );
  }

  // Get the currently active database
  getCurrentDatabase() {
    this.databaseService.getCurrentDatabase().subscribe(
      (response: { database: string }) => {
        this.selectedDatabase = response.database;
      },
      (error) => console.error('❌ Error fetching current database:', error)
    );
  }

  // Change the database
  onChangeDatabase() {
    this.databaseService.changeDatabase(this.selectedDatabase).subscribe(
      (response: { message: string }) => {
        console.log(response); 
        window.location.reload(); // 🔄 Force full reload
      },
      (error) => {
        console.error('❌ Error changing database:', error);
        alert('Failed to change database. Please try again.');
      }
    );
  }
}
