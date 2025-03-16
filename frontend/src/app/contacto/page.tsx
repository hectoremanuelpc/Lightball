import { Metadata } from 'next';
import ContactForm from './ContactForm';
import QuickResponse from './components/QuickResponse';
import ContactInfo from './components/ContactInfo';
import BusinessHours from './components/BusinessHours';
import SocialMedia from './components/SocialMedia';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto con nosotros para discutir cómo podemos ayudarte con tus proyectos tecnológicos.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacta con nosotros</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Formulario de contacto */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <ContactForm />
            </div>
            
            {/* Información adicional */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <QuickResponse />
              <ContactInfo />
              <BusinessHours />
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 