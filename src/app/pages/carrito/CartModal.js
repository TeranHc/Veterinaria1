'use client';
import { useState } from 'react';
import { useCart } from './CartContext';

export default function CartModal({ showCart, setShowCart }) {
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('efectivo');
  const [installments, setInstallments] = useState(1);

  // Usar el contexto del carrito
  const {
    cart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    clearCart,
    formatPrice
  } = useCart();

  // ====== FUNCIONES DE PAGO ======
  const calculateInstallmentPrice = (total, installments) => {
    const interestRates = {
      1: 0,
      3: 0.05,
      6: 0.10,
      12: 0.20
    };
    const interest = interestRates[installments] || 0;
    return (total * (1 + interest)) / installments;
  };

  const handleCheckout = () => {
    setShowCart(false);
    setShowCheckout(true);
  };

  const handleFinalizePurchase = () => {
    alert(`¡Compra finalizada!\nTotal: ${formatPrice(getTotalPrice())}\nMétodo de pago: ${paymentMethod}\nCuotas: ${installments}x`);
    clearCart();
    setShowCheckout(false);
  };

  return (
    <>
      {/* Modal del Carrito */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl border border-gray-200">
            <div className="flex justify-between items-center p-6 border-b bg-gradient-to-r from-teal-50 to-cyan-50">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <span className="text-3xl">🛒</span>
                Carrito de Compras
              </h2>
              <button
                onClick={() => setShowCart(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-96">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🛍️</span>
                  </div>
                  <p className="text-gray-500 text-lg">Tu carrito está vacío</p>
                  <p className="text-gray-400 text-sm mt-2">¡Agrega algunos productos para mascotas!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-white rounded-lg shadow-sm overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.alt}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{item.name}</h3>
                          <p className="text-teal-600 font-medium">{formatPrice(item.price)}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center bg-white rounded-lg shadow-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors duration-200"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-green-500 transition-colors duration-200"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 flex items-center justify-center text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="border-t bg-gradient-to-r from-gray-50 to-gray-100 p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-2xl font-bold text-gray-800">{formatPrice(getTotalPrice())}</p>
                    <p className="text-sm text-gray-600">Total ({getTotalItems()} productos)</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl">💰</span>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button
                    onClick={clearCart}
                    className="flex-1 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Vaciar Carrito
                  </button>
                  <button
                    onClick={handleCheckout}
                    className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Proceder al Pago
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal de Checkout */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b bg-gradient-to-r from-green-50 to-teal-50">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <span className="text-3xl">💳</span>
                Finalizar Compra
              </h2>
              <button
                onClick={() => setShowCheckout(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              {/* Resumen de compra */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="text-xl">📋</span>
                  Resumen de tu compra
                </h3>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border">
                  <div className="flex justify-between mb-2">
                    <span>Productos ({getTotalItems()})</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total</span>
                    <span className="text-teal-600">{formatPrice(getTotalPrice())}</span>
                  </div>
                </div>
              </div>

              {/* Selección de forma de pago */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="text-xl">💰</span>
                  Selecciona tu forma de pago:
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border-2 rounded-xl cursor-pointer hover:bg-green-50 hover:border-green-300 transition-all duration-200">
                    <input
                      type="radio"
                      name="payment"
                      value="club_pycca"
                      checked={paymentMethod === 'club_pycca'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-4 scale-125"
                    />
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-white text-lg font-bold">CP</span>
                      </div>
                      <div>
                        <span className="font-medium">Club Pycca</span>
                        <p className="text-sm text-green-600">¡10% de descuento!</p>
                      </div>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-4 border-2 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all duration-200">
                    <input
                      type="radio"
                      name="payment"
                      value="tarjeta"
                      checked={paymentMethod === 'tarjeta'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-4 scale-125"
                    />
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-white text-xl">💳</span>
                      </div>
                      <div>
                        <span className="font-medium">Tarjeta Bancaria</span>
                        <p className="text-sm text-blue-600">Débito o crédito</p>
                      </div>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-4 border-2 rounded-xl cursor-pointer hover:bg-green-50 hover:border-green-300 transition-all duration-200">
                    <input
                      type="radio"
                      name="payment"
                      value="efectivo"
                      checked={paymentMethod === 'efectivo'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-4 scale-125"
                    />
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-white text-xl">💵</span>
                      </div>
                      <div>
                        <span className="font-medium">Efectivo</span>
                        <p className="text-sm text-green-600">Pago al momento</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Selección de cuotas para tarjeta */}
              {paymentMethod === 'tarjeta' && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-xl">📊</span>
                    Difiere tu compra:
                  </h3>
                  <select
                    value={installments}
                    onChange={(e) => setInstallments(parseInt(e.target.value))}
                    className="w-full p-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  >
                    <option value={1}>1 cuota sin interés</option>
                    <option value={3}>3 cuotas (5% interés)</option>
                    <option value={6}>6 cuotas (10% interés)</option>
                    <option value={12}>12 cuotas (20% interés)</option>
                  </select>
                  
                  {installments > 1 && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <p className="text-blue-800 font-medium">
                        💡 {installments} cuotas de {formatPrice(calculateInstallmentPrice(getTotalPrice(), installments))}
                      </p>
                      <p className="text-sm text-blue-600 mt-1">
                        Total con interés: {formatPrice(getTotalPrice() * (1 + (installments === 3 ? 0.05 : installments === 6 ? 0.10 : 0.20)))}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Mostrar descuento Club Pycca */}
              {paymentMethod === 'club_pycca' && (
                <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-2 border-green-200">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <span className="text-xl">🎉</span>
                    ¡Descuento Club Pycca aplicado!
                  </h4>
                  <div className="text-sm text-green-700">
                    <div className="flex justify-between mb-1">
                      <span>Subtotal:</span>
                      <span>{formatPrice(getTotalPrice())}</span>
                    </div>
                    <div className="flex justify-between text-green-600 mb-2">
                      <span>Descuento (10%):</span>
                      <span>-{formatPrice(getTotalPrice() * 0.10)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t border-green-300 pt-2">
                      <span>Total a pagar:</span>
                      <span className="text-green-700">{formatPrice(getTotalPrice() * 0.90)}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Total final */}
              <div className="mb-6 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border-2 border-teal-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold flex items-center gap-2">
                    <span className="text-2xl">💰</span>
                    Total a pagar:
                  </span>
                  <span className="text-3xl font-bold text-teal-600">
                    {paymentMethod === 'club_pycca' 
                      ? formatPrice(getTotalPrice() * 0.90)
                      : paymentMethod === 'tarjeta' && installments > 1
                        ? formatPrice(getTotalPrice() * (1 + (installments === 3 ? 0.05 : installments === 6 ? 0.10 : 0.20)))
                        : formatPrice(getTotalPrice())
                    }
                  </span>
                </div>
                {paymentMethod === 'tarjeta' && installments > 1 && (
                  <p className="text-sm text-teal-600 mt-2 text-center">
                    En {installments} cuotas de {formatPrice(calculateInstallmentPrice(getTotalPrice(), installments))}
                  </p>
                )}
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="border-t bg-gray-50 p-6">
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowCheckout(false)}
                  className="flex-1 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  ← Volver
                </button>
                <button
                  onClick={handleFinalizePurchase}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <span className="text-lg">✅</span>
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}