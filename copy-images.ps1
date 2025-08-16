# Convert new product images with correct ASIN mapping
$outputDir = "c:\ProyectosAlba\linkerstore\public\images\products"

if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force
}

$asinMapping = @{
    "botiquin" = "B09N7D5KLM"
    "sellador" = "B0BMHDTHFV"  
    "dewalt" = "B077JBQZPX"
    "CAJAH" = "B01FZGX1EO"
    "botas" = "B0B9K7L2VH"
}

Write-Host "Starting image conversion..." -ForegroundColor Green

foreach ($folder in $asinMapping.Keys) {
    $folderPath = "c:\ProyectosAlba\linkerstore\public\images\nuevos_productos\$folder"
    $asin = $asinMapping[$folder]
    
    if (Test-Path $folderPath) {
        Write-Host "Processing folder: $folder (ASIN: $asin)" -ForegroundColor Yellow
        
        $imageFiles = Get-ChildItem -Path $folderPath -File -Include "*.jpg", "*.jpeg", "*.png", "*.webp"
        $counter = 1
        
        foreach ($image in $imageFiles) {
            if ($counter -eq 1) {
                $outputName = "$asin" + "_Prin.webp"
            } else {
                $outputName = "$asin" + "_$counter.webp"
            }
            
            $outputPath = Join-Path $outputDir $outputName
            
            Write-Host "  Converting: $($image.Name) -> $outputName"
            
            Copy-Item -Path $image.FullName -Destination $outputPath -Force
            Write-Host "    Success!" -ForegroundColor Green
            
            $counter++
        }
    } else {
        Write-Host "Folder not found: $folderPath" -ForegroundColor Red
    }
}

Write-Host "Conversion completed!" -ForegroundColor Green
