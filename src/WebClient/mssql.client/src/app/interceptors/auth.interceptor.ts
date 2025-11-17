import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { TokenStorageService } from '../services/token-storage.service';

/**
 * HTTP Interceptor for JWT authentication
 * Automatically adds Bearer token to all API requests
 * Handles 401 errors and token refresh
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(
    private authService: AuthenticationService,
    private tokenStorage: TokenStorageService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Skip interceptor for auth endpoints
    if (this.isAuthEndpoint(request.url)) {
      return next.handle(request);
    }

    // Add token to request
    const token = this.tokenStorage.getToken();
    if (token) {
      request = this.addTokenToRequest(request, token);
    }

    return next.handle(request).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(request, next);
        }
        return throwError(() => error);
      })
    );
  }

  /**
   * Add Authorization header with Bearer token
   */
  private addTokenToRequest(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  /**
   * Handle 401 Unauthorized errors by attempting token refresh
   */
  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      // Check if we have a refresh token
      if (this.tokenStorage.getRefreshToken()) {
        return this.authService.refreshToken().pipe(
          switchMap(() => {
            this.isRefreshing = false;
            const newToken = this.tokenStorage.getToken();
            if (newToken) {
              return next.handle(this.addTokenToRequest(request, newToken));
            }
            return throwError(() => new Error('Token refresh failed'));
          }),
          catchError(error => {
            this.isRefreshing = false;
            this.authService.logout();
            return throwError(() => error);
          })
        );
      } else {
        this.isRefreshing = false;
        this.authService.logout();
        return throwError(() => new Error('No refresh token available'));
      }
    }

    // If already refreshing, wait and retry with new token
    return this.authService.authState$.pipe(
      take(1),
      switchMap(state => {
        if (state.token) {
          return next.handle(this.addTokenToRequest(request, state.token));
        }
        return throwError(() => new Error('Authentication required'));
      })
    );
  }

  /**
   * Check if URL is an authentication endpoint
   */
  private isAuthEndpoint(url: string): boolean {
    return url.includes('/connect/token') ||
      url.includes('/connect/authorize') ||
      url.includes('/connect/logout');
  }
}
