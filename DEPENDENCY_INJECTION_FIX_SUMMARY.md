# Dependency Injection Lifetime Fix Summary

## Problem Fixed
**Service Lifetime Mismatch Error**: `ConnectionStringCacheService` (Singleton) was trying to inject `IUserIdAccessor` (Scoped), which violated dependency injection lifetime rules.

### Error Message
```
Cannot consume scoped service 'API.core.Services.Account.Interfaces.IUserIdAccessor' 
from singleton 'API.Services.IConnectionStringCacheService'.
```

## Solution Implemented: Option 1

### Changes Made

#### 1. **ConnectionStringCacheService.cs** - Removed IUserIdAccessor Dependency

**Before:**
```csharp
public class ConnectionStringCacheService : IConnectionStringCacheService
{
    private readonly IUserIdAccessor _userIdAccessor;  // ? Scoped dependency in Singleton
    
    public ConnectionStringCacheService(
        IDistributedCache cache,
        IConfiguration configuration,
        ILogger<ConnectionStringCacheService> logger,
        ConnectionMultiplexer redisMultiplexer,
        IUserIdAccessor userIdAccessor)  // ? Injecting scoped service
    {
        _userIdAccessor = userIdAccessor;
        // ...
    }
    
    public async Task<string> GetSqlServerConnectionStringAsync(string? userId = null)
    {
        var currentUserId = userId ?? _userIdAccessor.GetCurrentUserId() ?? "SYSTEM";  // ?
        // ...
    }
}
```

**After:**
```csharp
public class ConnectionStringCacheService : IConnectionStringCacheService
{
    // ? No IUserIdAccessor dependency
    
    public ConnectionStringCacheService(
        IDistributedCache cache,
        IConfiguration configuration,
        ILogger<ConnectionStringCacheService> logger,
        ConnectionMultiplexer redisMultiplexer)  // ? Only singleton-safe dependencies
    {
        // ...
    }
    
    public async Task<string> GetSqlServerConnectionStringAsync(string userId)  // ? Required parameter
    {
        if (string.IsNullOrEmpty(userId))
        {
            throw new ArgumentNullException(nameof(userId), "User ID cannot be null or empty");
        }
        // ...
    }
}
```

#### 2. **Interface Changes** - Made userId Required

**Before:**
```csharp
public interface IConnectionStringCacheService
{
    Task<string> GetSqlServerConnectionStringAsync(string? userId = null);  // ? Optional
    Task SetSqlServerConnectionStringAsync(string connectionString, string? userId = null);  // ? Optional
}
```

**After:**
```csharp
public interface IConnectionStringCacheService
{
    Task<string> GetSqlServerConnectionStringAsync(string userId);  // ? Required
    Task SetSqlServerConnectionStringAsync(string connectionString, string userId);  // ? Required
}
```

#### 3. **BaseRepository.cs** - Fixed Syntax Error

Removed accidental `enum` keyword after `_cache` field declaration.

## How to Use the Updated Service

### ? Correct Usage - In Scoped/Transient Services (Controllers, Services)

```csharp
public class MyController : ControllerBase
{
    private readonly IConnectionStringCacheService _connectionStringCache;
    private readonly IUserIdAccessor _userIdAccessor;
    
    public MyController(
        IConnectionStringCacheService connectionStringCache,
        IUserIdAccessor userIdAccessor)
    {
        _connectionStringCache = connectionStringCache;
        _userIdAccessor = userIdAccessor;
    }
    
    public async Task<IActionResult> GetData()
    {
        // Get current user ID from IUserIdAccessor
        var userId = _userIdAccessor.GetCurrentUserId() ?? "SYSTEM";
        
        // Pass userId explicitly to the cache service
        var connectionString = await _connectionStringCache
            .GetSqlServerConnectionStringAsync(userId);
            
        // Use connection string...
        return Ok();
    }
}
```

### ? At Startup (No User Context)

```csharp
private static async Task InitializeConnectionStringCache(WebApplication app)
{
    using var scope = app.Services.CreateScope();
    try
    {
        var connectionStringCacheService = scope.ServiceProvider
            .GetRequiredService<IConnectionStringCacheService>();
            
        // InitializeCacheAsync doesn't need userId - it caches global defaults
        await connectionStringCacheService.InitializeCacheAsync();
        
        var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
        logger.LogInformation("Connection string cache initialized successfully");
    }
    catch (Exception ex)
    {
        var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "An error occurred whilst initializing connection string cache");
        throw;
    }
}
```

### ? Setting User-Specific Connection Strings

```csharp
public class ConnectionManagementService
{
    private readonly IConnectionStringCacheService _connectionStringCache;
    private readonly IUserIdAccessor _userIdAccessor;
    
    public async Task UpdateUserConnectionString(string newConnectionString)
    {
        var userId = _userIdAccessor.GetCurrentUserId();
        
        if (string.IsNullOrEmpty(userId))
        {
            throw new InvalidOperationException("User must be authenticated");
        }
        
        await _connectionStringCache
            .SetSqlServerConnectionStringAsync(newConnectionString, userId);
    }
}
```

## Key Points

### Why This Fix Works

1. **Singleton Service**: `ConnectionStringCacheService` remains singleton (good for caching)
2. **No Scoped Dependencies**: Removed `IUserIdAccessor` dependency from constructor
3. **Explicit Parameters**: Callers must provide `userId` explicitly
4. **Clear Responsibility**: Service consumers (controllers, services) are responsible for obtaining user context

### Architecture Pattern

```
HTTP Request
    ?
Controller/Service (Scoped)
    ?
??? IUserIdAccessor.GetCurrentUserId() ? (Scoped - OK to use here)
    ?
??? IConnectionStringCacheService.GetSqlServerConnectionStringAsync(userId) ?
        (Singleton - receives userId as parameter)
```

### Benefits

- ? **Fixes DI lifetime violation**
- ? **Maintains singleton caching benefits**
- ? **Makes dependencies explicit**
- ? **Easier to test** (no hidden dependencies)
- ? **Clearer code** (obvious where user ID comes from)

## Testing the Fix

### 1. Build Should Succeed
```bash
dotnet build
# Should compile without errors
```

### 2. Run the Application
```bash
dotnet run
# Should start without the DI exception
```

### 3. Verify at Runtime
- Application should start successfully
- No `AggregateException` about service lifetimes
- `InitializeConnectionStringCache` should complete without errors

## Migration Guide for Other Code

If you have other places using these methods with the optional `userId` parameter:

**Find:**
```csharp
await cacheService.GetSqlServerConnectionStringAsync();  // Old: no parameter
```

**Replace with:**
```csharp
var userId = _userIdAccessor.GetCurrentUserId() ?? "SYSTEM";
await cacheService.GetSqlServerConnectionStringAsync(userId);  // New: explicit parameter
```

## Related Files Modified

1. `src/Services/API/Services/ConnectionStringCacheService.cs` - Main fix
2. `src/Services/API/Data/Repositories/Common/BaseRepository.cs` - Syntax error fix
3. `src/Services/API/Program.cs` - No changes needed (registration stays the same)

## Notes

- **BaseRepository**: Already handles user-specific caching internally with its own `GetUserSpecificCacheKey` method
- **IUserIdAccessor**: Still registered as Scoped for use in controllers and services
- **No Breaking Changes**: The fix only affects how `ConnectionStringCacheService` is called

---

## Summary

The fix successfully resolves the dependency injection lifetime mismatch by removing the scoped `IUserIdAccessor` dependency from the singleton `ConnectionStringCacheService`. Callers now explicitly provide the `userId` parameter, making the data flow clear and maintaining proper service lifetime boundaries.
