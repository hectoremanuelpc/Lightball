import { Metadata } from 'next';
import { services } from '@/data/servicios/services';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Servicios profesionales de desarrollo web y SEO. Especialistas en crear experiencias digitales excepcionales y optimizar la presencia en línea de tu negocio.',
  openGraph: {
    title: 'Servicios | Lightball',
    description: 'Servicios profesionales de desarrollo web y SEO. Especialistas en crear experiencias digitales excepcionales.',
    images: [
      {
        url: '/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Servicios de Lightball'
      }
    ]
  }
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-davys-gray/20">
      {/* Elementos decorativos de fondo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-300/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-lime-300/5 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <Hero />
        <ServicesGrid services={services} />
        <WhyChooseUs />
        <CTA />
      </div>
    </main>
  );
} 