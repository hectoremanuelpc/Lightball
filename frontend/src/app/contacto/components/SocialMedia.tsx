import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function SocialMedia() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 md:col-span-2 lg:col-span-3">
      <h3 className="text-xl font-bold mb-4 text-primary">Síguenos en redes sociales</h3>
      <div className="flex space-x-4">
        <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
          <FaInstagram className="w-5 h-5 text-primary" />
        </a>
        <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
          <FaXTwitter className="w-5 h-5 text-primary" />
        </a>
        <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
          <FaLinkedinIn className="w-5 h-5 text-primary" />
        </a>
      </div>
    </div>
  );
} 