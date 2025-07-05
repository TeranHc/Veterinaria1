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
              Nos comprometemos a ofrecer solo productos certificados y alimentos de alta calidad, cuidadosamente seleccionados para el bienestar de tu mascota. Además, todos nuestros servicios veterinarios están a cargo de profesionales capacitados, garantizando una atención médica ética, segura y responsable.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <Shield className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-semibold text-blue-800 mb-1">Seguridad y Confianza</h3>
            <p className="text-sm text-gray-700">
              Manejamos tus datos personales con estricta confidencialidad. Utilizamos tecnologías actualizadas para cifrado de datos, servidores seguros y protocolos de autenticación. Nunca compartimos tu información sin tu consentimiento expreso y cumplimos con todas las normativas de protección de datos.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow">
            <Heart className="w-8 h-8 text-purple-600 mb-2" />
            <h3 className="font-semibold text-purple-800 mb-1">Atención Humana</h3>
            <p className="text-sm text-gray-700">
              Nuestro equipo está comprometido con la atención cercana y empática. Brindamos soporte en todo momento: desde orientación en la compra hasta seguimiento post-servicio. Escuchamos tus necesidades y las de tu mascota con respeto y profesionalismo.
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
              <div className="text-gray-700 text-sm space-y-2">
                <p>Realizamos entregas a domicilio en un plazo de 24 a 48 horas para zonas urbanas principales. En zonas rurales, el tiempo de entrega puede extenderse hasta 72 horas dependiendo de la ubicación.</p>
                <p>El envío es gratuito en pedidos que superen los $10. Para pedidos menores, se aplicará una tarifa fija de transporte que se calcula al finalizar la compra.</p>
                <p>Los pedidos realizados antes de las 14:00 se procesan el mismo día. Los realizados después se despachan al día siguiente hábil.</p>
              </div>
            )
          },
          {
            id: 'devoluciones',
            icon: <FileText className="w-6 h-6" />, color: 'bg-emerald-100 text-emerald-600',
            title: 'Cambios y Devoluciones',
            content: (
              <div className="text-gray-700 text-sm space-y-2">
                <p>Se aceptan devoluciones dentro de los 7 días posteriores a la recepción del producto, siempre que los productos estén sin abrir, en su empaque original y en buen estado.</p>
                <p>Los alimentos húmedos o productos perecederos no aplican para devolución, salvo defectos de fábrica comprobables.</p>
                <p>Para iniciar una devolución es obligatorio presentar el comprobante de compra y comunicarse previamente con nuestro equipo de atención.</p>
              </div>
            )
          },
          {
            id: 'veterinario',
            icon: <Heart className="w-6 h-6" />, color: 'bg-pink-100 text-pink-600',
            title: 'Servicios Veterinarios',
            content: (
              <div className="text-gray-700 text-sm space-y-2">
                <p>Los servicios veterinarios se brindan exclusivamente con cita previa, para garantizar una atención ordenada y personalizada.</p>
                <p>Las cancelaciones deben notificarse con al menos 12 horas de antelación para evitar cargos. Si el paciente llega con más de 15 minutos de retraso, la cita será reprogramada automáticamente.</p>
                <p>Nuestro personal médico está altamente capacitado y cuenta con certificaciones vigentes. Toda atención queda registrada en nuestro sistema clínico para seguimiento.</p>
              </div>
            )
          },
          {
            id: 'privacidad',
            icon: <Eye className="w-6 h-6" />, color: 'bg-blue-100 text-blue-600',
            title: 'Política de Privacidad',
            content: (
              <div className="text-gray-700 text-sm space-y-2">
                <p>Recopilamos únicamente la información necesaria para brindarte nuestros servicios: nombre, dirección, email, teléfono, información de tu mascota y preferencias de compra.</p>
                <p>Esta información se utiliza para gestionar tus pedidos, mejorar tu experiencia, brindarte soporte y mantenerte informado sobre promociones relevantes.</p>
                <p>No compartimos tus datos con terceros sin tu consentimiento. Aplicamos estándares de seguridad estrictos como cifrado SSL, autenticación segura y acceso restringido a nuestra base de datos.</p>
              </div>
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
