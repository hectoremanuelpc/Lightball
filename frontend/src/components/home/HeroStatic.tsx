'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BsArrowDown } from 'react-icons/bs';

export default function HeroStatic() {
  const ref = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const scrollToNextSection = () => {
    // Obtener la altura de la ventana
    const windowHeight = window.innerHeight;
    // Desplazarse hacia abajo una altura de ventana menos un margen para que el título no quede pegado
    window.scrollTo({
      top: windowHeight - 50,
      behavior: 'smooth'
    });
  };

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      aria-label="Sección principal"
    >
      {/* Fondo con efecto parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
        </div>
      </motion.div>

      {/* Contenido */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          style={{ y: textY }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Transformamos ideas en{' '}
            <motion.span
              className="text-primary font-extrabold relative"
              animate={{ 
                color: ['#3b82f6', '#ec4899', '#3b82f6'],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              soluciones digitales
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Consultoría tecnológica especializada en impulsar la innovación y el crecimiento de tu negocio.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contacto"
                style={{ 
                  backgroundColor: '#3b82f6', 
                  color: 'white',
                  boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -4px rgba(59, 130, 246, 0.3)'
                }}
                className="inline-block px-10 py-4 rounded-md font-bold text-lg transition-all hover:bg-blue-600"
                aria-label="Contactar con Lightball"
              >
                Contáctanos
              </Link>
            </motion.div>
            <Link
              href="/servicios"
              className="btn bg-transparent text-primary hover:bg-primary/10 px-10 py-4 rounded-md font-bold shadow-md hover:shadow-lg transition-all border-2 border-primary"
              aria-label="Ver servicios de Lightball"
            >
              Nuestros Servicios
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNextSection}
        whileHover={{ scale: 1.1 }}
        aria-label="Desplazarse a la siguiente sección"
      >
        <div className="flex flex-col items-center">
          <motion.span 
            className="text-sm text-primary font-medium mb-2 cursor-pointer"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Descubre más
          </motion.span>
          <motion.div
            className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md border border-primary/20"
            animate={{ 
              y: [0, 8, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
          >
            <BsArrowDown className="w-6 h-6 text-primary" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 