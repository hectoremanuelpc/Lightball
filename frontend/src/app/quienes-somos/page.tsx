import { Metadata } from 'next';
import { HeroSection } from './components/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { PorQueElegirnos } from './components/PorQueElegirnos';
import { ValoresSection } from './components/ValoresSection';
import { misionVision, valores, razones, heroContent } from '@/data/quienes-somos/quienes-somos';

export const metadata: Metadata = {
  title: 'Quiénes Somos',
  description: heroContent.description,
};

export default function QuienesSomos() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-24">
      <HeroSection content={heroContent} />

      {/* Misión y Visión */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {misionVision.map((item, index) => (
              <AnimatedSection
                key={item.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                className="bg-blue-50 p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ValoresSection valores={valores} />
      
      <PorQueElegirnos razones={razones} />
    </main>
  );
} 