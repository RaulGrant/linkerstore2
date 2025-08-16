cd "c:\ProyectosAlba\linkerstore\public\images\products"

$mapping = @{
    "casco truper" = "B08STU234I"
    "Botiquin" = "B08MNO678G"
    "overol" = "B09ABC456B"
    "lentes_seguridad" = "B08RST345Z"
    "destornilladores" = "B08HIJ789N"
    "MULTIMETRO" = "B08MNO456G"
    "rotomartilloBOSCH" = "B08BCD901L"
    "Taladro CRAFTSMAN" = "B08KLM890O"
    "extintor_truper" = "B08WXY234S"
    "tenis_seguridad" = "B08TUV789R"
}

foreach ($folderName in $mapping.Keys) {
    $asin = $mapping[$folderName]
    
    if (Test-Path $folderName) {
        Write-Host "Procesando: $folderName -> $asin" -ForegroundColor Yellow
        
        $images = Get-ChildItem -Path $folderName -Include "*.jpg","*.jpeg","*.png","*.webp" -Recurse | Sort-Object Name
        
        if ($images.Count -gt 0) {
            Write-Host "  Encontradas $($images.Count) imagenes" -ForegroundColor Cyan
            
            for ($i = 0; $i -lt [Math]::Min($images.Count, 7); $i++) {
                $image = $images[$i]
                
                if ($i -eq 0) {
                    $newName = "${asin}_Prin.jpg"
                } else {
                    $newName = "${asin}_${i}.jpg"
                }
                
                Copy-Item $image.FullName $newName -Force
                Write-Host "  Copiado: $($image.Name) -> $newName" -ForegroundColor Green
            }
        }
    }
}

Write-Host "Procesamiento completado" -ForegroundColor Green
