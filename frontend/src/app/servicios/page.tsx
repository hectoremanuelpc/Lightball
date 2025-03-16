import { Metadata } from 'next';
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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24">
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <CTA />
    </div>
  );
} 