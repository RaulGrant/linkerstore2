# Convert new product images to WebP with correct ASIN mapping
# Mapping: botiquin→producto 42, sellador→producto 44, dewalt→producto 6, CAJAH→producto 23, botas→producto 18

# Image quality for WebP conversion
$quality = 90

# Create output directory if it doesn't exist
$outputDir = "c:\ProyectosAlba\linkerstore\public\images\products"
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force
}

# ASIN mapping based on INFORMACION_PRODUCTOS.md
$asinMapping = @{
    "botiquin" = "B09N7D5KLM"
    "sellador" = "B0BMHDTHFV"
    "dewalt" = "B077JBQZPX"
    "CAJAH" = "B01FZGX1EO"
    "botas" = "B0B9K7L2VH"
}

Write-Host "Starting WebP conversion for new products..." -ForegroundColor Green

foreach ($folder in $asinMapping.Keys) {
    $folderPath = "c:\ProyectosAlba\linkerstore\public\images\nuevos_productos\$folder"
    $asin = $asinMapping[$folder]
    
    if (Test-Path $folderPath) {
        Write-Host "Processing folder: $folder (ASIN: $asin)" -ForegroundColor Yellow
        
        $imageFiles = Get-ChildItem -Path $folderPath -File -Include "*.jpg", "*.jpeg", "*.png", "*.webp"
        $counter = 1
        
        foreach ($image in $imageFiles) {
            $outputName = if ($counter -eq 1) { 
                "$asin" + "_Prin.webp" 
            } else { 
                "$asin" + "_$counter.webp" 
            }
            
            $outputPath = Join-Path $outputDir $outputName
            
            Write-Host "  Converting: $($image.Name) -> $outputName"
            
            # Simple copy for now (we can convert manually if needed)
            Copy-Item -Path $image.FullName -Destination $outputPath -Force
            Write-Host "    ✓ Copied successfully" -ForegroundColor Green
            
            $counter++
        }
    } else {
        Write-Host "Folder not found: $folderPath" -ForegroundColor Red
    }
}

Write-Host "Image copying completed!" -ForegroundColor Green
