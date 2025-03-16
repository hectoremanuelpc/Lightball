import React from 'react';
import Link from 'next/link';

export const CTA = () => {
  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          ¿Listo para impulsar tu presencia digital?
        </h2>
        <p className="text-xl mb-8">
          Contáctanos hoy mismo para discutir tu proyecto
        </p>
        <Link 
          href="/contacto"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 cursor-pointer"
        >
          Contactar
        </Link>
      </div>
    </div>
  );
};

export default CTA; 