
import React from 'react';
import { Truck, Package, RefreshCw, Clock, Shield, Phone, Mail, MapPin } from 'lucide-react';

const ShippingReturnsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Envío y Devoluciones</h1>
          <p className="text-xl text-center opacity-90">
            Información sobre nuestras políticas de envío y devoluciones
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Navegación interna */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="#shipping" className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Política de Envío</span>
            </div>
          </a>
          <a href="#returns" className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
            <div className="flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-green-600" />
              <span className="font-medium">Cambios y Devoluciones</span>
            </div>
          </a>
        </div>

        {/* Política de Envío */}
        <section id="shipping" className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Política de Envío</h2>
            </div>

            <div className="space-y-8">
              {/* Productos */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-blue-600" />
                  Productos para Mascotas
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-3">Envío Estándar</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Clock className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                        <span>3-5 días hábiles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0">$</span>
                        <span>Envío gratuito en compras mayores a $50</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0">$</span>
                        <span>$5.99 para pedidos menores</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-3">Envío Express</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Clock className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                        <span>1-2 días hábiles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-4 h-4 mt-1 text-green-600 flex-shrink-0">$</span>
                        <span>$12.99 costo adicional</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                        <span>Seguro incluido</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Servicios Veterinarios */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Servicios Veterinarios
                </h3>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-800 mb-3">Consultas a Domicilio</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Programación con 24-48 horas de anticipación</li>
                        <li>• Área de cobertura: 15 km del centro de la ciudad</li>
                        <li>• Costo adicional de $20 por traslado</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-3">Medicamentos</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Entrega en 2-4 horas (medicamentos urgentes)</li>
                        <li>• Entrega estándar: mismo día</li>
                        <li>• Refrigerados: entrega inmediata</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Condiciones generales */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Condiciones Generales de Envío</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Los tiempos de entrega se calculan en días hábiles (lunes a viernes)</li>
                  <li>• Productos perecederos requieren confirmación de recepción</li>
                  <li>• Alimentos refrigerados solo se entregan en horarios específicos</li>
                  <li>• Es necesario que alguien esté presente para recibir productos veterinarios</li>
                  <li>• Los envíos se realizan de 8:00 AM a 6:00 PM</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Política de Cambios y Devoluciones */}
        <section id="returns" className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-3 rounded-full">
                <RefreshCw className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Política de Cambios y Devoluciones</h2>
            </div>

            <div className="space-y-8">
              {/* Productos */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Productos para Mascotas</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-3">Productos Elegibles</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Alimentos secos sin abrir (30 días)</li>
                      <li>• Juguetes y accesorios (15 días)</li>
                      <li>• Productos de higiene sin usar (30 días)</li>
                      <li>• Correas, collares y arneses (15 días)</li>
                      <li>• Camas y mantas (7 días, sin usar)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-3">Productos NO Elegibles</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Alimentos perecederos o refrigerados</li>
                      <li>• Medicamentos y suplementos</li>
                      <li>• Productos de higiene abiertos</li>
                      <li>• Productos personalizados</li>
                      <li>• Alimentos húmedos abiertos</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">Condiciones para Devoluciones</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Productos en su empaque original</li>
                    <li>• Incluir recibo o comprobante de compra</li>
                    <li>• Productos sin daños causados por uso</li>
                    <li>• Etiquetas y sellos intactos</li>
                  </ul>
                </div>
              </div>

              {/* Servicios Veterinarios */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Servicios Veterinarios</h3>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-3">Política de Cancelación</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Cancelación gratuita hasta 24 horas antes de la cita</li>
                    <li>• Cancelación con 12-24 horas: 50% del costo</li>
                    <li>• Cancelación con menos de 12 horas: costo completo</li>
                    <li>• Emergencias médicas: política flexible</li>
                    <li>• Reprogramación gratuita una vez por cita</li>
                  </ul>
                </div>
              </div>

              {/* Proceso de devolución */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Proceso de Devolución</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Contacta con nosotros</h4>
                    <p className="text-gray-600 text-sm">Envía un email o llama para iniciar el proceso</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Envía el producto</h4>
                    <p className="text-gray-600 text-sm">Empaca el producto y envíalo a nuestra dirección</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">Recibe tu reembolso</h4>
                    <p className="text-gray-600 text-sm">Procesamos el reembolso en 3-5 días hábiles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">¿Necesitas ayuda?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-2">Teléfono</h3>
              <p>+593 4 123-4567</p>
              <p className="text-sm opacity-90">Lun-Vie: 8:00 AM - 6:00 PM</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p>info@saludpet.com</p>
              <p className="text-sm opacity-90">Respuesta en 24 horas</p>
            </div>
            
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-2">Dirección</h3>
              <p>Calle Principal 123</p>
              <p className="text-sm opacity-90">Guayaquil, Ecuador</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShippingReturnsPage;