export interface Route {
  path: string;
  label: string;
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const routes: Route[] = [
  {
    path: '/',
    label: 'Inicio',
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: 1.0,
  },
  {
    path: '/servicios',
    label: 'Servicios',
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/quienes-somos',
    label: 'Quiénes Somos',
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/blog',
    label: 'Blog',
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  {
    path: '/contacto',
    label: 'Contacto',
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'yearly',
    priority: 0.6,
  },
  /*{
    path: '/casos-de-exito',
    label: 'Casos de Éxito',
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.7,
  },*/
];

export default routes; 