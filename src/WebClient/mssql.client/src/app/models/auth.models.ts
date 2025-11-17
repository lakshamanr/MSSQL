/**
 * Authentication Models and Interfaces
 * Contains all authentication-related data structures
 */

/**
 * Login request payload
 */
export interface LoginRequest {
  username: string;
  password: string;
  grant_type: string;
  scope?: string;
}

/**
 * Token response from OAuth2 server
 */
export interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
  scope?: string;
}

/**
 * User information decoded from JWT token
 */
export interface UserInfo {
  sub: string; // Subject (user ID)
  name?: string;
  email?: string;
  role?: string;
  permissions?: string[];
  exp?: number; // Expiration timestamp
  iat?: number; // Issued at timestamp
}

/**
 * Authentication state
 */
export interface AuthState {
  isAuthenticated: boolean;
  user: UserInfo | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

/**
 * API Error response
 */
export interface ApiError {
  error: string;
  error_description?: string;
  status?: number;
  message?: string;
}
