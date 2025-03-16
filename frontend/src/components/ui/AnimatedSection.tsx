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
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
} 