# Script para establecer precios razonables en MXN
$content = Get-Content 'lib\data\real-amazon-products.ts' -Raw

# Definir precios razonables para diferentes categorías de productos
$priceRanges = @{
    # EPP - Equipo de Protección Personal: 200-800 MXN
    'chaleco' = 450
    'overol' = 850
    'casco' = 320
    'guantes' = 280
    'lentes' = 180
    'mascarilla' = 250
    
    # Herramientas - 800-3500 MXN
    'taladro' = 2500
    'sierra' = 3200
    'lijadora' = 2800
    'esmeril' = 1800
    'pistola' = 1500
    'soldadora' = 4500
    'compresor' = 3800
    'nivel' = 650
    'martillo' = 420
    'destornilladores' = 850
    'llaves' = 950
    'cortador' = 750
    'alicate' = 380
    'multimetro' = 1200
    'calibrador' = 950
    'flexometro' = 280
    'detector' = 850
    'termometro' = 650
    'medidor' = 1100
    'bascula' = 1800
    'microscopio' = 2200
    'equipo' = 3500
    'kit' = 1200
    'organizador' = 450
    'mesa' = 2800
    'banco' = 3200
    'silla' = 1800
    'lampara' = 950
    'ventilador' = 1500
    'bomba' = 2200
    'generador' = 8500
    'bateria' = 3200
    'cargador' = 850
    'convertidor' = 1200
    'estabilizador' = 1800
    'ups' = 2500
    'regulador' = 950
    'protector' = 350
    'extension' = 280
    'cable' = 180
    'conector' = 120
    'switch' = 450
    'router' = 1200
    'camara' = 2800
    'sistema' = 3500
    'sensor' = 850
    'alarma' = 1500
    'monitor' = 2200
}

# Aplicar precios basados en palabras clave en el título
$pattern = 'price: [\d.]+,'
$content = [regex]::Replace($content, $pattern, {
    param($match)
    # Obtener el contexto alrededor del precio para encontrar el título
    $context = $content.Substring([math]::Max(0, $match.Index - 200), [math]::Min(400, $content.Length - [math]::Max(0, $match.Index - 200)))
    $titleMatch = [regex]::Match($context, 'title: "([^"]+)"')
    
    if ($titleMatch.Success) {
        $title = $titleMatch.Groups[1].Value.ToLower()
        
        foreach ($keyword in $priceRanges.Keys) {
            if ($title.Contains($keyword)) {
                $price = $priceRanges[$keyword]
                return "price: $price,"
            }
        }
    }
    
    # Precio por defecto si no se encuentra palabra clave
    return "price: 850,"
})

Set-Content 'lib\data\real-amazon-products.ts' -Value $content -NoNewline
Write-Host '✅ Precios establecidos en rangos razonables para MXN'
