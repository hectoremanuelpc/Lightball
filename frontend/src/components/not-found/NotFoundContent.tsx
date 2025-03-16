'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { navigationLinks, content } from '@/data/not-found';

export function NotFoundContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex items-center justify-center py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-blue-600 mb-4">
              {content.title}
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              {content.heading}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.description}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              {content.helpText}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                {content.buttons.home}
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-transparent hover:bg-blue-50 transition-colors duration-300"
              >
                {content.buttons.contact}
              </Link>
            </div>
          </div>

          <AnimatedSection
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {navigationLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </main>
  );
} 