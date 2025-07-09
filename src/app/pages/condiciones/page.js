import React from 'react';
import { FileText, ShoppingCart, Stethoscope, AlertTriangle, Scale, CreditCard, Truck, Shield } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FileText className="h-16 w-16 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estos términos y condiciones establecen las reglas y regulaciones para el uso de 
            nuestros servicios veterinarios y tienda de productos para mascotas.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Fecha de vigencia: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          
          {/* Section 1 */}
          <section>
            <div className="flex items-center mb-4">
              <Scale className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">1. Aceptación de Términos</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>
                Al acceder y utilizar los servicios de SaludPet, incluyendo nuestro sitio web, 
                servicios veterinarios y tienda de productos para mascotas, aceptas estar sujeto a 
                estos términos y condiciones.
              </p>
              <p>
                Si no estás de acuerdo con alguno de estos términos, no debes utilizar nuestros servicios.
              </p>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm">
                  <strong>Importante:</strong> Estos términos se aplican tanto a servicios presenciales 
                  como digitales, incluyendo compras online y consultas veterinarias.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center mb-4">
              <Stethoscope className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">2. Servicios Veterinarios</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <h3 className="text-lg font-semibold">Consultas y Tratamientos</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Los servicios veterinarios son proporcionados por profesionales licenciados</li>
                <li>Las citas deben programarse con al menos 24 horas de anticipación</li>
                <li>Las cancelaciones deben realizarse con 4 horas de anticipación</li>
                <li>Los tratamientos están sujetos a evaluación profesional en cada caso</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6">Responsabilidades del Cliente</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proporcionar información médica completa y veraz de la mascota</li>
                <li>Seguir las instrucciones de tratamiento y medicación</li>
                <li>Informar sobre cualquier cambio en el estado de salud de la mascota</li>
                <li>Mantener las vacunas y documentación al día</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6">Emergencias</h3>
              <p>
                Para emergencias fuera del horario de atención, contacta inmediatamente al servicio 
                de urgencias veterinarias más cercano. No somos responsables por demoras en la 
                atención de emergencias fuera de nuestro horario establecido.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center mb-4">
              <ShoppingCart className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">3. Tienda de Productos para Mascotas</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <h3 className="text-lg font-semibold">Disponibilidad y Precios</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Todos los precios están sujetos a cambios sin previo aviso</li>
                <li>Los precios incluyen impuestos aplicables</li>
                <li>La disponibilidad de productos puede variar</li>
                <li>Nos reservamos el derecho de limitar cantidades por pedido</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6">Productos Especializados</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Alimentos Medicados</h4>
                  <p className="text-sm">Requieren prescripción veterinaria válida</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Medicamentos</h4>
                  <p className="text-sm">Solo disponibles con receta médica</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Suplementos</h4>
                  <p className="text-sm">Recomendamos consulta previa</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Productos Importados</h4>
                  <p className="text-sm">Tiempos de entrega extendidos</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center mb-4">
              <CreditCard className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">4. Pagos y Facturación</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <h3 className="text-lg font-semibold">Métodos de Pago Aceptados</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tarjetas de crédito y débito (Visa, Mastercard, American Express)</li>
                <li>Transferencias bancarias</li>
                <li>Pagos en efectivo (solo servicios presenciales)</li>
                <li>Pagos de forma segura con tu cuenta Club Pycca</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6">Política de Facturación</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Los servicios veterinarios se facturan al momento de la prestación</li>
                <li>Los productos se cobran al momento de la compra</li>
                <li>Los pagos vencidos pueden generar intereses de mora</li>
                <li>Emitimos facturas electrónicas dentro de 24 horas</li>
              </ul>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm">
                  <strong>Nota:</strong> Los tratamientos de emergencia requieren pago inmediato 
                  o garantía de pago antes de iniciar el procedimiento.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <div className="flex items-center mb-4">
              <Truck className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">5. Envíos y Entregas</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <h3 className="text-lg font-semibold">Opciones de Envío</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Estándar</h4>
                  <p className="text-sm">3-5 días hábiles</p>
                  <p className="text-sm text-green-600">Gratis en compras +$50</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Express</h4>
                  <p className="text-sm">1-2 días hábiles</p>
                  <p className="text-sm text-blue-600">$15 costo adicional</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Mismo Día</h4>
                  <p className="text-sm">Área metropolitana</p>
                  <p className="text-sm text-purple-600">$25 costo adicional</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold mt-6">Condiciones de Entrega</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Los envíos se realizan de lunes a viernes</li>
                <li>Alguien debe estar presente para recibir el pedido</li>
                <li>Los productos refrigerados requieren entrega inmediata</li>
                <li>Verificamos la identidad para medicamentos controlados</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">6. Devoluciones y Garantías</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <h3 className="text-lg font-semibold">Política de Devoluciones</h3>
              <div className="space-y-3">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800">Productos Aceptados para Devolución</h4>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>• Alimentos no abiertos (30 días)</li>
                    <li>• Juguetes y accesorios no utilizados (15 días)</li>
                    <li>• Productos defectuosos (60 días)</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800">Productos NO Retornables</h4>
                  <ul className="text-sm text-red-700 mt-2 space-y-1">
                    <li>• Medicamentos y tratamientos médicos</li>
                    <li>• Alimentos abiertos o parcialmente consumidos</li>
                    <li>• Productos de higiene personal</li>
                    <li>• Artículos personalizados</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-lg font-semibold mt-6">Garantías de Servicios</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Garantizamos la calidad profesional de nuestros servicios veterinarios</li>
                <li>Revisiones gratuitas dentro de 7 días post-tratamiento</li>
                <li>Reembolso parcial si no estás satisfecho con el servicio</li>
                <li>Garantía de vida útil en productos defectuosos</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">7. Limitaciones de Responsabilidad</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <h3 className="text-lg font-semibold">Servicios Veterinarios</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>No garantizamos resultados específicos en tratamientos médicos</li>
                <li>Los riesgos médicos inherentes son responsabilidad del propietario</li>
                <li>Recomendamos segundas opiniones para casos complejos</li>
                <li>No somos responsables por complicaciones post-tratamiento si no se siguen las instrucciones</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6">Productos y Servicios</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>No somos responsables por reacciones alérgicas no declaradas</li>
                <li>Los consejos nutricionales son orientativos, no prescriptivos</li>
                <li>Los tiempos de entrega pueden variar por circunstancias externas</li>
                <li>La responsabilidad máxima se limita al valor del producto o servicio</li>
              </ul>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm">
                  <strong>Exoneración:</strong> En caso de fuerza mayor (desastres naturales, pandemias, 
                  huelgas), no seremos responsables por incumplimientos temporales.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <div className="flex items-center mb-4">
              <Scale className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">8. Propiedad Intelectual</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>
                Todo el contenido de nuestro sitio web, incluyendo textos, imágenes, logos, 
                marcas comerciales y software, está protegido por derechos de autor y otras 
                leyes de propiedad intelectual.
              </p>
              <h3 className="text-lg font-semibold">Uso Permitido</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Navegación personal y no comercial del sitio</li>
                <li>Descarga de información para uso personal</li>
                <li>Compartir enlaces a nuestro contenido (no copiar)</li>
              </ul>
              <h3 className="text-lg font-semibold mt-6">Uso Prohibido</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reproducción comercial sin autorización</li>
                <li>Modificación o alteración del contenido</li>
                <li>Uso de nuestras marcas comerciales</li>
                <li>Ingeniería inversa de nuestro software</li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">9. Modificaciones y Terminación</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <h3 className="text-lg font-semibold">Modificaciones de Términos</h3>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                Los cambios serán efectivos inmediatamente después de su publicación en nuestro sitio web.
              </p>
              <h3 className="text-lg font-semibold mt-6">Terminación del Servicio</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Podemos terminar o suspender el acceso por violación de términos</li>
                <li>Los clientes pueden cancelar servicios con 30 días de aviso</li>
                <li>Las obligaciones financieras pendientes permanecen vigentes</li>
                <li>Los datos del cliente se conservan según nuestra política de privacidad</li>
              </ul>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <div className="flex items-center mb-4">
              <Scale className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">10. Ley Aplicable y Jurisdicción</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>
                Estos términos y condiciones se rigen por las leyes del país donde opera 
                PetVet Care. Cualquier disputa será resuelta en los tribunales competentes 
                de nuestra jurisdicción.
              </p>
              <h3 className="text-lg font-semibold mt-6">Resolución de Conflictos</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Intentaremos resolver disputas mediante negociación directa</li>
                <li>Si no se logra acuerdo, recurriremos a mediación</li>
                <li>Como último recurso, se procederá a arbitraje vinculante</li>
              </ol>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Contacto Legal</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>
                Para consultas sobre estos términos y condiciones, contacta a nuestro 
                departamento legal:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Email:</strong> legal@saludpet.com</p>
                  <p><strong>Teléfono:</strong> +593 4 123-4567</p>
                </div>
                <div>
                  <p><strong>Dirección:</strong> Ciudad, Guayaquil</p>
                  <p><strong>Horario:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          {/* <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              © 2025 PetVet Care. Todos los derechos reservados. | 
              <a href="/privacy" className="text-green-600 hover:underline ml-1">Política de Privacidad</a> | 
              <a href="/terms" className="text-green-600 hover:underline ml-1">Términos de Servicio</a>
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Versión 2.1 - Actualizada el {new Date().toLocaleDateString('es-ES')}
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;