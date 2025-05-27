'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { features, Feature } from '@/data/home/features';

export default function FeaturesStatic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div ref={containerRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-black to-davys-gray/20" id="caracteristicas">
      {/* Elementos de fondo con parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Lo que dicen nuestros clientes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Descubre cómo hemos ayudado a empresas como la tuya a alcanzar sus objetivos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature: Feature, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative bg-black/60 rounded-2xl p-8 shadow-lg hover:shadow-xl border border-lime-300/20 hover:border-lime-300/40 overflow-hidden"
              style={{
                willChange: 'transform, opacity',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'translate3d(0, 0, 0)',
                WebkitTransform: 'translate3d(0, 0, 0)',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                isolation: 'isolate'
              }}
            >
              {/* Línea decorativa superior */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-300/0 via-lime-300/50 to-lime-300/0" />
              
              {/* Icono con diseño circular y efecto de brillo */}
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 w-24 h-24 bg-lime-300/5 rounded-full blur-xl group-hover:bg-lime-300/10 transition-all duration-500" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-lime-300/20 to-lime-300/5 rounded-2xl flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-lime-300 transform -rotate-45 group-hover:rotate-0 transition-all duration-500" />
                </div>
              </div>

              {/* Contenido */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-lime-300 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>

              {/* Línea decorativa inferior */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-lime-300/0 via-lime-300/20 to-lime-300/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 