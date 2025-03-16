"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { clearAuthCookies } from "@/utils/auth-helpers";
import { DashboardData, saveBlogSettings, BlogSettings } from "@/lib/api/dashboard";

// Componentes
import Header from "./components/Header";
import Overview from "./components/Overview";
import PostsManager from "./components/PostsManager";
import SettingsManager from "./components/SettingsManager";
import Sidebar from "./components/Sidebar";


interface DashboardClientProps {
  initialData: DashboardData;
}

export default function DashboardClient({ initialData }: DashboardClientProps) {
  // Hooks
  const { data: session, status } = useSession();
  const router = useRouter();
  
  // Estados
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [dashboardData, setDashboardData] = useState<DashboardData>(initialData);

  /**
   * Maneja el cierre de sesión
   */
  const handleSignOut = async () => {
    if (isLoading) return; // Evitar múltiples acciones
    
    setIsLoading(true);
    try {
      // Limpiar cookies antes de cerrar sesión
      clearAuthCookies();
      
      await signOut({ redirect: false });
      
      // Redirigir al login
      router.push("/admin/login");
    } catch (error) {
      setIsLoading(false);
    }
  };

  /**
   * Maneja la creación de un nuevo artículo
   */
  const handleNewPost = () => {
    console.log("Crear nuevo artículo");
    // Implementación real: redirigir a la página de creación de artículos
  };

  /**
   * Maneja la edición de un artículo
   */
  const handleEditPost = (id: number) => {
    console.log("Editar artículo:", id);
    // Implementación real: redirigir a la página de edición del artículo
  };

  /**
   * Maneja el guardado de la configuración
   */
  const handleSaveSettings = async (settings: BlogSettings) => {
    try {
      await saveBlogSettings(settings);
      return Promise.resolve();
    } catch (error) {
      console.error("Error al guardar configuración:", error);
      return Promise.reject(error);
    }
  };

  /**
   * Maneja el cambio de contraseña
   */
  const handleChangePassword = () => {
    console.log("Cambiar contraseña");
    // Implementación real: mostrar modal o redirigir a página de cambio de contraseña
  };

  // Renderizar pantalla de carga
  if (status === "loading" || isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-xl font-semibold">
            {isLoading ? "Cerrando sesión..." : "Cargando..."}
          </h2>
          <p className="text-gray-500">
            {isLoading ? "Por favor espere..." : "Verificando sesión"}
          </p>
        </div>
      </div>
    );
  }

  // Renderizar pantalla de acceso denegado
  if (status !== "authenticated") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-red-600">
            Acceso denegado
          </h2>
          <p className="text-gray-500 mt-2">
            Debes iniciar sesión para acceder a esta página
          </p>
          <Link
            href="/admin/login"
            className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Ir a la página de login
          </Link>
        </div>
      </div>
    );
  }

  // Renderizar dashboard
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onSignOut={handleSignOut} 
        />
        
        {/* Contenido principal */}
        <div className="flex-1 p-8">
          <Header activeTab={activeTab} session={session} />
          
          {/* Contenido según la pestaña activa */}
          {activeTab === "overview" && (
            <Overview 
              stats={dashboardData.stats}
              recentPosts={dashboardData.recentPosts}
              onNewPost={handleNewPost}
              onEditPost={handleEditPost}
            />
          )}
          
          {activeTab === "posts" && (
            <PostsManager onNewPost={handleNewPost} />
          )}
          
          {activeTab === "settings" && (
            <SettingsManager 
              session={session}
              onSaveSettings={handleSaveSettings}
              onChangePassword={handleChangePassword}
            />
          )}
        </div>
      </div>
    </div>
  );
} 