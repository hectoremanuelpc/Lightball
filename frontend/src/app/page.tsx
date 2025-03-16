import { Metadata } from 'next';
import HeroStatic from '@/components/home/HeroStatic';
import ServicesStatic from '@/components/home/ServicesStatic';
import FeaturesStatic from '@/components/home/FeaturesStatic';
import ContactCTAStatic from '@/components/home/ContactCTAStatic';
import Testimonials from '@/components/home/Testimonials';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Lightball es una consultoría tecnológica especializada en desarrollo web, móvil, cloud y soluciones de inteligencia artificial.',
};

// Datos estructurados para la organización
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lightball',
  url: 'https://lightball.com',
  logo: 'https://lightball.com/logo.png',
  sameAs: [
    'https://twitter.com/lightball',
    'https://linkedin.com/company/lightball',
    'https://github.com/lightball'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+34-000-000-000',
    contactType: 'customer service',
    email: 'info@lightball.com',
    availableLanguage: ['Spanish', 'English']
  },
  description: 'Consultoría tecnológica especializada en desarrollo web, móvil, cloud y soluciones de inteligencia artificial.'
};

export default function HomePage() {
  return (
    <>
      {/* Script JSON-LD para SEO */}
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      
      <main className="min-h-screen">
        <HeroStatic />
        <ServicesStatic />
        <FeaturesStatic />
        <Testimonials />
        <ContactCTAStatic />
      </main>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
    </>
  );
}
