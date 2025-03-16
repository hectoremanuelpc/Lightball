import React from 'react';
import type { Service } from '@/data/servicios/services';
import { BsCheckLg } from 'react-icons/bs';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className={`${service.iconColor} mb-4`}>
          <Icon className="w-12 h-12" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-6">
          {service.description}
        </p>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <BsCheckLg className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard; 