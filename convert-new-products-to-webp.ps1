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
    "botiquin" = "B09N7D5KLM"  # Producto 42 - Botiquín Primeros Auxilios
    "sellador" = "B0BMHDTHFV"  # Producto 44 - Loctite Sellador
    "dewalt" = "B077JBQZPX"    # Producto 6 - DEWALT Gafas Seguridad
    "CAJAH" = "B01FZGX1EO"     # Producto 23 - Juego Herramientas CAHJA
    "botas" = "B0B9K7L2VH"     # Producto 18 - Botas Seguridad
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
                "$asin`_Prin.webp" 
            } else { 
                "$asin`_$counter.webp" 
            }
            
            $outputPath = Join-Path $outputDir $outputName
            
            Write-Host "  Converting: $($image.Name) -> $outputName"
            
            # Use ffmpeg for WebP conversion (assuming it's available)
            try {
                & ffmpeg -i $image.FullName -quality $quality -y $outputPath 2>$null
                if ($LASTEXITCODE -eq 0) {
                    Write-Host "    ✓ Converted successfully" -ForegroundColor Green
                } else {
                    Write-Host "    ✗ FFmpeg failed, trying ImageMagick..." -ForegroundColor Red
                    & magick convert $image.FullName -quality $quality $outputPath
                    if ($LASTEXITCODE -eq 0) {
                        Write-Host "    ✓ Converted with ImageMagick" -ForegroundColor Green
                    } else {
                        Write-Host "    ✗ Conversion failed" -ForegroundColor Red
                    }
                }
            } catch {
                Write-Host "    ✗ Error during conversion: $_" -ForegroundColor Red
            }
            
            $counter++
        }
    } else {
        Write-Host "Folder not found: $folderPath" -ForegroundColor Red
    }
}

Write-Host "WebP conversion completed!" -ForegroundColor Green
