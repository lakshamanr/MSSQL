# Quick Migration Commands Reference

## Most Common Commands

### Update Database (Apply Migrations)
```powershell
# Using the helper script (Recommended)
.\migrate-database.ps1

# Or using dotnet-ef directly
dotnet ef database update
```

### Add New Migration
```powershell
# Using the helper script
.\migrate-database.ps1 -Action add -MigrationName "AddUserProfileFields"

# Or using dotnet-ef directly
dotnet ef migrations add AddUserProfileFields
```

### List All Migrations
```powershell
# Using the helper script
.\migrate-database.ps1 -Action list

# Or using dotnet-ef directly
dotnet ef migrations list
```

### Remove Last Migration (Not Applied Yet)
```powershell
# Using the helper script
.\migrate-database.ps1 -Action remove

# Or using dotnet-ef directly
dotnet ef migrations remove
```

### Remove Last Migration (Already Applied)
```powershell
# Using the helper script
.\migrate-database.ps1 -Action remove -Force

# Or using dotnet-ef directly
dotnet ef migrations remove --force
```

### Generate SQL Script
```powershell
# Using the helper script (creates timestamped file)
.\migrate-database.ps1 -Action script

# Or using dotnet-ef directly
dotnet ef migrations script -o migration.sql
```

### Drop Database
```powershell
# Using the helper script (with confirmation)
.\migrate-database.ps1 -Action drop

# Using the helper script (skip confirmation)
.\migrate-database.ps1 -Action drop -Force

# Or using dotnet-ef directly
dotnet ef database drop
```

## Troubleshooting Commands

### Check dotnet-ef Installation
```powershell
dotnet ef --version
```

### Update dotnet-ef Tool
```powershell
dotnet tool update --global dotnet-ef
```

### Install dotnet-ef Tool
```powershell
dotnet tool install --global dotnet-ef
```

### Check SQL Server Connection
```powershell
sqlcmd -S (local) -E -Q "SELECT @@VERSION"
```

### View Database Tables
```powershell
sqlcmd -S (local) -d mssqldb -E -Q "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES"
```

### View Applied Migrations
```powershell
sqlcmd -S (local) -d mssqldb -E -Q "SELECT * FROM __EFMigrationsHistory ORDER BY MigrationId"
```

## Common Workflows

### Scenario 1: Fresh Start (Clean Database)
```powershell
.\migrate-database.ps1 -Action drop -Force
.\migrate-database.ps1 -Action update
dotnet run
```

### Scenario 2: Update Existing Entity
```powershell
# 1. Modify your entity class
# 2. Create migration
.\migrate-database.ps1 -Action add -MigrationName "UpdateCustomerEntity"
# 3. Apply migration
.\migrate-database.ps1 -Action update
```

### Scenario 3: Rollback Last Migration
```powershell
# If migration NOT applied to database
.\migrate-database.ps1 -Action remove

# If migration ALREADY applied to database
.\migrate-database.ps1 -Action remove -Force
# Then apply previous migration
.\migrate-database.ps1 -Action update
```

### Scenario 4: Production Deployment
```powershell
# 1. Generate SQL script
.\migrate-database.ps1 -Action script
# 2. Review the generated SQL file
# 3. Execute on production using SSMS or Azure Portal
```

## Default Credentials

### Database
- **Server:** (local)
- **Database:** mssqldb
- **Authentication:** Windows Authentication

### Application Users (After Seeding)
- **Admin:**
  - Username: `admin`
  - Password: `tempP@ss123`
- **Standard User:**
  - Username: `user`
  - Password: `tempP@ss123`

### Swagger UI Client
- **Client ID:** `swagger_ui`
- **Client Secret:** (None - Public client)
- **Grant Type:** Password

## Connection Strings

Located in `appsettings.json` and `appsettings.Development.json`:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=(local);Database=mssqldb;Trusted_Connection=True;TrustServerCertificate=true;MultipleActiveResultSets=true",
  "SqlServerConnection": "Password=SQL;Persist Security Info=True;User ID=SQL;Initial Catalog=AdventureWorks2022;Data Source=.",
  "RedisConnection": "localhost:6379"
}
```

## Important Notes

1. **Always backup production database** before running migrations
2. **Test migrations locally** before deploying to production
3. **Review generated SQL scripts** before executing on production
4. **Keep migrations small and focused** - one logical change per migration
5. **Name migrations descriptively** - e.g., "AddUserProfileFields", not "Update1"
6. **Never delete migration files** that have been applied to production
7. **Commit migration files to source control** along with your code changes

## Error Messages Explained

### "No migrations were applied. The database is already up to date."
✅ **This is normal!** Your database is current. No action needed.

### "Connection string 'DefaultConnection' not found."
❌ **Fix:** Ensure `appsettings.json` and `appsettings.Development.json` both have the `DefaultConnection` entry.

### "update-database command not found"
❌ **Fix:** Use `dotnet ef database update` instead. The `update-database` command is only for Visual Studio Package Manager Console.

### "Unable to connect to database"
❌ **Fix:** 
- Check SQL Server is running
- Verify connection string
- Check firewall settings
- Try `localhost` instead of `(local)`

## Need Help?

- See `DATABASE-MIGRATION-GUIDE.md` for detailed documentation
- Check the [EF Core Documentation](https://learn.microsoft.com/en-us/ef/core/)
- Review migration files in the `Migrations` folder
