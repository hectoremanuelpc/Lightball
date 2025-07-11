'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BsArrowDown } from 'react-icons/bs';

export default function HeroStatic() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const scrollToNextSection = () => {
    const windowHeight = window.innerHeight;
    window.scrollTo({
      top: windowHeight - 50,
      behavior: 'smooth'
    });
  };

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black pb-safe"
      style={{ 
        zIndex: 1,
        minHeight: '-webkit-fill-available'
      }}
      aria-label="Sección principal"
    >
      {/* Fondo con efecto estático */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-lime-300/10 via-black to-black" />
        <motion.div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-lime-300/40 blur-[100px] animate-[pulse_4s_ease-in-out_infinite]" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-lime-300/30 blur-[120px] animate-[pulse_4s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-lime-300/40 blur-[100px] animate-[pulse_4s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
        </motion.div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center pt-20 sm:pt-16 md:pt-0"
          style={{ 
            opacity,
            scale,
            willChange: 'transform, opacity'
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white"
          >
            Transformamos ideas en{' '}
            <motion.span
              className="font-bold bg-gradient-to-r from-lime-300 via-white to-lime-300 bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ['200%', '-155%']
              }}
              transition={{
                duration: 6,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                backgroundSize: '200% auto',
                paddingBottom: '0.2em',
                lineHeight: '1.2'
              }}
            >
              soluciones digitales
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Consultoría tecnológica especializada en impulsar la innovación y el crecimiento de tu negocio.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-32 sm:mb-16 md:mb-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contacto"
                style={{ 
                  backgroundColor: 'var(--lime)', 
                  color: 'var(--black)',
                  boxShadow: '0 10px 25px -5px rgba(204, 255, 0, 0.4), 0 8px 10px -6px rgba(204, 255, 0, 0.4)'
                }}
                className="inline-block px-12 py-5 rounded-lg font-bold text-lg transition-all hover:brightness-110"
                aria-label="Contactar con Lightball"
              >
                Contáctanos
              </Link>
            </motion.div>
            <Link
              href="/servicios"
              style={{  
                borderColor: 'var(--lime)',
                color: 'var(--white-smoke)',
                boxShadow: '0 10px 25px -5px rgba(204, 255, 0, 0.2), 0 8px 10px -6px rgba(204, 255, 0, 0.2)'
              }}
              className="btn bg-transparent text-white hover:bg-lime-300/10 px-12 py-5 rounded-lg font-bold shadow-md hover:shadow-lg transition-all border-2 border-lime-300"
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
        className="absolute bottom-[calc(2rem+env(safe-area-inset-bottom))] sm:bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={scrollToNextSection}
        whileHover={{ scale: 1.1 }}
        aria-label="Desplazarse a la siguiente sección"
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <div className="flex flex-col items-center">
          <motion.span 
            className="hidden md:block text-sm text-white font-medium mb-2 cursor-pointer"
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
            className="bg-white/10 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full shadow-lg border border-white/30"
            animate={{ 
              y: [0, 4, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.5,
              ease: "easeInOut"
            }}
          >
            <BsArrowDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-zinc-300" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 