import { Session } from "next-auth";
import { FiHome } from "react-icons/fi";
import Link from "next/link";

interface HeaderProps {
  activeTab: string;
  session: Session | null;
}

export default function Header({ activeTab, session }: HeaderProps) {
  // Mapeo de títulos según la pestaña activa
  const tabTitles: Record<string, string> = {
    overview: "Resumen del Dashboard",
    posts: "Gestión de Artículos",
    settings: "Configuración del Blog"
  };

  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          {tabTitles[activeTab] || "Dashboard"}
        </h1>
        <p className="text-gray-500">
          Bienvenido, {session?.user?.name || "Administrador"}
        </p>
      </div>
      
      <Link 
        href="/" 
        className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
      >
        <FiHome className="text-lg" />
        <span>Volver al sitio</span>
      </Link>
    </div>
  );
} 