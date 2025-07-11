'use client';

import React from 'react';
import { Shield, Eye, Lock, Users, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Políticas de Privacidad
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En SaludPet nos comprometemos a proteger tu privacidad y la de tus mascotas. 
            Conoce cómo recopilamos, utilizamos y protegemos tu información personal.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">

          {/* Sección 1 */}
          <section>
            <div className="flex items-center mb-4">
              <Eye className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">1. Información que Recopilamos</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold">Información Personal</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre completo, dirección de correo electrónico y número de teléfono</li>
                <li>Dirección de domicilio para entregas de productos</li>
                <li>Información de pago (procesada de forma segura por terceros)</li>
                <li>Historial de compras y preferencias de productos</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6">Información de Mascotas</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre, raza, edad y peso de la mascota</li>
                <li>Historial médico y veterinario</li>
                <li>Alergias alimentarias y necesidades dietéticas especiales</li>
                <li>Fotografías (solo si las proporcionas voluntariamente)</li>
              </ul>

              {/* <h3 className="text-lg font-semibold mt-6">Información Técnica</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dirección IP y datos de navegación</li>
                <li>Tipo de dispositivo y navegador utilizado</li>
                <li>Cookies y tecnologías similares</li>
              </ul> */}
            </div>
          </section>

          {/* Sección 2 */}
          <section>
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">2. Cómo Utilizamos tu Información</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold">Servicios Veterinarios</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Programar y gestionar citas veterinarias</li>
                <li>Mantener historiales médicos de mascotas</li>
                <li>Enviar recordatorios de vacunas y tratamientos</li>
                <li>Comunicar resultados de exámenes y diagnósticos</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6">Venta de Productos</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Procesar pedidos y gestionar entregas</li>
                <li>Recomendar productos según las necesidades de tu mascota</li>
                <li>Gestionar devoluciones y garantías</li>
                <li>Enviar notificaciones sobre productos y ofertas</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6">Mejora del Servicio</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Analizar patrones de uso para mejorar nuestros servicios</li>
                <li>Personalizar la experiencia de usuario</li>
                <li>Realizar investigaciones sobre salud animal (datos anonimizados)</li>
              </ul>
            </div>
          </section>

          {/* Sección 3 */}
          <section>
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">3. Compartir Información</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p><strong>No vendemos tu información personal.</strong> Solo compartimos datos en las siguientes circunstancias:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar (procesamiento de pagos, envíos, hosting)</li>
                <li><strong>Veterinarios asociados:</strong> Solo información relevante para el cuidado de tu mascota</li>
                <li><strong>Laboratorios:</strong> Para análisis médicos (solo datos necesarios)</li>
                <li><strong>Requerimientos legales:</strong> Cuando sea requerido por ley o autoridades competentes</li>
                <li><strong>Emergencias médicas:</strong> Para garantizar el bienestar de tu mascota</li>
              </ul>
            </div>
          </section>

          {/* Sección 4 */}
          <section>
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">4. Seguridad de Datos</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>Implementamos múltiples medidas de seguridad:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cifrado SSL para todas las transmisiones de datos</li>
                <li>Servidores seguros con acceso restringido</li>
                <li>Auditorías de seguridad regulares</li>
                <li>Formación del personal en protección de datos</li>
                <li>Copias de seguridad automáticas y cifradas</li>
              </ul>
              <p className="mt-4 p-4 bg-blue-50 rounded-lg">
                <strong>Nota:</strong> Aunque tomamos todas las precauciones, ningún sistema es 100% seguro. 
                Te recomendamos usar contraseñas seguras y no compartir tu información de acceso.
              </p>
            </div>
          </section>

          {/* Sección 5 */}
          <section>
            <div className="flex items-center mb-4">
              <Eye className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">5. Tus Derechos</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>Tienes derecho a:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Acceso y Rectificación</h4>
                  <p className="text-sm">Solicitar copia de tus datos y corregir información incorrecta</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Portabilidad</h4>
                  <p className="text-sm">Recibir tus datos en formato estructurado y legible</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Eliminación</h4>
                  <p className="text-sm">Solicitar eliminación de datos (sujeto a obligaciones legales)</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Oposición</h4>
                  <p className="text-sm">Oponerte al procesamiento de tus datos para marketing</p>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 6 */}
          <section>
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">6. Cookies y Tecnologías Similares</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>Utilizamos cookies para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Esenciales:</strong> Funcionamiento básico del sitio (carrito de compras, sesión)</li>
                <li><strong>Analíticas:</strong> Google Analytics para entender el uso del sitio</li>
                <li><strong>Funcionales:</strong> Recordar preferencias y configuraciones</li>
                <li><strong>Marketing:</strong> Mostrar anuncios relevantes (solo con tu consentimiento)</li>
              </ul>
              <p className="mt-4 p-4 bg-yellow-50 rounded-lg">
                Puedes gestionar las cookies desde la configuración de tu navegador o desde nuestro centro de preferencias.
              </p>
            </div>
          </section>

          {/* Sección 7 */}
          <section>
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">7. Menores de Edad</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>
                Nuestros servicios están dirigidos a personas mayores de 18 años. No recopilamos 
                intencionalmente información de menores de edad. Si identificamos que hemos recopilado 
                datos de un menor, procederemos a eliminarlos inmediatamente.
              </p>
              <p>
                Los padres o tutores pueden contactarnos si creen que hemos recopilado información 
                de sus hijos menores de edad.
              </p>
            </div>
          </section>

          {/* Sección 8 */}
          <section>
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">8. Cambios en esta Política</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>
                Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos 
                sobre cambios importantes mediante:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Correo electrónico a tu dirección registrada</li>
                <li>Notificación prominente en nuestro sitio web</li>
                <li>Mensaje en tu área de cliente</li>
              </ul>
              <p>
                Te recomendamos revisar esta página periódicamente para estar al tanto de cualquier cambio.
              </p>
            </div>
          </section>

          {/* Sección 9 - Contacto */}
          <section className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Mail className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">9. Contacto</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>
                Para cualquier pregunta sobre esta política de privacidad o para ejercer tus derechos, 
                puedes contactarnos:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-2" />
                  <span>privacidad@saludpet.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-2" />
                  <span>+593 4 123-4567</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Delegado de Protección de Datos:</strong> Responderemos a tu solicitud dentro de 30 días hábiles.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
