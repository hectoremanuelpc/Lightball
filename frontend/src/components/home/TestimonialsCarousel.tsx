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
    containScroll: 'trimSnaps',
    slidesToScroll: 1
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index);
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
    
    // Autoplay - más lento para mejor UX
    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, 10000);

    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(autoplayInterval);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-b from-black to-davys-gray/20">
      {/* Elementos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 px-2 sm:px-4 md:px-6"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="group relative bg-black/60 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl border border-lime-300/20 hover:border-lime-300/40 h-full max-w-4xl mx-auto"
                    style={{
                      willChange: 'transform, opacity',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'translate3d(0, 0, 0)',
                      WebkitTransform: 'translate3d(0, 0, 0)',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      isolation: 'isolate'
                    }}
                  >
                    <div className="relative mb-6">
                      <div className="absolute -top-2 -left-2 w-24 h-24 bg-lime-300/5 rounded-full blur-xl group-hover:bg-lime-300/10 transition-all duration-500" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-lime-300/20 to-lime-300/5 rounded-2xl flex items-center justify-center">
                        <FaQuoteRight className="w-8 h-8 text-lime-300" />
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed text-base sm:text-lg">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-lime-300/10 flex items-center justify-center text-lime-300 flex-shrink-0">
                        <span className="text-sm sm:text-base font-semibold">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-white font-semibold text-sm sm:text-base truncate">{testimonial.author}</h4>
                        <p className="text-gray-400 text-xs sm:text-sm truncate">{testimonial.position}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>



          {/* Indicadores de puntos - Solo desktop */}
          <div className="hidden md:flex justify-center gap-4 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'bg-lime-300 w-8'
                    : 'bg-lime-300/20 hover:bg-lime-300/40'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Flechas laterales - Solo desktop, completamente fuera */}
        <div className="hidden md:block">
          <button
            onClick={handlePrev}
            className="absolute left-4 lg:left-8 xl:left-16 top-1/2 -translate-y-1/2 rounded-full bg-black/80 p-4 shadow-lg border border-lime-300/20 hover:border-lime-300/40 transition-colors duration-300 z-20"
            aria-label="Testimonio anterior"
            style={{
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              cursor: 'pointer'
            }}
          >
            <FaChevronLeft className="w-6 h-6 text-lime-300" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 lg:right-8 xl:right-16 top-1/2 -translate-y-1/2 rounded-full bg-black/80 p-4 shadow-lg border border-lime-300/20 hover:border-lime-300/40 transition-colors duration-300 z-20"
            aria-label="Siguiente testimonio"
            style={{
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              cursor: 'pointer'
            }}
          >
            <FaChevronRight className="w-6 h-6 text-lime-300" />
          </button>

          {/* Flechas abajo - Solo mobile */}
          <div className="md:hidden flex justify-center gap-6 mt-6">
            <button
              onClick={handlePrev}
              className="rounded-full bg-black/80 p-3 shadow-lg border border-lime-300/20 hover:border-lime-300/40 transition-colors duration-300"
              aria-label="Testimonio anterior"
              style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <FaChevronLeft className="w-4 h-4 text-lime-300" />
            </button>

            <button
              onClick={handleNext}
              className="rounded-full bg-black/80 p-3 shadow-lg border border-lime-300/20 hover:border-lime-300/40 transition-colors duration-300"
              aria-label="Siguiente testimonio"
              style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
            >
              <FaChevronRight className="w-4 h-4 text-lime-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 