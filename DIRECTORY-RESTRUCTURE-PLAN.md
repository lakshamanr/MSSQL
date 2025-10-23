# Directory Restructure Plan

## Current Issues
1. **Duplicate folders**: `Service`, `Services`, and `core/Services` causing confusion
2. **Inconsistent namespaces**: `API.core.*` mixed with `API.*`
3. **Mixed organization**: Business logic scattered across multiple locations
4. **Path confusion**: Case sensitivity issues and redundant nesting

## Proposed Clean Structure

```
src/Services/API/
??? Controllers/              # API endpoints
??? Core/                     # Core business logic (consolidated)
?   ??? Domain/               # Domain models/entities
?   ?   ??? Account/          # User, Role, Permission models
?   ?   ??? Shop/             # Shop-related models
?   ?   ??? Database/         # Database-related models (from current Domain/)
?   ??? Services/             # Business logic services
?   ?   ??? Account/          # User/Role services
?   ?   ??? Shop/             # Shop services
?   ?   ??? Database/         # Database services
?   ??? Interfaces/           # Service interfaces (IUserAccountService, etc.)
?   ??? Exceptions/           # Custom exceptions
?   ??? Extensions/           # Extension methods
?   ??? Infrastructure/       # DbContext, seeding, etc.
??? Data/                     # Data access layer
?   ??? Repositories/         # Repository implementations
?   ??? Migrations/           # EF migrations
??? ViewModels/               # DTOs/ViewModels
??? Configuration/            # App configuration
??? Authorization/            # Auth policies and handlers
??? Attributes/               # Custom attributes
??? Logs/                     # Log files (gitignored)
??? certificates/             # Certificates (gitignored)
??? Properties/               # Launch settings
```

## Migration Steps

### Phase 1: Consolidate Core Domain Models
- Move all models from `Domain/` ? `Core/Domain/Database/`
- Keep existing `Core/Models/Account/` and `Core/Models/Shop/`
- Rename `Core/Models/` ? `Core/Domain/`

### Phase 2: Consolidate Services
- Keep `Core/Services/` as the primary location
- Move any services from `Services/` folder (except Email) into `Core/Services/`
- Move `Service/LeftMenu.Service/` content into appropriate location
- Move email services to `Core/Services/Email/`

### Phase 3: Consolidate Repositories
- Move `Repository/` ? `Data/Repositories/`
- Move `Migrations/` ? `Data/Migrations/`

### Phase 4: Update Namespaces
- Rename all `API.core.*` ? `API.Core.*` (capital C)
- Update all using statements
- Update AutoMapper profiles

### Phase 5: Cleanup
- Remove empty folders
- Update .csproj if needed
- Verify all builds

## Benefits
1. **Clear separation of concerns**
2. **Consistent naming conventions**
3. **Easier navigation**
4. **Better maintainability**
5. **Standard .NET project structure**
