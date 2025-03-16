import { BsTelephone } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <h3 className="text-xl font-bold mb-4 text-primary">Información de contacto</h3>
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <BsTelephone className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Teléfono</h4>
            <p className="text-muted-foreground">+34 000 000 000</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <MdEmail className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Email</h4>
            <p className="text-muted-foreground">info@lightball.com</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <TbWorld className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Servicio 100% online</h4>
          </div>
        </div>
      </div>
    </div>
  );
} 