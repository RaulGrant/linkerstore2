@echo off
echo Deteniendo procesos de Node.js...
taskkill /f /im node.exe 2>nul

echo Eliminando cache completa...
if exist .next rmdir /s /q .next
if exist node_modules\.cache rmdir /s /q node_modules\.cache
if exist tsconfig.tsbuildinfo del /f tsconfig.tsbuildinfo

echo Iniciando servidor de desarrollo...
call npm run dev
