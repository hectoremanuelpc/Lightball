import { Metadata } from 'next';
import { NotFoundContent } from '@/components/not-found/NotFoundContent';

export const metadata: Metadata = {
  title: 'Página no encontrada | Lightball',
  description: 'Lo sentimos, la página que buscas no existe.',
};

export default function NotFound() {
  return <NotFoundContent />;
} 