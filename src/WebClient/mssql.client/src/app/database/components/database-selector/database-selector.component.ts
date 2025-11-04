import { Component, OnInit } from '@angular/core';
import { DatabaseMetadataService } from '../../service/database-metadata.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-database-selector',
  templateUrl: './database-selector.component.html',
  styleUrls: ['./database-selector.component.css']
})
export class DatabaseSelectorComponent implements OnInit {
  public selectedDatabase: string = '';
  public databases: string[] = []; // List of available databases

  constructor(
    private databaseService: DatabaseMetadataService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // Wait for authentication to be fully ready before loading data
    this.authService.isAuthenticated.pipe(
      filter(isAuth => isAuth === true), // Only proceed when authenticated
      take(1) // Take only the first emission, then unsubscribe
    ).subscribe(() => {
      console.log('🔑 Auth ready, loading databases');
      this.loadDatabases();
    });
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
        this.router.navigate(['/Database']).then(() => {
          window.location.reload();
        }); 
      },
      (error) => {
        console.error('❌ Error changing database:', error);
        alert('Failed to change database. Please try again.');
      }
    );
  }
}
