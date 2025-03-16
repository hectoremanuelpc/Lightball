import { Post } from "@/app/admin/dashboard/components/RecentPosts";


export interface DashboardStats {
  posts: number;
  views: number;
  subscribers: number;
  postsGrowth: string;
  viewsGrowth: string;
  subscribersGrowth: string;
}

export interface DashboardData {
  stats: DashboardStats;
  recentPosts: Post[];
}

export interface BlogSettings {
  blogName: string;
  blogDescription: string;
  metaTitle: string;
  metaDescription: string;
}

/**
 * Obtiene los datos del dashboard
 * En una implementación real, esto haría una llamada a la API
 */
export async function getDashboardData(): Promise<DashboardData> {
  // Simulación de llamada a API
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Datos de ejemplo
  return {
    stats: {
      posts: 24,
      views: 12543,
      subscribers: 342,
      postsGrowth: "+3 este mes",
      viewsGrowth: "+1.2k este mes",
      subscribersGrowth: "+18 este mes"
    },
    recentPosts: [
      { id: 1, title: "Introducción a Next.js 15", date: "2024-03-15", status: "publicado" },
      { id: 2, title: "Mejores prácticas de SEO en 2024", date: "2024-03-10", status: "publicado" },
      { id: 3, title: "Optimización de rendimiento web", date: "2024-03-05", status: "borrador" }
    ]
  };
}

/**
 * Obtiene la configuración del blog
 * En una implementación real, esto haría una llamada a la API
 */
export async function getBlogSettings(): Promise<BlogSettings> {
  // Simulación de llamada a API
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Datos de ejemplo
  return {
    blogName: "Lightball Blog",
    blogDescription: "Blog de contenido sobre tecnología y desarrollo",
    metaTitle: "Lightball Blog | Tecnología y Desarrollo",
    metaDescription: "Blog especializado en tecnología, desarrollo web y mejores prácticas de programación"
  };
}

/**
 * Guarda la configuración del blog
 * En una implementación real, esto haría una llamada a la API
 */
export async function saveBlogSettings(settings: BlogSettings): Promise<void> {
  // Simulación de llamada a API
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // En una implementación real, aquí se enviarían los datos al servidor
  console.log("Guardando configuración:", settings);
} 