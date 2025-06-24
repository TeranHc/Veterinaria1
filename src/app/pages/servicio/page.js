"use client";
import { useState } from 'react';

export default function Servicios() {
  const [activeService, setActiveService] = useState('consulta');

  const services = {
    consulta: {
      title: "Consultas Veterinarias",
      description: (
        <>
          <p className="text-gray-800 leading-relaxed">
            Ofrecemos consultas médicas generales para tu mascota con un enfoque preventivo y diagnóstico,
            atendidas por profesionales altamente capacitados.
          </p>
          <p className="text-gray-800 leading-relaxed mt-2">
            Realizamos chequeos regulares, exámenes clínicos y seguimiento de enfermedades.
          </p>
        </>
      ),
      image: "/",
      altText: "Consulta veterinaria"
    },
    vacunacion: {
      title: "Vacunación y Desparasitación",
      description: (
        <>
          <p className="text-gray-800 leading-relaxed">
            Protege a tu mascota con nuestro esquema completo de vacunación y desparasitación interna y externa.
          </p>
          <p className="text-gray-800 leading-relaxed mt-2">
            Aplicamos vacunas según la edad y especie, garantizando la salud de tu compañero.
          </p>
        </>
      ),
      image: "/",
      altText: "Vacunación de mascota"
    },
    cirugia: {
      title: "Cirugías",
      description: (
        <>
          <p className="text-gray-800 leading-relaxed">
            Contamos con un quirófano totalmente equipado para realizar cirugías de rutina y de emergencia.
          </p>
          <p className="text-gray-800 leading-relaxed mt-2">
            Brindamos cuidado pre y post operatorio con monitoreo constante para una recuperación segura.
          </p>
        </>
      ),
      image: "/",
      altText: "Equipo realizando cirugía"
    }
  };

  return (
    <section className="text-center py-12 px-6">
      {/* Encabezado */}
      <div className="flex items-center justify-center mb-4">
        <div className="h-px bg-gray-600 w-16"></div>
        <span className="mx-4 text-gray-700 text-lg font-medium">Nuestros Servicios</span>
        <div className="h-px bg-gray-600 w-16"></div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        ¿QUÉ OFRECEMOS?
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
        Brindamos una gama completa de servicios veterinarios para mantener la salud y felicidad de tus mascotas.
      </p>

      {/* Botones de servicios */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {Object.keys(services).map(key => (
          <button
            key={key}
            onClick={() => setActiveService(key)}
            className={`px-6 py-3 rounded-md font-semibold uppercase tracking-wide transition-colors ${
              activeService === key
                ? 'bg-teal-400 text-gray-800'
                : 'bg-teal-300 text-gray-700 hover:bg-teal-350'
            }`}
          >
            {services[key].title}
          </button>
        ))}
      </div>

      {/* Contenido del servicio activo */}
      <div className="bg-cyan-200 rounded-lg p-8 flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto">
        {/* Imagen */}
        <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-300">
          <img
            src={services[activeService].image}
            alt={services[activeService].altText}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{services[activeService].title}</h2>
          {services[activeService].description}
        </div>
      </div>
    </section>
  );
}
