'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SobreMi() {
  return (
    <section className="bg-white py-24 px-6 sm:px-12 lg:px-24">
      {/* Parte superior: imagen a la izquierda, texto a la derecha */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        {/* Imagen 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/sobreMi1.jpg"
            alt="Foto de perfil del orador"
            className="w-full h-auto rounded-2xl shadow-gray-500 shadow-lg object-cover"
          />
        </motion.div>

        {/* Texto 1 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2647] mb-6">
            Sobre mí
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            Soy Martin Ríos, experto en oratoria con más de <span className="text-[#cf7806] font-semibold">10 años de experiencia</span> entrenando a personas para hablar en público con seguridad, claridad y autenticidad.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            He trabajado con emprendedores, profesionales, docentes y ejecutivos que necesitaban fortalecer su comunicación, ya sea en entrevistas, conferencias o reuniones clave.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Mi enfoque es personalizado y práctico. Me importa que cada persona descubra su voz y la utilice como una herramienta que realmente <span className="text-[#cf7806] font-semibold">le abra puertas</span>.
          </p>
        </motion.div>
      </div>

      <div className="flex lg:px-30 justify-center mb-24">
        <div className="w-full h-px bg-gray-800" />
      </div>

      {/* Parte inferior: texto a la izquierda, imagen a la derecha */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center ">
        {/* Texto 2 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#0A2647] mb-4">
            Resultados reales
          </h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            Mis clientes no solo logran hablar con más seguridad, sino que también:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-2">
            <li>Consiguen trabajos o ascensos gracias a sus presentaciones.</li>
            <li>Generan mayor conexión con su audiencia o clientes.</li>
            <li>Aprenden a dominar los nervios y expresarse con claridad.</li>
          </ul>
        </motion.div>

        {/* Imagen 2 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/sobreMi2.jpg"
            alt="Orador en acción"
            className="w-full h-auto rounded-2xl shadow-gray-500 shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
