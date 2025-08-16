import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    console.log('🔍 Cookie test API called')
    
    // Log request details
    console.log('🔍 Request URL:', request.url)
    console.log('🔍 Request host:', request.headers.get('host'))
    console.log('🔍 Request referer:', request.headers.get('referer'))
    console.log('🔍 Request user-agent:', request.headers.get('user-agent')?.substring(0, 100) + '...')
    
    // Get all cookies
    const allCookies = request.cookies.getAll()
    console.log('🍪 Total cookies received:', allCookies.length)
    
    // Log all cookies
    allCookies.forEach(cookie => {
      console.log(`🍪 Cookie: ${cookie.name} = ${cookie.value.substring(0, 20)}...`)
    })
    
    // Filter Supabase cookies
    const supabaseCookies = allCookies.filter(cookie => cookie.name.includes('sb-'))
    console.log('🍪 Supabase cookies found:', supabaseCookies.length)
    
    // Log Supabase cookie details
    supabaseCookies.forEach(cookie => {
      console.log(`🔐 Supabase cookie: ${cookie.name} = ${cookie.value.substring(0, 30)}...`)
    })
    
    const result = {
      success: true,
      timestamp: new Date().toISOString(),
      totalCookies: allCookies.length,
      supabaseCookies: supabaseCookies.length,
      cookies: {
        all: allCookies.map(c => ({
          name: c.name,
          hasValue: !!c.value,
          valueLength: c.value.length,
          valuePreview: c.value.substring(0, 20) + '...'
        })),
        supabase: supabaseCookies.map(c => ({
          name: c.name,
          hasValue: !!c.value,
          valueLength: c.value.length,
          valuePreview: c.value.substring(0, 30) + '...'
        }))
      },
      headers: {
        host: request.headers.get('host'),
        referer: request.headers.get('referer'),
        userAgent: request.headers.get('user-agent')?.substring(0, 100) + '...'
      }
    }
    
    console.log('✅ Cookie test completed')
    return NextResponse.json(result)
    
  } catch (error) {
    console.error('❌ Cookie test error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}
