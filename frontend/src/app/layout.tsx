import './globals.css';
import type { Metadata, Viewport } from 'next';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'Lightball Blog',
    template: '%s | Lightball Blog',
  },
  description: 'Blog de contenido sobre tecnología y desarrollo',
  keywords: ['tecnología', 'desarrollo', 'programación', 'blog'],
  authors: [{ name: 'Lightball Team' }],
  creator: 'Lightball Team',
  publisher: 'Lightball',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.className}>
      <body className="min-h-screen bg-background antialiased">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
