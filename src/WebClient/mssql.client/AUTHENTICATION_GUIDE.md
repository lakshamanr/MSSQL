# Authentication Implementation Guide

## Overview
This project now includes a complete end-to-end authentication system using Angular (frontend) and ASP.NET Core with OpenIddict (backend).

## Files Created

### Angular Frontend (src/WebClient/mssql.client/src/app/auth/)

#### Models
- **models/login-request.model.ts** - Login request interface
- **models/login-response.model.ts** - OAuth2 token response interface
- **models/user.model.ts** - User model interface

#### Services
- **services/auth.service.ts** - Authentication service handling:
  - User login with username/password
  - Token refresh using refresh tokens
  - User session management
  - Token storage in localStorage
  - Current user state management using RxJS BehaviorSubject

#### Guards
- **guards/auth.guard.ts** - Route guard to protect authenticated routes
  - Redirects to login if user is not authenticated
  - Checks token expiration

#### Interceptors
- **interceptors/auth.interceptor.ts** - HTTP interceptor that:
  - Adds Authorization header with Bearer token to API requests
  - Handles 401 errors by refreshing tokens
  - Prevents token refresh loops

#### Components
- **components/login/login.component.ts** - Login page component
- **components/login/login.component.html** - Login page template
- **components/login/login.component.css** - Login page styles

#### Module
- **auth.module.ts** - Auth module that bundles all authentication features

### Updated Files
- **src/WebClient/mssql.client/src/app/app.module.ts** - Added AuthModule import and login route
- **src/WebClient/mssql.client/src/app/ui/header/header.component.ts** - Added authentication state and logout functionality
- **src/WebClient/mssql.client/src/app/ui/header/header.component.html** - Added login/logout buttons and user menu
- **src/WebClient/mssql.client/src/app/ui/header/header.component.css** - Styled header with authentication UI

## Backend API

### Login Endpoint
- **URL**: `POST /connect/token`
- **Content-Type**: `application/x-www-form-urlencoded`
- **Parameters**:
  - `username` - Username or email
  - `password` - User password
  - `grant_type` - Must be "password"
  - `scope` - "openid email phone profile offline_access roles"

### User Endpoints
- **Get Current User**: `GET /api/account/users/me`
- **Get User by ID**: `GET /api/account/users/{id}`
- **Update User**: `PUT /api/account/users/{id}`

## Usage

### 1. Starting the Application

Make sure your backend API is running on `http://localhost:5000` (or update the API_URL in auth.service.ts).

### 2. Accessing the Login Page

Navigate to: `http://localhost:4200/#/login`

### 3. Logging In

Use the credentials from your ASP.NET Core Identity database:
- Username or Email
- Password

Upon successful login:
- Access token is stored in localStorage
- Refresh token is stored in localStorage
- User information is fetched and stored
- User is redirected to the home page

### 4. Protecting Routes

To protect a route, add the AuthGuard:

```typescript
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [AuthGuard]  // Add this
  }
];
```

### 5. Using Authentication in Components

```typescript
import { AuthService } from './auth/services/auth.service';

export class MyComponent {
  constructor(private authService: AuthService) {
    // Subscribe to authentication state
    this.authService.isAuthenticated.subscribe(isAuth => {
      console.log('Is authenticated:', isAuth);
    });

    // Get current user
    this.authService.currentUser.subscribe(user => {
      console.log('Current user:', user);
    });

    // Check if authenticated (synchronous)
    if (this.authService.isAuthenticatedValue) {
      // User is logged in
    }
  }

  logout() {
    this.authService.logout();
  }
}
```

### 6. Accessing Protected API Endpoints

The AuthInterceptor automatically adds the Bearer token to all HTTP requests (except /connect/token).

```typescript
// This will automatically include Authorization: Bearer {token}
this.http.get('/api/account/users/me').subscribe(user => {
  console.log(user);
});
```

## Configuration

### Update API URL
In `src/app/auth/services/auth.service.ts`, update the API_URL constant:

```typescript
private readonly API_URL = 'https://your-api-domain.com';
```

### Token Storage Keys
You can customize the localStorage keys in auth.service.ts:

```typescript
private readonly TOKEN_KEY = 'access_token';
private readonly REFRESH_TOKEN_KEY = 'refresh_token';
private readonly USER_KEY = 'current_user';
```

## Security Features

1. **JWT Token Authentication** - Uses OAuth2 Bearer tokens
2. **Automatic Token Refresh** - Refreshes tokens before they expire
3. **Secure Storage** - Tokens stored in localStorage
4. **HTTP Interceptor** - Automatically adds auth headers
5. **Route Protection** - AuthGuard prevents unauthorized access
6. **Token Expiration Check** - Validates token before use

## Testing

### Default Test User
Check your ASP.NET Core application's seed data or create a test user:

```bash
# Using dotnet CLI (if you have user creation command)
dotnet run --seed-data
```

Or use the registration endpoint if available.

## Troubleshooting

### CORS Issues
If you get CORS errors, make sure your ASP.NET Core API has CORS configured:

```csharp
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

app.UseCors();
```

### Token Not Being Added to Requests
Check browser console for errors and verify:
1. Token exists in localStorage
2. AuthInterceptor is registered in app.module.ts
3. Request URL doesn't match the token endpoint

### 401 Unauthorized Errors
1. Check if token is expired
2. Verify API is running
3. Check if user has required permissions
4. Verify the token is valid

## Next Steps

1. **Add Role-Based Access Control** - Check user roles in guards
2. **Add Remember Me** - Extend token expiration
3. **Add Password Reset** - Implement forgot password flow
4. **Add User Registration** - Create new account functionality
5. **Add Profile Management** - Allow users to update their profile
6. **Add Session Timeout Warning** - Warn before token expires

## API Documentation

For full API documentation, refer to:
- Swagger/OpenAPI: `http://localhost:5000/swagger`
- Authorization endpoint: `/connect/token`
- Account endpoints: `/api/account/*`
