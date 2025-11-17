import { Injectable } from '@angular/core';
import { TokenResponse } from '../models/auth.models';

/**
 * Service for secure token storage and retrieval
 * Handles JWT tokens and refresh tokens using localStorage
 */
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private readonly TOKEN_KEY = 'mssql_access_token';
  private readonly REFRESH_TOKEN_KEY = 'mssql_refresh_token';
  private readonly TOKEN_EXPIRY_KEY = 'mssql_token_expiry';
  private readonly USER_INFO_KEY = 'mssql_user_info';

  constructor() { }

  /**
   * Save tokens to storage
   */
  saveToken(tokenResponse: TokenResponse): void {
    localStorage.setItem(this.TOKEN_KEY, tokenResponse.access_token);

    if (tokenResponse.refresh_token) {
      localStorage.setItem(this.REFRESH_TOKEN_KEY, tokenResponse.refresh_token);
    }

    // Calculate and store expiry time
    const expiryTime = Date.now() + (tokenResponse.expires_in * 1000);
    localStorage.setItem(this.TOKEN_EXPIRY_KEY, expiryTime.toString());
  }

  /**
   * Get access token
   */
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Get refresh token
   */
  getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  /**
   * Check if token is expired
   */
  isTokenExpired(): boolean {
    const expiryTime = localStorage.getItem(this.TOKEN_EXPIRY_KEY);
    if (!expiryTime) {
      return true;
    }

    const expiry = parseInt(expiryTime, 10);
    // Add 60 second buffer to refresh before actual expiry
    return Date.now() >= (expiry - 60000);
  }

  /**
   * Save user info
   */
  saveUserInfo(userInfo: any): void {
    localStorage.setItem(this.USER_INFO_KEY, JSON.stringify(userInfo));
  }

  /**
   * Get user info
   */
  getUserInfo(): any {
    const userInfo = localStorage.getItem(this.USER_INFO_KEY);
    return userInfo ? JSON.parse(userInfo) : null;
  }

  /**
   * Clear all stored data
   */
  clearStorage(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    localStorage.removeItem(this.TOKEN_EXPIRY_KEY);
    localStorage.removeItem(this.USER_INFO_KEY);
  }

  /**
   * Check if user is logged in
   */
  isLoggedIn(): boolean {
    const token = this.getToken();
    return token !== null && !this.isTokenExpired();
  }
}
