import { Metadata } from 'next';
import ContactForm from './ContactForm';
import QuickResponse from './components/QuickResponse';
import ContactInfo from './components/ContactInfo';
import BusinessHours from './components/BusinessHours';
import SocialMedia from './components/SocialMedia';
import './styles.css';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto con nosotros para discutir cómo podemos ayudarte con tus proyectos tecnológicos.',
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Elementos de fondo decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--lime)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[var(--lime)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[var(--lime)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        
        {/* Líneas decorativas */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--lime)]/20 to-transparent" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--lime)]/20 to-transparent" />
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient- to-b from-transparent via-[var(--lime)]/20 to-transparent" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[var(--lime)]/20 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Encabezado con efecto de gradiente */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-[var(--lime)] text-sm font-medium tracking-wider uppercase">Contacto</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold pb-3 mb-8 bg-gradient-to-r from-[var(--lime)] via-white to-[var(--lime)] bg-clip-text text-transparent">
              Hablemos de tu proyecto
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte a hacer realidad tus ideas. Cuéntanos sobre tu proyecto y te responderemos lo antes posible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Formulario de contacto */}
            <div className="lg:col-span-8">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--lime)]/20 via-[var(--lime)]/10 to-transparent rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-black/80 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-[var(--lime)]/20 hover:border-[var(--lime)]/40 transition-all duration-300">
                  <ContactForm />
                </div>
              </div>
            </div>
            
            {/* Información adicional */}
            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-8">
                <QuickResponse />
                <div className="mt-8 space-y-8">
                  <ContactInfo />
                  <BusinessHours />
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>

          {/* Elementos decorativos flotantes */}
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-[var(--lime)]/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-20 left-10 w-24 h-24 bg-[var(--lime)]/10 rounded-full blur-2xl animate-float-delayed"></div>
        </div>
      </div>
    </main>
  );
} 