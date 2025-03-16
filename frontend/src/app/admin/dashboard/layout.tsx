import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Panel de Administración',
  description: 'Panel principal de administración del blog',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: 'https://lightball.tech/admin/dashboard',
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 