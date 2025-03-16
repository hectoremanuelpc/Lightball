import { BsTelephone } from 'react-icons/bs';

export default function QuickResponse() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-2 border-accent">
      <h3 className="text-2xl font-bold mb-4 text-accent">¿Necesitas una respuesta rápida?</h3>
      <p className="mb-4 text-gray-700">Nuestro equipo está disponible para atender consultas urgentes.</p>
      <a 
        href="tel:+34000000000" 
        className="inline-flex items-center justify-center bg-accent text-gray-800 hover:bg-accent/90 px-6 py-3 rounded-md font-bold transition-colors shadow-md text-lg"
      >
        <BsTelephone className="w-5 h-5 mr-2" />
        Llamar ahora
      </a>
    </div>
  );
} 