
export interface Service {
  id: string;
  iconName: string;
  iconColor: string;
  title: string;
  description: string;
  features: string[];
  ctaLink: string;
  ctaText: string;
}

export const services: Service[] = [
  {
    id: 'web-development',
    iconName: 'FaCode',
    iconColor: 'text-blue-500',
    title: "Desarrollo Web",
    description: "Creación de sitios web modernos y aplicaciones web personalizadas utilizando las últimas tecnologías como React, Next.js y Node.js.",
    features: [
      "Diseño responsivo y adaptable",
      "Optimización de rendimiento",
      "Integración de APIs",
      "Experiencia de usuario excepcional"
    ],
    ctaLink: "/contacto",
    ctaText: "Solicitar Desarrollo Web"
  },
  {
    id: 'seo',
    iconName: 'FaSearchDollar',
    iconColor: 'text-green-500',
    title: "SEO",
    description: "Optimización de motores de búsqueda para mejorar la visibilidad de tu sitio web y atraer tráfico orgánico cualificado.",
    features: [
      "Investigación de palabras clave",
      "Optimización on-page",
      "Estrategia de contenidos",
      "Análisis y seguimiento de resultados"
    ],
    ctaLink: "/contacto",
    ctaText: "Mejorar mi SEO"
  },
  {
    id: 'responsive-design',
    iconName: 'FaMobile',
    iconColor: 'text-purple-500',
    title: "Diseño Responsivo",
    description: "Desarrollo de interfaces que se adaptan perfectamente a todos los dispositivos y tamaños de pantalla.",
    features: [
      "Compatibilidad multiplataforma",
      "Diseño mobile-first",
      "Optimización de imágenes",
      "Velocidad de carga optimizada"
    ],
    ctaLink: "/contacto",
    ctaText: "Optimizar mi Diseño"
  },
  {
    id: 'performance',
    iconName: 'FaRocket',
    iconColor: 'text-red-500',
    title: "Optimización de Rendimiento",
    description: "Mejora de la velocidad y el rendimiento de tu sitio web para una mejor experiencia de usuario.",
    features: [
      "Optimización de código",
      "Caché y compresión",
      "Mejora de Core Web Vitals",
      "Auditorías de rendimiento"
    ],
    ctaLink: "/contacto",
    ctaText: "Optimizar Rendimiento"
  }
]; 