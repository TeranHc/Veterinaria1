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
      image: "/images/laboratorio.jpg",
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
      image: "/images/Teleconsulta.jpg",
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
      image: "/images/domicilio.jpg",
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
            className="w-full h-full object-cover"
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
        <h3 className="text-3xl font-bold text-gray-800 mb-4">¿Por qué elegirnos?</h3>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Nos comprometemos con la salud y bienestar de tu mascota, ofreciendo servicios de calidad con la mejor atención profesional.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "🕐", title: "Atención 24/7", desc: "Disponibles para emergencias las 24 horas del día" },
            { icon: "👨‍⚕️", title: "Veterinarios certificados", desc: "Profesionales con amplia experiencia y certificaciones" },
            { icon: "🔬", title: "Equipamiento moderno", desc: "Tecnología de última generación para diagnósticos precisos" },
            { icon: "🏠", title: "Servicio a domicilio", desc: "Llevamos la atención veterinaria hasta tu hogar" },
            { icon: "📋", title: "Seguimiento post consulta", desc: "Monitoreamos la evolución de tu mascota" },
            { icon: "💚", title: "Planes de salud", desc: "Opciones flexibles adaptadas a tus necesidades" }
          ].map((benefit, i) => (
            <div key={i} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 rounded-2xl border border-gray-100 group hover:border-teal-200">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold text-teal-700 mb-3">{benefit.title}</h4>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonios */}
      <div className="mt-24 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">Lo que dicen nuestros clientes</h3>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          La confianza de nuestros clientes es nuestro mayor logro
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              nombre: "María González",
              mascota: "Luna (Golden Retriever)",
              testimonio: "Excelente atención, los doctores son muy profesionales y cariñosos con las mascotas.",
              rating: 5
            },
            {
              nombre: "Carlos Mendoza",
              mascota: "Milo (Gato Persa)",
              testimonio: "El servicio a domicilio fue perfecto, Milo se sintió muy cómodo en casa.",
              rating: 5
            },
            {
              nombre: "Andrea López",
              mascota: "Rocky (Bulldog)",
              testimonio: "Salvaron la vida de Rocky en una emergencia nocturna. Eternamente agradecida.",
              rating: 5
            }
          ].map((testimonio, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-4">
                {[...Array(testimonio.rating)].map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4 leading-relaxed">"{testimonio.testimonio}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-teal-700">{testimonio.nombre}</p>
                <p className="text-sm text-gray-500">Dueño de {testimonio.mascota}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Planes */}
      <div className="mt-24 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Planes de Atención</h3>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Elige el plan que mejor se adapte a las necesidades de tu mascota y tu presupuesto
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              nombre: "Básico",
              precio: "$25",
              periodo: "/mes",
              incluye: ["1 Consulta general", "Vacunas básicas", "Cartilla de salud"],
              popular: false,
              color: "border-gray-200"
            },
            {
              nombre: "Completo",
              precio: "$45",
              periodo: "/mes",
              incluye: ["Consultas ilimitadas", "Todas las vacunas", "Desparasitación", "Teleconsulta"],
              popular: true,
              color: "border-teal-500"
            },
            {
              nombre: "Premium",
              precio: "$75",
              periodo: "/mes",
              incluye: ["Todo lo anterior", "Cirugías menores", "Análisis de laboratorio", "Servicio a domicilio"],
              popular: false,
              color: "border-purple-400"
            }
          ].map((plan, i) => (
            <div key={i} className={`bg-white rounded-2xl shadow-lg p-8 border-2 ${plan.color} relative hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Más Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">{plan.nombre}</h4>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-teal-600">{plan.precio}</span>
                  <span className="text-lg text-gray-500 ml-1">{plan.periodo}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.incluye.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-teal-500 mr-3 text-lg">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                plan.popular 
                  ? 'bg-teal-500 text-white hover:bg-teal-600 shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
                Elegir Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Estadísticas */}
      <div className="mt-24 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl p-12 max-w-6xl mx-auto text-white">
        <h3 className="text-3xl font-bold mb-4 text-center">Nuestra experiencia en números</h3>
        <p className="text-center text-teal-100 mb-12 text-lg max-w-2xl mx-auto">
          Años de experiencia respaldando la salud y felicidad de miles de mascotas
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { numero: "5,000+", texto: "Mascotas atendidas" },
            { numero: "15", texto: "Años de experiencia" },
            { numero: "24/7", texto: "Atención disponible" },
            { numero: "98%", texto: "Clientes satisfechos" }
          ].map((stat, i) => (
            <div key={i} className="transform hover:scale-105 transition-transform duration-200">
              <div className="text-4xl font-bold mb-2">{stat.numero}</div>
              <div className="text-teal-100">{stat.texto}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-24 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">Preguntas Frecuentes</h3>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Resolvemos las dudas más comunes sobre nuestros servicios veterinarios
        </p>
        <div className="space-y-6">
          {[{
            pregunta: "¿Atienden emergencias las 24 horas?",
            respuesta: "Sí, contamos con servicio de emergencias disponible las 24 horas del día, los 7 días de la semana. Nuestro equipo está preparado para atender cualquier urgencia veterinaria."
          }, {
            pregunta: "¿Puedo agendar una cita por WhatsApp?",
            respuesta: "Por supuesto. Además de llamadas telefónicas, también puedes agendar citas a través de WhatsApp para mayor comodidad. Nuestro equipo te responderá rápidamente."
          }, {
            pregunta: "¿Atienden animales exóticos?",
            respuesta: "Sí, atendemos diferentes tipos de animales exóticos dependiendo de la especie. Te recomendamos consultar disponibilidad con nuestro equipo especializado antes de la cita."
          }, {
            pregunta: "¿Qué incluye el servicio a domicilio?",
            respuesta: "El servicio a domicilio incluye consulta general, vacunación, toma de muestras para laboratorio y seguimiento de tratamientos. Llevamos todo el equipo necesario a tu hogar."
          }, {
            pregunta: "¿Ofrecen planes de pago para tratamientos costosos?",
            respuesta: "Sí, ofrecemos diferentes opciones de financiamiento y planes de pago flexibles para tratamientos de mayor costo. Consulta con nuestro equipo las opciones disponibles."
          }].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 font-bold">?</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 text-lg mb-2">{item.pregunta}</p>
                  <p className="text-gray-600 leading-relaxed">{item.respuesta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div className="mt-24 max-w-4xl mx-auto text-center bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
        <h3 className="text-4xl font-bold text-gray-800 mb-4">¿Listo para cuidar a tu mascota?</h3>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Agenda tu primera consulta hoy mismo y descubre por qué somos la mejor opción para el cuidado veterinario de tu compañero
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-600 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Agendar Cita Ahora
          </button>
          <button className="border-2 border-teal-500 text-teal-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-50 transition-colors duration-200">
            Contactar por WhatsApp
          </button>
        </div>
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            Primera consulta con descuento
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            Sin compromiso
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            Atención inmediata
          </div>
        </div>
      </div>
    </section>
  );
}