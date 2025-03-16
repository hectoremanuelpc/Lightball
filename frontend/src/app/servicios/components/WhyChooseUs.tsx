import React from 'react';
import { FaShieldAlt, FaComments, FaRocket } from 'react-icons/fa';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => (
  <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-all duration-300">
    <div className="text-blue-600 mb-4">
      <div className="text-4xl mx-auto flex justify-center">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const benefits = [
  {
    icon: <FaShieldAlt />,
    title: "Tecnología de Vanguardia",
    description: "Utilizamos las últimas tecnologías y mejores prácticas para crear soluciones modernas y eficientes"
  },
  {
    icon: <FaComments />,
    title: "Comunicación Constante",
    description: "Mantenemos un diálogo abierto durante todo el proceso para asegurar resultados que te encanten"
  },
  {
    icon: <FaRocket />,
    title: "Resultados Garantizados",
    description: "Nos comprometemos a entregar soluciones que impulsen el crecimiento de tu negocio"
  }
];

export const WhyChooseUs = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          ¿Por qué elegir Lightball?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs; 