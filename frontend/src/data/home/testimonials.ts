export interface Testimonial {
  quote: string;
  author: string;
  position: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Lightball transformó por completo nuestra infraestructura tecnológica. Su enfoque innovador y su atención al detalle nos permitieron mejorar significativamente la eficiencia de nuestros procesos.",
    author: "María Rodríguez",
    position: "CTO, TechSolutions",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    quote: "Trabajar con Lightball ha sido una experiencia excepcional. Su equipo no solo entendió perfectamente nuestras necesidades, sino que también aportó ideas valiosas que no habíamos considerado.",
    author: "Carlos Martínez",
    position: "Director de Innovación, InnovateCorp",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    quote: "La implementación de nuestra plataforma de e-commerce por parte de Lightball superó todas nuestras expectativas. El resultado final es un sistema robusto, escalable y fácil de usar.",
    author: "Laura Sánchez",
    position: "CEO, RetailPlus",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
]; 