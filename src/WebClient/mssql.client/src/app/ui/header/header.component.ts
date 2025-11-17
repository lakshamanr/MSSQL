 import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';

/**
 * Header Component
 * Main application header with branding, navigation, and user menu
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private destroy$ = new Subject<void>();

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.authState$
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => {
        this.isAuthenticated = state.isAuthenticated;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onChangeServer(event: Event): void {
    const selectedServer = (event.target as HTMLSelectElement).value;
    console.log('Selected SQL Server:', selectedServer);
    // Handle the change as needed
  }
}
