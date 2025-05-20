'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import routes from '@/lib/routes';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '@/components/ui/Logo';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Prevenir el scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo />

            {/* Navegación Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className="text-gray-300 hover:text-lime-300 transition-colors duration-300 relative group"
                >
                  {route.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-300 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Botón Menú Móvil (solo para abrir) */}
            {!mobileMenuOpen && (
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden w-10 h-10 flex items-center justify-center text-gray-300 hover:text-lime-300"
                aria-label="Abrir menú"
              >
                <FaBars className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Menú Móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[1000] md:hidden"
          >
            <div className="absolute inset-0 bg-black" />
            <div className="relative h-full z-10">
              {/* Botón Cerrar dentro del menú */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute right-4 top-5 w-12 h-12 flex items-center justify-center rounded-full text-white hover:bg-lime-300 transition-all duration-300"
                aria-label="Cerrar menú"
              >
                <FaTimes className="w-6 h-6" />
              </button>

              <div className="container mx-auto px-4 py-24">
                <nav className="flex flex-col gap-8">
                  {routes.map((route, index) => (
                    <motion.div
                      key={route.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <Link
                        href={route.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-2xl text-gray-300 hover:text-lime-300 transition-colors duration-300 flex items-center gap-2"
                      >
                        {route.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header; 