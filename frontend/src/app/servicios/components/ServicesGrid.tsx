import React from 'react';
import { services } from '@/data/servicios/services';
import ServiceCard from './ServiceCard';

export const ServicesGrid = () => {
  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid; 