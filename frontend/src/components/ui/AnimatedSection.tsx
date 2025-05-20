'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedSection({ children, className = '', ...motionProps }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '0px' }}
      transition={{ 
        duration: 0.4,
        ease: 'easeOut',
        opacity: { duration: 0.3 },
        y: { duration: 0.4 }
      }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
} 