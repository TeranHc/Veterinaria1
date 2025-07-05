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
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 py-16 text-white text-center">
        <h1 className="text-4xl font-bold uppercase mb-2">Políticas de la tienda</h1>
        <p className="text-lg opacity-90">Todo lo que necesitas saber sobre nuestras condiciones</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
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

        {[
          {
            id: 'privacy',
            icon: <Eye className="w-6 h-6" />, color: 'bg-blue-100 text-blue-600',
            title: 'Política de Privacidad',
            content: (
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold">Información que Recopilamos</h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>Datos personales: nombre, dirección, teléfono, email</li>
                    <li>Información de mascotas: raza, edad, historial médico</li>
                    <li>Datos de compra y preferencias</li>
                    <li>Información de navegación y cookies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Uso de la Información</h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>Procesamiento de pedidos y servicios</li>
                    <li>Comunicación sobre productos y servicios</li>
                    <li>Mejora de la experiencia del usuario</li>
                    <li>Cumplimiento de obligaciones legales</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Protección de Datos</h4>
                  <p>
                    Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción.
                  </p>
                </div>
              </div>
            )
          },
          {
            id: 'terms',
            icon: <FileText className="w-6 h-6" />, color: 'bg-emerald-100 text-emerald-600',
            title: 'Términos y Condiciones',
            content: (
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold">Uso del Sitio Web</h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>Debe ser mayor de 18 años o tener autorización parental</li>
                    <li>Usar el sitio solo para fines legítimos</li>
                    <li>No reproducir contenido sin autorización</li>
                    <li>Mantener la confidencialidad de su cuenta</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Responsabilidades del Usuario</h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>Proporcionar información veraz y actualizada</li>
                    <li>Usar productos según las instrucciones</li>
                    <li>Supervisar el uso de productos por parte de mascotas</li>
                    <li>Notificar cualquier problema o incidencia</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Limitación de Responsabilidad</h4>
                  <p>
                    No seremos responsables por daños indirectos, incidentales o consecuentes que resulten del uso de nuestros productos o servicios.
                  </p>
                </div>
              </div>
            )
          },
          {
            id: 'security',
            icon: <Lock className="w-6 h-6" />, color: 'bg-red-100 text-red-600',
            title: 'Política de Seguridad',
            content: (
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold">Seguridad de Datos</h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>Encriptación SSL en todas las transacciones</li>
                    <li>Servidores seguros con certificaciones actualizadas</li>
                    <li>Acceso restringido a información personal</li>
                    <li>Monitoreo constante de actividades sospechosas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Seguridad de Cuentas</h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>Contraseñas seguras requeridas</li>
                    <li>Notificación de accesos inusuales</li>
                    <li>Opción de autenticación de dos factores</li>
                    <li>Cierre automático de sesiones inactivas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Reporte de Vulnerabilidades</h4>
                  <p>
                    Si encuentra alguna vulnerabilidad de seguridad, por favor contáctenos inmediatamente a security@petcare.com
                  </p>
                </div>
              </div>
            )
          },
          {
            id: 'payment',
            icon: <CreditCard className="w-6 h-6" />, color: 'bg-purple-100 text-purple-600',
            title: 'Política de Pagos',
            content: (
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold">Métodos de Pago Aceptados</h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>Tarjetas de crédito (Visa, MasterCard, American Express)</li>
                    <li>Tarjetas de débito</li>
                    <li>PayPal y carteras digitales</li>
                    <li>Transferencias bancarias</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Procesamiento de Pagos</h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>Procesamiento inmediato para productos</li>
                    <li>Autorización previa para servicios veterinarios</li>
                    <li>Confirmación automática por email</li>
                    <li>Facturación detallada disponible</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Política de Reembolsos</h4>
                  <p>
                    Los reembolsos se procesan dentro de 3-5 días hábiles al método de pago original. Para servicios cancelados, aplican las políticas de cancelación específicas.
                  </p>
                </div>
              </div>
            )
          },
          {
            id: 'veterinary',
            icon: <Heart className="w-6 h-6" />, color: 'bg-pink-100 text-pink-600',
            title: 'Política de Servicios Veterinarios',
            content: (
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold">Alcance de Servicios</h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>Consultas generales y revisiones</li>
                    <li>Vacunación y desparasitación</li>
                    <li>Atención de emergencias básicas</li>
                    <li>Asesoramiento nutricional</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Limitaciones del Servicio</h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>Cirugías complejas requieren derivación</li>
                    <li>Emergencias críticas deben dirigirse a clínicas 24/7</li>
                    <li>Algunos tratamientos requieren instalaciones especializadas</li>
                    <li>Diagnósticos complejos pueden requerir estudios adicionales</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Responsabilidad Profesional</h4>
                  <p>
                    Todos nuestros veterinarios están certificados y mantienen seguros de responsabilidad profesional. Los tratamientos se realizan según las mejores prácticas veterinarias.
                  </p>
                </div>
              </div>
            )
          },
          {
            id: 'age',
            icon: <Users className="w-6 h-6" />, color: 'bg-orange-100 text-orange-600',
            title: 'Política de Edad',
            content: (
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold">Edad Mínima para Usar el Servicio</h4>
                  <p>
                    Nuestros servicios están dirigidos a personas mayores de 18 años. Los menores de edad pueden usar nuestros servicios bajo supervisión parental.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Menores de Edad</h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>Requieren autorización parental para crear cuentas</li>
                    <li>Los padres son responsables de todas las transacciones</li>
                    <li>Supervisión requerida durante servicios veterinarios</li>
                    <li>Políticas especiales de privacidad aplicables</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Verificación de Edad</h4>
                  <p>
                    Podemos solicitar verificación de edad para ciertos productos o servicios. La información falsa sobre la edad puede resultar en suspensión de la cuenta.
                  </p>
                </div>
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
                <div className="pt-4">{content}</div>
              </div>
            )}
          </div>
        ))}

        <div className="mt-16 text-center text-sm text-gray-600">
          ¿Tienes dudas sobre nuestras políticas? Escríbenos a <span className="font-medium text-teal-700">contacto@vetmascotas.com</span>
        </div>
      </div>
    </section>
  );
}
