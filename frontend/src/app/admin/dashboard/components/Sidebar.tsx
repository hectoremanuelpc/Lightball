"use client";

import { FiBarChart2, FiFileText, FiSettings, FiLogOut, FiHome } from "react-icons/fi";
import Link from "next/link";
import { authApi } from "@/lib/api";
import { useRouter } from "next/navigation";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onSignOut?: () => void;
}

export default function Sidebar({ activeTab, onTabChange, onSignOut }: SidebarProps) {
  const router = useRouter();
  
  const handleSignOut = () => {
    if (onSignOut) {
      onSignOut();
    } else {
      authApi.logout();
      router.push('/admin/login');
    }
  };

  return (
    <div className="w-64 bg-indigo-800 text-white min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Panel Admin</h2>
        <p className="text-indigo-200 text-sm">Gestión del blog</p>
      </div>
      
      <nav className="space-y-1">
        <button
          onClick={() => onTabChange('overview')}
          className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
            activeTab === 'overview' 
              ? 'bg-indigo-900 text-white' 
              : 'text-indigo-100 hover:bg-indigo-700'
          }`}
        >
          <FiBarChart2 className="mr-3" />
          Resumen
        </button>
        
        <button
          onClick={() => onTabChange('posts')}
          className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
            activeTab === 'posts' 
              ? 'bg-indigo-900 text-white' 
              : 'text-indigo-100 hover:bg-indigo-700'
          }`}
        >
          <FiFileText className="mr-3" />
          Artículos
        </button>
        
        <button
          onClick={() => onTabChange('settings')}
          className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
            activeTab === 'settings' 
              ? 'bg-indigo-900 text-white' 
              : 'text-indigo-100 hover:bg-indigo-700'
          }`}
        >
          <FiSettings className="mr-3" />
          Configuración
        </button>
      </nav>
      
      <div className="mt-auto pt-8">
        <Link 
          href="/" 
          className="flex items-center px-4 py-2 text-indigo-100 hover:bg-indigo-700 rounded-md"
        >
          <FiHome className="mr-3" />
          Ir al sitio
        </Link>
        
        <button 
          onClick={handleSignOut}
          className="flex items-center w-full px-4 py-2 mt-2 text-left text-indigo-100 hover:bg-indigo-700 rounded-md"
        >
          <FiLogOut className="mr-3" />
          Cerrar sesión
        </button>
      </div>
    </div>
  );
} 