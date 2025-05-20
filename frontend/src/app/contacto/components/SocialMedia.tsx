"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--lime)]/20 via-[var(--lime)]/10 to-transparent rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-black/80 backdrop-blur-md rounded-xl p-6 border border-[var(--lime)]/20 hover:border-[var(--lime)]/40 transition-all duration-300">
        <h3 className="text-xl font-bold text-white mb-6">Síguenos</h3>
        <div className="grid grid-cols-2 gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 rounded-lg bg-[var(--lime)]/5 hover:bg-[var(--lime)]/10 transition-colors duration-200 group"
          >
            <FaLinkedin className="w-5 h-5 text-[var(--lime)] group-hover:scale-110 transition-transform duration-200" />
            <span className="text-gray-300 group-hover:text-white transition-colors duration-200">LinkedIn</span>
          </a>
          
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 rounded-lg bg-[var(--lime)]/5 hover:bg-[var(--lime)]/10 transition-colors duration-200 group"
          >
            <FaTwitter className="w-5 h-5 text-[var(--lime)] group-hover:scale-110 transition-transform duration-200" />
            <span className="text-gray-300 group-hover:text-white transition-colors duration-200">Twitter</span>
          </a>
          
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 rounded-lg bg-[var(--lime)]/5 hover:bg-[var(--lime)]/10 transition-colors duration-200 group"
          >
            <FaInstagram className="w-5 h-5 text-[var(--lime)] group-hover:scale-110 transition-transform duration-200" />
            <span className="text-gray-300 group-hover:text-white transition-colors duration-200">Instagram</span>
          </a>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 rounded-lg bg-[var(--lime)]/5 hover:bg-[var(--lime)]/10 transition-colors duration-200 group"
          >
            <FaGithub className="w-5 h-5 text-[var(--lime)] group-hover:scale-110 transition-transform duration-200" />
            <span className="text-gray-300 group-hover:text-white transition-colors duration-200">GitHub</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
} 