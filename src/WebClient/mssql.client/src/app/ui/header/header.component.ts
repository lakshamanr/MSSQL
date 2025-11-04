import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';
import { User } from '../../auth/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: User | null = null;
  isAuthenticated = false;
  isNavbarCollapsed = true;
  private userSubscription?: Subscription;
  private authSubscription?: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });

    this.authSubscription = this.authService.isAuthenticated.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    // Close navbar on larger screens
    if (window.innerWidth >= 992 && !this.isNavbarCollapsed) {
      this.isNavbarCollapsed = true;
    }
  }

  onChangeServer(event: Event): void {
    const selectedServer = (event.target as HTMLSelectElement).value;
    console.log('Selected SQL Server:', selectedServer);
    // Handle the change as needed
  }

  logout(): void {
    this.isNavbarCollapsed = true;
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigateToLogin(): void {
    this.isNavbarCollapsed = true;
    this.router.navigate(['/login']);
  }
}
