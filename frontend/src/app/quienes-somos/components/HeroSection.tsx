'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

interface HeroContent {
  title: string;
  description: string;
}

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedSection
        initial={{ opacity: 0, y: 20 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {content.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {content.description}
        </p>
      </AnimatedSection>
    </section>
  );
} 