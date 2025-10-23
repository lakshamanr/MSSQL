# Quick Fix for namespace updates
# Run this from the solution root

$projectPath = "src\Services\API"

Write-Host "Updating namespaces in all C# files..." -ForegroundColor Cyan

$files = Get-ChildItem -Path $projectPath -Filter "*.cs" -Recurse

$updatedCount = 0

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    $originalContent = $content
    
    # Update namespace declarations
    $content = $content -replace 'namespace API\.core\.', 'namespace API.Core.'
    
    # Update using statements
    $content = $content -replace 'using API\.core\.', 'using API.Core.'
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        $relativePath = $file.FullName.Replace((Get-Location).Path, "").TrimStart('\')
        Write-Host "  Updated: $relativePath" -ForegroundColor Green
        $updatedCount++
    }
}

Write-Host ""
Write-Host "Total files updated: $updatedCount" -ForegroundColor Yellow
Write-Host "Done!" -ForegroundColor Green
