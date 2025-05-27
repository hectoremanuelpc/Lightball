'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/servicios/services';
import { FaCode, FaSearchDollar, FaMobile, FaRocket } from 'react-icons/fa';

interface ServiceCardProps {
  service: Service;
}

const iconMap = {
  FaCode,
  FaSearchDollar,
  FaMobile,
  FaRocket,
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.iconName as keyof typeof iconMap];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-black/60 rounded-2xl p-8 border border-lime-300/20 hover:border-lime-300/40 h-full"
      style={{
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: 'translate3d(0, 0, 0)',
        WebkitTransform: 'translate3d(0, 0, 0)'
      }}
    >
      <div className="relative mb-6">
        <div className="absolute -top-2 -left-2 w-24 h-24 bg-lime-300/5 rounded-full blur-xl group-hover:bg-lime-300/10 transition-all duration-500" />
        <div className="relative w-16 h-16 bg-gradient-to-br from-lime-300/20 to-lime-300/5 rounded-2xl flex items-center justify-center">
          <Icon className="w-8 h-8 text-lime-300" />
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
      <p className="text-gray-300 mb-6">{service.description}</p>

      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <span className="w-1.5 h-1.5 bg-lime-300 rounded-full mr-2" />
            {feature}
          </li>
        ))}
      </ul>

      <motion.a
        href={service.ctaLink}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center justify-center w-full mt-8 px-6 py-3 text-base font-medium text-white bg-black/60 border border-lime-300/20 rounded-lg hover:border-lime-300/40 transition-colors duration-300"
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
      >
        {service.ctaText}
      </motion.a>
    </motion.div>
  );
} 