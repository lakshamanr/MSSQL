import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { UserInfo } from '../../models/auth.models';

/**
 * User Menu Component
 * Displays user info and provides logout functionality
 */
@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit, OnDestroy {
  user: UserInfo | null = null;
  isDropdownOpen = false;
  private destroy$ = new Subject<void>();

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.authState$
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => {
        this.user = state.user;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Toggle dropdown menu
   */
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  /**
   * Close dropdown menu
   */
  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  /**
   * Handle logout
   */
  logout(): void {
    this.closeDropdown();
    this.authService.logout();
  }

  /**
   * Get user initials for avatar
   */
  getUserInitials(): string {
    if (!this.user?.name) {
      return 'U';
    }

    const names = this.user.name.split(' ');
    if (names.length >= 2) {
      return (names[0][0] + names[1][0]).toUpperCase();
    }
    return this.user.name.substring(0, 2).toUpperCase();
  }

  /**
   * Get display name
   */
  getDisplayName(): string {
    return this.user?.name || this.user?.email || 'User';
  }
}
