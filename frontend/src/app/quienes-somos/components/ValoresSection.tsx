'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

interface Valor {
  title: string;
  description: string;
}

interface ValoresSectionProps {
  valores: Valor[];
}

export function ValoresSection({ valores }: ValoresSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Nuestros Valores
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {valores.map((valor, index) => (
            <AnimatedSection
              key={valor.title}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {valor.title}
              </h3>
              <p className="text-gray-600">
                {valor.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
} 