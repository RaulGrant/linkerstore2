#!/bin/bash

# Script de deployment para Vercel con configuración de variables de entorno

echo "🚀 Configurando variables de entorno para Vercel..."

# Variables de entorno requeridas para el fix de login
echo "📝 Agregando variables de entorno necesarias..."

# Supabase (ya deberían estar configuradas)
echo "- NEXT_PUBLIC_SUPABASE_URL"
echo "- NEXT_PUBLIC_SUPABASE_ANON_KEY"
echo "- SUPABASE_SERVICE_ROLE_KEY"

# Para el fix de cookies en producción
echo "- NEXT_PUBLIC_DOMAIN (para configuración de cookies)"

echo ""
echo "⚠️  IMPORTANTE: Configurar las siguientes variables en Vercel:"
echo ""
echo "1. Ir a https://vercel.com/your-project/settings/environment-variables"
echo "2. Agregar NEXT_PUBLIC_DOMAIN con el valor de tu dominio de Vercel"
echo "   Ejemplo: your-app.vercel.app"
echo ""
echo "3. Verificar que las variables de Supabase estén configuradas:"
echo "   - NEXT_PUBLIC_SUPABASE_URL"
echo "   - NEXT_PUBLIC_SUPABASE_ANON_KEY"
echo "   - SUPABASE_SERVICE_ROLE_KEY"
echo ""
echo "4. Después de configurar las variables, hacer redeploy:"
echo "   vercel --prod"
echo ""

# Verificar que las variables locales estén configuradas
echo "🔍 Verificando variables locales..."
if [ -f .env.local ]; then
    echo "✅ .env.local encontrado"
    
    # Verificar variables críticas
    if grep -q "NEXT_PUBLIC_SUPABASE_URL" .env.local; then
        echo "✅ NEXT_PUBLIC_SUPABASE_URL configurada"
    else
        echo "❌ NEXT_PUBLIC_SUPABASE_URL no encontrada"
    fi
    
    if grep -q "NEXT_PUBLIC_SUPABASE_ANON_KEY" .env.local; then
        echo "✅ NEXT_PUBLIC_SUPABASE_ANON_KEY configurada"
    else
        echo "❌ NEXT_PUBLIC_SUPABASE_ANON_KEY no encontrada"
    fi
else
    echo "❌ .env.local no encontrado"
fi

echo ""
echo "🎯 Próximos pasos:"
echo "1. Configurar variables de entorno en Vercel"
echo "2. Hacer redeploy: vercel --prod"
echo "3. Probar login en el ambiente de producción"
echo "4. Verificar logs en Vercel para debugging"
