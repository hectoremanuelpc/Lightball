'use client';

import { useInView } from 'react-intersection-observer';
import TestimonialsCarousel from './TestimonialsCarousel';
import { testimonials } from '@/data/home/testimonials';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-gradient-to-b from-black to-davys-gray/20">
      {/* Elementos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            ¿Por qué elegirnos?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Nuestro enfoque único y nuestra experiencia nos permiten ofrecer soluciones excepcionales.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <TestimonialsCarousel testimonials={testimonials} />
        </motion.div>
      </div>
    </section>
  );
} 