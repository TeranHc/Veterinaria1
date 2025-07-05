'use client';

import React from 'react';
import { CreditCard, Banknote, HandCoins, Info } from 'lucide-react';

const PaymentMethods = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <CreditCard className="h-14 w-14 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Métodos de Pago</h1>
          <p className="text-gray-600 mt-2">
            Conoce las formas de pago disponibles para realizar tus compras con seguridad y comodidad.
          </p>
        </div>

        {/* Métodos disponibles */}
        <div className="bg-white shadow rounded-lg p-6 space-y-6 text-gray-800">
          <div className="flex items-start gap-4">
            <CreditCard className="h-6 w-6 text-green-600 mt-1" />
            <div>
              <h2 className="font-semibold text-lg">Tarjetas Bancarias</h2>
              <p className="text-sm mt-1">
                Aceptamos pagos con tarjetas de crédito y débito de las principales entidades bancarias del país. 
                El procesamiento es seguro y cumple con los estándares PCI DSS para proteger tus datos.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Banknote className="h-6 w-6 text-green-600 mt-1" />
            <div>
              <h2 className="font-semibold text-lg">Transferencias Bancarias</h2>
              <p className="text-sm mt-1">
                Puedes realizar tu pago mediante transferencia bancaria directa a nuestra cuenta. 
                Los detalles de la cuenta se mostrarán al momento de confirmar tu pedido. 
                Una vez recibido el pago, procederemos con el envío o la reserva del servicio.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <HandCoins className="h-6 w-6 text-green-600 mt-1" />
            <div>
              <h2 className="font-semibold text-lg">Pago en Efectivo</h2>
              <p className="text-sm mt-1">
                También puedes pagar en efectivo al momento de recoger tu pedido en tienda o al recibirlo en tu domicilio 
                (válido solo para entregas locales con entrega directa).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Info className="h-6 w-6 text-yellow-500 mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-yellow-600">Información Importante</h2>
              <ul className="list-disc list-inside text-sm mt-1 text-gray-700 space-y-1">
                <li>No aceptamos billeteras digitales (como PayPhone, DLocal, etc.).</li>
                <li>No ofrecemos financiamiento, planes de pago especiales ni seguros para mascotas.</li>
                <li>Todos los pagos deben completarse para confirmar el pedido o la cita veterinaria.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-12">
          ¿Tienes dudas? Escríbenos a <span className="text-green-700 font-medium">pagos@petvetcare.com</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
