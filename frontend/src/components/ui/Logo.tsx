'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      <motion.div 
        className={`${sizeClasses[size]} rounded-xl flex items-center justify-center transition-all duration-300`}
        whileHover={{ scale: 1.05 }}
      >
        <Image src="/images/logo.svg" alt="Logo" width={32} height={32} />
      </motion.div>
      {showText && (
        <span className={`${textSizes[size]} font-bold text-white group-hover:text-lime-300 transition-colors duration-300`}>
          <span className="text-lime-300 font-mono">Light</span>
          <span className="text-white font-mono">Ball</span>
        </span>
      )}
    </Link>
  );
} 