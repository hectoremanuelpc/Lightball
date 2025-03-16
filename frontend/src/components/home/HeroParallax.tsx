'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full">
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

      {/* Efecto de parallax para el contenido */}
      <motion.div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ y: textY }}
      />
    </div>
  );
} 