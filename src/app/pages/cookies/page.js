import React from 'react';
import { Cookie, Shield, Settings, AlertCircle, FileText, Eye, Globe, Lock } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Cookie className="h-16 w-16 text-teal-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Política de Cookies
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La web de SaludPet utiliza cookies. A continuación, vamos a explicarte qué son las cookies, 
            qué tipo de cookies se utilizan en este sitio web y cómo puedes ejercer tu derecho a configurar 
            tu navegador.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          
          {/* Section 1 */}
          <section>
            <div className="flex items-center mb-4">
              <Cookie className="h-6 w-6 text-teal-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">¿Qué es una Cookie?</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>
                Las Cookies son ficheros enviados a un navegador por medio de un servidor web para registrar 
                las actividades del Usuario en una web determinada. La primera finalidad de las Cookies es la 
                de facilitar al usuario un acceso más rápido a los servicios seleccionados.
              </p>
              <p>
                Además, las Cookies personalizan los servicios que ofrece la Web, facilitando y ofreciendo a 
                cada usuario información que es de su interés o que puede ser de su interés, en atención al uso 
                que realiza de los Servicios.
              </p>
              <div className="p-4 bg-teal-50 rounded-lg">
                <p className="text-sm">
                  <strong>Importante:</strong> Las Cookies se asocian únicamente a un usuario anónimo y su 
                  ordenador y no proporcionan referencias que permitan deducir datos personales del usuario.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-teal-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Aceptación de las Cookies: Normativa Vigente</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>
                Al acceder a este sitio web, y de acuerdo a la normativa vigente en materia de protección de datos, 
                te informamos del uso de cookies, dándote la opción de aceptarlas expresamente y de acceder a más 
                información a través de esta Política de Cookies.
              </p>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm">
                  <strong>Nota:</strong> En el caso de continuar navegando, estarás prestando tu consentimiento 
                  para el empleo de estas cookies. Pero, en cualquier momento, podrás cambiar de opinión y bloquear 
                  su utilización a través de tu navegador.
                </p>
              </div>
              
              <h3 className="text-lg font-semibold">Normativas que cumplimos:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>El reglamento LSSI-CE (Ley de la sociedad de la información y del comercio electrónico)</li>
                <li>El RGPD (Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas)</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center mb-4">
              <Settings className="h-6 w-6 text-teal-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Tipos de Cookies</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>
                Para poder ofrecerte una mejor experiencia de usuario, obtener datos analíticos, almacenar y 
                recuperar información sobre tus hábitos de navegación o de tu equipo y desarrollar su actividad, 
                este sitio web utiliza cookies propias y de terceros.
              </p>

              <div className="grid gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Cookies Técnicas</h4>
                  <p className="text-sm text-blue-700">
                    Permiten al usuario la navegación a través de la página web y la utilización de las diferentes 
                    opciones o servicios que en ella existen como controlar el tráfico, identificar la sesión, 
                    acceder a partes de acceso restringido, etc.
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Cookies de Personalización</h4>
                  <p className="text-sm text-green-700">
                    Permiten al usuario acceder al servicio con algunas características predefinidas en función 
                    de criterios como el idioma, el tipo de navegador, la configuración regional, etc.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Cookies de Análisis</h4>
                  <p className="text-sm text-purple-700">
                    Nos permiten cuantificar el número de usuarios y realizar análisis estadístico de la utilización 
                    que hacen los usuarios del servicio ofertado. Se analiza tu navegación para mejorar la oferta 
                    de productos o servicios.
                  </p>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Cookies Publicitarias</h4>
                  <p className="text-sm text-orange-700">
                    Permiten gestionar de la forma más eficaz posible la oferta de espacios publicitarios, 
                    adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realice 
                    de nuestra página web.
                  </p>
                </div>

                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Cookies de Publicidad Comportamental</h4>
                  <p className="text-sm text-red-700">
                    Permiten la gestión de espacios publicitarios almacenando información del comportamiento 
                    de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 text-teal-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Cookies de Terceros</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>
                Esta web puede utilizar servicios de terceros que, por cuenta de Google, recopilarán información 
                con fines estadísticos, de uso del sitio por parte del usuario y para la prestación de otros 
                servicios relacionados con la actividad del sitio web.
              </p>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Google Analytics</h4>
                <p className="text-sm text-gray-700">
                Este sitio web utiliza cookies para mejorar la experiencia del usuario y analizar el tráfico. 
                En particular, se emplea Google Analytics, un servicio de análisis web prestado por Google Inc., 
                que puede recopilar datos como la dirección IP del usuario. Esta información puede ser transmitida 
                y procesada por Google, incluyendo su posible almacenamiento en servidores ubicados en Estados Unidos u otros países.


                </p>
                <p className="text-sm text-gray-700 mt-2">
                Al continuar navegando por este sitio, usted acepta el uso de estas cookies. 
                El tratamiento de los datos personales recogidos se realiza conforme a la Ley Orgánica 
                    de Protección de Datos Personales del Ecuador.


                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <div className="flex items-center mb-4">
              <Settings className="h-6 w-6 text-teal-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Gestionar y Rechazar el Uso de Cookies</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>
                En cualquier momento, puedes adaptar la configuración del navegador para gestionar, desestimar 
                el uso de cookies y ser notificado antes de que se descarguen.
              </p>
              <p>
                También puedes adaptar la configuración de forma que el navegador rechace todas las cookies, 
                o únicamente las cookies de terceros. Y también puedes eliminar cualquiera de las cookies que 
                ya se encuentren en tu equipo.
              </p>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm">
                  <strong>Importante:</strong> Tendrás que adaptar por separado la configuración de cada navegador 
                  y equipo que utilices ya que las cookies se asocian al navegador, no a la persona.
                </p>
              </div>

              <h3 className="text-lg font-semibold mt-6">Configuración por Navegador:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Google Chrome</h4>
                  <a href="https://support.google.com/chrome/answer/95647?hl=es-419" 
                     className="text-teal-600 hover:text-orange-500 text-sm underline"
                     target="_blank" rel="noopener noreferrer">
                    Ver configuración →
                  </a>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Internet Explorer</h4>
                  <a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-10" 
                     className="text-teal-600 hover:text-orange-500 text-sm underline"
                     target="_blank" rel="noopener noreferrer">
                    Ver configuración →
                  </a>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Mozilla Firefox</h4>
                  <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" 
                     className="text-teal-600 hover:text-orange-500 text-sm underline"
                     target="_blank" rel="noopener noreferrer">
                    Ver configuración →
                  </a>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Apple Safari</h4>
                  <a href="https://support.apple.com/es-es/HT201265" 
                     className="text-teal-600 hover:text-orange-500 text-sm underline"
                     target="_blank" rel="noopener noreferrer">
                    Ver configuración →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-teal-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-teal-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Contacto</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>
                Si tienes cualquier duda sobre esta Política de Cookies, puedes contactar con nosotros.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Email:</strong> info@saludpet.com</p>
                  <p><strong>Teléfono:</strong> +593 4 123-4567</p>
                </div>
                <div>
                  <p><strong>Dirección:</strong> Guayaquil, Ecuador</p>
                  <p><strong>Horario:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              © 2025 SaludPet. Todos los derechos reservados. | 
              <a href="/privacy" className="text-teal-600 hover:underline ml-1">Política de Privacidad</a> | 
              <a href="/terms" className="text-teal-600 hover:underline ml-1">Términos de Servicio</a>
            </p>

          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;