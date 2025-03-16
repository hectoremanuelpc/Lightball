import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
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
 * Verifica si una URL es una ruta pública (no requiere autenticación)
 */
function isPublicRoute(pathname: string): boolean {
  return (
    pathname === "/admin/login" ||
    isAuthApiRoute(pathname)
  );
}

/**
 * Middleware principal para proteger rutas de administración
 */
export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const fullPath = pathname + search;

  // Permitir siempre el acceso a rutas públicas
  if (isPublicRoute(pathname)) {
    // Agregar encabezados para rutas públicas
    const response = NextResponse.next();
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return response;
  }

  // Evitar bucles de redirección
  if (isLoginRedirect(fullPath)) {
    const callbackUrl = new URL(request.nextUrl).searchParams.get('callbackUrl');
    if (callbackUrl && isLoginRedirect(callbackUrl)) {
      const url = new URL('/admin/login', request.url);
      return NextResponse.redirect(url);
    }
  }

  // Verificar si la ruta es de administración
  const isAdminRoute = pathname.startsWith("/admin");
  
  // Si es una ruta de administración, verificar autenticación
  if (isAdminRoute) {
    try {
      // Obtener el token con opciones específicas
      const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
        secureCookie: process.env.NEXTAUTH_COOKIE_SECURE === "true",
        cookieName: `${process.env.NEXTAUTH_COOKIE_PREFIX || "lightball_"}next-auth.session-token`,
      });
      
      // Si no hay token o el rol no es admin, redirigir al login
      if (!token || token.role !== "admin") {
        const url = new URL("/admin/login", request.url);
        
        // Evitar bucles de redirección
        if (!isLoginRedirect(pathname)) {
          // Usar URL absoluta para evitar problemas con los puertos
          const absoluteCallbackUrl = new URL(request.url).toString();
          url.searchParams.set("callbackUrl", absoluteCallbackUrl);
        }
        
        return NextResponse.redirect(url);
      } else {
        // Usuario autenticado, permitir acceso pero agregar encabezados de seguridad
        const response = NextResponse.next();
        response.headers.set('X-Robots-Tag', 'noindex, nofollow');
        response.headers.set('Cache-Control', 'no-store, max-age=0');
        return response;
      }
    } catch (error) {
      // En caso de error, redirigir al login por seguridad
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