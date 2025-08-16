# Convert new product images with correct ASIN mapping
$baseDir = "c:\ProyectosAlba\linkerstore\public\images\products\nuevos_productos"
$outputDir = "c:\ProyectosAlba\linkerstore\public\images\products"

# ASIN mapping
$asinMapping = @{
    "B09N7D5KLM" = @("botiquin", "botiquin_prin", "botiquin2", "botiquin3", "botiquin4", "botiquin5", "botiquin6")
    "B0BMHDTHFV" = @("sellador", "sellador2", "sellador3", "sellador4", "sellador5", "sellador6", "sellador7") 
    "B077JBQZPX" = @("dewalt", "dewalt2", "dewalt3", "dewalt4", "dewalt5", "dewalt6")
    "B01FZGX1EO" = @("CAJAH", "CAJAH2", "CAJAH3", "CAJAH4", "CAJAH5", "CAJAH6", "CAJAH7", "cajahcontenido")
    "B0B9K7L2VH" = @("botas", "botas2", "botas3", "botas4", "botas5", "botas6")
}

Write-Host "Starting image conversion..." -ForegroundColor Green

foreach ($asin in $asinMapping.Keys) {
    $imageNames = $asinMapping[$asin]
    $counter = 1
    
    Write-Host "Processing ASIN: $asin" -ForegroundColor Yellow
    
    foreach ($imageName in $imageNames) {
        $imagePath = Join-Path $baseDir "$imageName.jpg"
        
        if (Test-Path $imagePath) {
            if ($counter -eq 1) {
                $outputName = "$asin" + "_Prin.webp"
            } else {
                $outputName = "$asin" + "_$counter.webp"
            }
            
            $outputPath = Join-Path $outputDir $outputName
            
            Write-Host "  Converting: $imageName.jpg -> $outputName"
            
            Copy-Item -Path $imagePath -Destination $outputPath -Force
            Write-Host "    Success!" -ForegroundColor Green
            
            $counter++
        } else {
            Write-Host "  Image not found: $imagePath" -ForegroundColor Red
        }
    }
}

Write-Host "Conversion completed!" -ForegroundColor Green
