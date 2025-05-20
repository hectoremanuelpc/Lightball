'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-300/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-lime-300/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-black bg-lime-300 rounded-lg hover:bg-lime-400 transition-colors duration-300"
            >
              Contactar Ahora
            </motion.a>
            <motion.a
              href="/blog"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-black/40 backdrop-blur-md border border-lime-300/20 rounded-lg hover:border-lime-300/40 transition-all duration-300"
            >
              Ver Blog
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 