import { Suspense } from 'react';
import { dashboardApi } from '@/lib/api';
import DashboardClient from './client';

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

export default async function DashboardPage() {
  // Obtener datos del dashboard en el servidor
  const dashboardData = await dashboardApi.getDashboardData();
  
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