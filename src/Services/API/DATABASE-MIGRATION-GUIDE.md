# Database Migration Guide

This guide explains how to manage database migrations for the API project.

## Prerequisites

1. **.NET 8 SDK** installed
2. **SQL Server** running (local or remote)
3. **dotnet-ef tool** (will be auto-installed by the script)

## Connection Strings

The application uses two separate connection strings:

### 1. DefaultConnection (Identity & OpenIddict)
Used for user authentication, authorization, and application data:
```
Server=(local);Database=mssqldb;Trusted_Connection=True;TrustServerCertificate=true;MultipleActiveResultSets=true
```

### 2. SqlServerConnection (Repository Layer)
Used for SQL Server metadata queries and operations:
```
Password=SQL;Persist Security Info=True;User ID=SQL;Initial Catalog=AdventureWorks2022;Data Source=.
```

## Quick Start

### Using PowerShell Script (Recommended)

```powershell
# Update database to latest migration
.\migrate-database.ps1

# Add a new migration
.\migrate-database.ps1 -Action add -MigrationName "YourMigrationName"

# List all migrations
.\migrate-database.ps1 -Action list

# Remove last migration
.\migrate-database.ps1 -Action remove

# Generate SQL script
.\migrate-database.ps1 -Action script

# Drop database (with confirmation)
.\migrate-database.ps1 -Action drop

# Drop database (force, no confirmation)
.\migrate-database.ps1 -Action drop -Force
```

### Using dotnet-ef CLI Directly

```bash
# Install/Update dotnet-ef tool
dotnet tool install --global dotnet-ef
dotnet tool update --global dotnet-ef

# Update database
dotnet ef database update

# Add new migration
dotnet ef migrations add YourMigrationName

# List migrations
dotnet ef migrations list

# Remove last migration
dotnet ef migrations remove

# Generate SQL script
dotnet ef migrations script -o migration.sql

# Drop database
dotnet ef database drop
```

## Common Issues & Solutions

### Issue 1: "update-database" command not found
**Solution:** Use `dotnet ef database update` instead. The `update-database` command is for Package Manager Console in Visual Studio.

### Issue 2: Connection string not found
**Solution:** Ensure both `appsettings.json` and `appsettings.Development.json` have the `DefaultConnection` entry.

### Issue 3: Cannot connect to SQL Server
**Solutions:**
- Verify SQL Server is running: `sqlcmd -S (local) -E -Q "SELECT @@VERSION"`
- Check Windows Authentication is enabled
- Verify firewall settings
- Try using `localhost` instead of `(local)` in connection string

### Issue 4: Migration already applied
**Solution:** The message "No migrations were applied. The database is already up to date." means your database is current. This is normal.

### Issue 5: Migration pending
**Solution:** Run `dotnet ef database update` to apply pending migrations.

### Issue 6: Multiple contexts found
**Solution:** Specify the context: `dotnet ef database update --context ApplicationDbContext`

## Initial Setup (Fresh Database)

If you need to set up the database from scratch:

```powershell
# 1. Drop existing database (if any)
.\migrate-database.ps1 -Action drop -Force

# 2. Apply all migrations
.\migrate-database.ps1 -Action update

# 3. Run the application (this will seed data)
dotnet run
```

## Creating New Migrations

When you modify entity models:

```powershell
# 1. Add migration
.\migrate-database.ps1 -Action add -MigrationName "DescriptiveNameOfYourChanges"

# 2. Review the generated migration in Migrations folder

# 3. Apply to database
.\migrate-database.ps1 -Action update

# If something went wrong, remove the migration:
.\migrate-database.ps1 -Action remove -Force
```

## Database Seeding

The application automatically seeds the database with:
- **Default Users:**
  - Admin: `admin` / `tempP@ss123`
  - User: `user` / `tempP@ss123`
- **OpenIddict Clients:**
  - `quickapp_spa` (for Angular SPA)
  - `swagger_ui` (for Swagger UI)
- **Demo Data:** Customers, Products, Orders

Seeding occurs in `DatabaseSeeder.cs` when the application starts.

## Production Deployment

For production environments:

```powershell
# 1. Generate SQL script
.\migrate-database.ps1 -Action script

# 2. Review the generated SQL script

# 3. Execute script on production database using your preferred method
# (SQL Server Management Studio, Azure Portal, etc.)
```

## Troubleshooting Checklist

- [ ] SQL Server is running
- [ ] Connection string is correct in appsettings.json
- [ ] Connection string is correct in appsettings.Development.json
- [ ] dotnet-ef tool is installed and up to date
- [ ] You're in the correct directory (src/Services/API)
- [ ] Database user has sufficient permissions
- [ ] Firewall allows SQL Server connections
- [ ] .NET 8 SDK is installed

## Useful Commands

```bash
# Check dotnet-ef version
dotnet ef --version

# Verify connection string
dotnet user-secrets list

# Check SQL Server connection
sqlcmd -S (local) -E -Q "SELECT @@VERSION"

# View database tables
sqlcmd -S (local) -d mssqldb -E -Q "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES"

# Check applied migrations
sqlcmd -S (local) -d mssqldb -E -Q "SELECT * FROM __EFMigrationsHistory"
```

## Additional Resources

- [Entity Framework Core Migrations](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/)
- [OpenIddict Documentation](https://documentation.openiddict.com/)
- [SQL Server Connection Strings](https://www.connectionstrings.com/sql-server/)
