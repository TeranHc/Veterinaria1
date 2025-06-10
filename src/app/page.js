"use client";

import { useState } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "María Rodríguez",
      text: "Excelente atención para mi perrito Max. El equipo es muy profesional y cariñoso.",
      pet: "Max - Golden Retriever"
    },
    {
      name: "Carlos López",
      text: "Salvaron la vida de mi gata Luna. Eternamente agradecido con todo el equipo.",
      pet: "Luna - Gata Persa"
    },
    {
      name: "Ana García",
      text: "La mejor clínica veterinaria de la ciudad. Siempre cuidan muy bien a mis mascotas.",
      pet: "Rocky y Bella - Pastor Alemán"
    }
  ];

  const nextTestimonial = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-300 to-cyan-200 py-20 px-6 overflow-hidden">
        {/* Decoraciones de cruces */}
        <div className="absolute top-10 left-10 text-teal-600 text-3xl opacity-60">+</div>
        <div className="absolute top-32 left-20 text-teal-700 text-2xl opacity-40">+</div>
        <div className="absolute top-16 right-16 text-teal-600 text-4xl opacity-50">+</div>
        <div className="absolute bottom-20 right-32 text-teal-700 text-2xl opacity-60">+</div>
        <div className="absolute bottom-32 left-32 text-teal-600 text-3xl opacity-40">+</div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Contenido principal */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              CUIDAMOS A TUS
              <span className="block text-teal-700">MEJORES AMIGOS</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl">
              Con más de 4 años de experiencia, somos la clínica veterinaria de confianza 
              que brinda atención integral y profesional para el bienestar de tu mascota.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-teal-600 text-white px-8 py-4 font-semibold uppercase tracking-wide hover:bg-teal-700 transition-colors">
                AGENDAR CITA
              </button>
              <button className="bg-transparent border-2 border-gray-800 text-gray-800 px-8 py-4 font-semibold uppercase tracking-wide hover:bg-gray-800 hover:text-white transition-colors">
                EMERGENCIAS 24/7
              </button>
            </div>
          </div>

          {/* Imagen principal */}
          <div className="flex-1 relative">
            <div className="relative">
              <div className="w-80 h-96 mx-auto bg-gray-300 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/images/hero-vet.jpg" 
                  alt="Veterinario con mascota"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Elemento decorativo flotante */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl text-teal-600">🐾</div>
                <p className="text-sm font-semibold text-gray-800">+500 mascotas atendidas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Título de sección */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gray-600 w-16"></div>
              <span className="mx-4 text-gray-700 text-lg font-medium">Nuestros Servicios</span>
              <div className="h-px bg-gray-600 w-16"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              ATENCIÓN INTEGRAL
            </h2>
          </div>

          {/* Grid de servicios */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="text-center group">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                <span className="text-3xl text-teal-600">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
                CONSULTAS GENERALES
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Revisiones preventivas, diagnósticos y tratamientos para mantener 
                la salud óptima de tu mascota.
              </p>
            </div>

            {/* Servicio 2 */}
            <div className="text-center group">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                <span className="text-3xl text-teal-600">⚕️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
                CIRUGÍAS
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Procedimientos quirúrgicos con tecnología de vanguardia y 
                los más altos estándares de seguridad.
              </p>
            </div>

            {/* Servicio 3 */}
            <div className="text-center group">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                <span className="text-3xl text-teal-600">🚨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
                EMERGENCIAS
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Atención de urgencias las 24 horas para cuando tu mascota 
                más lo necesite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 px-6 bg-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Imagen */}
            <div className="flex-1">
              <div className="relative">
                <div className="w-full h-80 bg-gray-300 rounded-lg overflow-hidden">
                  <img 
                    src="/images/why-choose-us.jpg" 
                    alt="Equipo veterinario trabajando"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decoraciones */}
                <div className="absolute -top-3 -left-3 text-teal-600 text-2xl">+</div>
                <div className="absolute -bottom-3 -right-3 text-teal-600 text-3xl">+</div>
              </div>
            </div>

            {/* Contenido */}
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 uppercase tracking-wide">
                ¿POR QUÉ ELEGIRNOS?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">EXPERIENCIA COMPROBADA</h3>
                    <p className="text-gray-600">Más de 4 años cuidando la salud y bienestar de las mascotas de nuestra comunidad.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">EQUIPO PROFESIONAL</h3>
                    <p className="text-gray-600">Veterinarios altamente capacitados y apasionados por el cuidado animal.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">TECNOLOGÍA AVANZADA</h3>
                    <p className="text-gray-600">Equipos modernos y técnicas actualizadas para los mejores resultados.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">ATENCIÓN PERSONALIZADA</h3>
                    <p className="text-gray-600">Cada mascota recibe cuidado individualizado y un trato lleno de amor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gray-600 w-16"></div>
              <span className="mx-4 text-gray-700 text-lg font-medium">Testimonios</span>
              <div className="h-px bg-gray-600 w-16"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 uppercase tracking-wide">
              LO QUE DICEN NUESTROS CLIENTES
            </h2>
          </div>

          {/* Carrusel de testimonios */}
          <div className="relative bg-cyan-200 p-8 rounded-lg">
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl text-teal-600 mb-4">"</div>
              <p className="text-lg text-gray-800 leading-relaxed mb-6 italic">
                {testimonials[currentSlide].text}
              </p>
              <div>
                <h4 className="font-bold text-gray-800 text-lg">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-teal-600 font-medium">
                  {testimonials[currentSlide].pet}
                </p>
              </div>
            </div>

            {/* Controles del carrusel */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-teal-600 w-10 h-10 rounded-full flex items-center justify-center font-bold hover:bg-teal-50 transition-colors"
            >
              ‹
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-teal-600 w-10 h-10 rounded-full flex items-center justify-center font-bold hover:bg-teal-50 transition-colors"
            >
              ›
            </button>

            {/* Indicadores */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-teal-600' : 'bg-teal-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wide">
            ¿LISTO PARA CUIDAR A TU MASCOTA?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Agenda una cita hoy mismo y brinda a tu mejor amigo el cuidado que se merece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-4 font-semibold uppercase tracking-wide hover:bg-gray-100 transition-colors">
              AGENDAR CITA AHORA
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 font-semibold uppercase tracking-wide hover:bg-white hover:text-teal-600 transition-colors">
              LLAMAR AHORA
            </button>
          </div>
        </div>
      </section>


    </div>
  );
}