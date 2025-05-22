import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Verifica si una URL es una redirección de login
 */
function isLoginRedirect(url: string): boolean {
  return url.includes('/admin/login') && url.includes('callbackUrl');
}

/**
 * Verifica si una URL es una ruta de API de autenticación
 */
function isAuthApiRoute(url: string): boolean {
  return url.includes('/api/auth');
}

/**
 * Verifica si la ruta es un archivo SEO
 */
function isSEOFile(pathname: string): boolean {
  return pathname === '/robots.txt' || pathname === '/sitemap.xml';
}

/**
 * Verifica si una URL es una ruta pública (no requiere autenticación)
 */
/*
function isPublicRoute(pathname: string): boolean {
  return (
    pathname === "/admin/login" ||
    isAuthApiRoute(pathname)
  );
}
*/

/**
 * Middleware principal para proteger rutas de administración
 */
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const fullPath = pathname + search;

  // Permitir acceso directo a archivos SEO
  if (isSEOFile(pathname)) {
    return NextResponse.next();
  }

  // Evitar bucles de redirección
  if (isLoginRedirect(fullPath)) {
    const callbackUrl = new URL(request.nextUrl).searchParams.get('callbackUrl');
    if (callbackUrl && isLoginRedirect(callbackUrl)) {
      const url = new URL('/admin/login', request.url);
      return NextResponse.redirect(url);
    }
  }

  // Permitir siempre el acceso a rutas de API de autenticación
  if (isAuthApiRoute(pathname)) {
    const response = NextResponse.next();
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return response;
  }

  // Verificar si la ruta es de administración
  const isAdminRoute = pathname.startsWith("/admin");
  
  if (isAdminRoute) {
    try {
      // Obtener el token de las cookies
      const token = request.cookies.get('token');
      
      // Si hay token y está en login, redirigir al dashboard
      if (pathname === '/admin/login' && token) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      }

      // Si no hay token y no está en login, redirigir al login
      if (!token && pathname !== '/admin/login') {
        return NextResponse.redirect(new URL('/admin/login', request.url));
      }

      // Si está en login sin token o en otra ruta con token, permitir acceso

      return NextResponse.next();

    } catch (error) {
      // En caso de error, redirigir al login por seguridad
      console.error('Error en middleware:', error);

      const url = new URL("/admin/login", request.url);
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

/**
 * Configuración de rutas que deben ser procesadas por el middleware
 */
export const config = {
  matcher: [
    "/admin/:path*",
    "/api/auth/callback/credentials",
    "/api/auth/signin/credentials"
  ],
}; 