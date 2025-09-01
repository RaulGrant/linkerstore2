$content = Get-Content "lib\data\real-amazon-products.ts"
$content = $content -replace '    "price": \d+(\.\d+)?,'
$content | Set-Content "lib\data\real-amazon-products.ts"
Write-Host "Precios removidos exitosamente"
