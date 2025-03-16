"use client";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface SessionProviderProps {
  children: ReactNode;
}

/**
 * Componente que proporciona el contexto de sesión para la autenticación
 * Este componente debe usarse en el layout de las rutas que requieren autenticación
 */
export default function SessionProvider({ children }: SessionProviderProps) {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
} 