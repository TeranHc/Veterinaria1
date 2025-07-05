import React, { useState } from 'react';
import { Shield, Eye, Lock, CreditCard, Users, Heart, FileText, ChevronDown, ChevronUp, AlertTriangle, CheckCircle, Scale } from 'lucide-react';

const StorePoliciesPage = () => {
  const [activePolicy, setActivePolicy] = useState(null);

  const togglePolicy = (policyId) => {
    setActivePolicy(activePolicy === policyId ? null : policyId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Políticas de la Tienda</h1>
          <p className="text-xl text-center opacity-90">
            Conoce nuestras políticas y términos de servicio
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Resumen ejecutivo */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <Scale className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Resumen de Políticas</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-green-800 mb-2">Compromiso con la Calidad</h3>
              <p className="text-gray-700 text-sm">
                Garantizamos productos de alta calidad y servicios veterinarios profesionales para el bienestar de tu mascota.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <Shield className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-blue-800 mb-2">Seguridad y Privacidad</h3>
              <p className="text-gray-700 text-sm">
                Protegemos tus datos personales con los más altos estándares de seguridad y cumplimos con todas las regulaciones.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <Heart className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-purple-800 mb-2">Atención al Cliente</h3>
              <p className="text-gray-700 text-sm">
                Nuestro equipo está disponible para ayudarte con cualquier consulta o problema que puedas tener.
              </p>
            </div>
          </div>
        </div>

        {/* Política de Privacidad */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <button
            onClick={() => togglePolicy('privacy')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Política de Privacidad</h3>
            </div>
            <div className="text-gray-400">
              {activePolicy === 'privacy' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </div>
          </button>
          
          {activePolicy === 'privacy' && (
            <div className="px-6 pb-6 border-t border-gray-100">
              <div className="pt-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Información que Recopilamos</h4>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Datos personales: nombre, dirección, teléfono, email</li>
                    <li>• Información de mascotas: raza, edad, historial médico</li>
                    <li>• Datos de compra y preferencias</li>
                    <li>• Información de navegación y cookies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Uso de la Información</h4>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Procesamiento de pedidos y servicios</li>
                    <li>• Comunicación sobre productos y servicios</li>
                    <li>• Mejora de la experiencia del usuario</li>
                    <li>• Cumplimiento de obligaciones legales</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Protección de Datos</h4>
                  <p className="text-gray-700">
                    Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Términos y Condiciones */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <button
            onClick={() => togglePolicy('terms')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Términos y Condiciones</h3>
            </div>
            <div className="text-gray-400">
              {activePolicy === 'terms' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </div>
          </button>
          
          {activePolicy === 'terms' && (
            <div className="px-6 pb-6 border-t border-gray-100">
              <div className="pt-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Uso del Sitio Web</h4>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Debe ser mayor de 18 años o tener autorización parental</li>
                    <li>• Usar el sitio solo para fines legítimos</li>
                    <li>• No reproducir contenido sin autorización</li>
                    <li>• Mantener la confidencialidad de su cuenta</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Responsabilidades del Usuario</h4>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Proporcionar información veraz y actualizada</li>
                    <li>• Usar productos según las instrucciones</li>
                    <li>• Supervisar el uso de productos por parte de mascotas</li>
                    <li>• Notificar cualquier problema o incidencia</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Limitación de Responsabilidad</h4>
                  <p className="text-gray-700">
                    No seremos responsables por daños indirectos, incidentales o consecuentes que resulten del uso de nuestros productos o servicios.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Política de Seguridad */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <button
            onClick={() => togglePolicy('security')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-red-100 text-red-600">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Política de Seguridad</h3>
            </div>
            <div className="text-gray-400">
              {activePolicy === 'security' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </div>
          </button>
          
          {activePolicy === 'security' && (
            <div className="px-6 pb-6 border-t border-gray-100">
              <div className="pt-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Seguridad de Datos</h4>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Encriptación SSL en todas las transacciones</li>
                    <li>• Servidores seguros con certificaciones actualizadas</li>
                    <li>• Acceso restringido a información personal</li>
                    <li>• Monitoreo constante de actividades sospechosas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Seguridad de Cuentas</h4>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Contraseñas seguras requeridas</li>
                    <li>• Notificación de accesos inusuales</li>
                    <li>• Opción de autenticación de dos factores</li>
                    <li>• Cierre automático de sesiones inactivas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Reporte de Vulnerabilidades</h4>
                  <p className="text-gray-700">
                    Si encuentra alguna vulnerabilidad de seguridad, por favor contáctenos inmediatamente a security@petcare.com
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Política de Pagos */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <button
            onClick={() => togglePolicy('payment')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Política de Pagos</h3>
            </div>
            <div className="text-gray-400">
              {activePolicy === 'payment' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </div>
          </button>
          
          {activePolicy === 'payment' && (
            <div className="px-6 pb-6 border-t border-gray-100">
              <div className="pt-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Métodos de Pago Aceptados</h4>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Tarjetas de crédito (Visa, MasterCard, American Express)</li>
                    <li>• Tarjetas de débito</li>
                    <li>• PayPal y carteras digitales</li>
                    <li>• Transferencias bancarias</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Procesamiento de Pagos</h4>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Procesamiento inmediato para productos</li>
                    <li>• Autorización previa para servicios veterinarios</li>
                    <li>• Confirmación automática por email</li>
                    <li>• Facturación detallada disponible</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Política de Reembolsos</h4>
                  <p className="text-gray-700">
                    Los reembolsos se procesan dentro de 3-5 días hábiles al método de pago original. Para servicios cancelados, aplican las políticas de cancelación específicas.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Política de Servicios Veterinarios */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <button
            onClick={() => togglePolicy('veterinary')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-pink-100 text-pink-600">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Política de Servicios Veterinarios</h3>
            </div>
            <div className="text-gray-400">
              {activePolicy === 'veterinary' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </div>
          </button>
          
          {activePolicy === 'veterinary' && (
            <div className="px-6 pb-6 border-t border-gray-100">
              <div className="pt-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Alcance de Servicios</h4>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Consultas generales y revisiones</li>
                    <li>• Vacunación y desparasitación</li>
                    <li>• Atención de emergencias básicas</li>
                    <li>• Asesoramiento nutricional</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Limitaciones del Servicio</h4>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Cirugías complejas requieren derivación</li>
                    <li>• Emergencias críticas deben dirigirse a clínicas 24/7</li>
                    <li>• Algunos tratamientos requieren instalaciones especializadas</li>
                    <li>• Diagnósticos complejos pueden requerir estudios adicionales</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Responsabilidad Profesional</h4>
                  <p className="text-gray-700">
                    Todos nuestros veterinarios están certificados y mantienen seguros de responsabilidad profesional. Los tratamientos se realizan según las mejores prácticas veterinarias.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Política de Edad */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <button
            onClick={() => togglePolicy('age')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-orange-100 text-orange-600">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Política de Edad</h3>
            </div>
            <div className="text-gray-400">
              {activePolicy === 'age' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </div>
          </button>
          
          {activePolicy === 'age' && (
            <div className="px-6 pb-6 border-t border-gray-100">
              <div className="pt-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Edad Mínima para Usar el Servicio</h4>
                  <p className="text-gray-700 mb-4">
                    Nuestros servicios están dirigidos a personas mayores de 18 años. Los menores de edad pueden usar nuestros servicios bajo supervisión parental.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Menores de Edad</h4>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Requieren autorización parental para crear cuentas</li>
                    <li>• Los padres son responsables de todas las transacciones</li>
                    <li>• Supervisión requerida durante servicios veterinarios</li>
                    <li>• Políticas especiales de privacidad aplicables</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Verificación de Edad</h4>
                  <p className="text-gray-700">
                    Podemos solicitar verificación de edad para ciertos productos o servicios. La información falsa sobre la edad puede resultar en suspensión de la cuenta.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Aviso legal */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-12">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Aviso Legal Importante</h3>
              <p className="text-gray-700 text-sm">
                Estas políticas pueden actualizarse periódicamente. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web. Es responsabilidad del usuario revisar regularmente estas políticas.
              </p>
            </div>
          </div>
        </div>

        {/* Contacto para políticas */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">¿Preguntas sobre nuestras políticas?</h2>
          <p className="text-center mb-6 opacity-90">
            Si tienes alguna duda sobre nuestras políticas o términos de servicio, no dudes en contactarnos.
          </p>
          <div className="flex justify-center gap-6">
            <div className="text-center">
              <p className="font-semibold">Email Legal</p>
              <p>legal@petcare.com</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">Teléfono</p>
              <p>(555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePoliciesPage;