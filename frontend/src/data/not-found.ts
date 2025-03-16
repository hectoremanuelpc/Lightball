interface NavigationLink {
  title: string;
  description: string;
  href: string;
}

export const navigationLinks: readonly NavigationLink[] = [
  {
    title: 'Servicios',
    description: 'Explora nuestra gama de servicios digitales',
    href: '/servicios'
  },
  {
    title: 'Quiénes Somos',
    description: 'Conoce más sobre nosotros',
    href: '/quienes-somos'
  },
  {
    title: 'Blog',
    description: 'Lee nuestros últimos artículos',
    href: '/blog'
  }
] as const;

export const content = {
  title: '404',
  heading: 'Página no encontrada',
  description: 'Lo sentimos, la página que estás buscando no existe o ha sido movida.',
  helpText: '¿Necesitas ayuda para encontrar lo que buscas?',
  buttons: {
    home: 'Volver al inicio',
    contact: 'Contactar con nosotros'
  }
} as const; 