'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaRocket } from 'react-icons/fa';

export default function ContactCTAStatic() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black to-davys-gray/20">
      {/* Elementos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-lime-300/10 rounded-2xl p-3 inline-block"
              >
                <FaRocket className="w-6 h-6 text-lime-300" />
              </motion.div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              ¿Listo para impulsar tu negocio con{' '}
              <span className="relative">
                tecnología
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-lime-300"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                />
              </span>
              ?
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Contáctanos hoy mismo para discutir cómo podemos ayudarte a alcanzar tus objetivos tecnológicos y de negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg bg-lime-300 text-black hover:bg-lime-300/90 transition-all duration-300 shadow-lg shadow-lime-300/20"
                >
                  Contáctanos
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/casos-de-exito"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg bg-transparent text-white border-2 border-lime-300/20 hover:border-lime-300/40 transition-all duration-300"
                >
                  Ver casos de éxito
                  <FaArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-lime-300/20 shadow-xl">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-300/0 via-lime-300/20 to-lime-300/0 rounded-2xl blur-sm" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="h-2 w-24 bg-lime-300/20 rounded-full" />
                  <div className="h-2 w-32 bg-lime-300/20 rounded-full" />
                  <div className="h-2 w-20 bg-lime-300/20 rounded-full" />
                </div>
                <div className="space-y-4">
                  <div className="h-2 w-28 bg-lime-300/20 rounded-full" />
                  <div className="h-2 w-24 bg-lime-300/20 rounded-full" />
                  <div className="h-2 w-32 bg-lime-300/20 rounded-full" />
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="h-10 bg-lime-300/10 rounded-lg" />
                <div className="h-10 bg-lime-300/10 rounded-lg" />
                <div className="h-10 bg-lime-300/10 rounded-lg" />
                <div className="h-32 bg-lime-300/10 rounded-lg" />
                <div className="h-10 bg-lime-300/20 rounded-lg w-1/2 mx-auto" />
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-lime-300/20 rounded-full blur-xl"
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
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-lime-300/20 rounded-full blur-xl"
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