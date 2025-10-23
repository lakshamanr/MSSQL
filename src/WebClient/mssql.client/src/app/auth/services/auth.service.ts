import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-response.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = ''; // Use relative URLs to work with proxy
  private readonly TOKEN_KEY = 'access_token';
  private readonly REFRESH_TOKEN_KEY = 'refresh_token';
  private readonly USER_KEY = 'current_user';

  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public isAuthenticated: Observable<boolean>;

  constructor(private http: HttpClient) {
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
      .set(  'client_id','swagger_ui')
      .set('grant_type', 'password')   
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<LoginResponse>(`${this.API_URL}/connect/token`, body.toString(), { headers })
      .pipe(
        tap(response => {
          this.storeTokens(response);
          this.isAuthenticatedSubject.next(true);
          this.loadCurrentUser().subscribe();
        }),
        catchError(error => {
          console.error('Login failed:', error);
          return throwError(error);
        })
      );
  }

  /**
   * Refresh the access token using refresh token
   */
  refreshToken(): Observable<LoginResponse> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      return throwError('No refresh token available');
    }

    const body = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('refresh_token', refreshToken)
      .set('scope', 'openid email phone profile offline_access roles');

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<LoginResponse>(`${this.API_URL}/connect/token`, body.toString(), { headers })
      .pipe(
        tap(response => {
          this.storeTokens(response);
        }),
        catchError(error => {
          console.error('Token refresh failed:', error);
          this.logout();
          return throwError(error);
        })
      );
  }

  /**
   * Load current user details from API
   */
  loadCurrentUser(): Observable<User> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<User>(`${this.API_URL}/api/account/users/me`, { headers })
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
   */
  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) {
      return true;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiry = payload.exp;
      return (Math.floor((new Date()).getTime() / 1000)) >= expiry;
    } catch (e) {
      return true;
    }
  }

  /**
   * Store tokens in localStorage
   */
  private storeTokens(response: LoginResponse): void {
    localStorage.setItem(this.TOKEN_KEY, response.access_token);
    if (response.refresh_token) {
      localStorage.setItem(this.REFRESH_TOKEN_KEY, response.refresh_token);
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
}
