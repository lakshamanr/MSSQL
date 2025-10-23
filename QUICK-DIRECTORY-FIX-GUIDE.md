# Quick Directory Structure Fix Guide

## Immediate Issues to Fix

### Problem 1: `core` vs `Core` (Case Sensitivity)
**Issue**: The folder is named `core` (lowercase) but namespaces use `API.core`
**Impact**: Can cause issues on case-sensitive file systems (Linux, macOS)

**Fix**:
```powershell
cd "C:\Users\lakshaman.rokade\Source\Repos\MSSQL\src\Services\API"
# Rename through temp folder (Windows is case-insensitive)
Rename-Item -Path "core" -NewName "Core_temp"
Rename-Item -Path "Core_temp" -NewName "Core"
```

### Problem 2: Duplicate Service Folders
**Issue**: You have both `Service/`, `Services/`, and `Core/Services/`
**Impact**: Confusion about where to put service classes

**Current Structure**:
- `Services/` contains `UserIdAccessor.cs`, `Utilities.cs`, and `Email/` subfolder
- `Service/LeftMenu.Service/` contains `TreeViewJsonGenerator.cs`
- `Core/Services/` contains business logic services

**Recommended Fix**:
- Keep `Core/Services/` as the main location for all services
- Move email services: `Services/Email/` ? `Core/Services/Email/`
- Move utilities: `Services/UserIdAccessor.cs` and `Utilities.cs` ? `Core/Services/`
- Delete empty `Services/` folder
- Delete `Service/` folder (move TreeViewJsonGenerator to appropriate location)

### Problem 3: Mixed Domain Models
**Issue**: Domain models in multiple places
- `Domain/` folder contains database-related models
- `Core/Models/` contains Account and Shop models

**Recommended Structure**:
```
Core/
??? Domain/
    ??? Account/       (ApplicationUser, ApplicationRole, etc.)
    ??? Shop/          (Customer, Order, Product, etc.)
    ??? Database/      (DatabaseDomain, FunctionDetail, etc. from current Domain/)
```

## Step-by-Step Manual Fix

### Step 1: Fix Case Sensitivity (CRITICAL)
```powershell
cd "C:\Users\lakshaman.rokade\Source\Repos\MSSQL\src\Services\API"
Rename-Item -Path "core" -NewName "Core_temp"
Rename-Item -Path "Core_temp" -NewName "Core"
```

### Step 2: Create Better Structure
```powershell
# Create Data folder for repositories
New-Item -ItemType Directory -Path "Data" -Force
New-Item -ItemType Directory -Path "Data\Repositories" -Force
New-Item -ItemType Directory -Path "Data\Migrations" -Force

# Create proper Core structure
New-Item -ItemType Directory -Path "Core\Domain\Database" -Force
New-Item -ItemType Directory -Path "Core\Services\Email" -Force
```

### Step 3: Move Files (Do one at a time and rebuild)

**Move Repositories**:
```powershell
# Move entire Repository folder
Move-Item -Path "Repository" -Destination "Data\Repositories" -Force
```

**Move Migrations**:
```powershell
Move-Item -Path "Migrations" -Destination "Data\Migrations" -Force
```

**Move Domain Models**:
```powershell
# Rename Models to Domain
Rename-Item -Path "Core\Models" -NewName "Domain"

# Move Domain folder contents to Core\Domain\Database
Get-ChildItem -Path "Domain" -Recurse | ForEach-Object {
    $dest = $_.FullName -replace "\\Domain\\", "\Core\Domain\Database\"
    if ($_.PSIsContainer) {
        New-Item -ItemType Directory -Path $dest -Force
    } else {
        Copy-Item -Path $_.FullName -Destination $dest -Force
    }
}
```

### Step 4: Update Namespaces (AFTER moving files)

Use Find & Replace in Visual Studio:
1. Find: `namespace API.core` ? Replace: `namespace API.Core`
2. Find: `using API.core` ? Replace: `using API.Core`
3. Find: `namespace API.Repository` ? Replace: `namespace API.Data.Repositories`
4. Find: `using API.Repository` ? Replace: `using API.Data.Repositories`
5. Find: `namespace API.Domain` ? Replace: `namespace API.Core.Domain.Database`
6. Find: `using API.Domain` ? Replace: `using API.Core.Domain.Database`

### Step 5: Update ApplicationDbContext

The DbContext needs to know about the new Migrations location. Update your `Core\Infrastructure\ApplicationDbContext.cs`:

Add this inside the class:
```csharp
protected override void OnModelCreating(ModelBuilder builder)
{
    base.OnModelCreating(builder);
    // ... existing configurations ...
}
```

### Step 6: Update Program.cs

Update the DbContext configuration in `Program.cs`:
```csharp
services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(connectionString, b => 
    {
        b.MigrationsAssembly(migrationsAssembly);
        b.MigrationsHistoryTable("__EFMigrationsHistory", "dbo");
    });
    options.UseOpenIddict();
});
```

### Step 7: Clean Up Empty Folders
After moving everything and verifying builds:
```powershell
Remove-Item -Path "Service" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "Services" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "Domain" -Recurse -Force -ErrorAction SilentlyContinue
```

## Verification Checklist

- [ ] Rename `core` ? `Core`
- [ ] All namespaces updated from `API.core` ? `API.Core`
- [ ] Repository namespaces updated to `API.Data.Repositories`
- [ ] Domain model namespaces updated
- [ ] Project builds without errors
- [ ] No missing using statements
- [ ] No duplicate folders
- [ ] EF migrations work correctly
- [ ] All tests pass (if any)

## Safer Approach: Do It Gradually

1. **First**: Fix case sensitivity (`core` ? `Core`) and update namespaces
2. **Build and test**
3. **Second**: Move repositories to Data folder and update namespaces
4. **Build and test**
5. **Third**: Consolidate domain models
6. **Build and test**
7. **Fourth**: Clean up services folders
8. **Build and test**

## Rollback Plan

Before starting, commit your current code:
```bash
git add .
git commit -m "Before directory restructure"
git tag backup-before-restructure
```

If something goes wrong:
```bash
git reset --hard backup-before-restructure
```

## Notes

- Windows is case-insensitive but Git is case-sensitive
- Always build after each major change
- Update using statements can be done with Visual Studio's "Find and Replace in Files" (Ctrl+Shift+H)
- Consider using the PowerShell script provided for automated migration
