'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaRegSadTear, FaRegCommentDots, FaRegClock } from 'react-icons/fa';

const items = [
  {
    icon: <FaRegSadTear size={30} />,
    text: 'Te trabás al hablar frente a otros, aunque sabés lo que querés decir.',
    color: '#cf7806',
  },
  {
    icon: <FaRegCommentDots size={30} />,
    text: 'Tu mensaje no impacta y no sabés cómo hacerlo sonar convincente.',
    color: '#cf7806',
  },
  {
    icon: <FaRegClock size={30}  />,
    text: 'Los nervios te bloquean y después te reprochás lo que podrías haber dicho mejor.',
    color: '#cf7806',
  },
];

export default function Dolor() {
  return (
    <section className="bg-slate-100 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0A2647] mb-16">
          ¿Te pasa esto?
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="w-14 h-14 flex items-center justify-center rounded-full mb-4"
                style={{ backgroundColor: item.color, color: 'white' }}
              >
                {item.icon}
              </div>
              <p className="text-gray-700 font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
