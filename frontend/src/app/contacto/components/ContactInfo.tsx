"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
      className="relative group"
      style={{
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--lime)]/20 via-[var(--lime)]/10 to-transparent rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-black/90 rounded-xl p-6 border border-[var(--lime)]/20 hover:border-[var(--lime)]/40 transition-colors duration-300">
        <h3 className="text-xl font-bold text-white mb-6">Información de Contacto</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-[var(--lime)]/10 rounded-lg mt-1">
              <FaEnvelope className="w-5 h-5 text-[var(--lime)]" />
            </div>
            <div>
              <p className="text-gray-300 font-medium">Email</p>
              <a href="mailto:info@lightball.es" className="text-[var(--lime)] hover:text-[var(--lime)]/80 transition-colors duration-200">
                info@lightball.es
              </a>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-[var(--lime)]/10 rounded-lg mt-1">
              <FaPhone className="w-5 h-5 text-[var(--lime)]" />
            </div>
            <div>
              <p className="text-gray-300 font-medium">Teléfono</p>
              <a href="tel:+34000000000" className="text-[var(--lime)] hover:text-[var(--lime)]/80 transition-colors duration-200">
                +34 000 000 000
              </a>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-[var(--lime)]/10 rounded-lg mt-1">
              <FaMapMarkerAlt className="w-5 h-5 text-[var(--lime)]" />
            </div>
            <div>
              <p className="text-gray-300 font-medium">Ubicación</p>
              <p className="text-gray-400">
                Madrid, España
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 