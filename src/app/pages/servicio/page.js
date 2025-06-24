"use client";
import { useState } from 'react';

export default function Servicios() {
  const [activeTab, setActiveTab] = useState('consulta');

  const services = {
    consulta: {
      title: "Consultas Generales",
      description: (
        <>
          <p className="text-gray-700 leading-relaxed">
            Evaluación clínica completa realizada por nuestros veterinarios expertos. Detectamos
            enfermedades, realizamos chequeos preventivos y damos asesoría personalizada.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Ideal para mascotas de todas las edades. La salud comienza con una buena revisión.
          </p>
        </>
      ),
      image: "/images/consulta.png",
      altText: "Consulta general"
    },
    laboratorio: {
      title: "Servicios de Laboratorio",
      description: (
        <>
          <p className="text-gray-700 leading-relaxed">
            Contamos con laboratorio propio equipado para análisis clínicos: sangre, heces, orina, entre otros.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Diagnóstico preciso y rápido para garantizar tratamientos eficaces.
          </p>
        </>
      ),
      image: "/images/laboratorio.png",
      altText: "Análisis clínicos"
    },
    teleconsulta: {
      title: "Teleconsulta",
      description: (
        <>
          <p className="text-gray-700 leading-relaxed">
            Atención veterinaria desde casa a través de videollamadas. Ideal para seguimiento de tratamientos o dudas.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Cómodo, rápido y seguro para ti y tu mascota.
          </p>
        </>
      ),
      image: "/images/teleconsulta.png",
      altText: "Consulta remota"
    },
    domicilio: {
      title: "Consulta a Domicilio",
      description: (
        <>
          <p className="text-gray-700 leading-relaxed">
            Vamos hasta tu hogar para brindar atención personalizada. Perfecto para mascotas con movilidad limitada o dueños sin transporte.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Profesionalismo y calidez sin que salgas de casa.
          </p>
        </>
      ),
      image: "/images/domicilio.png",
      altText: "Consulta a domicilio"
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Cuidamos de tu mascota con atención integral, profesional y con amor. Elige el servicio que necesitas:
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {Object.keys(services).map(key => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 rounded-full font-medium uppercase tracking-wide transition-all duration-200 border ${
              activeTab === key
                ? 'bg-teal-500 text-white border-teal-500 shadow-md'
                : 'bg-white text-teal-600 border-teal-300 hover:bg-teal-100'
            }`}
          >
            {services[key].title}
          </button>
        ))}
      </div>

      {/* Contenido dinámico */}
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto">
        {/* Imagen */}
        <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-teal-400 shadow-inner">
          <img
            src={services[activeTab].image}
            alt={services[activeTab].altText}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Texto */}
        <div className="text-left flex-1">
          <h3 className="text-2xl font-semibold text-teal-700 mb-3">
            {services[activeTab].title}
          </h3>
          {services[activeTab].description}
        </div>
      </div>
    </section>
  );
}
