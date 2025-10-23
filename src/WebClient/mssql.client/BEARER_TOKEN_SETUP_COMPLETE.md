# ✅ Bearer Token Setup Complete

## What Was Done

The `AuthInterceptor` has been successfully registered in your Angular application. This interceptor will **automatically** add the Bearer token to every HTTP request.

## Changes Made

### File Modified: `src/WebClient/mssql.client/src/app/app.module.ts`

1. **Added Import for HTTP_INTERCEPTORS**:
   ```typescript
   import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
   ```

2. **Added Import for AuthInterceptor**:
   ```typescript
   import { AuthInterceptor } from './auth/interceptors/auth.interceptor';
   ```

3. **Registered AuthInterceptor in Providers**:
   ```typescript
   providers: [
     { provide: LocationStrategy, useClass: HashLocationStrategy },
     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
     TreeDragDropService,
     MessageService
   ]
   ```

## How It Works

### Automatic Token Injection

The `AuthInterceptor` automatically:

1. **Retrieves the token** from localStorage (stored after login)
2. **Checks if the token is expired** before adding it
3. **Adds the Authorization header** to all HTTP requests:
   ```
   Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6...
   ```
4. **Skips the token endpoint** (`/connect/token`) to avoid circular issues
5. **Handles 401 errors** by automatically refreshing the token

### Request Flow

```
Your Angular Service
      ↓
   HTTP Request
      ↓
AuthInterceptor intercepts
      ↓
Gets token from localStorage
      ↓
Adds Authorization header
      ↓
Forwards request to API
      ↓
API validates token
      ↓
Returns response
```

## Usage Examples

### Example 1: Making API Calls (Token Added Automatically)

```typescript
// customer.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  // ✅ Authorization header is automatically added
  getCustomers() {
    return this.http.get('/api/customers');
  }

  // ✅ Authorization header is automatically added
  createCustomer(customer: any) {
    return this.http.post('/api/customers', customer);
  }

  // ✅ Authorization header is automatically added
  updateCustomer(id: number, customer: any) {
    return this.http.put(`/api/customers/${id}`, customer);
  }

  // ✅ Authorization header is automatically added
  deleteCustomer(id: number) {
    return this.http.delete(`/api/customers/${id}`);
  }
}
```

### Example 2: Component Using the Service

```typescript
// customer-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {
  customers: any[] = [];
  
  constructor(private customerService: CustomerService) {}
  
  ngOnInit() {
    // Token is automatically included in the request
    this.customerService.getCustomers().subscribe(
      data => {
        this.customers = data;
        console.log('Customers loaded successfully');
      },
      error => {
        console.error('Error loading customers:', error);
        // If 401, AuthInterceptor will automatically try to refresh token
      }
    );
  }
}
```

## What Happens on 401 Unauthorized

If the API returns a 401 error (token expired):

1. **AuthInterceptor catches the error**
2. **Calls AuthService.refreshToken()** using the refresh token
3. **Gets a new access token**
4. **Retries the original request** with the new token
5. **If refresh fails**, logs the user out and redirects to login

## Verification

### Check if Token is Being Sent

1. **Open Browser DevTools** (F12)
2. **Go to Network Tab**
3. **Make any API request** (e.g., load customers)
4. **Click on the request** in the Network tab
5. **Go to Headers** section
6. **Look for Request Headers**:
   ```
   Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6...
   ```

### Example Network Request

```
Request URL: http://localhost:5000/api/customers
Request Method: GET
Status Code: 200 OK

Request Headers:
  Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjMyQzMyRjMyLUU5...
  Content-Type: application/json
  Accept: application/json
```

## Testing the Setup

### Step 1: Login
```typescript
// Navigate to login page
http://localhost:4200/#/login

// Login with credentials
Username: admin
Password: admin123
```

### Step 2: Check localStorage
```javascript
// Open Browser Console (F12) → Console tab
localStorage.getItem('access_token');
// Should return: "eyJhbGciOiJSUzI1NiIsImtpZCI6..."
```

### Step 3: Make an API Call
```typescript
// Navigate to any page that calls the API
// Example: Customers page
http://localhost:4200/#/customers

// Check Network tab - Authorization header should be present
```

### Step 4: Verify Token in Request
```
Request Headers:
  Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6...
```

## Important Files

### AuthInterceptor
**Location**: `src/WebClient/mssql.client/src/app/auth/interceptors/auth.interceptor.ts`

**Key Methods**:
- `intercept()` - Adds token to requests
- `addToken()` - Clones request with Authorization header
- `handle401Error()` - Handles token refresh on 401 errors

### AuthService
**Location**: `src/WebClient/mssql.client/src/app/auth/services/auth.service.ts`

**Key Methods**:
- `login()` - Authenticates and stores tokens
- `getToken()` - Retrieves access token from localStorage
- `isTokenExpired()` - Checks if token is expired
- `refreshToken()` - Gets new token using refresh token
- `logout()` - Clears tokens and redirects to login

## Troubleshooting

### Token Not Being Added

**Check**:
1. User is logged in (`localStorage.getItem('access_token')` should return a token)
2. Token is not expired
3. Request URL doesn't match `/connect/token`
4. AuthInterceptor is registered in `app.module.ts`

**Solution**:
```bash
# Restart Angular dev server
cd src/WebClient/mssql.client
npm start
```

### 401 Errors After Login

**Check**:
1. Token is stored in localStorage
2. Token is valid (check expiration)
3. API is expecting Bearer token format
4. API CORS settings allow Authorization header

**Solution**:
```csharp
// In Program.cs or Startup.cs
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()  // ✅ Allows Authorization header
              .AllowAnyMethod();
    });
});
```

### Token Refresh Not Working

**Check**:
1. Refresh token is stored in localStorage
2. API supports refresh token grant type
3. Refresh token is not expired

**Solution**:
Check the AuthService `refreshToken()` method and ensure it's sending the correct parameters.

## Security Best Practices

✅ **Token Storage**: Tokens stored in localStorage (consider HttpOnly cookies for production)  
✅ **Token Expiration**: Tokens expire after configured time  
✅ **Automatic Refresh**: Tokens are automatically refreshed  
✅ **Logout on Refresh Fail**: User is logged out if refresh fails  
✅ **HTTPS**: Always use HTTPS in production  

## Next Steps

1. ✅ **Test the setup** - Login and make API calls
2. ✅ **Verify headers** - Check Network tab in DevTools
3. ✅ **Test token refresh** - Wait for token to expire and verify auto-refresh
4. ✅ **Add role-based access** - Implement role guards if needed
5. ✅ **Production deployment** - Consider HttpOnly cookies for tokens

## Summary

🎉 **You're all set!** The Bearer token will now be **automatically added** to every HTTP request your Angular application makes to the API.

**No additional code is needed** in your services or components - the `AuthInterceptor` handles everything automatically.

Just make sure users are logged in before making API calls, and the rest is taken care of! 🚀
