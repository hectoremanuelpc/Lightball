'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {

  return (
    <Link href="/" className={`${className}`}>
      <motion.div 
        className="transition-all duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <Image 
          src="/images/FullLogo_OG_transparent.png" 
          alt="Logo" 
          width={190} 
          height={100} 
          className="object-contain" 
        />
      </motion.div>
    </Link>
  );
} 