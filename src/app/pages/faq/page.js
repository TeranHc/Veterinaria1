'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Package, Heart, Clock, Shield, Phone, Mail } from 'lucide-react'

export default function FAQPage() {
  const [openSections, setOpenSections] = useState({})
  
  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const faqData = [
    {
      id: 'productos',
      title: 'Productos para Mascotas',
      icon: <Package className="w-5 h-5" />,
      questions: [
        {
          question: '¿Qué tipos de productos para mascotas ofrecen?',
          answer: 'Ofrecemos una amplia gama de productos incluyendo alimentos, juguetes, accesorios, productos de higiene, medicamentos, suplementos nutricionales y artículos de cuidado para todas las mascotas.'
        },
        {
          question: '¿Los productos tienen garantía?',
          answer: 'Sí, todos nuestros productos cuentan con garantía del fabricante. Los alimentos tienen garantía de frescura, los juguetes y accesorios tienen garantía contra defectos de fabricación, y los medicamentos están respaldados por su calidad farmacéutica.'
        },
        {
          question: '¿Cómo sé qué producto es el adecuado para mi mascota?',
          answer: 'Cada producto incluye información detallada sobre especies, razas, edades y necesidades específicas. Además, nuestro equipo veterinario puede asesorarte gratuitamente para elegir el producto más adecuado.'
        },
        {
          question: '¿Tienen productos orgánicos y naturales?',
          answer: 'Sí, contamos con una línea completa de productos orgánicos, naturales y libres de químicos dañinos. Estos productos están claramente identificados en nuestro catálogo.'
        }
      ]
    },
    {
      id: 'veterinaria',
      title: 'Servicios Veterinarios',
      icon: <Heart className="w-5 h-5" />,
      questions: [
        {
          question: '¿Qué servicios veterinarios ofrecen?',
          answer: 'Ofrecemos consultas generales, vacunación, desparasitación, cirugías, odontología veterinaria, análisis clínicos, radiografías, ultrasonidos, hospitalización y servicios de emergencia 24/7.'
        },
        {
          question: '¿Atienden mascotas exóticas?',
          answer: 'Sí, tenemos veterinarios especializados en mascotas exóticas como aves, reptiles, conejos, hurones y otros animales no convencionales.'
        },
        {
          question: '¿Cómo puedo agendar una cita?',
          answer: 'Puedes agendar citas a través de nuestra página web, llamando al teléfono de contacto, o visitando directamente nuestra clínica. Ofrecemos citas regulares y de emergencia.'
        }
        // {
        //   question: '¿Ofrecen planes de salud para mascotas?',
        //   answer: 'Sí, tenemos diferentes planes de salud que incluyen consultas regulares, vacunación, desparasitación y descuentos en otros servicios. Consulta nuestros paquetes anuales.'
        // }
      ]
    },
    {
      id: 'envios',
      title: 'Envíos y Entregas',
      icon: <Clock className="w-5 h-5" />,
      questions: [
        {
          question: '¿Cuáles son los tiempos de entrega?',
          answer: 'Los envíos nacionales llegan en 2-5 días hábiles. En la ciudad principal, ofrecemos entregas el mismo día para pedidos realizados antes de las 2 PM. Los productos refrigerados requieren envío express.'
        },
        {
          question: '¿Cuánto cuesta el envío?',
          answer: 'El costo de envío varía según el destino y peso del pedido. Ofrecemos envío gratis en compras superiores a $50. Los medicamentos y productos refrigerados tienen tarifas especiales.'
        },
        // {
        //   question: '¿Puedo hacer seguimiento de mi pedido?',
        //   answer: 'Sí, recibirás un número de seguimiento por email una vez que tu pedido sea enviado. Puedes rastrear tu paquete en tiempo real a través de nuestro sitio web.'
        // },
        {
          question: '¿Qué pasa si no estoy en casa durante la entrega?',
          answer: 'Nuestros mensajeros intentarán la entrega hasta 3 veces. Si no te encuentran, puedes reprogramar la entrega o recoger el paquete en nuestro punto de distribución más cercano.'
        }
      ]
    },
    {
      id: 'pagos',
      title: 'Pagos y Devoluciones',
      icon: <Shield className="w-5 h-5" />,
      questions: [
        {
          question: '¿Qué métodos de pago aceptan?',
          answer: 'Aceptamos tarjetas de crédito, débito, cuenta Club Pycca., transferencias bancarias y pagos en efectivo contra entrega. Todos los pagos online están protegidos con encriptación SSL.'
        },
        {
          question: '¿Puedo devolver un producto?',
          answer: 'Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra. Los productos deben estar en su empaque original y sin usar. Los medicamentos y alimentos perecederos no son reembolsables.'
        },
        {
          question: '¿Cómo proceso una devolución?',
          answer: 'Contacta nuestro servicio al cliente para iniciar el proceso de devolución. Te proporcionaremos una etiqueta de envío prepagada y las instrucciones detalladas.'
        },
        {
          question: '¿Cuándo recibo mi reembolso?',
          answer: 'Los reembolsos se procesan dentro de 5-7 días hábiles después de recibir el producto devuelto. El tiempo para ver el crédito en tu cuenta depende de tu banco o método de pago.'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-blue-500">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-gray-600 text-center">
            Encuentra respuestas a las dudas más comunes sobre nuestros productos para mascotas y servicios veterinarios
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqData.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                onClick={() => toggleSection(section.id)}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-6 cursor-pointer hover:from-teal-600 hover:to-cyan-700 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white bg-opacity-20 rounded-full p-2">
                      {section.icon}
                    </div>
                    <h2 className="text-xl font-semibold">{section.title}</h2>
                  </div>
                  <div className="transition-transform duration-300">
                    {openSections[section.id] ? 
                      <ChevronUp className="w-6 h-6" /> : 
                      <ChevronDown className="w-6 h-6" />
                    }
                  </div>
                </div>
              </div>
              
              {openSections[section.id] && (
                <div className="p-6 space-y-6 animate-in slide-in-from-top-2 duration-300">
                  {section.questions.map((item, index) => (
                    <div key={index} className="border-l-4 border-teal-500 pl-4 py-2">
                      <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                        {item.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            ¿No encontraste lo que buscabas?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg p-6 text-center">
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Llámanos</h3>
              <p className="text-blue-100">+593 4 123-4567</p>
              <p className="text-sm text-blue-100 mt-1">Lun-Vie: 8AM-8PM</p>
            </div>
            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg p-6 text-center">
              <Mail className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Escríbenos</h3>
              <p className="text-green-100">info@saludpet.com</p>
              <p className="text-sm text-green-100 mt-1">Respuestas inmediatas</p>
            </div>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-8 bg-red-50 border-2 border-red-200 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className="bg-red-500 text-white rounded-full p-2">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-red-800">
              Emergencias Veterinarias
            </h3>
          </div>
          <p className="text-red-700">
            Para emergencias veterinarias fuera del horario normal, llama a nuestro número de emergencias: 
            <span className="font-bold"> +593 90 585-1256</span>. 
            Nuestro equipo veterinario está disponible 24/7 para situaciones críticas.
          </p>
        </div>
      </div>
    </div>
  )
}