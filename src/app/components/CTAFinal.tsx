'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function CTAFinal() {
  const beneficios = [
    'Evaluación personalizada de tu comunicación',
    'Ejercicios prácticos en vivo',
    'Tips para superar el miedo escénico',
    'Plan de acción adaptado a tu objetivo',
  ]

  return (
    <section className="relative bg-[#0a0a0a] text-white py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] opacity-90 w-full h-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center"
        >
          <Image
            width={600}
            height={400}
            src="/ctaFinal.png"
            alt="Sesión gratuita"
            className="rounded-xl w-full max-w-md md:max-w-full object-cover max-h-[500px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start text-center md:text-left justify-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Tu primera sesión es <span className="text-[#cf7806]">100% gratuita</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-xl">
            Descubrí cómo mejorar tu comunicación con un encuentro 1 a 1 gratis. Esto es lo que incluye:
          </p>

          <ul className="space-y-3 mb-8 max-w-xl">
            {beneficios.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-200">
                <CheckCircle className="text-[#cf7806] w-5 h-5 mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#reserva"
            className="inline-block bg-[#cf7806] hover:bg-[#b96c18] text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 text-base sm:text-lg"
          >
            Reservá tu sesión gratis
          </a>
        </motion.div>
      </div>
    </section>
  )
}
