'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ServicesAnimationProps {
  services: Service[];
}

export default function ServicesAnimation({ services }: ServicesAnimationProps) {
  return (
    <>
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: '-50px' }}
          className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
            {service.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-muted-foreground">{service.description}</p>
        </motion.div>
      ))}
    </>
  );
} 