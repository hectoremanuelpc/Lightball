import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Logo from '@/components/ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black py-24 overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Logo y descripción */}
          <div className="space-y-6 md:col-span-4">
            <Logo size="lg" />
            <p className="text-gray-300 max-w-xs leading-relaxed">
              Soluciones tecnológicas innovadoras para impulsar tu negocio hacia el futuro digital.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://twitter.com/lightball" label="X (Twitter)">
                <FaXTwitter className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="https://linkedin.com/company/lightball" label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="https://github.com/lightball" label="GitHub">
                <FaGithub className="w-5 h-5" />
              </SocialLink>
            </div>
          </div>

          {/* Enlaces de Empresa */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/sobre-nosotros" className="text-gray-300 hover:text-lime-300 transition-colors duration-300">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-lime-300 transition-colors duration-300">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-lime-300 transition-colors duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Enlaces de Servicios */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-6">Servicios</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/servicios/desarrollo-web" className="text-gray-300 hover:text-lime-300 transition-colors duration-300">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="/servicios/apps-moviles" className="text-gray-300 hover:text-lime-300 transition-colors duration-300">
                  Apps Móviles
                </Link>
              </li>
              <li>
                <Link href="/servicios/consultoria" className="text-gray-300 hover:text-lime-300 transition-colors duration-300">
                  Consultoría
                </Link>
              </li>
            </ul>
          </div>

          {/* Enlaces Legales */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/privacidad" className="text-gray-300 hover:text-lime-300 transition-colors duration-300">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-gray-300 hover:text-lime-300 transition-colors duration-300">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-300 hover:text-lime-300 transition-colors duration-300">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Suscríbete para recibir nuestras novedades.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-2 bg-black/40 border border-lime-300/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-300/40 transition-colors duration-300"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-lime-300 text-black font-semibold rounded-lg hover:bg-lime-300/90 transition-colors duration-300"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-lime-300/10">
          <p className="text-center text-gray-400">
            © {currentYear} Lightball. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-300 hover:text-lime-300 transition-colors duration-300"
  >
    {children}
  </a>
);

export default Footer; 