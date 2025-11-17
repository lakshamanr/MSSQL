import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { AuthState } from '../../models/auth.models';

/**
 * Authentication Review Component
 * Comprehensive review and testing interface for authentication features
 */
@Component({
  selector: 'app-auth-review',
  templateUrl: './auth-review.component.html',
  styleUrls: ['./auth-review.component.css']
})
export class AuthReviewComponent implements OnInit, OnDestroy {
  authState: AuthState | null = null;
  tokenInfo: any = null;
  private destroy$ = new Subject<void>();

  // Feature checklist
  features = [
    { name: 'Login Component', status: 'implemented', description: 'Full login form with validation' },
    { name: 'User Menu', status: 'implemented', description: 'Dropdown menu with user info and logout' },
    { name: 'Authentication Service', status: 'implemented', description: 'OAuth2 password grant flow' },
    { name: 'Token Storage', status: 'implemented', description: 'Secure localStorage management' },
    { name: 'HTTP Interceptor', status: 'implemented', description: 'Automatic JWT token injection' },
    { name: 'Auth Guard', status: 'implemented', description: 'Route protection' },
    { name: 'Token Refresh', status: 'implemented', description: 'Automatic token refresh on 401' },
    { name: 'Header Branding', status: 'implemented', description: 'MSSQL Manager branding' },
    { name: 'Footer Content', status: 'implemented', description: 'Copyright and version info' },
    { name: 'Responsive Design', status: 'implemented', description: 'Mobile-friendly layouts' }
  ];

  constructor(
    private authService: AuthenticationService,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.authService.authState$
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => {
        this.authState = state;
        this.updateTokenInfo();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Update token information display
   */
  updateTokenInfo(): void {
    const token = this.tokenStorage.getToken();
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        this.tokenInfo = {
          hasToken: true,
          isExpired: this.tokenStorage.isTokenExpired(),
          expiresAt: new Date(payload.exp * 1000).toLocaleString(),
          issuedAt: new Date(payload.iat * 1000).toLocaleString(),
          payload: payload
        };
      } catch (e) {
        this.tokenInfo = { hasToken: true, error: 'Failed to decode token' };
      }
    } else {
      this.tokenInfo = { hasToken: false };
    }
  }

  /**
   * Manually trigger token refresh
   */
  refreshToken(): void {
    this.authService.refreshToken().subscribe({
      next: () => {
        this.updateTokenInfo();
      },
      error: (err) => {
        console.error('Token refresh failed:', err);
      }
    });
  }

  /**
   * Clear all tokens
   */
  clearTokens(): void {
    this.tokenStorage.clearStorage();
    this.updateTokenInfo();
  }
}
