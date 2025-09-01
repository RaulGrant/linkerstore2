import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Como el proyecto no tiene autenticación, permitir acceso a todas las rutas
  console.log(`🔍 Middleware: Allowing access to ${request.nextUrl.pathname}`)
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api/webhooks routes (webhook endpoints)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (assets)
     */
    '/((?!api/webhooks|_next/static|_next/image|favicon.ico|public/.*|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
