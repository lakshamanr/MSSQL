# Copy files from old folder names to new folder names

Write-Host "Copying Triggers to triggers_new..." -ForegroundColor Yellow
$files = Get-ChildItem -Path 'src/app/Triggers' -Recurse -File
foreach ($file in $files) {
    $newPath = $file.FullName -replace [regex]::Escape('\Triggers\'), '\triggers_new\'
    $newDir = Split-Path $newPath -Parent
    New-Item -ItemType Directory -Path $newDir -Force | Out-Null
    Copy-Item $file.FullName $newPath -Force
}

Write-Host "Copying UserDefinedDataType to user-defined-data-type_new..." -ForegroundColor Yellow
$files = Get-ChildItem -Path 'src/app/UserDefinedDataType' -Recurse -File
foreach ($file in $files) {
    $newPath = $file.FullName -replace [regex]::Escape('\UserDefinedDataType\'), '\user-defined-data-type_new\'
    $newDir = Split-Path $newPath -Parent
    New-Item -ItemType Directory -Path $newDir -Force | Out-Null
    Copy-Item $file.FullName $newPath -Force
}

Write-Host "Copying XmlSchema to xml-schema_new..." -ForegroundColor Yellow
$files = Get-ChildItem -Path 'src/app/XmlSchema' -Recurse -File
foreach ($file in $files) {
    $newPath = $file.FullName -replace [regex]::Escape('\XmlSchema\'), '\xml-schema_new\'
    $newDir = Split-Path $newPath -Parent
    New-Item -ItemType Directory -Path $newDir -Force | Out-Null
    Copy-Item $file.FullName $newPath -Force
}

Write-Host "Renaming _new folders..." -ForegroundColor Yellow
if (Test-Path 'src/app/triggers_new') { Rename-Item 'src/app/triggers_new' 'triggers' -Force }
if (Test-Path 'src/app/user-defined-data-type_new') { Rename-Item 'src/app/user-defined-data-type_new' 'user-defined-data-type' -Force }
if (Test-Path 'src/app/xml-schema_new') { Rename-Item 'src/app/xml-schema_new' 'xml-schema' -Force }

Write-Host "Files copied successfully!" -ForegroundColor Green
