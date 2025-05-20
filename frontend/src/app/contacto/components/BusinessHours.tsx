"use client";

import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";

export default function BusinessHours() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--lime)]/20 via-[var(--lime)]/10 to-transparent rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-black/80 backdrop-blur-md rounded-xl p-6 border border-[var(--lime)]/20 hover:border-[var(--lime)]/40 transition-all duration-300">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-[var(--lime)]/10 rounded-lg">
            <FaClock className="w-5 h-5 text-[var(--lime)]" />
          </div>
          <h3 className="text-xl font-bold text-white">Horario de Atención</h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Lunes - Viernes</span>
            <span className="text-[var(--lime)] font-medium">9:00 - 18:00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Sábados</span>
            <span className="text-[var(--lime)] font-medium">10:00 - 14:00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Domingos</span>
            <span className="text-red-400 font-medium">Cerrado</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 