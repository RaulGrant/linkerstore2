# Script para corregir precios con decimales apropiados
$content = Get-Content 'lib\data\real-amazon-products.ts' -Raw
$pattern = 'price: (\d+),'

$content = [regex]::Replace($content, $pattern, {
    param($match)
    $price = [double]$match.Groups[1].Value
    # Si el precio es muy alto (mayor a 1000), lo dividimos por 100 para obtener decimales
    if ($price -gt 1000) {
        $correctedPrice = [math]::Round($price / 100, 2)
        return "price: $correctedPrice,"
    } else {
        return $match.Value
    }
})

Set-Content 'lib\data\real-amazon-products.ts' -Value $content -NoNewline
Write-Host '✅ Precios corregidos con decimales apropiados'
