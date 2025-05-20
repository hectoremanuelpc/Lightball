'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaRocket, FaHandshake } from 'react-icons/fa';

const reasons = [
  {
    title: 'Experiencia Comprobada',
    description: 'Más de 10 años de experiencia en el desarrollo de soluciones digitales.',
    icon: FaCheckCircle,
  },
  {
    title: 'Equipo Especializado',
    description: 'Profesionales altamente capacitados en las últimas tecnologías.',
    icon: FaUsers,
  },
  {
    title: 'Innovación Constante',
    description: 'Siempre a la vanguardia con las últimas tendencias y tecnologías.',
    icon: FaRocket,
  },
  {
    title: 'Compromiso Total',
    description: 'Nos comprometemos con el éxito de tu proyecto desde el primer día.',
    icon: FaHandshake,
  },
];

export default function WhyChooseUs() {
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre lo que nos hace diferentes y por qué somos la mejor opción para tu proyecto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-lime-300/20 hover:border-lime-300/40 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <div className="absolute -top-2 -left-2 w-24 h-24 bg-lime-300/5 rounded-full blur-xl group-hover:bg-lime-300/10 transition-all duration-500" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-lime-300/20 to-lime-300/5 rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-lime-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 