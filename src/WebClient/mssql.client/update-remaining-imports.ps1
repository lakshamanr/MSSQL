# PowerShell script to update remaining imports after folder renames
# Run this AFTER the rename-folders.ps1 script completes

Write-Host "Updating remaining import statements..." -ForegroundColor Green

# Define the files and their updates
$updates = @(
    @{
        File = "src/app/app-routing.module.ts"
        Changes = @(
            @{ Old = "./Triggers/trigger.module"; New = "./triggers/trigger.module" }
            @{ Old = "./XmlSchema/xml-schema.module"; New = "./xml-schema/xml-schema.module" }
            @{ Old = "./UserDefinedDataType/user-defined-data-type.module"; New = "./user-defined-data-type/user-defined-data-type.module" }
        )
    }
    @{
        File = "src/app/function/function.module.ts"
        Changes = @(
            @{ Old = "./component/"; New = "./components/" }
        )
    }
)

foreach ($update in $updates) {
    $filePath = $update.File
    if (Test-Path $filePath) {
        Write-Host "`nProcessing: $filePath" -ForegroundColor Yellow
        $content = Get-Content $filePath -Raw
        $modified = $false

        foreach ($change in $update.Changes) {
            if ($content -match [regex]::Escape($change.Old)) {
                $content = $content -replace [regex]::Escape($change.Old), $change.New
                Write-Host "  ✓ Updated: $($change.Old) -> $($change.New)" -ForegroundColor Green
                $modified = $true
            }
        }

        if ($modified) {
            $content | Set-Content $filePath -NoNewline
        }
    } else {
        Write-Host "  ✗ File not found: $filePath" -ForegroundColor Red
    }
}

Write-Host "`nImport updates complete!" -ForegroundColor Green
Write-Host "Run 'git status' to see the changes" -ForegroundColor Yellow
