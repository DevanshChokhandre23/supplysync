import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_STORAGE_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_STORAGE_SUPABASE_ANON_KEY

  const supabase = createServerClient(
    url!,
    key!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Refresh session if expired
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const isAuthPage = request.nextUrl.pathname.startsWith('/login')
  
  if (!user && !isAuthPage) {
    // Unauthenticated user trying to access a protected route
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  if (user) {
    // If authenticated, check role from JWT or from DB if needed.
    // Fetch from users table to determine role based routing.
    const { data: userData } = await supabase
      .from('users')
      .select('role')
      .eq('id', user.id)
      .single()

    const role = userData?.role

    if (isAuthPage) {
      const url = request.nextUrl.clone()
      if (role === 'admin') url.pathname = '/admin'
      else if (role === 'supplier') url.pathname = '/portal'
      else if (role === 'staff') url.pathname = '/admin' // staff shares admin portal namespace usually
      else url.pathname = '/login' // fallback
      return NextResponse.redirect(url)
    }

    // Role-based route protection
    if (request.nextUrl.pathname.startsWith('/admin') && role !== 'admin' && role !== 'staff') {
      const url = request.nextUrl.clone()
      url.pathname = '/portal'
      return NextResponse.redirect(url)
    }

    if (request.nextUrl.pathname.startsWith('/portal') && role !== 'supplier') {
      const url = request.nextUrl.clone()
      url.pathname = '/admin'
      return NextResponse.redirect(url)
    }
  }

  return supabaseResponse
}
