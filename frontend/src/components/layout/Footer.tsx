import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Logo y descripción */}
          <div className="space-y-4 md:col-span-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center text-white font-bold shadow-md text-lg">
                L
              </div>
              <h3 className="text-xl font-bold text-primary">
                Lightball
              </h3>
            </div>
            <p className="text-muted-foreground max-w-xs">
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

          {/* Espacio vacío */}
          <div className="hidden md:block md:col-span-4" />

          {/* Enlaces de Empresa */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-2">
              <FooterLink href="/quienes-somos">Quiénes Somos</FooterLink>
              <FooterLink href="/casos-de-exito">Casos de Éxito</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/contacto">Contacto</FooterLink>
            </ul>
          </div>

          {/* Enlaces Legales */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <FooterLink href="/privacidad">Política de Privacidad</FooterLink>
              <FooterLink href="/cookies">Política de Cookies</FooterLink>
              <FooterLink href="/terminos">Términos y Condiciones</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Lightball. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Diseñado y desarrollado con ❤️ en España
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-muted-foreground hover:text-foreground transition-colors">
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-muted-foreground hover:text-foreground transition-colors"
  >
    {children}
  </a>
);

export default Footer; 