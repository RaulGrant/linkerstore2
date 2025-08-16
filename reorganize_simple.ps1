# Script para reorganizar imágenes - Versión simplificada
$ErrorActionPreference = "Continue"

# Navegar a la carpeta de productos
Set-Location "c:\ProyectosAlba\linkerstore\public\images\products"
Write-Host "=== REORGANIZACIÓN DE IMÁGENES SEGÚN GUÍA ASIN ===" -ForegroundColor Green
Write-Host "Ubicación: $(Get-Location)" -ForegroundColor Cyan

# Mapeo de carpetas a ASINs
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

# Procesar cada carpeta
$folders = Get-ChildItem -Directory
$processedCount = 0

foreach ($folder in $folders) {
    $folderName = $folder.Name
    
    if ($folderMapping.ContainsKey($folderName)) {
        $asin = $folderMapping[$folderName]
        Write-Host "`nProcesando: $folderName -> ASIN: $asin" -ForegroundColor Yellow
        
        # Buscar imágenes en la carpeta
        $images = @()
        $images += Get-ChildItem -Path $folder.FullName -Filter "*.jpg" -ErrorAction SilentlyContinue
        $images += Get-ChildItem -Path $folder.FullName -Filter "*.jpeg" -ErrorAction SilentlyContinue  
        $images += Get-ChildItem -Path $folder.FullName -Filter "*.png" -ErrorAction SilentlyContinue
        $images += Get-ChildItem -Path $folder.FullName -Filter "*.webp" -ErrorAction SilentlyContinue
        
        $images = $images | Sort-Object Name
        
        if ($images.Count -eq 0) {
            Write-Host "  No hay imágenes en $folderName" -ForegroundColor Red
            continue
        }
        
        Write-Host "  Encontradas $($images.Count) imágenes" -ForegroundColor Cyan
        
        # Procesar hasta 7 imágenes
        for ($i = 0; $i -lt [Math]::Min($images.Count, 7); $i++) {
            $image = $images[$i]
            
            if ($i -eq 0) {
                $newName = "${asin}_Prin.jpg"
            } else {
                $newName = "${asin}_${i}.jpg"
            }
            
            try {
                Copy-Item $image.FullName $newName -Force
                Write-Host "  ✓ $($image.Name) -> $newName" -ForegroundColor Green
            } catch {
                Write-Host "  ✗ Error: $($image.Name)" -ForegroundColor Red
            }
        }
        
        $processedCount++
        Write-Host "  ✓ Completado: $folderName" -ForegroundColor Green
    } else {
        Write-Host "Carpeta no mapeada: $folderName" -ForegroundColor Yellow
    }
}

Write-Host "`n=== RESUMEN ===" -ForegroundColor Cyan
Write-Host "Carpetas procesadas: $processedCount" -ForegroundColor Green

$newFiles = Get-ChildItem -File | Where-Object { 
    $_.Name -match "^B[0-9A-Z]{9}_Prin\.jpg$" -or 
    $_.Name -match "^B[0-9A-Z]{9}_[0-9]\.jpg$" 
}

Write-Host "Archivos nuevos creados: $($newFiles.Count)" -ForegroundColor Green
Write-Host "`n=== REORGANIZACIÓN COMPLETADA ===" -ForegroundColor Green
