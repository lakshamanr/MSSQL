# Database Migration Helper Script
# This script helps manage EF Core migrations for the API project

param(
    [Parameter(Mandatory=$false)]
    [ValidateSet('update', 'add', 'remove', 'list', 'script', 'drop')]
    [string]$Action = 'update',
    
    [Parameter(Mandatory=$false)]
    [string]$MigrationName = '',
    
    [Parameter(Mandatory=$false)]
    [switch]$Force,
    
    [Parameter(Mandatory=$false)]
    [switch]$ShowDetails
)

$ErrorActionPreference = "Stop"
$projectPath = $PSScriptRoot

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "    EF Core Migration Helper" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Check if dotnet-ef is installed
Write-Host "Checking for dotnet-ef tool..." -ForegroundColor Yellow
$efToolCheck = dotnet tool list -g | Select-String "dotnet-ef"
if (-not $efToolCheck) {
    Write-Host "dotnet-ef tool not found. Installing..." -ForegroundColor Yellow
    dotnet tool install --global dotnet-ef
    Write-Host "dotnet-ef tool installed successfully!" -ForegroundColor Green
} else {
    Write-Host "dotnet-ef tool is installed." -ForegroundColor Green
    # Check for updates
    Write-Host "Checking for updates..." -ForegroundColor Yellow
    dotnet tool update --global dotnet-ef
}

Write-Host ""

# Navigate to project directory
Set-Location $projectPath

switch ($Action) {
    'update' {
        Write-Host "Applying migrations to database..." -ForegroundColor Yellow
        if ($ShowDetails) {
            dotnet ef database update --verbose
        } else {
            dotnet ef database update
        }
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Database updated successfully!" -ForegroundColor Green
        } else {
            Write-Host "Database update failed!" -ForegroundColor Red
            exit 1
        }
    }
    
    'add' {
        if ([string]::IsNullOrWhiteSpace($MigrationName)) {
            Write-Host "Error: Migration name is required for 'add' action." -ForegroundColor Red
            Write-Host "Usage: .\migrate-database.ps1 -Action add -MigrationName 'YourMigrationName'" -ForegroundColor Yellow
            exit 1
        }
        Write-Host "Creating new migration: $MigrationName" -ForegroundColor Yellow
        dotnet ef migrations add $MigrationName
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Migration '$MigrationName' created successfully!" -ForegroundColor Green
            Write-Host "Don't forget to run 'update-database' to apply it." -ForegroundColor Yellow
        } else {
            Write-Host "Migration creation failed!" -ForegroundColor Red
            exit 1
        }
    }
    
    'remove' {
        Write-Host "Removing last migration..." -ForegroundColor Yellow
        if ($Force) {
            dotnet ef migrations remove --force
        } else {
            dotnet ef migrations remove
        }
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Last migration removed successfully!" -ForegroundColor Green
        } else {
            Write-Host "Migration removal failed!" -ForegroundColor Red
            Write-Host "Tip: Use -Force to remove even if applied to database." -ForegroundColor Yellow
            exit 1
        }
    }
    
    'list' {
        Write-Host "Listing all migrations..." -ForegroundColor Yellow
        dotnet ef migrations list
    }
    
    'script' {
        Write-Host "Generating SQL script for all migrations..." -ForegroundColor Yellow
        $outputFile = "migration-script-$(Get-Date -Format 'yyyyMMdd-HHmmss').sql"
        dotnet ef migrations script -o $outputFile
        if ($LASTEXITCODE -eq 0) {
            Write-Host "SQL script generated: $outputFile" -ForegroundColor Green
        } else {
            Write-Host "Script generation failed!" -ForegroundColor Red
            exit 1
        }
    }
    
    'drop' {
        Write-Host "WARNING: This will drop the database!" -ForegroundColor Red
        if (-not $Force) {
            $confirm = Read-Host "Are you sure you want to drop the database? (yes/no)"
            if ($confirm -ne 'yes') {
                Write-Host "Operation cancelled." -ForegroundColor Yellow
                exit 0
            }
        }
        Write-Host "Dropping database..." -ForegroundColor Yellow
        dotnet ef database drop --force
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Database dropped successfully!" -ForegroundColor Green
        } else {
            Write-Host "Database drop failed!" -ForegroundColor Red
            exit 1
        }
    }
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "Done!" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan
