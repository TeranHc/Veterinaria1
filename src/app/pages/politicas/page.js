"use client";

import { useState } from 'react';
import {
  Shield,
  Eye,
  Lock,
  CreditCard,
  Users,
  Heart,
  FileText,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  CheckCircle,
  Scale,
} from 'lucide-react';

export default function PoliticasTienda() {
  const [activePolicy, setActivePolicy] = useState(null);

  const togglePolicy = (id) => {
    setActivePolicy(activePolicy === id ? null : id);
  };

  return (
    <section className="bg-white text-gray-800 min-h-screen">
      {/* Encabezado decorativo */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 py-16 text-white text-center">
        <h1 className="text-4xl font-bold uppercase mb-2">Políticas de la Tienda</h1>
        <p className="text-lg opacity-90">Conoce nuestras condiciones para una experiencia confiable y transparente</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Resumen visual de principios */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-teal-50 p-6 rounded-lg shadow">
            <CheckCircle className="w-8 h-8 text-teal-600 mb-2" />
            <h3 className="font-semibold text-teal-800 mb-1">Calidad Garantizada</h3>
            <p className="text-sm text-gray-700">
              Ofrecemos productos certificados y servicios veterinarios profesionales para garantizar el bienestar de tu mascota.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <Shield className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-semibold text-blue-800 mb-1">Seguridad y Confianza</h3>
            <p className="text-sm text-gray-700">
              Protegemos tus datos con cifrado avanzado y cumplimos con normativas de privacidad.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow">
            <Heart className="w-8 h-8 text-purple-600 mb-2" />
            <h3 className="font-semibold text-purple-800 mb-1">Atención Humana</h3>
            <p className="text-sm text-gray-700">
              Brindamos soporte empático y personalizado en cada etapa de tu experiencia.
            </p>
          </div>
        </div>

        {/* Políticas desplegables */}
        {[
          {
            id: 'entregas',
            icon: <Scale className="w-5 h-5" />,
            color: 'bg-cyan-100 text-cyan-600',
            title: 'Política de Entregas',
            content: (
              <div className="text-gray-700 text-sm space-y-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Entregamos en 24-48 horas en zonas urbanas y hasta 72 horas en áreas rurales.</li>
                  <li>Envío gratuito en pedidos superiores a $10; de lo contrario, se aplica una tarifa fija visible al finalizar la compra.</li>
                  <li>Pedidos antes de las 14:00 se procesan el mismo día; posteriores, al siguiente día hábil.</li>
                </ul>
                <p className="font-medium">¿Problemas con tu entrega? Contáctanos en <a href="info@saludpet.com" className="text-teal-700 hover:underline">info@saludpet.com</a>.</p>
              </div>
            ),
          },
          {
            id: 'devoluciones',
            icon: <FileText className="w-5 h-5" />,
            color: 'bg-emerald-100 text-emerald-600',
            title: 'Cambios y Devoluciones',
            content: (
              <div className="text-gray-700 text-sm space-y-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Devoluciones aceptadas dentro de los 7 días posteriores a la recepción, con empaque original y sin uso.</li>
                  <li>Alimentos húmedos o perecederos no son retornables, salvo defectos verificables.</li>
                  <li>Requiere comprobante de compra y contacto previo con nuestro equipo.</li>
                </ul>
                <p className="font-medium">Inicia tu devolución en <a href="mailto:devoluciones@vetmascotas.com" className="text-teal-700 hover:underline">Devoluciones@saludpet.com</a>.</p>
              </div>
            ),
          },
          {
            id: 'veterinario',
            icon: <Heart className="w-5 h-5" />,
            color: 'bg-pink-100 text-pink-600',
            title: 'Servicios Veterinarios',
            content: (
              <div className="text-gray-700 text-sm space-y-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Citas previas requeridas para una atención personalizada y eficiente.</li>
                  <li>Cancelaciones con menos de 12 horas o retrasos superiores a 15 minutos implican reprogramación.</li>
                  <li>Nuestros veterinarios certificados registran cada consulta para un seguimiento óptimo.</li>
                </ul>
                <p className="font-medium">Comienza a agendar tu cita aqui: <a href="/pages/servicio" className="text-teal-700 hover:underline">Agendar citas médicas</a>.</p>
              </div>
            ),
          },
          {
            id: 'privacidad',
            icon: <Eye className="w-5 h-5" />,
            color: 'bg-blue-100 text-blue-600',
            title: 'Política de Privacidad',
            content: (
              <div className="text-gray-700 text-sm space-y-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Recopilamos solo datos esenciales: nombre, contacto, información de tu mascota y preferencias.</li>
                  <li>Usamos tu información para gestionar pedidos, mejorar servicios y enviar promociones relevantes.</li>
                  <li>Garantizamos seguridad con cifrado SSL y no compartimos datos sin tu consentimiento.</li>
                </ul>
                <p className="font-medium">Más detalles en <a href="\pages\privacidad" className="text-teal-700 hover:underline">nuestra política completa</a>.</p>
              </div>
            ),
          },
        ].map(({ id, icon, title, content, color }) => (
          <div key={id} className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 transition-all duration-300">
            <button
              onClick={() => togglePolicy(id)}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-full ${color}`}>{icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              </div>
              <div className="text-gray-400">
                {activePolicy === id ? (
                  <ChevronUp className="w-5 h-5 transition-transform duration-300" />
                ) : (
                  <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                )}
              </div>
            </button>
            {activePolicy === id && (
              <div className="px-6 pb-6 border-t border-gray-100 transition-all duration-300 ease-in-out">
                <div className="pt-4">{content}</div>
              </div>
            )}
          </div>
        ))}

        {/* Pie de contacto */}
        <div className="mt-16 text-center text-sm text-gray-600">
          ¿Dudas sobre nuestras políticas? Escríbenos a{' '}
          <a href="mailto:contacto@vetmascotas.com" className="font-medium text-teal-700 hover:underline">
            info@saludpet.com
          </a>{' '}
          o llámanos al{' '}
          <a href="tel:+1234567890" className="font-medium text-teal-700 hover:underline">
            +593 4 123-4567
          </a>.
        </div>
      </div>
    </section>
  );
}