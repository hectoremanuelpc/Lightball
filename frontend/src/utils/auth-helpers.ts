/**
 * Utilidades para la gestión de autenticación
 */

/**
 * Configuración para las cookies
 */
const COOKIE_CONFIG = {
  PREFIX: process.env.NEXT_PUBLIC_COOKIE_PREFIX || 'lightball_',
  PATH: process.env.NEXT_PUBLIC_COOKIE_PATH || '/',
  DOMAIN: process.env.NEXT_PUBLIC_COOKIE_DOMAIN || undefined,
};

/**
 * Lista de nombres de cookies utilizadas por NextAuth
 */
const AUTH_COOKIES = [
  `${COOKIE_CONFIG.PREFIX}next-auth.session-token`,
  `${COOKIE_CONFIG.PREFIX}next-auth.callback-url`,
  `${COOKIE_CONFIG.PREFIX}next-auth.csrf-token`,
  `${COOKIE_CONFIG.PREFIX}next-auth.pkce.code-verifier`,
  `${COOKIE_CONFIG.PREFIX}next-auth.pkce.state`,
  'next-auth.session-token',
  'next-auth.callback-url',
  'next-auth.csrf-token'
];

/**
 * Limpia todas las cookies relacionadas con NextAuth
 */
export function clearAuthCookies(): void {
  const expires = 'expires=Thu, 01 Jan 1970 00:00:00 UTC';
  
  // Limpiar cada cookie
  AUTH_COOKIES.forEach(name => {
    // Limpiar con dominio específico si está disponible
    if (COOKIE_CONFIG.DOMAIN) {
      document.cookie = `${name}=; ${expires}; path=${COOKIE_CONFIG.PATH}; domain=${COOKIE_CONFIG.DOMAIN};`;
    } else {
      document.cookie = `${name}=; ${expires}; path=${COOKIE_CONFIG.PATH};`;
    }
    
    // También limpiar en la raíz
    document.cookie = `${name}=; ${expires}; path=/;`;

  });
}

/**
 * Obtiene el valor de una cookie por su nombre
 * @param {string} name - Nombre de la cookie
 * @returns {string|null} Valor de la cookie o null si no existe
 */
export function getCookie(name: string): string | null {
  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith(`${name}=`));
  
  if (cookie) {
    return cookie.split('=')[1];
  }
  
  return null;
}

/**
 * Establece una cookie con los parámetros especificados
 * @param {string} name - Nombre de la cookie
 * @param {string} value - Valor de la cookie
 * @param {number} maxAge - Tiempo de vida en segundos
 */
export function setCookie(name: string, value: string, maxAge: number = 60): void {
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge};`;
} 