# Authentication Flow Diagram

## 🔄 Complete Authentication Flow

```
┌─────────────┐
│   Browser   │
│  (Angular)  │
└──────┬──────┘
       │
       │ 1. User navigates to /#/login
       ├──────────────────────────────────────────┐
       │                                          │
       │                                          ▼
       │                              ┌─────────────────────┐
       │                              │  LoginComponent     │
       │                              │  - login.component  │
       │                              └──────────┬──────────┘
       │                                         │
       │ 2. User enters credentials              │
       │    and clicks "Sign In"                 │
       │                                         │
       │                                         ▼
       │                              ┌─────────────────────┐
       │                              │   AuthService       │
       │                              │  - login()          │
       │                              └──────────┬──────────┘
       │                                         │
       │ 3. POST /connect/token                  │
       │    (username, password, grant_type)     │
       ├─────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────────┐
│          ASP.NET Core API                        │
│     (http://localhost:5000)                      │
│                                                  │
│  ┌────────────────────────────────────────────┐  │
│  │  AuthorizationController                   │  │
│  │  POST /connect/token                       │  │
│  │  - Validates credentials                   │  │
│  │  - Issues access_token & refresh_token     │  │
│  └────────────────┬───────────────────────────┘  │
└───────────────────┼──────────────────────────────┘
                    │
                    │ 4. Returns TokenResponse
                    │    { access_token, refresh_token, expires_in }
                    │
       ┌────────────┘
       │
       ▼
┌──────────────────────────────────────────────────┐
│              AuthService                         │
│  - Stores tokens in localStorage                 │
│  - Updates isAuthenticated$ = true               │
│  - Calls loadCurrentUser()                       │
└──────────────┬───────────────────────────────────┘
               │
               │ 5. GET /api/account/users/me
               │    Authorization: Bearer {token}
               │
               ▼
┌──────────────────────────────────────────────────┐
│          ASP.NET Core API                        │
│                                                  │
│  ┌────────────────────────────────────────────┐  │
│  │  UserAccountController                     │  │
│  │  GET /api/account/users/me                 │  │
│  │  - Returns current user info               │  │
│  └────────────────┬───────────────────────────┘  │
└───────────────────┼──────────────────────────────┘
                    │
                    │ 6. Returns User object
                    │    { id, userName, email, roles, ... }
                    │
       ┌────────────┘
       │
       ▼
┌──────────────────────────────────────────────────┐
│              AuthService                         │
│  - Stores user in localStorage                   │
│  - Updates currentUser$ = user                   │
│  - Login complete!                               │
└──────────────┬───────────────────────────────────┘
               │
               │ 7. Navigate to home page
               │
               ▼
┌──────────────────────────────────────────────────┐
│         App Component / Home                     │
│  - Header shows user name                        │
│  - User is authenticated                         │
└──────────────────────────────────────────────────┘
```

## 🔐 Subsequent API Requests (With AuthInterceptor)

```
┌─────────────┐
│  Component  │
│  makes API  │
│   request   │
└──────┬──────┘
       │
       │ HTTP GET/POST/PUT/DELETE
       │
       ▼
┌──────────────────────────────────────────────────┐
│           AuthInterceptor                        │
│  - Checks if token exists                        │
│  - Checks if token is expired                    │
│  - Adds Authorization: Bearer {token} header     │
└──────────────┬───────────────────────────────────┘
               │
               │ Request with auth header
               │
               ▼
┌──────────────────────────────────────────────────┐
│          ASP.NET Core API                        │
│  - Validates token                               │
│  - Processes request                             │
│  - Returns response                              │
└──────────────┬───────────────────────────────────┘
               │
               │ Response (200 OK or 401 Unauthorized)
               │
               ▼
┌──────────────────────────────────────────────────┐
│           AuthInterceptor                        │
│  If 401 Unauthorized:                            │
│    - Attempt token refresh                       │
│    - Retry original request                      │
│  If refresh fails:                               │
│    - Logout user                                 │
│    - Redirect to login                           │
└──────────────┬───────────────────────────────────┘
               │
               │ Final response
               │
               ▼
┌─────────────┐
│  Component  │
│  receives   │
│  response   │
└─────────────┘
```

## 🚪 Logout Flow

```
┌─────────────┐
│    User     │
│   clicks    │
│  "Logout"   │
└──────┬──────┘
       │
       ▼
┌──────────────────────────────────────────────────┐
│         HeaderComponent                          │
│  logout() {                                      │
│    this.authService.logout();                    │
│    this.router.navigate(['/login']);             │
│  }                                               │
└──────────────┬───────────────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────────────┐
│              AuthService                         │
│  logout() {                                      │
│    localStorage.removeItem('access_token');      │
│    localStorage.removeItem('refresh_token');     │
│    localStorage.removeItem('current_user');      │
│    currentUser$ = null;                          │
│    isAuthenticated$ = false;                     │
│  }                                               │
└──────────────┬───────────────────────────────────┘
               │
               ▼
┌─────────────┐
│ Navigate to │
│    /login   │
└─────────────┘
```

## 🛡️ Route Protection Flow (AuthGuard)

```
┌─────────────┐
│    User     │
│  navigates  │
│  to route   │
└──────┬──────┘
       │
       ▼
┌──────────────────────────────────────────────────┐
│              AuthGuard                           │
│  canActivate() {                                 │
│    if (isAuthenticated && !tokenExpired) {       │
│      return true;  // Allow navigation           │
│    }                                             │
│    router.navigate(['/login']);                  │
│    return false;  // Block navigation            │
│  }                                               │
└──────────────┬───────────────────────────────────┘
               │
         ┌─────┴─────┐
         │           │
    Allowed      Blocked
         │           │
         ▼           ▼
   ┌─────────┐  ┌──────────┐
   │Navigate │  │Redirect  │
   │to route │  │to /login │
   └─────────┘  └──────────┘
```

## 📦 Data Storage (localStorage)

```
localStorage
├── access_token: "eyJhbGciOiJSUzI1NiIsImtpZCI6..."
├── refresh_token: "CfDJ8KvZR5..."
└── current_user: {
      "id": "user-guid-123",
      "userName": "john.doe",
      "email": "john@example.com",
      "fullName": "John Doe",
      "roles": ["User", "Admin"],
      "isEnabled": true,
      "isLockedOut": false
    }
```

## 🔄 Token Refresh Flow (Automatic)

```
1. Access token expires (or about to expire)
   │
   ▼
2. AuthInterceptor detects 401 response
   │
   ▼
3. POST /connect/token
   grant_type=refresh_token
   refresh_token={stored_refresh_token}
   │
   ▼
4. API returns new access_token & refresh_token
   │
   ▼
5. Update localStorage with new tokens
   │
   ▼
6. Retry original failed request with new token
   │
   ▼
7. Return response to component
```

## 🎯 Key Components

| Component | Purpose |
|-----------|---------|
| **LoginComponent** | UI for user login |
| **AuthService** | Core authentication logic |
| **AuthGuard** | Protect routes requiring authentication |
| **AuthInterceptor** | Automatic token handling for HTTP requests |
| **HeaderComponent** | Display user info and logout |

## 🔌 API Endpoints Used

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/connect/token` | Login & token refresh |
| GET | `/api/account/users/me` | Get current user info |
| GET | `/api/account/users/{id}` | Get specific user (if needed) |

---

**Flow Status**: ✅ All flows implemented and functional
