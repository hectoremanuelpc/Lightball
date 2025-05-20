import { Suspense } from 'react';
import DashboardClient from './client';
import { DashboardData } from '@/lib/types';

// Componente de carga para el dashboard
function DashboardLoading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Cargando dashboard...</h2>
        <p className="text-gray-500">Preparando los datos del panel de administración</p>
      </div>
    </div>
  );
}

// Datos iniciales para desarrollo y build time
const initialDashboardData: DashboardData = {
  stats: {
    posts: 0,
    views: 0,
    subscribers: 0,
    postsGrowth: "+0%",
    viewsGrowth: "+0%",
    subscribersGrowth: "+0%"
  },
  recentPosts: []
};

async function getDashboardData(): Promise<DashboardData> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/dashboard`, {
      next: { revalidate: 60 }
    });
    
    if (!res.ok) {
      console.warn('Error al cargar los datos del dashboard, usando datos iniciales');
      return initialDashboardData;
    }
    
    return res.json();
  } catch (error) {
    console.warn('Error al conectar con el servidor, usando datos iniciales:', error);
    return initialDashboardData;
  }
}

export default async function DashboardPage() {
  const dashboardData = await getDashboardData();
  
  return (
    <Suspense fallback={<DashboardLoading />}>
      <DashboardClient initialData={dashboardData} />
    </Suspense>
  );
}

// Configuración para evitar que se muestre el header y footer en esta página
export const metadata = {
  title: 'Panel de Administración | Lightball Blog',
  description: 'Panel de administración para gestionar el blog',
} 