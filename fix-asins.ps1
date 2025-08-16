# Script para reasignar ASINs problemáticos
Write-Host "🔧 Iniciando reasignación de ASINs..." -ForegroundColor Green

# Obtener todos los ASINs disponibles en WebP
$webpAsins = @(dir "public\images\products\*_Prin.webp" | ForEach-Object { $_.Name.Split('_')[0] } | Sort-Object)
Write-Host "📁 ASINs WebP disponibles: $($webpAsins.Count)"

# Leer archivo de datos
$content = Get-Content "lib\data\real-amazon-products.ts" -Raw

# ASINs ya válidos (no tocar)
$validAsins = @("B08XYZ123A", "B09ABC456B", "B08DEF789C", "B08GHI012D", "B08BCD123L", "B08BCD901L")

# Obtener ASINs disponibles para asignar
$availableAsins = @($webpAsins | Where-Object { $_ -notin $validAsins })
Write-Host "🆔 ASINs disponibles para asignar: $($availableAsins.Count)"

# Encontrar productos que necesitan nuevos ASINs
$productMatches = [regex]::Matches($content, 'id: ''(\d+)'',\s*asin: "([^"]+)"')
$problemProducts = @()

foreach ($match in $productMatches) {
    $id = $match.Groups[1].Value
    $asin = $match.Groups[2].Value
    
    if ($asin -notin $validAsins) {
        $problemProducts += [PSCustomObject]@{
            ID = $id
            OldASIN = $asin
        }
    }
}

Write-Host "🔄 Productos a reasignar: $($problemProducts.Count)"

# Hacer las asignaciones
$assignmentIndex = 0
foreach ($product in $problemProducts) {
    if ($assignmentIndex -lt $availableAsins.Count) {
        $newAsin = $availableAsins[$assignmentIndex]
        $oldAsin = $product.OldASIN
        
        # Reemplazar ASIN en el contenido
        $content = $content -replace "asin: `"$oldAsin`"", "asin: `"$newAsin`""
        
        # Reemplazar image_url correspondiente
        $content = $content -replace "image_url: `"/images/products/$oldAsin(_Prin\.webp)`"", "image_url: `"/images/products/$newAsin`$1`""
        
        Write-Host "  ✅ ID $($product.ID): $oldAsin → $newAsin"
        $assignmentIndex++
    }
}

# Guardar archivo actualizado
$content | Set-Content "lib\data\real-amazon-products.ts" -NoNewline

Write-Host "🎉 Reasignación completada. $assignmentIndex productos actualizados." -ForegroundColor Green
Write-Host "💾 Archivo guardado: lib\data\real-amazon-products.ts"
