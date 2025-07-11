'use client';

import React from 'react';
import { CreditCard, Banknote, HandCoins, Info, ShoppingBag } from 'lucide-react';

const PaymentMethods = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Encabezado decorativo */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 py-16 text-white text-center py-16 text-white text-center">
        <div className="flex justify-center mb-4">
          <CreditCard className="h-14 w-14 text-white" />
        </div>
        <h1 className="text-4xl font-bold uppercase">Métodos de Pago</h1>
        <p className="text-lg opacity-90 mt-2">
          Realiza tus compras con seguridad y comodidad usando nuestras opciones de pago.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Métodos disponibles */}
        <div className="grid gap-6">
          <div className="bg-white shadow-lg rounded-xl p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300">
            <ShoppingBag className="h-5 w-5 text-teal-600 mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-gray-800">Club Pycca</h2>
              <p className="text-sm text-gray-700 mt-1">
                Paga de forma segura con tu cuenta Club Pycca. Los pagos se procesan rápidamente, garantizando una experiencia sin complicaciones para tus compras o servicios veterinarios.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300">
            <CreditCard className="h-5 w-5 text-teal-600 mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-gray-800">Tarjetas Bancarias</h2>
              <p className="text-sm text-gray-700 mt-1">
                Aceptamos tarjetas de crédito y débito de las principales entidades bancarias. Todas las transacciones cumplen con los estándares PCI DSS para proteger tus datos personales y financieros.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300">
            <Banknote className="h-5 w-5 text-teal-600 mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-gray-800">Transferencias Bancarias</h2>
              <p className="text-sm text-gray-700 mt-1">
                Realiza pagos mediante transferencia bancaria directa. Los detalles de la cuenta se proporcionan al confirmar tu pedido. Procesamos el envío o servicio tras verificar el pago.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300">
            <HandCoins className="h-5 w-5 text-teal-600 mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-gray-800">Efectivo</h2>
              <p className="text-sm text-gray-700 mt-1">
                Paga en efectivo al recoger tu pedido en tienda o al recibirlo en tu domicilio (disponible solo para entregas locales directas). Garantizamos un proceso confiable y seguro.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300">
            <Info className="h-5 w-5 text-yellow-500 mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-yellow-600">Información Importante</h2>
              <ul className="list-disc pl-5 text-sm text-gray-700 mt-2 space-y-2">
                <li>No aceptamos billeteras digitales como PayPhone o DLocal.</li>
                <li>No ofrecemos financiamiento, planes de pago especiales ni seguros para mascotas.</li>
                <li>Todos los pagos deben completarse para confirmar pedidos o citas veterinarias.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pie de contacto */}
        <div className="text-center text-sm text-gray-600 mt-12">
          ¿Dudas sobre los pagos? Escríbenos a{' '}
          <a href="mailto:pagos@petvetcare.com" className="font-medium text-teal-700 hover:underline">
            pagos@saludpet.com
          </a>{' '}
          o llámanos al{' '}
          <a href="tel:+1234567890" className="font-medium text-teal-700 hover:underline">
            +593 4 123-4567
          </a>.
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;