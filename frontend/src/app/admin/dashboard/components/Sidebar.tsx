"use client";

import { FiBarChart2, FiFileText, FiSettings, FiLogOut, FiHome } from "react-icons/fi";
import Link from "next/link";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSignOut: () => void;
}

export default function Sidebar({ activeTab, setActiveTab, onSignOut }: SidebarProps) {
  return (
    <div className="w-64 bg-indigo-800 text-white min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Panel Admin</h2>
        <p className="text-indigo-200 text-sm">Gestión del blog</p>
      </div>
      
      <nav className="space-y-1">
        <button 
          onClick={() => setActiveTab("overview")}
          className={`flex items-center space-x-3 w-full p-3 rounded transition-colors ${activeTab === "overview" ? "bg-indigo-700" : "hover:bg-indigo-700/50"}`}
        >
          <FiBarChart2 className="text-lg" />
          <span>Resumen</span>
        </button>
        
        <button 
          onClick={() => setActiveTab("posts")}
          className={`flex items-center space-x-3 w-full p-3 rounded transition-colors ${activeTab === "posts" ? "bg-indigo-700" : "hover:bg-indigo-700/50"}`}
        >
          <FiFileText className="text-lg" />
          <span>Artículos</span>
        </button>
        
        <button 
          onClick={() => setActiveTab("settings")}
          className={`flex items-center space-x-3 w-full p-3 rounded transition-colors ${activeTab === "settings" ? "bg-indigo-700" : "hover:bg-indigo-700/50"}`}
        >
          <FiSettings className="text-lg" />
          <span>Configuración</span>
        </button>
        
        <Link 
          href="/"
          className="flex items-center space-x-3 w-full p-3 rounded text-indigo-200 hover:bg-indigo-700/50 hover:text-white mt-8"
        >
          <FiHome className="text-lg" />
          <span>Volver al sitio</span>
        </Link>
        
        <button 
          onClick={onSignOut}
          className="flex items-center space-x-3 w-full p-3 rounded text-red-300 hover:bg-red-800/30 hover:text-red-200 mt-2"
        >
          <FiLogOut className="text-lg" />
          <span>Cerrar sesión</span>
        </button>
      </nav>
    </div>
  );
} 