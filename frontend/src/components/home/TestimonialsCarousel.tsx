'use client';

import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import type { Testimonial } from '@/data/home/testimonials';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps'
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => {
    emblaApi && emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const handlePrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', onSelect);
    
    // Autoplay
    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(autoplayInterval);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] first:pl-0"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-between min-h-[350px] text-center p-8 rounded-xl mx-4 bg-slate-50 shadow-sm"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-6">
                    <FaQuoteRight className="w-12 h-12 opacity-50" />
                  </div>

                  <blockquote className="mb-3 text-lg md:text-xl max-w-2xl mx-auto">
                    {testimonial.quote}
                  </blockquote>
                </div>

                <div className="flex items-center">
                  <div className="ml-4 text-center">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white p-3 shadow-md hover:bg-slate-50 cursor-pointer"
        aria-label="Testimonio anterior"
      >
        <FaChevronLeft className="w-5 h-5 text-primary" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white p-3 shadow-md hover:bg-slate-50 cursor-pointer"
        aria-label="Siguiente testimonio"
      >
        <FaChevronRight className="w-5 h-5 text-primary" />
      </button>
    </div>
  );
} 