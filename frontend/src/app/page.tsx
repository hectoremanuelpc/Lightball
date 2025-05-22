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
  url: process.env.NEXT_PUBLIC_APP_URL,
  logo: `${process.env.NEXT_PUBLIC_APP_URL}/images/logo-192x192.png`,
  image: `${process.env.NEXT_PUBLIC_APP_URL}/images/logo-192x192.png`,
  description: 'Consultoría tecnológica especializada en desarrollo web, móvil, cloud y soluciones de inteligencia artificial.',
  sameAs: [
    'https://twitter.com/lightball',
    'https://linkedin.com/company/lightball',
    'https://github.com/lightball'
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ES',
    addressLocality: 'España'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+34-000-000-000',
    contactType: 'customer service',
    email: 'info@lightball.com',
    availableLanguage: ['Spanish', 'English']
  },
  areaServed: {
    '@type': 'Country',
    name: 'España'
  }
};

// Datos estructurados para el sitio web
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Lightball',
  url: process.env.NEXT_PUBLIC_APP_URL,
  description: 'Consultoría tecnológica especializada en desarrollo web, móvil, cloud y soluciones de inteligencia artificial.',
  potentialAction: {
    '@type': 'SearchAction',
    'target': {
      '@type': 'EntryPoint',
      'urlTemplate': `${process.env.NEXT_PUBLIC_APP_URL}/search?q={search_term_string}`
    },
    'query-input': 'required name=search_term_string'
  }
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
      <Script
        id="website-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      
      <main className="min-h-screen">
        <HeroStatic />
        <ServicesStatic />
        <FeaturesStatic />
        <Testimonials />
        <ContactCTAStatic />
      </main>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  );
}
