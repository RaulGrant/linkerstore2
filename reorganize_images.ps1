# Script para reorganizar imágenes según guía ASIN
$ErrorActionPreference = "Continue"

# Navegar a la carpeta de productos
cd "c:\ProyectosAlba\linkerstore\public\images\products"
Write-Host "=== REORGANIZACIÓN DE IMÁGENES SEGÚN GUÍA ASIN ===" -ForegroundColor Green
Write-Host "Ubicación: $(Get-Location)" -ForegroundColor Cyan

# Mapeo de carpetas a ASINs basado en el catálogo de productos
$folderToAsinMapping = @{
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

# Función para procesar una carpeta de imágenes
function Process-ImageFolder {
    param($folderPath, $asin)
    
    Write-Host "`nProcesando: $($folderPath.Name) -> ASIN: $asin" -ForegroundColor Yellow
    
    # Buscar todas las imágenes en la carpeta
    $images = @()
    $images += Get-ChildItem -Path $folderPath.FullName -Filter "*.jpg" -ErrorAction SilentlyContinue
    $images += Get-ChildItem -Path $folderPath.FullName -Filter "*.jpeg" -ErrorAction SilentlyContinue  
    $images += Get-ChildItem -Path $folderPath.FullName -Filter "*.png" -ErrorAction SilentlyContinue
    $images += Get-ChildItem -Path $folderPath.FullName -Filter "*.webp" -ErrorAction SilentlyContinue
    
    $images = $images | Sort-Object Name
    
    if ($images.Count -eq 0) {
        Write-Host "  No se encontraron imágenes en $($folderPath.Name)" -ForegroundColor Red
        return
    }
    
    Write-Host "  Encontradas $($images.Count) imágenes" -ForegroundColor Cyan
    
    # Procesar hasta 7 imágenes
    for ($i = 0; $i -lt [Math]::Min($images.Count, 7); $i++) {
        $image = $images[$i]
        
        # Determinar el nombre del archivo de destino
        if ($i -eq 0) {
            $newName = "${asin}_Prin.jpg"
        } else {
            $newName = "${asin}_${i}.jpg"
        }
        
        $destinationPath = Join-Path (Get-Location) $newName
        
        try {
            # Copiar la imagen con el nuevo nombre
            Copy-Item $image.FullName $destinationPath -Force
            Write-Host "  ✓ $($image.Name) -> $newName" -ForegroundColor Green
        } catch {
            Write-Host "  ✗ Error copiando $($image.Name): $_" -ForegroundColor Red
        }
    }
    
    Write-Host "  ✓ Completado: $($folderPath.Name)" -ForegroundColor Green
}

# Procesar cada carpeta
$folders = Get-ChildItem -Directory | Where-Object { $folderToAsinMapping.ContainsKey($_.Name) }
Write-Host "Carpetas a procesar: $($folders.Count)" -ForegroundColor Cyan

foreach ($folder in $folders) {
    $asin = $folderToAsinMapping[$folder.Name]
    Process-ImageFolder $folder $asin
}

Write-Host "`n=== PROCESANDO IMÁGENES PRINCIPALES EXISTENTES ===" -ForegroundColor Cyan

# Procesar las imágenes principales que ya están correctamente nombradas
if (Test-Path "chaleco-seguridad-reflectante.jpg") {
    Write-Host "Manteniendo: chaleco-seguridad-reflectante.jpg (ya existe para B08XYZ123A)" -ForegroundColor Green
}

if (Test-Path "overol-industrial-reflejantes.jpg") {
    Write-Host "Manteniendo: overol-industrial-reflejantes.jpg (ya existe para B09ABC456B)" -ForegroundColor Green
}

Write-Host "`n=== CONVERSIÓN A WEBP (SI ESTÁ DISPONIBLE) ===" -ForegroundColor Cyan

# Intentar convertir JPG a WebP si ImageMagick está disponible
try {
    $null = Get-Command magick -ErrorAction Stop
    Write-Host "ImageMagick detectado. Convirtiendo imágenes a WebP..." -ForegroundColor Green
    
    $jpgFiles = Get-ChildItem -Filter "*_Prin.jpg" 
    $jpgFiles += Get-ChildItem -Filter "*_[0-9].jpg"
    
    foreach ($jpgFile in $jpgFiles) {
        $webpName = $jpgFile.Name.Replace('.jpg', '.webp')
        try {
            & magick $jpgFile.FullName -quality 85 $webpName
            Write-Host "  ✓ Convertido: $($jpgFile.Name) -> $webpName" -ForegroundColor Green
            
            # Opcional: eliminar el JPG original después de conversión exitosa
            # Remove-Item $jpgFile.FullName -Force
        } catch {
            Write-Host "  ✗ Error convirtiendo $($jpgFile.Name): $_" -ForegroundColor Red
        }
    }
} catch {
    Write-Host "ImageMagick no disponible. Las imágenes se mantienen como JPG." -ForegroundColor Yellow
    Write-Host "Para instalar ImageMagick: https://imagemagick.org/script/download.php#windows" -ForegroundColor Yellow
}
}

Write-Host "`n=== RESUMEN DE ARCHIVOS CREADOS ===" -ForegroundColor Cyan
$newFiles = Get-ChildItem -File | Where-Object { 
    $_.Name -match "^B[0-9A-Z]{9}_Prin\.(jpg|webp)$" -or 
    $_.Name -match "^B[0-9A-Z]{9}_[0-9]\.(jpg|webp)$" 
} | Sort-Object Name

Write-Host "Archivos creados: $($newFiles.Count)" -ForegroundColor Green
$newFiles | ForEach-Object { 
    Write-Host "  - $($_.Name)" -ForegroundColor White 
}

Write-Host "`n=== REORGANIZACIÓN COMPLETADA ===" -ForegroundColor Green
Write-Host "Todas las imágenes han sido procesadas según la guía ASIN" -ForegroundColor Green
