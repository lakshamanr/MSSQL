import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError, of } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-response.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'access_token';
  private readonly REFRESH_TOKEN_KEY = 'refresh_token';
  private readonly USER_KEY = 'current_user';

  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public isAuthenticated: Observable<boolean>;

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject('API_URL') private apiUrl: string
  ) {
    const storedUser = this.getUserFromStorage();
    this.currentUserSubject = new BehaviorSubject<User | null>(storedUser);
    this.currentUser = this.currentUserSubject.asObservable();

    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(!!storedUser && !!this.getToken());
    this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  public get isAuthenticatedValue(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  /**
   * Login user with username and password
   */
  login(username: string, password: string): Observable<LoginResponse> {
    let body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('client_id','swagger_ui')
      .set('grant_type', 'password');
      // Note: No scope parameter - swagger_ui client doesn't allow scopes
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<LoginResponse>(`${this.apiUrl}/connect/token`, body.toString(), { headers })
      .pipe(
        tap(response => {
          console.log('✅ Login successful, storing tokens');
          this.storeTokens(response);
          this.isAuthenticatedSubject.next(true);
        }),
        switchMap(response => {
          console.log('📥 Loading current user before completing login...');
          // Load current user before completing login
          // If it fails, still allow login to succeed
          return this.loadCurrentUser().pipe(
            map(user => {
              console.log('✅ User loaded successfully:', user);
              return response; // Return original login response
            }),
            catchError(error => {
              console.warn('⚠️ Failed to load user after login (non-fatal):', error);
              // Still return the login response to allow navigation
              return of(response);
            })
          );
        }),
        catchError(error => {
          console.error('Login failed:', error);
          console.error('Error details:', {
            status: error.status,
            statusText: error.statusText,
            url: error.url,
            errorBody: error.error
          });
          return throwError(error);
        })
      );
  }

  /**
   * Refresh the access token using refresh token
   */
  refreshToken(): Observable<LoginResponse> {
    const refreshToken = this.getRefreshToken();
    console.log('🔄 Attempting to refresh token...');

    if (!refreshToken) {
      console.warn('⚠️ No refresh token available - redirecting to login');
      this.logout();
      return throwError('No refresh token available');
    }

    console.log('✅ Refresh token found, sending refresh request to server');
    const body = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('refresh_token', refreshToken)
      .set('client_id', 'swagger_ui');
      // Note: No scope parameter - swagger_ui client doesn't allow scopes

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<LoginResponse>(`${this.apiUrl}/connect/token`, body.toString(), { headers })
      .pipe(
        tap(response => {
          console.log('✅ Token refresh successful');
          this.storeTokens(response);
        }),
        catchError(error => {
          console.error('❌ Token refresh failed:', error);
          this.logout();
          return throwError(error);
        })
      );
  }

  /**
   * Load current user details from API
   */
  loadCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/api/account/users/me`)
      .pipe(
        tap(user => {
          this.storeUser(user);
          this.currentUserSubject.next(user);
        }),
        catchError(error => {
          console.error('Failed to load current user:', error);
          return throwError(error);
        })
      );
  }

  /**
   * Logout user and clear all stored data
   */
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  /**
   * Get stored access token
   */
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Get stored refresh token
   */
  getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  /**
   * Check if access token is expired
   * Note: Encrypted tokens (JWE) cannot be decoded client-side, so we assume they're valid
   * and let the server handle expiry validation
   */
  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) {
      return true;
    }

    try {
      // Check token structure
      const parts = token.split('.');

      // JWE (encrypted) tokens have 5 parts - we can't decode these client-side
      // So we assume they're valid and let the server validate expiry
      if (parts.length === 5) {
        // Only log once to reduce noise
        if (!sessionStorage.getItem('jwe_logged')) {
          console.log('📝 Token is encrypted (JWE) - server will validate expiry');
          sessionStorage.setItem('jwe_logged', 'true');
        }
        return false; // Assume valid, let server decide
      }

      // Standard JWT should have 3 parts
      if (parts.length !== 3) {
        console.warn('⚠️ Invalid token structure');
        return true;
      }

      // Decode and parse the payload for standard JWT
      const payload = JSON.parse(atob(parts[1]));

      // Validate expiry claim exists
      if (!payload.exp) {
        console.warn('⚠️ JWT token missing expiry claim');
        return true;
      }

      // Check if token is expired (with 60 second buffer for clock skew)
      const expiry = payload.exp;
      const currentTime = Math.floor((new Date()).getTime() / 1000);
      const isExpired = currentTime >= (expiry - 60);

      if (isExpired) {
        console.log('⏰ Token expired');
      }

      return isExpired;
    } catch (e) {
      console.error('❌ Error parsing token:', e);
      return true;
    }
  }

  /**
   * Store tokens in localStorage
   */
  private storeTokens(response: LoginResponse): void {
    console.log('📦 Storing tokens:', {
      access_token: response.access_token ? '✅ Present' : '❌ Missing',
      refresh_token: response.refresh_token ? '✅ Present' : '❌ Missing',
      expires_in: response.expires_in
    });

    localStorage.setItem(this.TOKEN_KEY, response.access_token);
    if (response.refresh_token) {
      localStorage.setItem(this.REFRESH_TOKEN_KEY, response.refresh_token);
      console.log('✅ Refresh token stored successfully');
    } else {
      console.warn('⚠️ No refresh token received from server - user will need to re-login when token expires');
    }
  }

  /**
   * Store user in localStorage
   */
  private storeUser(user: User): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  /**
   * Get user from localStorage
   */
  private getUserFromStorage(): User | null {
    const userJson = localStorage.getItem(this.USER_KEY);
    if (userJson) {
      try {
        return JSON.parse(userJson);
      } catch (e) {
        return null;
      }
    }
    return null;
  }
  get isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY) && !this.isTokenExpired();
  }
}
