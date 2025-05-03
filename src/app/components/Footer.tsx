'use client'

import React from 'react'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#0A2647] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 border-b border-white/10 pb-10 text-center md:text-left">

        {/* Columna 1: Marca + contacto */}
        <div className="flex flex-col items-center md:items-start max-w-sm">
          <h3 className="text-2xl font-bold text-[#cf7806] mb-4">Oratoria Profesional</h3>
          <p className="text-sm text-gray-300 mb-4">
            Transformá tu comunicación, ganá confianza y hacé que tu mensaje conecte.
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Phone size={16} />
            <span>+54 11 1234 5678</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
            <Mail size={16} />
            <span>contacto@oratoriaprofesional.com</span>
          </div>
        </div>

        {/* Columna 2: Navegación */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-4 text-[#cf7806]">Navegación</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#hero" className="hover:text-white transition">Inicio</a></li>
            <li><a href="#sobre-mi" className="hover:text-white transition">Sobre mí</a></li>
            <li><a href="#beneficios" className="hover:text-white transition">Beneficios</a></li>
            <li><a href="#testimonios" className="hover:text-white transition">Testimonios</a></li>
            <li><a href="#reserva" className="hover:text-white transition">Reserva tu sesión</a></li>
          </ul>
        </div>

        {/* Columna 3: Redes */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-4 text-[#cf7806]">Seguime en redes</h4>
          <div className="flex gap-5">
            
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <FaInstagram size={22} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="text-center mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Oratoria Profesional. Todos los derechos reservados.
      </div>
    </footer>
  )
}
