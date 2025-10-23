# Project Reorganization Script
# This script reorganizes the API project structure for better maintainability
# Run from the solution root directory

param(
    [switch]$WhatIf = $false,
    [switch]$Backup = $true
)

$ErrorActionPreference = "Stop"
$projectRoot = "src\Services\API"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Project Reorganization Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

if (-not (Test-Path $projectRoot)) {
    Write-Error "Project root not found at: $projectRoot"
    exit 1
}

# Create backup if requested
if ($Backup -and -not $WhatIf) {
    $timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
    $backupPath = "backup_$timestamp"
    Write-Host "Creating backup at: $backupPath" -ForegroundColor Yellow
    Copy-Item -Path $projectRoot -Destination $backupPath -Recurse
    Write-Host "Backup created successfully" -ForegroundColor Green
    Write-Host ""
}

# Helper function to move files and update namespaces
function Move-ProjectFiles {
    param(
        [string]$Source,
        [string]$Destination,
        [string]$OldNamespace,
        [string]$NewNamespace
    )
    
    $fullSource = Join-Path $projectRoot $Source
    $fullDestination = Join-Path $projectRoot $Destination
    
    if (-not (Test-Path $fullSource)) {
        Write-Host "  Source not found: $Source (skipping)" -ForegroundColor Yellow
        return
    }
    
    Write-Host "  Moving: $Source -> $Destination" -ForegroundColor Cyan
    
    if ($WhatIf) {
        Write-Host "    [WhatIf] Would move files and update namespaces" -ForegroundColor Gray
        return
    }
    
    # Create destination directory if it doesn't exist
    if (-not (Test-Path $fullDestination)) {
        New-Item -ItemType Directory -Path $fullDestination -Force | Out-Null
    }
    
    # Move files
    Get-ChildItem -Path $fullSource -Recurse -File | ForEach-Object {
        $relativePath = $_.FullName.Substring($fullSource.Length + 1)
        $destFile = Join-Path $fullDestination $relativePath
        $destDir = Split-Path $destFile -Parent
        
        if (-not (Test-Path $destDir)) {
            New-Item -ItemType Directory -Path $destDir -Force | Out-Null
        }
        
        # Read file content
        $content = Get-Content $_.FullName -Raw
        
        # Update namespace if specified
        if ($OldNamespace -and $NewNamespace) {
            $content = $content -replace [regex]::Escape("namespace $OldNamespace"), "namespace $NewNamespace"
            $content = $content -replace [regex]::Escape("using $OldNamespace"), "using $NewNamespace"
        }
        
        # Write to destination
        Set-Content -Path $destFile -Value $content
    }
    
    Write-Host "    Moved successfully" -ForegroundColor Green
}

# Helper function to update all using statements in the project
function Update-UsingStatements {
    param(
        [string]$OldNamespace,
        [string]$NewNamespace
    )
    
    Write-Host "Updating using statements: $OldNamespace -> $NewNamespace" -ForegroundColor Cyan
    
    if ($WhatIf) {
        Write-Host "  [WhatIf] Would update using statements in all .cs files" -ForegroundColor Gray
        return
    }
    
    Get-ChildItem -Path $projectRoot -Filter "*.cs" -Recurse | ForEach-Object {
        $content = Get-Content $_.FullName -Raw
        $updated = $content -replace [regex]::Escape("using $OldNamespace"), "using $NewNamespace"
        
        if ($content -ne $updated) {
            Set-Content -Path $_.FullName -Value $updated
            Write-Host "  Updated: $($_.FullName.Substring($projectRoot.Length + 1))" -ForegroundColor Gray
        }
    }
    
    Write-Host "  Using statements updated" -ForegroundColor Green
}

Write-Host "Phase 1: Renaming core -> Core (capital C)" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Yellow

if (-not $WhatIf) {
    $coreOld = Join-Path $projectRoot "core"
    $coreNew = Join-Path $projectRoot "Core"
    
    if (Test-Path $coreOld) {
        # Windows is case-insensitive, so we need to rename to temp first
        $coreTemp = Join-Path $projectRoot "Core_temp"
        Rename-Item -Path $coreOld -NewName "Core_temp"
        Rename-Item -Path $coreTemp -NewName "Core"
        Write-Host "  Renamed core -> Core" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "Phase 2: Updating namespaces API.core -> API.Core" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Yellow

Update-UsingStatements -OldNamespace "API.core" -NewNamespace "API.Core"

Write-Host ""
Write-Host "Phase 3: Consolidating Services" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Yellow

# Move email services
Move-ProjectFiles -Source "Services\Email" -Destination "Core\Services\Email" `
    -OldNamespace "API.Services.Email" -NewNamespace "API.Core.Services.Email"

# Move other utility services
$servicesFiles = @("UserIdAccessor.cs", "Utilities.cs")
foreach ($file in $servicesFiles) {
    $source = Join-Path $projectRoot "Services\$file"
    $dest = Join-Path $projectRoot "Core\Services\$file"
    
    if (Test-Path $source) {
        if ($WhatIf) {
            Write-Host "  [WhatIf] Would move: Services\$file -> Core\Services\$file" -ForegroundColor Gray
        } else {
            $content = Get-Content $source -Raw
            $content = $content -replace "namespace API.Services", "namespace API.Core.Services"
            Set-Content -Path $dest -Value $content
            Write-Host "  Moved: Services\$file -> Core\Services\$file" -ForegroundColor Green
        }
    }
}

Write-Host ""
Write-Host "Phase 4: Organizing Domain Models" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Yellow

# Rename Models -> Domain
if (-not $WhatIf) {
    $modelsPath = Join-Path $projectRoot "Core\Models"
    $domainPath = Join-Path $projectRoot "Core\Domain"
    
    if ((Test-Path $modelsPath) -and -not (Test-Path $domainPath)) {
        Rename-Item -Path $modelsPath -NewName "Domain"
        Write-Host "  Renamed: Core\Models -> Core\Domain" -ForegroundColor Green
    }
}

# Move Domain/ contents to Core/Domain/Database/
if ((Test-Path (Join-Path $projectRoot "Domain")) -and -not $WhatIf) {
    $oldDomain = Join-Path $projectRoot "Domain"
    $newDomain = Join-Path $projectRoot "Core\Domain\Database"
    
    if (-not (Test-Path $newDomain)) {
        New-Item -ItemType Directory -Path $newDomain -Force | Out-Null
    }
    
    Get-ChildItem -Path $oldDomain -Recurse | ForEach-Object {
        $relativePath = $_.FullName.Substring($oldDomain.Length + 1)
        $dest = Join-Path $newDomain $relativePath
        
        if ($_.PSIsContainer) {
            if (-not (Test-Path $dest)) {
                New-Item -ItemType Directory -Path $dest -Force | Out-Null
            }
        } else {
            $content = Get-Content $_.FullName -Raw
            $content = $content -replace "namespace API.Domain", "namespace API.Core.Domain.Database"
            Set-Content -Path $dest -Value $content
        }
    }
    
    Write-Host "  Moved: Domain/* -> Core\Domain\Database/*" -ForegroundColor Green
}

Write-Host ""
Write-Host "Phase 5: Organizing Data Access" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Yellow

# Create Data folder structure
if (-not $WhatIf) {
    $dataPath = Join-Path $projectRoot "Data"
    if (-not (Test-Path $dataPath)) {
        New-Item -ItemType Directory -Path $dataPath -Force | Out-Null
    }
    
    # Move Repository -> Data/Repositories
    $repoOld = Join-Path $projectRoot "Repository"
    $repoNew = Join-Path $dataPath "Repositories"
    
    if ((Test-Path $repoOld) -and -not (Test-Path $repoNew)) {
        Move-Item -Path $repoOld -Destination $repoNew
        Write-Host "  Moved: Repository -> Data\Repositories" -ForegroundColor Green
        
        # Update namespaces in repository files
        Get-ChildItem -Path $repoNew -Filter "*.cs" -Recurse | ForEach-Object {
            $content = Get-Content $_.FullName -Raw
            $updated = $content -replace "namespace API.Repository", "namespace API.Data.Repositories"
            $updated = $updated -replace "using API.Repository", "using API.Data.Repositories"
            Set-Content -Path $_.FullName -Value $updated
        }
    }
    
    # Move Migrations -> Data/Migrations
    $migOld = Join-Path $projectRoot "Migrations"
    $migNew = Join-Path $dataPath "Migrations"
    
    if ((Test-Path $migOld) -and -not (Test-Path $migNew)) {
        Move-Item -Path $migOld -Destination $migNew
        Write-Host "  Moved: Migrations -> Data\Migrations" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "Phase 6: Updating all references" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Yellow

if (-not $WhatIf) {
    # Update all namespace references
    Get-ChildItem -Path $projectRoot -Filter "*.cs" -Recurse | ForEach-Object {
        $content = Get-Content $_.FullName -Raw
        $original = $content
        
        # Update using statements
        $content = $content -replace "using API.core", "using API.Core"
        $content = $content -replace "using API.Domain", "using API.Core.Domain.Database"
        $content = $content -replace "using API.Repository", "using API.Data.Repositories"
        $content = $content -replace "using API.Services.Email", "using API.Core.Services.Email"
        
        if ($content -ne $original) {
            Set-Content -Path $_.FullName -Value $content
        }
    }
    
    Write-Host "  Updated all namespace references" -ForegroundColor Green
}

Write-Host ""
Write-Host "Phase 7: Cleanup empty folders" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Yellow

if (-not $WhatIf) {
    # Remove empty folders
    $foldersToCheck = @("Services", "Service", "Domain")
    foreach ($folder in $foldersToCheck) {
        $path = Join-Path $projectRoot $folder
        if (Test-Path $path) {
            $items = Get-ChildItem -Path $path -Recurse
            if ($items.Count -eq 0) {
                Remove-Item -Path $path -Recurse -Force
                Write-Host "  Removed empty folder: $folder" -ForegroundColor Green
            }
        }
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Reorganization Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Build the solution to verify all references are correct" -ForegroundColor White
Write-Host "2. Run tests if available" -ForegroundColor White
Write-Host "3. Update .gitignore if needed" -ForegroundColor White
Write-Host "4. Review and commit changes" -ForegroundColor White
Write-Host ""

if ($WhatIf) {
    Write-Host "Note: This was a dry run. No changes were made." -ForegroundColor Yellow
    Write-Host "Run without -WhatIf to apply changes." -ForegroundColor Yellow
}
