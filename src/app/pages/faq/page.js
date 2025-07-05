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
        <h1 className="text-4xl font-bold uppercase mb-2">Políticas de la tienda</h1>
        <p className="text-lg opacity-90">Todo lo que necesitas saber sobre nuestras condiciones</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Resumen visual de principios */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-teal-50 p-6 rounded-lg shadow">
            <CheckCircle className="w-8 h-8 text-teal-600 mb-2" />
            <h3 className="font-semibold text-teal-800 mb-1">Calidad Garantizada</h3>
            <p className="text-sm text-gray-700">
              Ofrecemos productos de primera y atención veterinaria con ética y experiencia.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <Shield className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-semibold text-blue-800 mb-1">Seguridad y Confianza</h3>
            <p className="text-sm text-gray-700">
              Protegemos tu información personal con tecnología actualizada y buenas prácticas.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow">
            <Heart className="w-8 h-8 text-purple-600 mb-2" />
            <h3 className="font-semibold text-purple-800 mb-1">Atención Humana</h3>
            <p className="text-sm text-gray-700">
              Nuestro equipo está para ayudarte con cada necesidad relacionada con tus mascotas.
            </p>
          </div>
        </div>

        {/* Políticas desplegables */}
        {[
          {
            id: 'entregas',
            icon: <Scale className="w-6 h-6" />, color: 'bg-cyan-100 text-cyan-600',
            title: 'Política de Entregas',
            content: (
              <p className="text-gray-700 text-sm">
                Realizamos entregas en 24-48h en zonas urbanas. Para zonas rurales, el tiempo puede variar. Pedido mínimo de $10 para envío gratuito.
              </p>
            )
          },
          {
            id: 'devoluciones',
            icon: <FileText className="w-6 h-6" />, color: 'bg-emerald-100 text-emerald-600',
            title: 'Cambios y Devoluciones',
            content: (
              <p className="text-gray-700 text-sm">
                Devoluciones aceptadas dentro de 7 días, productos cerrados y en buen estado. No aplica a alimentos húmedos. Requiere comprobante.
              </p>
            )
          },
          {
            id: 'veterinario',
            icon: <Heart className="w-6 h-6" />, color: 'bg-pink-100 text-pink-600',
            title: 'Servicios Veterinarios',
            content: (
              <p className="text-gray-700 text-sm">
                Solo con cita previa. Cancelaciones deben realizarse con al menos 12h de anticipación. Tolerancia de 15 minutos para retrasos.
              </p>
            )
          },
          {
            id: 'privacidad',
            icon: <Eye className="w-6 h-6" />, color: 'bg-blue-100 text-blue-600',
            title: 'Política de Privacidad',
            content: (
              <p className="text-gray-700 text-sm">
                Usamos tus datos solo con fines de gestión interna. No compartimos tu información con terceros sin consentimiento.
              </p>
            )
          }
        ].map(({ id, icon, title, content, color }) => (
          <div key={id} className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
            <button
              onClick={() => togglePolicy(id)}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${color}`}>{icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              </div>
              <div className="text-gray-400">
                {activePolicy === id ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
            </button>
            {activePolicy === id && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="pt-4">
                  {content}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Pie de contacto */}
        <div className="mt-16 text-center text-sm text-gray-600">
          ¿Tienes dudas sobre nuestras políticas? Escríbenos a <span className="font-medium text-teal-700">contacto@vetmascotas.com</span>
        </div>
      </div>
    </section>
  );
}
