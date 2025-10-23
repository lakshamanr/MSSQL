# 🔧 Login Troubleshooting Guide

## ✅ Fixes Applied

### 1. **Updated Proxy Configuration**
Added `/connect` and `/api` endpoints to `src/proxy.conf.js`

### 2. **Updated Auth Service**
Changed API_URL from `'http://localhost:5000'` to `''` (empty string) to use relative URLs with the proxy

## 🔐 Default Login Credentials

Based on your `DatabaseSeeder.cs`, use these credentials:

### Administrator Account
- **Username**: `admin`
- **Password**: `tempP@ss123`
- **Email**: `admin@ebenmonney.com`

### Standard User Account
- **Username**: `user`
- **Password**: `tempP@ss123`
- **Email**: `user@ebenmonney.com`

## 🚀 How to Test Now

### Step 1: Restart Angular Dev Server
The proxy configuration changes require a restart:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
cd src\WebClient\mssql.client
npm start
```

### Step 2: Make Sure Backend is Running
```bash
cd src\Services\API
dotnet run
```

The API should be running on `http://localhost:5000`

### Step 3: Access Login Page
Navigate to: `https://localhost:4200/#/login`

### Step 4: Login
- Username: `admin`
- Password: `tempP@ss123`

## 🐛 Common Issues & Solutions

### Issue 1: "Cannot connect to server"
**Solution**: Make sure the .NET API is running on port 5000
```bash
cd src\Services\API
dotnet run
```

### Issue 2: CORS Errors
**Check**: Your `Program.cs` already has CORS configured correctly:
```csharp
app.UseCors("AllowOrigin");
```

### Issue 3: 401 Unauthorized
**Possible causes**:
- Wrong username/password
- Database not seeded
- User account is disabled

**Solution**: Check database or re-run migrations:
```bash
cd src\Services\API
dotnet ef database drop --force
dotnet ef database update
```

### Issue 4: Proxy Not Working
**Solution**: 
1. Stop Angular dev server (Ctrl+C)
2. Clear node cache: `npm cache clean --force`
3. Restart: `npm start`

### Issue 5: "User not found" or Database Empty
**Solution**: Ensure the database is seeded with default users
```bash
cd src\Services\API
dotnet run
```

The `DatabaseSeeder` will automatically create the admin and user accounts on first run.

## 🔍 Debugging Steps

### 1. Check Browser Console (F12)
Look for:
- Network requests to `/connect/token`
- Any CORS errors
- 401/403 errors
- Network connection errors

### 2. Check Network Tab
- Open DevTools (F12) → Network tab
- Try to login
- Check the `/connect/token` request
- Look at Request Headers, Response, and Status Code

### 3. Check Backend Logs
Look in the console where you ran `dotnet run` for any errors

### 4. Verify Proxy is Working
Open browser console and check the request URL:
- Should be: `https://localhost:4200/connect/token` (proxied to backend)
- NOT: `http://localhost:5000/connect/token` (direct, won't work due to CORS)

## 📋 Test Checklist

- [ ] Backend API is running on port 5000
- [ ] Angular dev server is running on port 4200
- [ ] You restarted Angular after proxy changes
- [ ] You're using the correct credentials (`admin` / `tempP@ss123`)
- [ ] Database is created and seeded
- [ ] Browser console shows no CORS errors
- [ ] `/connect/token` request goes through the proxy

## 🎯 Expected Behavior After Login

1. **Login request** sent to `/connect/token`
2. **Response** contains `access_token` and `refresh_token`
3. **User data** fetched from `/api/account/users/me`
4. **Header** updates to show username
5. **Redirect** to home page

## 🔐 Security Notes

The default password `tempP@ss123` should be changed in production!

## 📞 Still Not Working?

If login still fails, check:

1. **Console errors** - Press F12 and check Console tab
2. **Network requests** - Check Network tab for failed requests
3. **Backend logs** - Look for errors in your API console
4. **Database connection** - Ensure SQL Server is running

### Get Detailed Error Information

Open browser console (F12) and look for the exact error message. Common errors:

- **"CORS policy"** → Make sure API is running and CORS is configured
- **"401 Unauthorized"** → Wrong credentials or user not found
- **"Cannot connect"** → Backend not running or wrong port
- **"User account is disabled"** → Check `IsEnabled` property in database

---

## Quick Test Commands

```bash
# Terminal 1 - Start Backend
cd C:\Users\lakshaman.rokade\source\repos\MSSQL\src\Services\API
dotnet run

# Terminal 2 - Start Frontend
cd C:\Users\lakshaman.rokade\source\repos\MSSQL\src\WebClient\mssql.client
npm start

# Then navigate to: https://localhost:4200/#/login
# Login with: admin / tempP@ss123
```

---

**Status**: ✅ Configuration updated - Please restart Angular dev server and try again!
