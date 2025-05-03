'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-no-repeat bg-cover bg-right sm:bg-[center_right]"
      style={{
        backgroundImage: "url('/fondoHome.jpg')",
        backgroundPosition: '75% center', // más ajustado hacia la derecha
      }}
    >
      {/* Overlay uniforme desde izquierda (negro) a derecha (transparente) en todos los tamaños */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

      {/* Contenido */}
      <div className="relative z-10 flex items-center justify-start min-h-screen px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-3xl text-center sm:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            <span className="text-[#cf7806] block">
              Convertí tu voz en una herramienta
            </span>
            que te abra puertas
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-gray-200 font-medium mt-5"
          >
            Entrenamiento personalizado en oratoria y comunicación efectiva.
          </motion.p>

          <motion.a
            href="#reserva"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-block mt-8 bg-[#cf7806] hover:bg-[#b96c18] text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 text-sm sm:text-base"
          >
            Reservá tu primera sesión gratis
          </motion.a>
        </div>
      </div>
    </section>
  );
}
