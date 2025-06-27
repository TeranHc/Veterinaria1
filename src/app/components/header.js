'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from './CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  const menuItems = [
    { href: '/', label: 'Inicio', icon: '🏠' },
    { href: '/pages/nosotros', label: 'Nosotros', icon: '👥' },
    { href: '/pages/servicio', label: 'Información Médica', icon: '🏥' },
    { href: '/pages/tienda-canina', label: 'Tienda Canina', icon: '🛍️' },
    { href: '/pages/carrito', label: 'Horarios', icon: '⏰' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 shadow-2xl" style={{ backgroundColor: '#55b7b6' }}>
        {/* Patrón decorativo de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20H30zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20H30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative z-10">
          {/* Layout específico para móvil y desktop */}
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 py-4 lg:py-6">
            
            {/* Logo y marca - lado izquierdo */}
            <div className="flex items-center group flex-shrink-0">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <img 
                    src="/images/1.png" 
                    alt="SaludPet Logo" 
                    className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 object-contain" 
                  />
                </div>
                {/* Efecto de brillo */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              </div>
              
              <div className="ml-2 sm:ml-3">
                <h1 className="text-white font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-wide drop-shadow-lg">
                  Salud<span className="text-yellow-300">Pet</span>
                </h1>

              </div>
            </div>

            {/* Navegación central - solo desktop - perfectamente centrada */}
            <nav className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
              <div className="bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg inline-flex items-center px-2 lg:px-3 xl:px-4 2xl:px-6 py-2 lg:py-2.5 xl:py-3">
                {menuItems.map((item, index) => (
                  <div key={item.href} className="flex items-center">
                    <Link 
                      href={item.href} 
                      className="flex items-center gap-1 lg:gap-1.5 xl:gap-2 text-black hover:text-yellow-300 transition-all duration-300 font-medium text-xs lg:text-sm xl:text-base 2xl:text-lg group px-1.5 lg:px-2 xl:px-3 py-1"
                    >
                      <span className="text-sm lg:text-base xl:text-lg 2xl:text-xl group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                      <span className="group-hover:tracking-wide transition-all duration-300 whitespace-nowrap hidden xl:inline">{item.label}</span>
                      {/* Versión corta para pantallas medianas */}
                      <span className="group-hover:tracking-wide transition-all duration-300 whitespace-nowrap xl:hidden">
                        {item.label.split(' ')[0]}
                      </span>
                    </Link>
                    {index < menuItems.length - 1 && (
                      <div className="w-px h-3 lg:h-3.5 xl:h-4 bg-white/30 mx-0.5 lg:mx-1 xl:mx-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Controles de la derecha - FIJOS en el lado derecho */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Botón del carrito */}
              <button
                onClick={() => setShowCart(true)}
                className="relative group"
              >
                <div className="w-10 h-10 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-3">
                  <svg className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                </div>
                
                {/* Badge del contador */}
                {getTotalItems() > 0 && (
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-400 text-red-600 text-xs font-bold rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    {getTotalItems()}
                  </div>
                )}
                
                {/* Efecto de brillo */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-0 group-hover:opacity-50 blur transition-opacity duration-300"></div>
              </button>

              {/* Botón hamburguesa - Solo móvil */}
              <button 
                className="lg:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1 group"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center space-y-1 group-hover:bg-white/30 transition-all duration-300">
                  <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Menú móvil - debajo de la línea principal */}
          <nav className={`lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="mx-4 sm:mx-6 pb-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden">
                {menuItems.map((item, index) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className={`flex items-center justify-center gap-4 text-black hover:text-yellow-300 hover:bg-white/10 transition-all duration-300 py-3 px-4 font-medium text-base ${index < menuItems.length - 1 ? 'border-b border-white/10' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>

        {/* Ondas decorativas en la parte inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-0">
          <svg className="w-full h-4 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="currentColor" fillOpacity="0.1"></path>
          </svg>
        </div>
      </header>
      {/* Modal del Carrito - Mantenemos la funcionalidad original */}
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

      {/* Modal de Checkout - Mantenemos funcionalidad original con mejor diseño */}
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