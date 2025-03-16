"use client";

import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { clearAuthCookies } from "@/utils/auth-helpers";
import { useEffect } from "react";

// Esquema de validación para el formulario de login
const loginSchema = z.object({
  email: z.string().email("Correo electrónico inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

// Tipo para los valores del formulario
type LoginFormValues = z.infer<typeof loginSchema>;

/**
 * Componente de página de login
 */
export default function LoginPage() {
  // Hooks
  const router = useRouter();
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/admin/dashboard";
  
  // Estados
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  // Configuración del formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Redirigir si ya está autenticado
  useEffect(() => {
    if (status === "authenticated") {
      router.push(callbackUrl);
    }
  }, [status, callbackUrl, router]);

  /**
   * Maneja el envío del formulario de login
   */
  const onSubmit = async (data: LoginFormValues) => {
    if (redirecting) return; // Evitar múltiples envíos
    
    setIsLoading(true);
    setError(null);

    try {
      // Limpiar cookies antes de intentar iniciar sesión
      clearAuthCookies();
      
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        setError("Credenciales inválidas");
        setIsLoading(false);
        return;
      }

      if (result?.ok) {
        setRedirecting(true);
        router.push(callbackUrl);
      } else {
        setError("Error desconocido al iniciar sesión");
        setIsLoading(false);
      }
    } catch (error) {
      setError("Ocurrió un error al iniciar sesión");
      setIsLoading(false);
    }
  };

  // Si está cargando la sesión o redirigiendo, mostrar indicador
  if (status === "loading" || redirecting) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-xl font-semibold">
            {redirecting ? "Redirigiendo..." : "Cargando..."}
          </h2>
          <p className="text-gray-500">
            {redirecting ? "Por favor espere..." : "Verificando sesión"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Acceso Administrador
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="relative block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Correo electrónico"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                className="relative block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Contraseña"
                {...register("password")}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">{error}</h3>
                </div>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading || redirecting}
              className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-70"
            >
              {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
            </button>
          </div>
        </form>
        
        {status === "authenticated" && (
          <div className="mt-4 p-3 rounded-md bg-yellow-50">
            <p className="text-sm text-yellow-800 text-center">
              Ya tienes una sesión activa. Serás redirigido al panel de administración.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 