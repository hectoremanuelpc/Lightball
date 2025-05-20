'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Nuestros Servicios
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Soluciones digitales innovadoras para impulsar tu negocio al siguiente nivel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-black bg-lime-300 rounded-lg hover:bg-lime-400 transition-colors duration-300"
            >
              Explorar Servicios
            </motion.a>
            <motion.a
              href="/contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-black/40 backdrop-blur-md border border-lime-300/20 rounded-lg hover:border-lime-300/40 transition-all duration-300"
            >
              Contactar
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 