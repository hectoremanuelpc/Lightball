'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ContactCTAStatic() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para impulsar tu negocio con tecnología?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Contáctanos hoy mismo para discutir cómo podemos ayudarte a alcanzar tus objetivos tecnológicos y de negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
                >
                  Contáctanos
                </Link>
              </motion.div>
              <Link
                href="/casos-de-exito"
                className="btn bg-transparent text-white hover:bg-white/10 px-10 py-4 rounded-md font-bold border-2 border-white transition-all transform hover:-translate-y-1 text-lg"
              >
                Ver casos de éxito
              </Link>
            </div>
          </div>
          
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
        </div>
      </div>
    </section>
  );
} 