# LinkerPro Platform

Una plataforma completa para conectar empresas industriales con freelancers especializados.

## ⚠️ Configuración Requerida

### 1. Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NODE_ENV=development
```

**Para obtener estas variables:**
1. Ve a [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Crea un nuevo proyecto o selecciona uno existente
3. Ve a Settings > API
4. Copia la URL y la anon key

### 2. Base de Datos

Ejecuta los scripts SQL en Supabase para crear las tablas necesarias:

1. `database/schema.sql` - Esquema principal
2. `database/2025_dashboard_onboarding.sql` - Mejoras del dashboard

### 3. Instalación

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

### 4. Páginas de Test

- `/auth-test` - Verificar configuración de autenticación
- `/dashboard` - Dashboard principal (requiere login)

## Funcionalidades

- ✅ Autenticación completa con Supabase
- ✅ Dashboard dinámico para freelancers y empresas
- ✅ Onboarding interactivo con progreso
- ✅ Formularios de perfil con upload de imágenes
- ✅ Gestión de proyectos y vacantes
- 🚧 Sistema de propuestas
- 🚧 Integración de pagos (OpenPay)
- 🚧 Sistema de notificaciones

## Arquitectura

- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS
- **Backend**: Supabase (Base de datos, Auth, Storage)
- **Estado**: React Context + Hooks personalizados
- **Componentes**: shadcn/ui + Componentes personalizados

---

*Automatically synced with your [v0.dev](https://v0.dev) deployments*