import React, { useState } from 'react';
import { CreditCard, Banknote, Smartphone, Calendar, Shield, CheckCircle, Clock, AlertCircle, DollarSign, Building, Wallet } from 'lucide-react';

const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    {
      id: 'credit-cards',
      icon: CreditCard,
      title: 'Tarjetas de Crédito y Débito',
      description: 'Visa, Mastercard, American Express',
      fees: 'Sin comisiones adicionales',
      processing: 'Inmediato',
      security: 'Cifrado SSL 256-bit',
      color: 'blue'
    },
    {
      id: 'bank-transfer',
      icon: Building,
      title: 'Transferencia Bancaria',
      description: 'Transferencias nacionales e internacionales',
      fees: 'Según tu banco',
      processing: '1-3 días hábiles',
      security: 'Verificación bancaria',
      color: 'green'
    },
    {
      id: 'digital-wallets',
      icon: Smartphone,
      title: 'Billeteras Digitales',
      description: 'PayPal, Apple Pay, Google Pay',
      fees: 'Sin comisiones',
      processing: 'Inmediato',
      security: 'Autenticación biométrica',
      color: 'purple'
    },
    {
      id: 'cash',
      icon: Banknote,
      title: 'Efectivo',
      description: 'Solo para servicios presenciales',
      fees: 'Sin comisiones',
      processing: 'Inmediato',
      security: 'Recibo físico',
      color: 'orange'
    },
    {
      id: 'financing',
      icon: Calendar,
      title: 'Planes de Financiamiento',
      description: 'Para tratamientos veterinarios costosos',
      fees: 'Según plan elegido',
      processing: '24-48 horas aprobación',
      security: 'Evaluación crediticia',
      color: 'indigo'
    },
    {
      id: 'insurance',
      icon: Shield,
      title: 'Seguros de Mascotas',
      description: 'Cobertura directa con aseguradoras',
      fees: 'Según póliza',
      processing: 'Según aseguradora',
      security: 'Verificación de cobertura',
      color: 'teal'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-900',
      green: 'bg-green-50 border-green-200 text-green-900',
      purple: 'bg-purple-50 border-purple-200 text-purple-900',
      orange: 'bg-orange-50 border-orange-200 text-orange-900',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-900',
      teal: 'bg-teal-50 border-teal-200 text-teal-900'
    };
    return colors[color] || colors.blue;
  };

  const getIconColor = (color) => {
    const colors = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600',
      indigo: 'text-indigo-600',
      teal: 'text-teal-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Wallet className="h-16 w-16 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Métodos de Pago
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos múltiples opciones de pago seguras y convenientes para tus compras 
            de productos para mascotas y servicios veterinarios.
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paymentMethods.map((method) => {
            const IconComponent = method.icon;
            return (
              <div
                key={method.id}
                className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  selectedMethod === method.id ? 'ring-2 ring-purple-500' : ''
                }`}
                onClick={() => setSelectedMethod(selectedMethod === method.id ? null : method.id)}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full ${getColorClasses(method.color)}`}>
                    <IconComponent className={`h-6 w-6 ${getIconColor(method.color)}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{method.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{method.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Comisiones:</span>
                    <span className="text-sm font-medium">{method.fees}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Procesamiento:</span>
                    <span className="text-sm font-medium">{method.processing}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Seguridad:</span>
                    <span className="text-sm font-medium">{method.security}</span>
                  </div>
                </div>
                
                {selectedMethod === method.id && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Haz clic en "Proceder al Pago" para continuar con {method.title.toLowerCase()}.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Detailed Information Sections */}
        <div className="space-y-8">
          
          {/* Security Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Seguridad en Pagos</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Medidas de Protección</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span className="text-gray-700">Cifrado SSL 256-bit en todas las transacciones</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span className="text-gray-700">Cumplimiento con estándares PCI DSS</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span className="text-gray-700">Verificación 3D Secure para tarjetas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span className="text-gray-700">Monitoreo 24/7 de transacciones</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Protección al Cliente</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span className="text-gray-700">Garantía de devolución del 100%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span className="text-gray-700">Protección contra fraude</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span className="text-gray-700">Soporte 24/7 para problemas de pago</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span className="text-gray-700">No almacenamos datos de tarjetas</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Special Payment Plans */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Calendar className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Planes de Pago Especiales</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-3">Plan Básico</h3>
                <div className="space-y-2">
                  <p className="text-sm text-blue-800">• 3 cuotas sin interés</p>
                  <p className="text-sm text-blue-800">• Compras desde $100</p>
                  <p className="text-sm text-blue-800">• Aprobación inmediata</p>
                  <p className="text-sm text-blue-800">• Solo servicios veterinarios</p>
                </div>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="text-lg font-bold text-green-900 mb-3">Plan Avanzado</h3>
                <div className="space-y-2">
                  <p className="text-sm text-green-800">• 6 cuotas con interés reducido</p>
                  <p className="text-sm text-green-800">• Compras desde $500</p>
                  <p className="text-sm text-green-800">• Evaluación crediticia</p>
                  <p className="text-sm text-green-800">• Cirugías y tratamientos</p>
                </div>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="text-lg font-bold text-purple-900 mb-3">Plan Premium</h3>
                <div className="space-y-2">
                  <p className="text-sm text-purple-800">• 12 cuotas flexibles</p>
                  <p className="text-sm text-purple-800">• Compras desde $1000</p>
                  <p className="text-sm text-purple-800">• Línea de crédito renovable</p>
                  <p className="text-sm text-purple-800">• Emergencias veterinarias</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                <p className="text-sm text-yellow-800">
                  Los planes de financiamiento están sujetos a aprobación crediticia y pueden tener tasas de interés variables.
                </p>
              </div>
            </div>
          </section>

          {/* Insurance Integration */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Seguros de Mascotas Aceptados</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">PetSure</h3>
                <p className="text-sm text-gray-600">Cobertura integral</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">VetAssist</h3>
                <p className="text-sm text-gray-600">Emergencias y rutina</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">AnimalCare</h3>
                <p className="text-sm text-gray-600">Medicina preventiva</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900">PetProtect</h3>
                <p className="text-sm text-gray-600">Cobertura básica</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cómo Funciona</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-purple-600">1</span>
                  </div>
                  <p className="text-gray-700">Presenta tu tarjeta de seguro al momento del servicio</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-purple-600">2</span>
                  </div>
                  <p className="text-gray-700">Verificamos tu cobertura en tiempo real</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-purple-600">3</span>
                  </div>
                  <p className="text-gray-700">Facturamos directamente a tu aseguradora</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-purple-600">4</span>
                  </div>
                  <p className="text-gray-700">Solo pagas tu deducible y copago</p>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Processing Times */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Clock className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Tiempos de Procesamiento</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Método de Pago</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Procesamiento</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Disponibilidad</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Límites</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4">Tarjetas de Crédito/Débito</td>
                    <td className="py-3 px-4">Inmediato</td>
                    <td className="py-3 px-4">24/7</td>
                    <td className="py-3 px-4">$10,000 por transacción</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Billeteras Digitales</td>
                    <td className="py-3 px-4">Inmediato</td>
                    <td className="py-3 px-4">24/7</td>
                    <td className="py-3 px-4">$5,000 por día</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Transferencia Bancaria</td>
                    <td className="py-3 px-4">1-3 días hábiles</td>
                    <td className="py-3 px-4">Días hábiles</td>
                    <td className="py-3 px-4">Sin límite</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Efectivo</td>
                    <td className="py-3 px-4">Inmediato</td>
                    <td className="py-3 px-4">Horario de atención</td>
                    <td className="py-3 px-4">$2,000 por pago</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">¿Puedo cambiar el método de pago después de realizar el pedido?</h3>
                <p className="text-gray-600">Sí, puedes cambiar el método de pago hasta 2 horas después de realizar el pedido, contactando a nuestro servicio al cliente.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">¿Se guardan los datos de mi tarjeta?</h3>
                <p className="text-gray-600">No, no almacenamos información de tarjetas de crédito. Utilizamos tokens seguros para pagos recurrentes.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">¿Qué hago si mi pago es rechazado?</h3>
                <p className="text-gray-600">Verifica los datos de tu tarjeta, límites disponibles y contacta a tu banco. También puedes intentar con otro método de pago.</p>
              </div>
              <div className="pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">¿Ofrecen descuentos por pago en efectivo?</h3>
                <p className="text-gray-600">Sí, ofrecemos un 3% de descuento en servicios veterinarios pagados en efectivo.</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-purple-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <DollarSign className="h-6 w-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">¿Necesitas Ayuda con tu Pago?</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>Nuestro equipo de soporte está disponible para ayudarte con cualquier problema de pago.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Teléfono:</strong> +1 (555) 123-4567</p>
                  <p><strong>Email:</strong> pagos@petvetcare.com</p>
                </div>
                <div>
                  <p><strong>Chat en vivo:</strong> Disponible 24/7</p>
                  <p><strong>WhatsApp:</strong> +1 (555) 987-6543</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-gray-200 mt-8">
          <p className="text-sm text-gray-500">
            © 2025 PetVet Care. Todos los derechos reservados. | 
            <a href="/privacy" className="text-purple-600 hover:underline ml-1">Política de Privacidad</a> | 
            <a href="/terms" className="text-purple-600 hover:underline ml-1">Términos de Servicio</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;