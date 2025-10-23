# Quick Start Guide - Login System

## 🚀 Access the Login Page

**URL**: `https://localhost:4200/#/login`

## 📋 What You Can Do

### 1. **Login**
- Enter username or email
- Enter password
- Click "Sign In"
- Redirected to home page on success

### 2. **View User Info**
- After login, see your name in the header
- Click dropdown to see:
  - Profile (not yet implemented)
  - Settings (not yet implemented)
  - **Logout** (✅ working)

### 3. **Logout**
- Click your name in header
- Select "Logout"
- Redirected to login page
- All tokens cleared

## 🔐 Backend Integration

### Login Endpoint
```
POST http://localhost:5000/connect/token
Content-Type: application/x-www-form-urlencoded

username=your_username
password=your_password
grant_type=password
scope=openid email phone profile offline_access roles
```

### Get Current User
```
GET http://localhost:5000/api/account/users/me
Authorization: Bearer {access_token}
```

## 💾 Where Data is Stored

All authentication data is stored in browser **localStorage**:
- `access_token` - JWT access token
- `refresh_token` - Refresh token for getting new access tokens
- `current_user` - User information JSON

## 🎨 Login Page Features

✅ Modern gradient background design  
✅ Font Awesome icons  
✅ Real-time form validation  
✅ Error message display  
✅ Loading spinner during login  
✅ "Remember me" checkbox (UI only, functionality pending)  
✅ Responsive design (mobile-friendly)  

## 🔧 For Developers

### Protect a Route
```typescript
{
  path: 'protected',
  component: MyComponent,
  canActivate: [AuthGuard]
}
```

### Check Auth Status
```typescript
constructor(private authService: AuthService) {
  this.authService.isAuthenticated.subscribe(isAuth => {
    if (isAuth) {
      // User is logged in
    }
  });
}
```

### Get Current User
```typescript
this.authService.currentUser.subscribe(user => {
  console.log(user?.userName);
  console.log(user?.email);
  console.log(user?.roles);
});
```

### Manual Logout
```typescript
this.authService.logout();
this.router.navigate(['/login']);
```

## 📝 Test Credentials

Use any valid user from your ASP.NET Core Identity database.

If you don't have a user, create one using:
- The user registration endpoint (if implemented)
- Direct database insertion
- ASP.NET Core Identity seeding

## ⚠️ Known Limitations

- "Remember me" checkbox is UI-only (doesn't extend token life)
- Profile and Settings links in header don't navigate yet
- Password reset not implemented
- User registration not implemented

## 📚 Full Documentation

For complete documentation, see:
- `AUTHENTICATION_GUIDE.md` - Complete implementation guide
- `LOGIN_IMPLEMENTATION_SUMMARY.md` - Implementation summary

---

**Status**: ✅ Login system is fully functional and ready to use!

**Last Updated**: 2024

**Created by**: GitHub Copilot
