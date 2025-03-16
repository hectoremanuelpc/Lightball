'use client';

import { motion } from 'framer-motion';

export default function ContactCTAAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="h-2 w-24 bg-white/30 rounded-full" />
            <div className="h-2 w-32 bg-white/30 rounded-full" />
            <div className="h-2 w-20 bg-white/30 rounded-full" />
          </div>
          <div className="space-y-4">
            <div className="h-2 w-28 bg-white/30 rounded-full" />
            <div className="h-2 w-24 bg-white/30 rounded-full" />
            <div className="h-2 w-32 bg-white/30 rounded-full" />
          </div>
        </div>
        
        <div className="mt-8 space-y-4">
          <div className="h-10 bg-white/20 rounded-md" />
          <div className="h-10 bg-white/20 rounded-md" />
          <div className="h-10 bg-white/20 rounded-md" />
          <div className="h-32 bg-white/20 rounded-md" />
          <div className="h-10 bg-white/30 rounded-md w-1/2 mx-auto" />
        </div>
      </div>
      
      {/* Elementos decorativos */}
      <motion.div
        className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400/30 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-400/30 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1,
        }}
      />
    </motion.div>
  );
} 