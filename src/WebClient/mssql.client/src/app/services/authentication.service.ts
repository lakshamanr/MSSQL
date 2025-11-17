import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';
import { LoginRequest, TokenResponse, UserInfo, AuthState, ApiError } from '../models/auth.models';

/**
 * Authentication Service
 * Handles all authentication operations including login, logout, and token management
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly AUTH_URL = '/connect/token';
  private readonly USER_INFO_URL = '/api/useraccounts/me';

  private authStateSubject: BehaviorSubject<AuthState>;
  public authState$: Observable<AuthState>;

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {
    // Initialize auth state
    const initialState: AuthState = {
      isAuthenticated: this.tokenStorage.isLoggedIn(),
      user: this.tokenStorage.getUserInfo(),
      token: this.tokenStorage.getToken(),
      loading: false,
      error: null
    };

    this.authStateSubject = new BehaviorSubject<AuthState>(initialState);
    this.authState$ = this.authStateSubject.asObservable();
  }

  /**
   * Get current auth state value
   */
  public get currentAuthState(): AuthState {
    return this.authStateSubject.value;
  }

  /**
   * Get current user
   */
  public get currentUser(): UserInfo | null {
    return this.authStateSubject.value.user;
  }

  /**
   * Check if user is authenticated
   */
  public get isAuthenticated(): boolean {
    return this.authStateSubject.value.isAuthenticated;
  }

  /**
   * Login with username and password
   */
  login(username: string, password: string): Observable<TokenResponse> {
    this.updateAuthState({ loading: true, error: null });

    // Create form data for OAuth2 password grant
    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('username', username);
    body.set('password', password);
    body.set('scope', 'openid profile email offline_access');

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<TokenResponse>(this.AUTH_URL, body.toString(), { headers }).pipe(
      tap(tokenResponse => {
        // Save token
        this.tokenStorage.saveToken(tokenResponse);

        // Decode and save user info
        const userInfo = this.decodeToken(tokenResponse.access_token);
        this.tokenStorage.saveUserInfo(userInfo);

        // Update auth state
        this.updateAuthState({
          isAuthenticated: true,
          user: userInfo,
          token: tokenResponse.access_token,
          loading: false,
          error: null
        });
      }),
      catchError(error => {
        const apiError: ApiError = {
          error: error.error?.error || 'login_failed',
          error_description: error.error?.error_description || 'Invalid username or password',
          status: error.status
        };

        this.updateAuthState({
          loading: false,
          error: apiError.error_description || 'Login failed'
        });

        return throwError(() => apiError);
      })
    );
  }

  /**
   * Logout user
   */
  logout(): void {
    this.tokenStorage.clearStorage();
    this.updateAuthState({
      isAuthenticated: false,
      user: null,
      token: null,
      loading: false,
      error: null
    });
    this.router.navigate(['/login']);
  }

  /**
   * Refresh access token
   */
  refreshToken(): Observable<TokenResponse> {
    const refreshToken = this.tokenStorage.getRefreshToken();

    if (!refreshToken) {
      this.logout();
      return throwError(() => ({ error: 'no_refresh_token' }));
    }

    const body = new URLSearchParams();
    body.set('grant_type', 'refresh_token');
    body.set('refresh_token', refreshToken);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<TokenResponse>(this.AUTH_URL, body.toString(), { headers }).pipe(
      tap(tokenResponse => {
        this.tokenStorage.saveToken(tokenResponse);
        const userInfo = this.decodeToken(tokenResponse.access_token);
        this.tokenStorage.saveUserInfo(userInfo);

        this.updateAuthState({
          isAuthenticated: true,
          user: userInfo,
          token: tokenResponse.access_token
        });
      }),
      catchError(error => {
        this.logout();
        return throwError(() => error);
      })
    );
  }

  /**
   * Decode JWT token to extract user info
   */
  private decodeToken(token: string): UserInfo {
    try {
      const payload = token.split('.')[1];
      const decoded = JSON.parse(atob(payload));

      return {
        sub: decoded.sub,
        name: decoded.name || decoded.username,
        email: decoded.email,
        role: decoded.role,
        permissions: decoded.permissions || [],
        exp: decoded.exp,
        iat: decoded.iat
      };
    } catch (error) {
      console.error('Error decoding token:', error);
      return { sub: '' };
    }
  }

  /**
   * Update auth state
   */
  private updateAuthState(updates: Partial<AuthState>): void {
    const currentState = this.authStateSubject.value;
    this.authStateSubject.next({ ...currentState, ...updates });
  }

  /**
   * Check if token needs refresh
   */
  public shouldRefreshToken(): boolean {
    return this.tokenStorage.isLoggedIn() && this.tokenStorage.isTokenExpired();
  }

  /**
   * Get current access token
   */
  public getAccessToken(): string | null {
    return this.tokenStorage.getToken();
  }
}
