'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps extends Omit<MotionProps, 'children'> {
  children: ReactNode;
  className?: string;
  removeBackdropBlur?: boolean;
}

// Optimizaciones específicas para Safari
const safariOptimizations = {
  willChange: 'transform, opacity',
  backfaceVisibility: 'hidden' as const,
  WebkitBackfaceVisibility: 'hidden' as const,
  transform: 'translate3d(0, 0, 0)',
  WebkitTransform: 'translate3d(0, 0, 0)',
  WebkitFontSmoothing: 'antialiased' as const,
  MozOsxFontSmoothing: 'grayscale' as const,
  isolation: 'isolate' as const
};

// Transiciones optimizadas para Safari
const optimizedTransition = {
  duration: 0.5,
  ease: "easeOut" as const
};

export default function AnimatedSection({ 
  children, 
  className = '', 
  removeBackdropBlur = false,
  initial = { opacity: 0, y: 20 },
  whileInView = { opacity: 1, y: 0 },
  transition = optimizedTransition,
  viewport = { once: true, amount: 0.2 },
  style = {},
  ...props 
}: AnimatedSectionProps) {
  // Combinar estilos de optimización con estilos personalizados
  const combinedStyle = {
    ...safariOptimizations,
    ...style
  };

  // Si removeBackdropBlur es true, reemplazar backdrop-blur con fondo más opaco
  const processedClassName = removeBackdropBlur 
    ? className
        .replace(/backdrop-blur-\w+/g, '')
        .replace(/bg-black\/40/g, 'bg-black/60')
        .replace(/bg-black\/30/g, 'bg-black/50')
        .replace(/transition-all/g, 'transition-colors')
    : className;

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      className={processedClassName}
      style={combinedStyle}
      {...props}
    >
      {children}
    </motion.div>
  );
} 