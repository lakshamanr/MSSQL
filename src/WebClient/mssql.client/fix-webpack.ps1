 # Fix Angular Webpack Missing Module Issue
# Run this script in your project directory: C:\Users\lakshaman.rokade\source\repos\MSSQL\src\WebClient\mssql.client

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Angular Webpack Fix Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check Node version
Write-Host "Step 1: Checking Node.js version..." -ForegroundColor Yellow
node --version
Write-Host ""

# Step 2: Clean npm cache
Write-Host "Step 2: Cleaning npm cache..." -ForegroundColor Yellow
npm cache clean --force
Write-Host "Cache cleaned successfully!" -ForegroundColor Green
Write-Host ""

# Step 3: Remove node_modules and package-lock.json
Write-Host "Step 3: Removing node_modules and package-lock.json..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Remove-Item -Path "node_modules" -Recurse -Force
    Write-Host "node_modules removed!" -ForegroundColor Green
}
if (Test-Path "package-lock.json") {
    Remove-Item -Path "package-lock.json" -Force
    Write-Host "package-lock.json removed!" -ForegroundColor Green
}
Write-Host ""

# Step 4: Install dependencies
Write-Host "Step 4: Installing all dependencies..." -ForegroundColor Yellow
Write-Host "This may take a few minutes..." -ForegroundColor Gray
npm install --legacy-peer-deps
Write-Host ""

# Step 5: Verify webpack installation
Write-Host "Step 5: Verifying webpack installation..." -ForegroundColor Yellow
if (Test-Path "node_modules\webpack") {
    Write-Host "Webpack installed successfully!" -ForegroundColor Green
} else {
    Write-Host "Webpack not found, installing explicitly..." -ForegroundColor Yellow
    npm install webpack --save-dev
}
Write-Host ""

# Step 6: Final verification
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Installation Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "You can now run your application with:" -ForegroundColor Yellow
Write-Host "npm start" -ForegroundColor White
Write-Host ""