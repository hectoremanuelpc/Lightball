'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import routes from '@/lib/routes';
import { FaBars, FaTimes } from 'react-icons/fa';

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center text-white font-bold shadow-md text-lg">
                L
              </div>
              <span className="text-2xl font-bold text-primary">
                Lightball
              </span>
            </motion.div>
          </Link>

          {/* Navegación de escritorio */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </nav>

          {/* Botón de menú móvil */}
          <button
            className="md:hidden flex items-center z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? (
              <FaTimes className="w-6 h-6 text-foreground" />
            ) : (
              <FaBars className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Menú móvil */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />
              
              {/* Panel del menú */}
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-lg z-40 md:hidden"
              >
                <div className="p-6">
                  <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
                  <nav className="flex flex-col space-y-4">
                    <NavLinks mobile onClick={() => setMobileMenuOpen(false)} />
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

const NavLinks = ({ mobile = false, onClick }: { mobile?: boolean; onClick?: () => void }) => {
  // Filtramos las rutas que queremos mostrar en el menú
  const navRoutes = routes.filter(route => 
    route.path === '/' || 
    route.path === '/servicios' || 
    route.path === '/quienes-somos' || 
    route.path === '/blog' || 
    route.path === '/contacto'
  );

  return (
    <>
      {navRoutes.map((route, index) => (
        <Link
          key={route.path}
          href={route.path}
          className={`font-medium transition-colors ${
            mobile 
              ? 'text-foreground text-lg hover:text-primary' 
              : 'text-foreground hover:text-primary font-semibold'
          }`}
          onClick={onClick}
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {route.label}
          </motion.span>
        </Link>
      ))}
    </>
  );
};

export default Header; 