import './globals.css';
import type { Metadata, Viewport } from 'next';
import LayoutWrapper from '@/components/layout/LayoutWrapper';

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'Lightball - Consultoría Tecnológica y Desarrollo Web',
    template: '%s | Lightball',
  },
  description: 'Consultoría tecnológica especializada en desarrollo web, móvil, cloud y soluciones de inteligencia artificial. Expertos en transformación digital para PYMEs.',
  keywords: ['consultoría tecnológica', 'desarrollo web', 'SEO', 'transformación digital', 'PYMEs', 'cloud', 'inteligencia artificial'],
  authors: [{ name: 'Lightball Team' }],
  creator: 'Lightball',
  publisher: 'Lightball',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: 'Lightball',
    title: 'Lightball - Consultoría Tecnológica y Desarrollo Web',
    description: 'Consultoría tecnológica especializada en desarrollo web, móvil, cloud y soluciones de inteligencia artificial.',
    images: [
      {
        url: '/images/FullLogo_OG_black.png',
        width: 1200,
        height: 630,
        alt: 'Lightball - Consultoría Tecnológica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lightball - Consultoría Tecnológica y Desarrollo Web',
    description: 'Consultoría tecnológica especializada en desarrollo web, móvil, cloud y soluciones de inteligencia artificial.',
    images: ['/images/FullLogo_OG_black.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="min-h-screen bg-background antialiased">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
