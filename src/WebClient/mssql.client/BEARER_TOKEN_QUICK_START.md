# 🚀 Quick Start: Bearer Token in HTTP Requests

## ✅ Setup Complete!

The bearer token is now automatically added to **every HTTP request** from your Angular application.

## How to Use

### 1. Login First
```typescript
// User logs in via login page
http://localhost:4200/#/login
```

### 2. Make Any HTTP Request - Token Added Automatically!

```typescript
// No special code needed!
this.http.get('/api/customers').subscribe(data => {
  // Authorization header is automatically included
  console.log(data);
});
```

## What's Happening Behind the Scenes

```
Your HTTP Request
      ↓
AuthInterceptor (automatic)
      ↓
Adds: Authorization: Bearer {token}
      ↓
Request sent to API ✅
```

## Example: Before vs After

### ❌ Before (Manual - DON'T DO THIS)
```typescript
// This is what you would have to do manually:
const token = localStorage.getItem('access_token');
const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
});

this.http.get('/api/customers', { headers }).subscribe(...);
```

### ✅ After (Automatic - DO THIS)
```typescript
// Just make normal HTTP calls:
this.http.get('/api/customers').subscribe(...);
// Token is automatically added! 🎉
```

## Files Modified

- ✅ `src/WebClient/mssql.client/src/app/app.module.ts`
  - Added `HTTP_INTERCEPTORS` import
  - Added `AuthInterceptor` import
  - Registered interceptor in providers

## Key Components

| Component | Purpose |
|-----------|---------|
| **AuthInterceptor** | Automatically adds bearer token to requests |
| **AuthService** | Manages login, logout, token storage |
| **AuthGuard** | Protects routes from unauthorized access |

## Test It Now!

### 1. Check if Interceptor is Working
```bash
# Open browser DevTools (F12)
# Go to Network tab
# Make any API request
# Click on the request
# Look for: Authorization: Bearer eyJhbGciOi...
```

### 2. Quick Test in Browser Console
```javascript
// After logging in, check token exists:
localStorage.getItem('access_token');
// Should return: "eyJhbGciOiJSUzI1NiIsImtpZCI6..."
```

### 3. Make a Test API Call
```typescript
// Any component
this.http.get('/api/account/users/me').subscribe(
  user => console.log('Current user:', user),
  error => console.error('Error:', error)
);
```

## Common Scenarios

### Scenario 1: Accessing Protected API Endpoint
```typescript
// No changes needed in your service!
@Injectable()
export class DataService {
  getProtectedData() {
    return this.http.get('/api/protected-resource');
    // ✅ Token automatically added
  }
}
```

### Scenario 2: Creating/Updating Data
```typescript
createCustomer(customer: any) {
  return this.http.post('/api/customers', customer);
  // ✅ Token automatically added
}

updateCustomer(id: number, customer: any) {
  return this.http.put(`/api/customers/${id}`, customer);
  // ✅ Token automatically added
}
```

### Scenario 3: Token Expired - Auto Refresh
```typescript
// User makes request → Token expired (401)
//   ↓
// AuthInterceptor catches 401
//   ↓
// Calls refreshToken() automatically
//   ↓
// Gets new token
//   ↓
// Retries original request with new token
//   ↓
// Request succeeds! ✅
```

## Restart Your App

```bash
# Stop Angular dev server (Ctrl+C)
# Start again
cd src/WebClient/mssql.client
npm start
```

## Verify Setup

Open DevTools Network tab and look for:
```
GET /api/customers
Request Headers:
  Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjMyQzMyRjMyLUU5...
  Content-Type: application/json
```

## 🎉 You're Done!

No more manual token management. Just:
1. ✅ User logs in
2. ✅ Make HTTP requests
3. ✅ Token automatically added
4. ✅ Token automatically refreshed when expired

**That's it!** 🚀
