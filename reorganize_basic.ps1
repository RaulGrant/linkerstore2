$ErrorActionPreference = "Continue"

Set-Location "c:\ProyectosAlba\linkerstore\public\images\products"
Write-Host "=== REORGANIZACIÓN DE IMÁGENES ===" -ForegroundColor Green

$folderMapping = @{
    "alambre_retractil" = "B08JKL901E"
    "Arnes" = "B08DEF789C" 
    "arnes_glorouschu" = "B08GHI012D"
    "botas" = "B08GHI012D"
    "botas jardineras" = "B08JKL345F"
    "Botiquin" = "B08MNO678G"
    "botiquin_jalima" = "B08PQR901H"
    "casco truper" = "B08STU234I"
    "chaleco" = "B08XYZ123A"
    "cinta_aluminio_butilico" = "B08VWX567J"
    "cinta_delimitadora" = "B08YZA890K"
    "cinta_señalizacion" = "B08BCD123L"
    "Cinturon_herramientas" = "B08EFG456M"
    "destornilladores" = "B08HIJ789N"
    "detector_gas" = "B08KLM012O"
    "escalera truper tijera" = "B08NOP345P"
    "escalera_fibra_vidrio" = "B08QRS678Q"
    "extintor_espuma" = "B08TUV901R"
    "extintor_truper" = "B08WXY234S"
    "gabardina impermeable" = "B08ZAB567T"
    "guantes" = "B08CDE890U"
    "herramientas 82 en 1" = "B08FGH123V"
    "juego llaves crescent" = "B08IJK456W"
    "juego_herramientas_218piezas" = "B08LMN789X"
    "lentes_proteccion" = "B08OPQ012Y"
    "lentes_seguridad" = "B08RST345Z"
    "lentes_soldae" = "B08UVW678A"
    "linternaMOYAC" = "B08XYZ901B"
    "llaves hexagonales" = "B08ABC234C"
    "llaves pretul" = "B08DEF567D"
    "medidor_digital" = "B08GHI890E"
    "monitor_4_gases" = "B08JKL123F"
    "MULTIMETRO" = "B08MNO456G"
    "Multimetro_digital" = "B08PQR789H"
    "orejeras procase" = "B08STU012I"
    "overol" = "B09ABC456B"
    "protector_facial_truper" = "B08VWX345J"
    "respirador_reutilizable" = "B08YZA678K"
    "rotomartilloBOSCH" = "B08BCD901L"
    "sellador" = "B08EFG234M"
    "sonometro_digital" = "B08HIJ567N"
    "Taladro CRAFTSMAN" = "B08KLM890O"
    "tapones de silicon" = "B08NOP123P"
    "tapones loop" = "B08QRS456Q"
    "tenis_seguridad" = "B08TUV789R"
    "termometro_infrarojo" = "B08WXY012S"
    "TIJERAS_CABLES" = "B08ZAB345T"
}

$folders = Get-ChildItem -Directory
$processedCount = 0

foreach ($folder in $folders) {
    $folderName = $folder.Name
    
    if ($folderMapping.ContainsKey($folderName)) {
        $asin = $folderMapping[$folderName]
        Write-Host "Procesando: $folderName -> $asin" -ForegroundColor Yellow
        
        $images = Get-ChildItem -Path $folder.FullName -Include "*.jpg","*.jpeg","*.png","*.webp" -ErrorAction SilentlyContinue
        $images = $images | Sort-Object Name
        
        if ($images.Count -gt 0) {
            Write-Host "  Encontradas $($images.Count) imágenes" -ForegroundColor Cyan
            
            for ($i = 0; $i -lt [Math]::Min($images.Count, 7); $i++) {
                $image = $images[$i]
                
                if ($i -eq 0) {
                    $newName = "${asin}_Prin.jpg"
                } else {
                    $newName = "${asin}_${i}.jpg"
                }
                
                Copy-Item $image.FullName $newName -Force -ErrorAction SilentlyContinue
                Write-Host "  Copiado: $($image.Name) -> $newName" -ForegroundColor Green
            }
            
            $processedCount++
        }
    }
}

Write-Host "Procesadas $processedCount carpetas" -ForegroundColor Green
Write-Host "=== COMPLETADO ===" -ForegroundColor Green
