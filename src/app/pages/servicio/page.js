"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // para app router (si estás en app/)

export default function Servicios() {
  const [activeTab, setActiveTab] = useState("consulta");
  const router = useRouter(); // inicializa el router

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
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-teal-50">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Servicios Veterinarios
        </div>
        <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
          Nuestros Servicios 
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Cuidamos de tu mascota con atención integral, profesional y con amor. Descubre todos nuestros servicios especializados:
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-3 mb-16">
        {Object.keys(services).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-8 py-4 rounded-2xl font-semibold tracking-wide transition-all duration-300 border-2 transform hover:scale-105 ${
              activeTab === key
                ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white border-teal-500 shadow-lg shadow-teal-200"
                : "bg-white text-teal-600 border-teal-200 hover:bg-teal-50 hover:border-teal-300 shadow-md hover:shadow-lg"
            }`}
          >
            <span className="text-lg">{services[key].title}</span>
          </button>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-12 flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto border border-gray-100 backdrop-blur-sm">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-teal-200 opacity-20"></div>
            <img
              src={services[activeTab].image}
              alt={services[activeTab].altText}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="text-left flex-1 space-y-6">
          <div className="space-y-3">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              {services[activeTab].title}
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"></div>
          </div>
          
          <div className="text-gray-700 text-lg leading-relaxed">
            {services[activeTab].description}
          </div>
          
          <div className="pt-4">
            <button 
              onClick={() => {
                const routes = {
                  consulta: '/pages/servicios',
                  laboratorio: '/pages/laboratorio',
                  teleconsulta: '/pages/teleconsulta',
                  domicilio: '/pages/domicilio'
                };

                const route = routes[activeTab];
                console.log(`Navegando a: ${route}`);
                router.push(route);
              }}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="relative z-10">Solicitar {services[activeTab].title}</span>
              <div className="relative z-10 w-5 h-5 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                <svg className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
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
              <p className="text-gray-700 italic mb-4 leading-relaxed">{testimonio.testimonio}</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-teal-700">{testimonio.nombre}</p>
                <p className="text-sm text-gray-500">Dueño de {testimonio.mascota}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lista de Precios */}
      <div className="mt-24 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Precios</h3>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Precios accesibles y transparentes para el cuidado integral de tu mascota
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              categoria: "Consultas",
              servicios: [
                { nombre: "Consulta General", precio: "$25" },
                { nombre: "Consulta a Domicilio", precio: "$40" },
                { nombre: "Teleconsulta", precio: "$15" },
                { nombre: "Consulta de Emergencia", precio: "$50" }
              ],
              color: "border-teal-500", bgColor: "bg-teal-50", textColor: "text-teal-600"
            },
            {
              categoria: "Vacunas y Prevención",
              servicios: [
                { nombre: "Vacuna Triple/Quíntuple", precio: "$20" },
                { nombre: "Vacuna Antirrábica", precio: "$15" },
                { nombre: "Desparasitación", precio: "$12" },
                { nombre: "Control de Pulgas", precio: "$18" }
              ],
              color: "border-purple-500", bgColor: "bg-purple-50", textColor: "text-purple-600"
            },
            {
              categoria: "Cuidado e Higiene",
              servicios: [
                { nombre: "Baño Completo", precio: "$30" },
                { nombre: "Corte de Uñas", precio: "$10" },
                { nombre: "Limpieza Dental", precio: "$45" },
                { nombre: "Limpieza de Oídos", precio: "$15" }
              ],
              color: "border-blue-500", bgColor: "bg-blue-50", textColor: "text-blue-600"
            },
            {
              categoria: "Análisis de Laboratorio",
              servicios: [
                { nombre: "Hemograma Completo", precio: "$35" },
                { nombre: "Análisis de Orina", precio: "$20" },
                { nombre: "Examen Coprológico", precio: "$15" },
                { nombre: "Perfil Bioquímico", precio: "$60" }
              ],
              color: "border-green-500", bgColor: "bg-green-50", textColor: "text-green-600"
            },
            {
              categoria: "Cirugías",
              servicios: [
                { nombre: "Esterilización (Hembra)", precio: "$80" },
                { nombre: "Castración (Macho)", precio: "$60" },
                { nombre: "Cirugía Menor", precio: "$120" },
                { nombre: "Extracción Dental", precio: "$40" }
              ],
              color: "border-red-500", bgColor: "bg-red-50", textColor: "text-red-600"
            },
            {
              categoria: "Servicios Especiales",
              servicios: [
                { nombre: "Rehabilitación Física", precio: "$25" },
                { nombre: "Certificado de Salud", precio: "$20" },
                { nombre: "Eutanasia Humanitaria", precio: "$60" },
                { nombre: "Hospitalización (día)", precio: "$40" }
              ],
              color: "border-orange-500", bgColor: "bg-orange-50", textColor: "text-orange-600"
            }
          ].map((categoria, i) => (
            <div key={i} className={`bg-white rounded-2xl shadow-lg p-6 border-2 ${categoria.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
              <div className={`${categoria.bgColor} rounded-lg p-4 mb-6`}>
                <h4 className={`text-xl font-bold ${categoria.textColor} text-center`}>
                  {categoria.categoria}
                </h4>
              </div>
              <div className="space-y-3">
                {categoria.servicios.map((servicio, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700 font-medium text-sm">{servicio.nombre}</span>
                    <span className={`font-bold text-lg ${categoria.textColor}`}>{servicio.precio}</span>
                  </div>
                ))}
              </div>             
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            * Los precios pueden variar según el tamaño y condición de la mascota. Consulta por promociones especiales.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-24 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            FAQ
          </div>
          <h3 className="text-4xl font-bold text-gray-800 mb-6">Preguntas Frecuentes</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Resolvemos las dudas más comunes sobre nuestros servicios veterinarios
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[{
            pregunta: "¿Atienden emergencias las 24 horas?",
            respuesta: "Sí, contamos con servicio de emergencias disponible las 24 horas del día, los 7 días de la semana. Nuestro equipo está preparado para atender cualquier urgencia veterinaria.",
            icono: "🚨",
            color: "from-red-500 to-red-600"
          }, {
            pregunta: "¿Puedo agendar una cita por WhatsApp?",
            respuesta: "Por supuesto. Además de llamadas telefónicas, también puedes agendar citas a través de WhatsApp para mayor comodidad. Nuestro equipo te responderá rápidamente.",
            icono: "📱",
            color: "from-green-500 to-green-600"
          }, {
            pregunta: "¿Atienden animales exóticos?",
            respuesta: "Sí, atendemos diferentes tipos de animales exóticos dependiendo de la especie. Te recomendamos consultar disponibilidad con nuestro equipo especializado antes de la cita.",
            icono: "🦎",
            color: "from-purple-500 to-purple-600"
          }, {
            pregunta: "¿Qué incluye el servicio a domicilio?",
            respuesta: "El servicio a domicilio incluye consulta general, vacunación, toma de muestras para laboratorio y seguimiento de tratamientos. Llevamos todo el equipo necesario a tu hogar.",
            icono: "🏠",
            color: "from-blue-500 to-blue-600"
          }, {
            pregunta: "¿Ofrecen descuentos para múltiples mascotas?",
            respuesta: "Sí, ofrecemos descuentos especiales para familias con múltiples mascotas y paquetes promocionales para servicios regulares. Consulta con nuestro equipo las opciones disponibles.",
            icono: "💰",
            color: "from-yellow-500 to-yellow-600"
          }, {
            pregunta: "¿Realizan cirugías complejas?",
            respuesta: "Contamos con quirófanos equipados y veterinarios especializados para realizar cirugías desde nivel básico hasta procedimientos más complejos. Evaluamos cada caso individualmente.",
            icono: "⚕️",
            color: "from-teal-500 to-teal-600"
          }].map((item, i) => (
            <div key={i} className="group relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icono}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                      {item.pregunta}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.respuesta}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br ${item.color} opacity-5 rounded-full transform translate-x-8 translate-y-8 group-hover:scale-150 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}