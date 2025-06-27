"use client";
import { useState } from "react";

export default function Servicios() {
  const [activeTab, setActiveTab] = useState("consulta");

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
      image: "/images/consulta.jpg",
      altText: "Consulta general",
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
      altText: "Análisis clínicos",
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
      altText: "Consulta remota",
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
      altText: "Consulta a domicilio",
    },
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Cuidamos de tu mascota con atención integral, profesional y con amor. Elige el servicio que necesitas:
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {Object.keys(services).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 rounded-full font-medium uppercase tracking-wide transition-all duration-200 border ${
              activeTab === key
                ? "bg-teal-500 text-white border-teal-500 shadow-md"
                : "bg-white text-teal-600 border-teal-300 hover:bg-teal-100"
            }`}
          >
            {services[key].title}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto">
        <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-teal-400 shadow-inner">
          <img
            src={services[activeTab].image}
            alt={services[activeTab].altText}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="text-left flex-1">
          <h3 className="text-2xl font-semibold text-teal-700 mb-3">
            {services[activeTab].title}
          </h3>
          {services[activeTab].description}
        </div>
      </div>

      {/* Beneficios */}
      <div className="mt-20 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-8">¿Por qué elegirnos?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Atención 24/7", "Veterinarios certificados", "Equipamiento moderno", "Servicio a domicilio", "Seguimiento post consulta", "Planes de salud para mascotas"].map((benefit, i) => (
            <div key={i} className="bg-white shadow-md p-6 rounded-xl text-teal-700 font-medium">
              {benefit}
            </div>
          ))}
        </div>
      </div>

      {/* Planes */}
      <div className="mt-20 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-8">Planes de Atención</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              nombre: "Básico",
              precio: "$25/mes",
              incluye: ["Consulta anual", "Vacunas"]
            },
            {
              nombre: "Completo",
              precio: "$45/mes",
              incluye: ["Consultas ilimitadas", "Desparasitación", "Vacunas"]
            },
            {
              nombre: "Premium",
              precio: "$75/mes",
              incluye: ["Todo lo anterior", "Cirugías menores", "Laboratorio"]
            }
          ].map((plan, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 border-t-4 border-teal-500">
              <h4 className="text-xl font-bold text-teal-700 mb-2">{plan.nombre}</h4>
              <p className="text-2xl font-semibold text-gray-800 mb-4">{plan.precio}</p>
              <ul className="text-gray-600 space-y-1">
                {plan.incluye.map((item, idx) => (
                  <li key={idx}>- {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-20 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Preguntas Frecuentes</h3>
        <div className="space-y-4">
          {[{
            pregunta: "¿Atienden emergencias?",
            respuesta: "Sí, contamos con servicio de emergencias 24/7."
          }, {
            pregunta: "¿Puedo agendar una cita por WhatsApp?",
            respuesta: "Claro, también tenemos atención por WhatsApp."
          }, {
            pregunta: "¿Atienden animales exóticos?",
            respuesta: "Dependiendo del tipo, sí. Consulta disponibilidad con nuestro equipo."
          }].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-md">
              <p className="font-semibold text-teal-700">{item.pregunta}</p>
              <p className="text-gray-600 mt-1">{item.respuesta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
