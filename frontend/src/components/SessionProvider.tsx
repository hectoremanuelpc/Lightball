"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { authApi } from '@/lib/api';

interface User {
  email: string;
  name: string;
  role: string;
}

interface SessionContextType {
  user: User | null;
  isLoading: boolean;
}

const SessionContext = createContext<SessionContextType>({
  user: null,
  isLoading: true,
});

export function useSession() {
  return useContext(SessionContext);
}

interface SessionProviderProps {
  children: ReactNode;
}

/**
 * Componente que proporciona el contexto de sesión para la autenticación
 * Este componente debe usarse en el layout de las rutas que requieren autenticación
 */
export function SessionProvider({ children }: SessionProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initSession = async () => {
      try {
        const isValid = await authApi.checkSession();
        if (isValid) {
          const userStr = Cookies.get('user');
          if (userStr) {
            const userData = JSON.parse(userStr);
            setUser(userData);
          }
        }
      } catch (error) {
        console.error('Error checking session:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initSession();
  }, []);

  return (
    <SessionContext.Provider value={{ user, isLoading }}>
      {children}
    </SessionContext.Provider>
  );
} 