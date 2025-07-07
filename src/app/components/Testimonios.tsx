"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonios = [
  {
    nombre: "María Fernández",
    texto:
      "Antes me paralizaba al hablar en publico, gracias a Martin me desenvuelvo mejor a la hora de hablar.",
    profesion: "Emprendedora",
  },
  {
    nombre: "Lucas Martínez",
    texto:
      "Con el entrenamiento de Martin pude presentarme a entrevistas con mayor confianza.",
    profesion: "Diseñador UX",
  },
  {
    nombre: "Sofía Ramírez",
    texto:
      "Era escéptica, pero después de la primera sesión sentí un cambio notable en mi confianza al hablar en publico.",
    profesion: "Abogada",
  },
  {
    nombre: "Carlos Ruiz",
    texto: "Martin me ayudo a desarrollar una voz más segura.",
    profesion: "Estudiante de Derecho",
  },
  {
    nombre: "Ana Torres",
    texto:
      "Noté mejoras desde la segunda clase, la forma de explicar de Martin es muy clara",
    profesion: "Psicóloga",
  },
  {
    nombre: "Tomás Delgado",
    texto:
      "El cambio ha sido increíble. Ya no tiemblo al presentar frente a mucha gente.",
    profesion: "Arquitecto",
  },
  {
    nombre: "Lucía Méndez",
    texto:
      "Pude dar mi primera charla en una conferencia gracias a este entrenamiento.",
    profesion: "Coach de vida",
  },
  {
    nombre: "Julián Pérez",
    texto: "Me ayudaron a soltar la voz y encontrar un estilo propio.",
    profesion: "Actor",
  },
  {
    nombre: "Verónica Díaz",
    texto:
      "Gracias a este entrenamiento pude enfrentar mis miedos al hablar en publico.",
    profesion: "Gerente de marketing",
  },
  {
    nombre: "Martín López",
    texto: "Este entrenamiento fue clave para mi crecimiento profesional.",
    profesion: "Contador público",
  },
];

export default function Testimonios() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-black  border-spacing-3.5 py-20 px-6">
      <div className="max-w-7xl px-10 mx-auto text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-12"
        >
          Lo que dicen quienes ya entrenaron su voz
        </motion.h2>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            // Esto asegura que Swiper reconozca los botones personalizados después de montar el DOM
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
        >
          {testimonios.map((testimonio, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white hover:cursor-pointer shadow-xl rounded-2xl p-6 text-left border-l-4 border-[#cf7806] h-full flex flex-col justify-between min-h-[280px]"
              >
                <FaQuoteLeft className="text-[#cf7806] text-3xl mb-4" />
                <p className="text-gray-700 text-sm sm:text-base mb-4">
                  {testimonio.texto}
                </p>
                <div>
                  <p className="font-semibold text-[#0A2647]">
                    {testimonio.nombre}
                  </p>
                  <p className="text-[#cf7806] text-sm">
                    {testimonio.profesion}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
