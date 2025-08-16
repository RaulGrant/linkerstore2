# Script simplificado para reasignar ASINs
Write-Host "Iniciando reasignacion de ASINs..."

# Obtener todos los ASINs disponibles en WebP
$webpAsins = @(Get-ChildItem "public\images\products\*_Prin.webp" | ForEach-Object { $_.Name.Split('_')[0] } | Sort-Object)
Write-Host "ASINs WebP disponibles: $($webpAsins.Count)"

# Leer archivo de datos
$content = Get-Content "lib\data\real-amazon-products.ts" -Raw

# ASINs ya validos (no tocar)
$validAsins = @("B08XYZ123A", "B09ABC456B", "B08DEF789C", "B08GHI012D", "B08BCD123L", "B08BCD901L")

# Obtener ASINs disponibles para asignar
$availableAsins = @($webpAsins | Where-Object { $_ -notin $validAsins })
Write-Host "ASINs disponibles para asignar: $($availableAsins.Count)"

# Lista de ASINs problemáticos que necesitan ser reemplazados
$oldAsins = @(
    "B092GH1234", "B0912XY5678", "B0834ZA9012", "B0756BC3456", "B0843PQR567",
    "B0954UVW678", "B0765XYZ789", "B0876ABC012", "B0987DEF345", "B0198GHI678"
)

# Hacer las primeras 10 asignaciones
for ($i = 0; $i -lt [Math]::Min($oldAsins.Count, $availableAsins.Count); $i++) {
    $oldAsin = $oldAsins[$i]
    $newAsin = $availableAsins[$i]
    
    # Reemplazar ASIN
    $content = $content -replace "asin: `"$oldAsin`"", "asin: `"$newAsin`""
    
    # Reemplazar image_url
    $content = $content -replace "/images/products/$oldAsin(_Prin\.webp)", "/images/products/$newAsin`$1"
    
    Write-Host "Actualizado: $oldAsin -> $newAsin"
}

# Guardar archivo actualizado
$content | Set-Content "lib\data\real-amazon-products.ts" -NoNewline

Write-Host "Reasignacion completada para las primeras 10 entradas."
