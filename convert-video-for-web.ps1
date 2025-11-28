# Script para convertir video a formato web optimizado
# Requiere FFmpeg instalado

param(
    [Parameter(Mandatory=$true)]
    [string]$InputVideo,
    [string]$OutputDir = "public/videos"
)

Write-Host "🎬 Convirtiendo video para web..." -ForegroundColor Cyan

# Verificar si FFmpeg está instalado
try {
    $null = Get-Command ffmpeg -ErrorAction Stop
    Write-Host "✅ FFmpeg encontrado" -ForegroundColor Green
} catch {
    Write-Host "❌ FFmpeg no encontrado. Instálalo desde: https://ffmpeg.org/download.html" -ForegroundColor Red
    exit 1
}

# Crear directorio de salida si no existe
if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir -Force
    Write-Host "📁 Creado directorio: $OutputDir" -ForegroundColor Yellow
}

$baseName = [System.IO.Path]::GetFileNameWithoutExtension($InputVideo)
$mp4Output = "$OutputDir/$baseName.mp4"
$webmOutput = "$OutputDir/$baseName.webm"

Write-Host "🔄 Convirtiendo a MP4 optimizado para web..." -ForegroundColor Blue
ffmpeg -i $InputVideo -c:v libx264 -preset medium -crf 23 -maxrate 1M -bufsize 2M -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" -c:a aac -b:a 128k -movflags +faststart $mp4Output -y

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ MP4 creado: $mp4Output" -ForegroundColor Green
} else {
    Write-Host "❌ Error creando MP4" -ForegroundColor Red
}

Write-Host "🔄 Convirtiendo a WebM optimizado..." -ForegroundColor Blue
ffmpeg -i $InputVideo -c:v libvpx-vp9 -crf 30 -b:v 1M -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" -c:a libopus -b:a 128k $webmOutput -y

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ WebM creado: $webmOutput" -ForegroundColor Green
} else {
    Write-Host "❌ Error creando WebM" -ForegroundColor Red
}

Write-Host "`n🎯 Conversión completada!" -ForegroundColor Green
Write-Host "Archivos generados:" -ForegroundColor Cyan
Write-Host "- $mp4Output" -ForegroundColor White
Write-Host "- $webmOutput" -ForegroundColor White
Write-Host "`n📝 Asegúrate de que los archivos estén en la carpeta 'public/videos/' de tu proyecto Next.js" -ForegroundColor Yellow

# Mostrar información de los archivos generados
if (Test-Path $mp4Output) {
    $mp4Size = (Get-Item $mp4Output).Length / 1MB
    Write-Host "MP4 tamaño: $([math]::Round($mp4Size, 2)) MB" -ForegroundColor Gray
}

if (Test-Path $webmOutput) {
    $webmSize = (Get-Item $webmOutput).Length / 1MB
    Write-Host "WebM tamaño: $([math]::Round($webmSize, 2)) MB" -ForegroundColor Gray
}