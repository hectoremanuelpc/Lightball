import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hash } from "bcryptjs";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

/**
 * Configuración de variables de entorno con valores por defecto
 */
const CONFIG = {
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || "admin@example.com",
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || "admin123",
  SESSION_MAXAGE: process.env.NEXTAUTH_SESSION_MAXAGE ? parseInt(process.env.NEXTAUTH_SESSION_MAXAGE) : 30 * 24 * 60 * 60,
  COOKIE_SECURE: process.env.NEXTAUTH_COOKIE_SECURE === "true",
  COOKIE_PREFIX: process.env.NEXTAUTH_COOKIE_PREFIX || "lightball_",
  COOKIE_DOMAIN: process.env.NEXTAUTH_COOKIE_DOMAIN || undefined,
  COOKIE_PATH: process.env.NEXTAUTH_COOKIE_PATH || "/",
  SECRET: process.env.NEXTAUTH_SECRET || "un-secreto-seguro-para-desarrollo-local",
};

/**
 * Obtiene el hash de la contraseña del administrador
 * Si no existe un hash previo, crea uno nuevo
 */
async function getPasswordHash(): Promise<string> {
  // En producción, esto debería obtener el hash de una base de datos
  // Para este ejemplo, generamos el hash cada vez
  return await hash(CONFIG.ADMIN_PASSWORD, 10);
}

/**
 * Extender los tipos de NextAuth
 */
declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    name?: string;
    role: string;
  }
  
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    name?: string;
    role: string;
  }
}

/**
 * Configuración de NextAuth
 */
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Contraseña", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Verificar si las credenciales coinciden con el administrador
        if (credentials.email === CONFIG.ADMIN_EMAIL) {
          try {
            // Obtener el hash de la contraseña
            const passwordHash = await getPasswordHash();
            
            // Comparar la contraseña proporcionada con el hash
            const isValid = await compare(credentials.password, passwordHash);
            
            if (isValid) {
              const user = {
                id: "1",
                email: CONFIG.ADMIN_EMAIL,
                name: "Administrador",
                role: "admin"
              };
              return user;
            }
          } catch (error) {
            // Error al verificar contraseña
          }
        }
        
        return null;
      }
    })
  ],
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: any }) {
      // Asegurarse de que el token tenga los datos necesarios
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
      }
      
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      // Asegurarse de que la sesión tenga los datos necesarios
      if (session.user && token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name || "Administrador";
        session.user.role = token.role;
      }
      
      return session;
    }
  },
  secret: CONFIG.SECRET,
  session: {
    strategy: "jwt" as const,
    maxAge: CONFIG.SESSION_MAXAGE,
  },
  cookies: {
    sessionToken: {
      name: `${CONFIG.COOKIE_PREFIX}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax" as const,
        path: CONFIG.COOKIE_PATH,
        secure: CONFIG.COOKIE_SECURE,
        domain: CONFIG.COOKIE_DOMAIN,
      },
    },
    callbackUrl: {
      name: `${CONFIG.COOKIE_PREFIX}next-auth.callback-url`,
      options: {
        httpOnly: true,
        sameSite: "lax" as const,
        path: CONFIG.COOKIE_PATH,
        secure: CONFIG.COOKIE_SECURE,
        domain: CONFIG.COOKIE_DOMAIN,
      },
    },
    csrfToken: {
      name: `${CONFIG.COOKIE_PREFIX}next-auth.csrf-token`,
      options: {
        httpOnly: true,
        sameSite: "lax" as const,
        path: CONFIG.COOKIE_PATH,
        secure: CONFIG.COOKIE_SECURE,
        domain: CONFIG.COOKIE_DOMAIN,
      },
    },
  },
  debug: false,
  useSecureCookies: CONFIG.COOKIE_SECURE,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; 