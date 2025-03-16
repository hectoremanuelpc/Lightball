import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Iniciar Sesión | Panel de Administración',
  description: 'Acceso al panel de administración del blog',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 