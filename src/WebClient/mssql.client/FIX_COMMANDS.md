# Quick Fix Commands - Copy & Paste

## Run These Commands to Fix Login

### Step 1: Stop Angular Dev Server
In the terminal where Angular is running, press: **Ctrl+C**

### Step 2: Restart Angular (REQUIRED for proxy changes)
```bash
cd C:\Users\lakshaman.rokade\source\repos\MSSQL\src\WebClient\mssql.client
npm start
```

Wait for: `✔ Compiled successfully`

### Step 3: Ensure Backend is Running
Open a NEW terminal and run:
```bash
cd C:\Users\lakshaman.rokade\source\repos\MSSQL\src\Services\API
dotnet run
```

Should see: `Now listening on: http://localhost:5000`

### Step 4: Test Login
1. Open browser: `https://localhost:4200/#/login`
2. Enter:
   - Username: **admin**
   - Password: **tempP@ss123**
3. Click "Sign In"

## Expected Result
✅ Redirect to home page  
✅ Header shows "admin" with dropdown  
✅ No errors in console

## If Still Not Working

### Option 1: Full Clean Restart
```bash
# Stop both servers (Ctrl+C in each terminal)

# Terminal 1 - Backend
cd C:\Users\lakshaman.rokade\source\repos\MSSQL\src\Services\API
dotnet clean
dotnet run

# Terminal 2 - Frontend  
cd C:\Users\lakshaman.rokade\source\repos\MSSQL\src\WebClient\mssql.client
npm cache clean --force
npm start
```

### Option 2: Reset Database (if user not found)
```bash
cd C:\Users\lakshaman.rokade\source\repos\MSSQL\src\Services\API
dotnet ef database drop --force
dotnet ef database update
dotnet run
```

### Option 3: Check What's Running
```bash
# Check if backend is running
netstat -an | findstr :5000

# Check if frontend is running  
netstat -an | findstr :4200
```

## Quick Verification Commands

### Check Proxy Config
```bash
cd C:\Users\lakshaman.rokade\source\repos\MSSQL\src\WebClient\mssql.client
type src\proxy.conf.js | findstr "connect api"
```
Should show:
```
"/connect",
"/api"
```

### Check Auth Service
```bash
cd C:\Users\lakshaman.rokade\source\repos\MSSQL\src\WebClient\mssql.client
type src\app\auth\services\auth.service.ts | findstr "API_URL"
```
Should show:
```typescript
private readonly API_URL = ''; // Use relative URLs
```

---

**Remember**: You MUST restart Angular for proxy changes to work!
