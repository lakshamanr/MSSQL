import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Don't add token to token endpoint
    if (request.url.includes('/connect/token')) {
      console.log('🔓 Skipping token for /connect/token endpoint');
      return next.handle(request);
    }

    // Add authorization header with token
    const token = this.authService.getToken();
    const isExpired = this.authService.isTokenExpired();

    if (token && !isExpired) {
      request = this.addTokenAndSecurityHeaders(request, token);
    } else {
      // Add security headers even without token
      request = this.addSecurityHeaders(request);
      console.warn('⚠️ Request without token:', request.url, 'Reason:', !token ? 'No token found' : 'Token expired');
    }

    return next.handle(request).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          console.log('🔒 401 Unauthorized error detected for:', request.url);
          return this.handle401Error(request, next);
        }
        return throwError(error);
      })
    );
  }

  private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private addTokenAndSecurityHeaders(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'X-Requested-With': 'XMLHttpRequest',
        'X-Content-Type-Options': 'nosniff'
      }
    });
  }

  private addSecurityHeaders(request: HttpRequest<any>): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-Content-Type-Options': 'nosniff'
      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      console.log('🔄 Starting token refresh process...');
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((response: any) => {
          console.log('✅ Token refreshed, retrying original request');
          this.isRefreshing = false;
          this.refreshTokenSubject.next(response.access_token);
          return next.handle(this.addToken(request, response.access_token));
        }),
        catchError(err => {
          console.error('❌ Token refresh failed in interceptor, logging out');
          this.isRefreshing = false;
          this.authService.logout();
          return throwError(err);
        })
      );
    } else {
      console.log('⏳ Token refresh already in progress, waiting...');
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(token => {
          console.log('✅ Using refreshed token for queued request');
          return next.handle(this.addToken(request, token));
        })
      );
    }
  }
}
