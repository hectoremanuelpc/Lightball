'use client';

import { motion } from 'framer-motion';
import { FaLightbulb, FaHandshake, FaRocket, FaUsers } from 'react-icons/fa';

interface Valor {
  title: string;
  description: string;
  icon?: string;
}

interface ValoresSectionProps {
  valores: Valor[];
}

const iconMap = {
  'lightbulb': FaLightbulb,
  'handshake': FaHandshake,
  'rocket': FaRocket,
  'users': FaUsers,
};

export default function ValoresSection({ valores }: ValoresSectionProps) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nuestros Valores</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Los principios que guían cada decisión y acción en nuestra empresa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valores.map((valor, index) => {
            const Icon = valor.icon ? iconMap[valor.icon as keyof typeof iconMap] : null;
            return (
              <motion.div
                key={valor.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-lime-300/20 hover:border-lime-300/40 transition-all duration-300"
              >
                {Icon && (
                  <div className="relative mb-6">
                    <div className="absolute -top-2 -left-2 w-24 h-24 bg-lime-300/5 rounded-full blur-xl group-hover:bg-lime-300/10 transition-all duration-500" />
                    <div className="relative w-16 h-16 bg-gradient-to-br from-lime-300/20 to-lime-300/5 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-lime-300" />
                    </div>
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-3 text-white">{valor.title}</h3>
                <p className="text-gray-300">{valor.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 