'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBullhorn, FaHandshake, FaVideo } from 'react-icons/fa';

export default function Beneficios() {
  const beneficios = [
    {
      icon: <FaBullhorn className="text-4xl text-[#F77F00]" />,
      titulo: 'Más claridad al comunicar',
      descripcion: 'Hablá con orden y seguridad. Tu mensaje va a llegar claro y sin vueltas.',
    },
    {
      icon: <FaHandshake className="text-4xl text-[#F77F00]" />,
      titulo: 'Más ventas y oportunidades',
      descripcion: 'Aprendé a vender ideas, productos o servicios con confianza y convicción.',
    },
    {
      icon: <FaVideo className="text-4xl text-[#F77F00]" />,
      titulo: 'Más presencia en redes',
      descripcion: 'Generá contenido que conecte, sin miedo a hablar frente a cámara o en vivo.',
    },
  ];

  return (
    <section className="bg-[#0A2647] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-12"
        >
          Tengo la solución a tus problemas
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {beneficios.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0A2647] border border-[#F77F00] rounded-lg p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.titulo}</h3>
              <p className="text-gray-200">{item.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
