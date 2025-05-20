import { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import ValoresSection from './components/ValoresSection';
import PorQueElegirnos from './components/PorQueElegirnos';
import { misionVision, valores, razones, heroContent } from '@/data/quienes-somos/quienes-somos';

export const metadata: Metadata = {
  title: 'Quiénes Somos',
  description: heroContent.description,
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-davys-gray/20 overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative z-10">
        <HeroSection content={heroContent} />
        <ValoresSection valores={valores} />
        <PorQueElegirnos razones={razones} />
      </div>
    </div>
  );
} 