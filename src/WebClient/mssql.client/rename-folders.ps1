# PowerShell script to rename locked folders
# Run this script AFTER closing VSCode

Write-Host "Starting folder renames..." -ForegroundColor Green

# Function to rename folder with intermediate step (for case-only changes)
function Rename-FolderSafe {
    param($oldPath, $tempPath, $newPath)

    if (Test-Path $oldPath) {
        Write-Host "Renaming: $oldPath -> $newPath" -ForegroundColor Yellow

        # Step 1: Rename to temp
        git mv $oldPath $tempPath
        if ($LASTEXITCODE -eq 0) {
            # Step 2: Rename to final
            git mv $tempPath $newPath
            if ($LASTEXITCODE -eq 0) {
                Write-Host "  ✓ Success: $newPath" -ForegroundColor Green
                return $true
            } else {
                Write-Host "  ✗ Failed at step 2" -ForegroundColor Red
                return $false
            }
        } else {
            Write-Host "  ✗ Failed at step 1" -ForegroundColor Red
            return $false
        }
    } else {
        Write-Host "  ⊘ Already renamed or not found: $oldPath" -ForegroundColor Gray
        return $true
    }
}

Write-Host "`n=== Module Folders ===" -ForegroundColor Cyan

# Rename module folders
Rename-FolderSafe "src/app/Triggers" "src/app/triggers_temp" "src/app/triggers"
Rename-FolderSafe "src/app/UserDefinedDataType" "src/app/user-defined-data-type_temp" "src/app/user-defined-data-type"
Rename-FolderSafe "src/app/XmlSchema" "src/app/xml-schema_temp" "src/app/xml-schema"

Write-Host "`n=== Subfolders ===" -ForegroundColor Cyan

# Rename subfolders
Rename-FolderSafe "src/app/function/component" "src/app/function/components_temp" "src/app/function/components"

# Check if XmlSchema was renamed to xml-schema first
if (Test-Path "src/app/xml-schema/component") {
    Rename-FolderSafe "src/app/xml-schema/component" "src/app/xml-schema/components_temp" "src/app/xml-schema/components"
} elseif (Test-Path "src/app/XmlSchema/component") {
    Rename-FolderSafe "src/app/XmlSchema/component" "src/app/XmlSchema/components_temp" "src/app/XmlSchema/components"
}

Rename-FolderSafe "src/app/view/service" "src/app/view/services_temp" "src/app/view/services"

Write-Host "`n=== Checking Status ===" -ForegroundColor Cyan
git status --short

Write-Host "`nFolder renames complete!" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Review the git status above" -ForegroundColor White
Write-Host "2. Reopen VSCode" -ForegroundColor White
Write-Host "3. Run the import update commands" -ForegroundColor White
