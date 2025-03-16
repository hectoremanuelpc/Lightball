'use client';

import { useInView } from 'react-intersection-observer';
import TestimonialsCarousel from './TestimonialsCarousel';
import { testimonials } from '@/data/home/testimonials';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nos enorgullece el impacto positivo que generamos en nuestros clientes y sus negocios.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
} 