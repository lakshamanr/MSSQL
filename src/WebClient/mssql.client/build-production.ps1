# ============================================================================================================
# Build & Development Script for MSSQL Angular Client
# ============================================================================================================
# This script automates the complete setup and running process for the Angular application:
# 1. Verifies and installs the correct Node.js version using NVM (14.21.3)
# 2. Cleans previous build artifacts and caches
# 3. Installs all required npm dependencies with legacy peer deps
# 4. Choose between Development Server or Production Build:
#    - Development: Starts live server at https://127.0.0.1:4200 with hot reload
#    - Production: Builds optimized bundles for deployment
# 5. Optionally creates an Electron desktop application package (production only)
# ============================================================================================================
#
# DEVELOPMENT MODE:
# - Starts Angular dev server with HTTPS on port 4200
# - Proxies API requests to http://localhost:5000 (ASP.NET Core API)
# - Hot Module Replacement for instant code updates
# - Requires backend API to be running for authentication
#
# PRODUCTION MODE:
# - Creates optimized, minified bundles in dist/ folder
# - AOT compilation for faster rendering
# - Tree-shaking to remove unused code
# - Optional Electron desktop app packaging
# ============================================================================================================

Write-Host "============================================================================================================" -ForegroundColor Cyan
Write-Host "                     MSSQL Client - Build & Development Script                                             " -ForegroundColor Cyan
Write-Host "============================================================================================================" -ForegroundColor Cyan
Write-Host ""

# ============================================================================================================
# Check if running as Administrator
# ============================================================================================================
$IsAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $IsAdmin) {
    Write-Host "WARNING: This script is not running as Administrator!" -ForegroundColor Red
    Write-Host "Running as Administrator is recommended to avoid permission errors during npm install" -ForegroundColor Yellow
    Write-Host ""
    $Continue = Read-Host "Do you want to continue anyway? (y/n)"
    if ($Continue -ne "y" -and $Continue -ne "Y") {
        Write-Host ""
        Write-Host "Please restart PowerShell as Administrator and run this script again" -ForegroundColor Cyan
        Write-Host "Right-click PowerShell and select 'Run as Administrator'" -ForegroundColor Cyan
        exit 0
    }
    Write-Host ""
}

# Define required Node.js version for Angular 8 and Electron compatibility
# Node 14 is compatible with both Angular 8 and the newer Electron build tools
$RequiredNodeVersion = "14.21.3"
$NvmPath = "$env:APPDATA\nvm\nvm.exe"

# ============================================================================================================
# STEP 1: Check and Install Required Node.js Version
# ============================================================================================================
# Angular 8 requires Node.js 10.x or 12.x for optimal compatibility
# We use Node 12.22.12 (LTS) which is the most stable version for this project
# ============================================================================================================

Write-Host "STEP 1: Checking Node.js Version" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Gray

# Get currently active Node.js version
$CurrentNodeVersion = node --version 2>$null
if ($CurrentNodeVersion) {
    Write-Host "Current Node.js version: $CurrentNodeVersion" -ForegroundColor White
} else {
    Write-Host "Node.js is not currently installed or not in PATH" -ForegroundColor Red
}

# Check if NVM (Node Version Manager) is installed
if (Test-Path $NvmPath) {
    Write-Host "NVM found at: $NvmPath" -ForegroundColor Green

    # Install the required Node.js version if not already installed
    Write-Host "Installing Node.js v$RequiredNodeVersion..." -ForegroundColor Yellow
    & $NvmPath install $RequiredNodeVersion

    # Switch to the required Node.js version
    Write-Host "Switching to Node.js v$RequiredNodeVersion..." -ForegroundColor Yellow
    & $NvmPath use $RequiredNodeVersion

    # Refresh environment variables to update PATH for the current session
    # This is necessary because NVM updates the system PATH, but PowerShell doesn't auto-reload it
    Write-Host "Refreshing environment variables..." -ForegroundColor Yellow
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

    # Wait a moment for the changes to take effect
    Start-Sleep -Seconds 2

    # Verify the version switch was successful
    $NewNodeVersion = node --version 2>$null
    if ($NewNodeVersion) {
        Write-Host "Active Node.js version: $NewNodeVersion" -ForegroundColor Green
    } else {
        Write-Host "WARNING: Unable to verify Node.js version" -ForegroundColor Yellow
        Write-Host "You may need to restart PowerShell for the changes to take effect" -ForegroundColor Yellow
        Write-Host ""
        $Restart = Read-Host "Would you like to exit and restart PowerShell? (y/n)"
        if ($Restart -eq "y" -or $Restart -eq "Y") {
            Write-Host "Please close this window and open a new PowerShell window, then run this script again" -ForegroundColor Cyan
            exit 0
        }
    }
} else {
    Write-Host "WARNING: NVM not found at expected location" -ForegroundColor Red
    Write-Host "Please ensure you are using Node.js 12.x for this project" -ForegroundColor Yellow
    Write-Host "Continuing with current Node.js version: $CurrentNodeVersion" -ForegroundColor Yellow
}

Write-Host ""
Start-Sleep -Seconds 2

# ============================================================================================================
# STEP 2: Clean npm Cache
# ============================================================================================================
# Cleaning the npm cache ensures that all packages are downloaded fresh
# This prevents issues with corrupted or outdated cached packages
# ============================================================================================================

Write-Host "STEP 2: Cleaning npm Cache" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Gray

npm cache clean --force
if ($LASTEXITCODE -eq 0) {
    Write-Host "npm cache cleaned successfully!" -ForegroundColor Green
} else {
    Write-Host "WARNING: Failed to clean npm cache" -ForegroundColor Red
}

Write-Host ""
Start-Sleep -Seconds 1

# ============================================================================================================
# STEP 3: Remove Previous Build Artifacts
# ============================================================================================================
# Removing node_modules and package-lock.json ensures a clean installation
# This eliminates potential conflicts from previous installations
# ============================================================================================================

Write-Host "STEP 3: Removing Previous Build Artifacts" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Gray

# Remove node_modules directory if it exists
if (Test-Path "node_modules") {
    Write-Host "Removing node_modules directory..." -ForegroundColor White
    Write-Host "This may take a moment..." -ForegroundColor Gray

    try {
        # First attempt: normal removal
        Remove-Item -Path "node_modules" -Recurse -Force -ErrorAction Stop
        Write-Host "node_modules directory removed!" -ForegroundColor Green
    }
    catch {
        Write-Host "WARNING: Unable to remove node_modules completely" -ForegroundColor Yellow
        Write-Host "Some files may be locked by VS Code, File Explorer, or Antivirus" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Recommendations:" -ForegroundColor Cyan
        Write-Host "  1. Close VS Code and any File Explorer windows" -ForegroundColor White
        Write-Host "  2. Temporarily disable antivirus" -ForegroundColor White
        Write-Host "  3. Run this script as Administrator" -ForegroundColor White
        Write-Host ""
        $Retry = Read-Host "After closing programs, press Enter to retry or 'n' to skip"

        if ($Retry -ne "n" -and $Retry -ne "N") {
            Remove-Item -Path "node_modules" -Recurse -Force -ErrorAction SilentlyContinue
            Write-Host "Retry completed" -ForegroundColor Green
        }
    }
} else {
    Write-Host "node_modules directory not found (already clean)" -ForegroundColor Gray
}

# Remove package-lock.json if it exists
if (Test-Path "package-lock.json") {
    Write-Host "Removing package-lock.json..." -ForegroundColor White
    Remove-Item -Path "package-lock.json" -Force -ErrorAction SilentlyContinue
    Write-Host "package-lock.json removed!" -ForegroundColor Green
} else {
    Write-Host "package-lock.json not found (already clean)" -ForegroundColor Gray
}

# Remove dist directory (previous build output) if it exists
if (Test-Path "dist") {
    Write-Host "Removing previous build output (dist directory)..." -ForegroundColor White
    Remove-Item -Path "dist" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "Previous build output removed!" -ForegroundColor Green
} else {
    Write-Host "dist directory not found (no previous build)" -ForegroundColor Gray
}

Write-Host ""
Start-Sleep -Seconds 1

# ============================================================================================================
# STEP 4: Install All Dependencies
# ============================================================================================================
# Installing all project dependencies from package.json
# Using --legacy-peer-deps to handle peer dependency conflicts in older Angular versions
# This may take several minutes depending on internet speed
# ============================================================================================================

Write-Host "STEP 4: Installing All Dependencies" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Gray
Write-Host "This may take 5-10 minutes depending on your internet connection..." -ForegroundColor Gray
Write-Host ""

# Install dependencies with legacy peer deps flag for Angular 8 compatibility
npm install --legacy-peer-deps

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "All dependencies installed successfully!" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "ERROR: Failed to install dependencies" -ForegroundColor Red
    Write-Host ""
    Write-Host "Common causes of EPERM errors:" -ForegroundColor Yellow
    Write-Host "  1. Not running as Administrator" -ForegroundColor White
    Write-Host "  2. Antivirus software blocking file operations" -ForegroundColor White
    Write-Host "  3. VS Code or File Explorer has the folder open" -ForegroundColor White
    Write-Host "  4. Another Node process is running" -ForegroundColor White
    Write-Host ""
    Write-Host "Suggested fixes:" -ForegroundColor Cyan
    Write-Host "  1. Close VS Code and all File Explorer windows" -ForegroundColor White
    Write-Host "  2. Run PowerShell as Administrator" -ForegroundColor White
    Write-Host "  3. Temporarily disable antivirus" -ForegroundColor White
    Write-Host "  4. Delete node_modules manually and retry" -ForegroundColor White
    Write-Host ""

    $Retry = Read-Host "Would you like to retry npm install? (y/n)"
    if ($Retry -eq "y" -or $Retry -eq "Y") {
        Write-Host ""
        Write-Host "Retrying npm install..." -ForegroundColor Yellow
        npm install --legacy-peer-deps

        if ($LASTEXITCODE -ne 0) {
            Write-Host ""
            Write-Host "Installation failed again. Please fix the issues above and run the script again." -ForegroundColor Red
            exit 1
        } else {
            Write-Host ""
            Write-Host "Dependencies installed successfully on retry!" -ForegroundColor Green
        }
    } else {
        exit 1
    }
}

Write-Host ""
Start-Sleep -Seconds 2

# ============================================================================================================
# STEP 5: Verify Critical Dependencies
# ============================================================================================================
# Verify that critical build tools (Angular CLI, Webpack) are installed correctly
# These are essential for building the application
# ============================================================================================================

Write-Host "STEP 5: Verifying Critical Dependencies" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Gray

# Check if Angular CLI is installed
if (Test-Path "node_modules\@angular\cli") {
    Write-Host "[OK] Angular CLI installed" -ForegroundColor Green
} else {
    Write-Host "[FAIL] Angular CLI not found" -ForegroundColor Red
}

# Check if Webpack is installed
if (Test-Path "node_modules\webpack") {
    Write-Host "[OK] Webpack installed" -ForegroundColor Green
} else {
    Write-Host "[WARNING] Webpack not found, installing explicitly..." -ForegroundColor Yellow
    npm install webpack --save-dev --legacy-peer-deps
}

# Check if TypeScript is installed
if (Test-Path "node_modules\typescript") {
    Write-Host "[OK] TypeScript installed" -ForegroundColor Green
} else {
    Write-Host "[FAIL] TypeScript not found" -ForegroundColor Red
}

Write-Host ""
Start-Sleep -Seconds 2

# ============================================================================================================
# STEP 6: Choose Build Mode
# ============================================================================================================
# Choose between Development Server or Production Build
# - Development: Start live dev server with hot reload (https://127.0.0.1:4200)
# - Production: Build optimized bundle for deployment
# ============================================================================================================

Write-Host "STEP 6: Choose Build Mode" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Gray
Write-Host ""
Write-Host "Select build mode:" -ForegroundColor White
Write-Host "  [1] Start Development Server (with hot reload)" -ForegroundColor Cyan
Write-Host "  [2] Build Production Application" -ForegroundColor Cyan
Write-Host ""

$BuildMode = Read-Host "Enter your choice (1 or 2)"

if ($BuildMode -eq "1") {
    # ============================================================================================================
    # STEP 6A: Start Development Server
    # ============================================================================================================
    # Starts Angular development server with:
    # - HTTPS enabled on https://127.0.0.1:4200
    # - Hot Module Replacement (HMR) for instant updates
    # - API proxy to backend at http://localhost:5000
    # - SSL certificates from ASP.NET configuration
    # ============================================================================================================

    Write-Host ""
    Write-Host "STEP 6A: Starting Development Server" -ForegroundColor Yellow
    Write-Host "----------------------------------------" -ForegroundColor Gray
    Write-Host ""

    Write-Host "Development Server Configuration:" -ForegroundColor Cyan
    Write-Host "  - URL: https://127.0.0.1:4200" -ForegroundColor White
    Write-Host "  - SSL: Enabled (using ASP.NET certificates)" -ForegroundColor White
    Write-Host "  - Hot Reload: Enabled" -ForegroundColor White
    Write-Host "  - API Proxy: http://localhost:5000" -ForegroundColor White
    Write-Host ""

    Write-Host "Proxied API Endpoints:" -ForegroundColor Cyan
    Write-Host "  /Tables, /Database, /LeftMenu, /common" -ForegroundColor White
    Write-Host "  /StoredProcedure, /AggregateFunction, /ScalarFunction" -ForegroundColor White
    Write-Host "  /TableFunction, /UserDefinedDataType, /View" -ForegroundColor White
    Write-Host "  /DatabaseTrigger, /XmlSchema, /Schema, /Authorization" -ForegroundColor White
    Write-Host "  /connect, /api" -ForegroundColor White
    Write-Host ""

    Write-Host "IMPORTANT: Make sure your ASP.NET Core API is running on http://localhost:5000" -ForegroundColor Yellow
    Write-Host "           (Required for authentication and API calls)" -ForegroundColor Yellow
    Write-Host ""

    $ContinueDev = Read-Host "Press Enter to start the development server (or 'n' to cancel)"

    if ($ContinueDev -ne "n" -and $ContinueDev -ne "N") {
        Write-Host ""
        Write-Host "Starting development server..." -ForegroundColor Green
        Write-Host "This will take 30-60 seconds for the initial compilation..." -ForegroundColor Gray
        Write-Host ""
        Write-Host "Once started, open your browser to: https://127.0.0.1:4200" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
        Write-Host ""

        # Start the development server
        npm run start:windows

        # If the server exits, show message
        Write-Host ""
        Write-Host "Development server stopped." -ForegroundColor Yellow
        exit 0
    } else {
        Write-Host "Development server start cancelled." -ForegroundColor Gray
        exit 0
    }

} elseif ($BuildMode -eq "2") {
    # ============================================================================================================
    # STEP 6B: Build Production Application
    # ============================================================================================================
    # Building the Angular application in production mode
    # This creates optimized, minified, and tree-shaken bundles for deployment
    # Production mode enables:
    # - Ahead-of-Time (AOT) compilation for faster rendering
    # - Production environment configurations
    # - Code minification and optimization
    # - Tree-shaking to remove unused code
    # ============================================================================================================

    Write-Host ""
    Write-Host "STEP 6B: Building Production Application" -ForegroundColor Yellow
    Write-Host "----------------------------------------" -ForegroundColor Gray
    Write-Host "Building optimized production bundle..." -ForegroundColor White
    Write-Host "This will take several minutes..." -ForegroundColor Gray
    Write-Host ""

    # Execute the production build command
    npm run build -- --prod

    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "Production build completed successfully!" -ForegroundColor Green

        # Display build output location
        if (Test-Path "dist") {
            Write-Host "Build output location: $(Resolve-Path 'dist')" -ForegroundColor Cyan

            # Show build output size
            $DistSize = (Get-ChildItem -Path "dist" -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
            Write-Host "Total build size: $([math]::Round($DistSize, 2)) MB" -ForegroundColor Cyan
        }
    } else {
        Write-Host ""
        Write-Host "ERROR: Production build failed" -ForegroundColor Red
        Write-Host "Please check the error messages above" -ForegroundColor Yellow
        exit 1
    }

    Write-Host ""
    Start-Sleep -Seconds 2
} else {
    Write-Host ""
    Write-Host "Invalid choice. Please run the script again and select 1 or 2." -ForegroundColor Red
    exit 1
}

# ============================================================================================================
# STEP 7: Optional - Build Electron Desktop Application (Production Mode Only)
# ============================================================================================================
# This step creates a standalone desktop application using Electron
# Only available after a successful production build
# ============================================================================================================

if ($BuildMode -eq "2") {
    Write-Host "STEP 7: Electron Desktop Application Build (Optional)" -ForegroundColor Yellow
    Write-Host "----------------------------------------" -ForegroundColor Gray

    # Prompt user if they want to build Electron package
    $BuildElectron = Read-Host "Do you want to build the Electron desktop application? (y/n)"

    if ($BuildElectron -eq "y" -or $BuildElectron -eq "Y") {
        Write-Host "Building Electron desktop application..." -ForegroundColor White
        Write-Host "This will create a standalone Windows executable..." -ForegroundColor Gray
        Write-Host ""

        # Build Electron package using electron-builder
        npm run electron:build

        if ($LASTEXITCODE -eq 0) {
            Write-Host ""
            Write-Host "Electron application built successfully!" -ForegroundColor Green

            # Display Electron build output location
            if (Test-Path "release-builds") {
                Write-Host "Electron package location: $(Resolve-Path 'release-builds')" -ForegroundColor Cyan
            }
        } else {
            Write-Host ""
            Write-Host "WARNING: Electron build failed" -ForegroundColor Red
            Write-Host "The web application was built successfully, but Electron packaging failed" -ForegroundColor Yellow
        }
    } else {
        Write-Host "Skipping Electron build" -ForegroundColor Gray
    }

    Write-Host ""
    Start-Sleep -Seconds 1

    # ============================================================================================================
    # FINAL SUMMARY - PRODUCTION BUILD
    # ============================================================================================================

    Write-Host "============================================================================================================" -ForegroundColor Cyan
    Write-Host "                                      BUILD COMPLETED!                                                      " -ForegroundColor Green
    Write-Host "============================================================================================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Build Summary:" -ForegroundColor Yellow
    Write-Host "  - Node.js Version: $(node --version)" -ForegroundColor White
    Write-Host "  - npm Version: $(npm --version)" -ForegroundColor White
    Write-Host "  - Build Mode: Production" -ForegroundColor White
    Write-Host "  - Build Output: dist/" -ForegroundColor White
    Write-Host ""
    Write-Host "Next Steps:" -ForegroundColor Yellow
    Write-Host "  1. Test the build locally: npm start" -ForegroundColor White
    Write-Host "  2. Deploy the 'dist' folder to your web server" -ForegroundColor White
    Write-Host "  3. For Electron app, check 'release-builds' folder" -ForegroundColor White
    Write-Host ""
    Write-Host "Deployment Checklist:" -ForegroundColor Cyan
    Write-Host "  - Ensure ASP.NET Core API is configured for production" -ForegroundColor White
    Write-Host "  - Update environment.prod.ts with production API URL" -ForegroundColor White
    Write-Host "  - Configure SSL certificates on the web server" -ForegroundColor White
    Write-Host "  - Set up CORS policies on the API server" -ForegroundColor White
    Write-Host ""
    Write-Host "============================================================================================================" -ForegroundColor Cyan
    Write-Host ""

    # End of script - pause to allow user to read the summary
    Read-Host "Press Enter to exit"
}
