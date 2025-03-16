'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

interface Razon {
  title: string;
  description: string;
}

interface PorQueElegirnosProps {
  razones: Razon[];
}

export function PorQueElegirnos({ razones }: PorQueElegirnosProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          ¿Por qué Elegirnos?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {razones.map((razon, index) => (
            <AnimatedSection
              key={razon.title}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {razon.title}
              </h3>
              <p className="text-gray-600">
                {razon.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
} 