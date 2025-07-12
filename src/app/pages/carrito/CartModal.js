'use client';
import { useState } from 'react';
import { useCart } from './CartContext';
import jsPDF from 'jspdf';

export default function CartModal({ showCart, setShowCart }) {
  const [showCheckout, setShowCheckout] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('efectivo');
  const [installments, setInstallments] = useState(1);
  const [billingData, setBillingData] = useState({
    country: 'Ecuador',
    region: 'Guayas',
    city: '',
    address: '',
    apartment: '',
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    email: '',
    identification: '',
    deliveryAddress: false,
    orderNotes: ''
  });

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

  const calculateFinalTotal = () => {
    let total = getTotalPrice() * 1.15; // Con IVA
    if (paymentMethod === 'club_pycca') {
      total = total * 0.9; // 10% descuento
    }
    if (paymentMethod === 'tarjeta' && installments > 1) {
      const interestRates = { 3: 0.05, 6: 0.10, 12: 0.20 };
      total = total * (1 + (interestRates[installments] || 0));
    }
    return total;
  };

  const handleCheckout = () => {
    setShowCart(false);
    setShowCheckout(true);
  };

  const handleFinalizePurchase = () => {
    setShowCheckout(false);
    setShowOrderSummary(true);
  };

  // 3. Añade esta función para generar el PDF:
  const generateOrderPDF = () => {
    const doc = new jsPDF();
    
    // Configuración inicial
    doc.setFontSize(20);
    doc.text('RESUMEN DE PEDIDO', 20, 20);
    
    // Línea separadora
    doc.setLineWidth(0.5);
    doc.line(20, 25, 190, 25);
    
    let yPosition = 35;
    
    // Información del cliente
    doc.setFontSize(14);
    doc.text('INFORMACIÓN DEL CLIENTE', 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    doc.text(`Nombre: ${billingData.firstName} ${billingData.lastName}`, 20, yPosition);
    yPosition += 6;
    doc.text(`Email: ${billingData.email}`, 20, yPosition);
    yPosition += 6;
    doc.text(`Teléfono: ${billingData.phone}`, 20, yPosition);
    yPosition += 6;
    
    if (billingData.company) {
      doc.text(`Empresa: ${billingData.company}`, 20, yPosition);
      yPosition += 6;
    }
    
    if (billingData.identification) {
      doc.text(`Identificación: ${billingData.identification}`, 20, yPosition);
      yPosition += 6;
    }
    
    yPosition += 5;
    
    // Dirección de envío
    doc.setFontSize(14);
    doc.text('DIRECCIÓN DE ENVÍO', 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    doc.text(`Dirección: ${billingData.address}`, 20, yPosition);
    yPosition += 6;
    
    if (billingData.apartment) {
      doc.text(`Apartamento: ${billingData.apartment}`, 20, yPosition);
      yPosition += 6;
    }
    
    doc.text(`Ciudad: ${billingData.city}, ${billingData.region}`, 20, yPosition);
    yPosition += 6;
    doc.text(`País: ${billingData.country}`, 20, yPosition);
    yPosition += 10;
    
    // Método de pago
    doc.setFontSize(14);
    doc.text('MÉTODO DE PAGO', 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    const paymentText = paymentMethod === 'club_pycca' ? 'Club Pycca' : 'Tarjeta de Crédito/Débito';
    doc.text(`Método: ${paymentText}`, 20, yPosition);
    yPosition += 6;
    
    if (paymentMethod === 'club_pycca') {
      doc.text('Descuento del 10% aplicado', 20, yPosition);
      yPosition += 6;
    }
    
    if (paymentMethod === 'tarjeta' && installments > 1) {
      doc.text(`Pago en ${installments} cuotas de ${formatPrice(calculateInstallmentPrice(getTotalPrice() * 1.15, installments))}`, 20, yPosition);
      yPosition += 6;
    }
    
    yPosition += 5;
    
    // Productos
    doc.setFontSize(14);
    doc.text('PRODUCTOS', 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    cart.forEach((item) => {
      doc.text(`${item.name}`, 20, yPosition);
      doc.text(`${formatPrice(item.price)} x ${item.quantity}`, 120, yPosition);
      doc.text(`${formatPrice(item.price * item.quantity)}`, 160, yPosition);
      yPosition += 6;
    });
    
    yPosition += 5;
    
    // Resumen de costos
    doc.setFontSize(14);
    doc.text('RESUMEN DE COSTOS', 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    doc.text(`Subtotal: ${formatPrice(getTotalPrice())}`, 20, yPosition);
    yPosition += 6;
    doc.text('Envío: GRATIS', 20, yPosition);
    yPosition += 6;
    doc.text(`IVA (15%): ${formatPrice(getTotalPrice() * 0.15)}`, 20, yPosition);
    yPosition += 6;
    
    if (paymentMethod === 'club_pycca') {
      doc.text(`Descuento Club Pycca (10%): -${formatPrice(getTotalPrice() * 1.15 * 0.10)}`, 20, yPosition);
      yPosition += 6;
    }
    
    if (paymentMethod === 'tarjeta' && installments > 1) {
      const interestRate = installments === 3 ? 0.05 : installments === 6 ? 0.10 : 0.20;
      doc.text(`Interés (${interestRate * 100}%): +${formatPrice(getTotalPrice() * 1.15 * interestRate)}`, 20, yPosition);
      yPosition += 6;
    }
    
    // Total final
    doc.setFontSize(14);
    doc.text(`TOTAL FINAL: ${formatPrice(calculateFinalTotal())}`, 20, yPosition + 5);
    
    // Notas del pedido
    if (billingData.orderNotes) {
      yPosition += 20;
      doc.setFontSize(14);
      doc.text('NOTAS DEL PEDIDO', 20, yPosition);
      yPosition += 10;
      doc.setFontSize(10);
      // Dividir las notas en líneas si son muy largas
      const notes = doc.splitTextToSize(billingData.orderNotes, 170);
      doc.text(notes, 20, yPosition);
    }
    
    // Información adicional
    yPosition += 30;
    doc.setFontSize(8);
    doc.text(`Fecha del pedido: ${new Date().toLocaleDateString('es-ES')}`, 20, yPosition);
    doc.text(`Hora del pedido: ${new Date().toLocaleTimeString('es-ES')}`, 20, yPosition + 5);
    
    // Descargar el PDF
    doc.save(`pedido_${new Date().toISOString().split('T')[0]}_${billingData.lastName}.pdf`);
  };

  // ====== GENERAR PDF ======
  // 4. Modifica la función handleConfirmOrder:
  const handleConfirmOrder = () => {
    // Generar y descargar el PDF
    generateOrderPDF();
    
    alert('¡Pedido confirmado y enviado!');
    clearCart();
    setShowOrderSummary(false);
    setBillingData({
      country: 'Ecuador',
      region: 'Guayas',
      city: '',
      address: '',
      apartment: '',
      firstName: '',
      lastName: '',
      company: '',
      phone: '',
      email: '',
      identification: '',
      deliveryAddress: false,
      orderNotes: ''
    });
    setPaymentMethod('efectivo');
    setInstallments(1);
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
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] shadow-2xl overflow-hidden">
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
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Columna izquierda - Datos de facturación */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <span className="text-2xl">📋</span>
                    Detalles de facturación
                  </h3>
                  
                  {/* País/Región */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      País/Región *
                    </label>
                    <select
                      value={billingData.country}
                      onChange={(e) => setBillingData({...billingData, country: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    >
                      <option value="Ecuador">Ecuador</option>
                    </select>
                  </div>

                  {/* Región/Provincia */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Región/Provincia *
                    </label>
                    <select
                      value={billingData.region}
                      onChange={(e) => setBillingData({...billingData, region: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    >
                      <option value="Guayas">Guayas</option>
                    </select>
                  </div>

                  {/* Localidad/Ciudad */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Localidad/Ciudad *
                    </label>
                    <input
                      type="text"
                      value={billingData.city}
                      onChange={(e) => setBillingData({...billingData, city: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Ciudad"
                    />
                  </div>

                  {/* Dirección de la calle */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dirección de la calle *
                    </label>
                    <input
                      type="text"
                      value={billingData.address}
                      onChange={(e) => setBillingData({...billingData, address: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 mb-2"
                      placeholder="Número de la casa y nombre de la calle"
                    />
                    <input
                      type="text"
                      value={billingData.apartment}
                      onChange={(e) => setBillingData({...billingData, apartment: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Apartamento, habitación, etc. (opcional)"
                    />
                  </div>

                  {/* Datos del cliente */}
                  <h4 className="text-lg font-semibold mb-4 mt-6">Datos del cliente</h4>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        value={billingData.firstName}
                        onChange={(e) => setBillingData({...billingData, firstName: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Apellido *
                      </label>
                      <input
                        type="text"
                        value={billingData.lastName}
                        onChange={(e) => setBillingData({...billingData, lastName: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre de la empresa (opcional)
                    </label>
                    <input
                      type="text"
                      value={billingData.company}
                      onChange={(e) => setBillingData({...billingData, company: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      value={billingData.phone}
                      onChange={(e) => setBillingData({...billingData, phone: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dirección de correo electrónico *
                    </label>
                    <input
                      type="email"
                      value={billingData.email}
                      onChange={(e) => setBillingData({...billingData, email: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Identificación
                    </label>
                    <input
                      type="text"
                      value={billingData.identification}
                      onChange={(e) => setBillingData({...billingData, identification: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={billingData.deliveryAddress}
                        onChange={(e) => setBillingData({...billingData, deliveryAddress: e.target.checked})}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700">¿Enviar a una dirección diferente?</span>
                    </label>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Notas del pedido (opcional)
                    </label>
                    <textarea
                      value={billingData.orderNotes}
                      onChange={(e) => setBillingData({...billingData, orderNotes: e.target.value})}
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Notas sobre tu pedido, por ejemplo, notas especiales para la entrega..."
                    />
                  </div>
                </div>

                {/* Columna derecha - Orden y pagos */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <span className="text-2xl">📦</span>
                    Orden
                  </h3>
                  
                  {/* Productos */}
                  <div className="mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center font-semibold mb-3 pb-2 border-b">
                        <span>PRODUCTO</span>
                        <span>SUBTOTAL</span>
                      </div>
                      {cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                          <div className="flex items-center space-x-3">
                            <img src={item.image} alt={item.alt} className="w-12 h-12 object-contain bg-white rounded border" />
                            <div>
                              <span className="font-medium text-sm">{item.name}</span>
                              <span className="text-gray-500 text-sm ml-2">× {item.quantity}</span>
                            </div>
                          </div>
                          <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                        </div>
                      ))}
                      
                      <div className="mt-4 pt-4 border-t">
                        <div className="flex justify-between mb-2">
                          <span>Subtotal</span>
                          <span>{formatPrice(getTotalPrice())}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span>Envío</span>
                          <span className="text-sm">
                            <div className="flex items-center text-green-600">
                              <input type="radio" name="shipping" defaultChecked className="mr-1" />
                              Envío gratuito
                            </div>
                          </span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span>IVA</span>
                          <span>{formatPrice(getTotalPrice() * 0.15)}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg pt-2 border-t">
                          <span>Total</span>
                          <span className="text-teal-600">{formatPrice(getTotalPrice() * 1.15)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Métodos de pago */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Método de pago</h4>
                    <div className="space-y-3">
                      <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="payment"
                          value="club_pycca"
                          checked={paymentMethod === 'club_pycca'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mr-3"
                        />
                        <div>
                          <span className="font-medium">Club Pycca</span>
                          <p className="text-sm text-green-600">¡10% de descuento!</p>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="payment"
                          value="tarjeta"
                          checked={paymentMethod === 'tarjeta'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mr-3"
                        />
                        <div>
                          <span className="font-medium">Pago con tarjeta de crédito o débito</span>
                          <p className="text-sm text-gray-600">Pago con tarjeta de crédito o débito</p>
                        </div>
                      </label>
                    </div>
                    
                    {/* Descuento Club Pycca */}
                    {paymentMethod === 'club_pycca' && (
                      <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center justify-between">
                          <span className="text-green-700 font-medium">Descuento Club Pycca (10%)</span>
                          <span className="text-green-700 font-bold">-{formatPrice(getTotalPrice() * 0.10)}</span>
                        </div>
                        <p className="text-sm text-green-600 mt-1">¡Felicidades! Tienes un descuento del 10% por ser miembro del Club Pycca</p>
                      </div>
                    )}
                    
                    {/* Opciones de cuotas para tarjeta */}
                    {paymentMethod === 'tarjeta' && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm mb-3">Pago con tarjeta de crédito o débito</p>
                        <select
                          value={installments}
                          onChange={(e) => setInstallments(parseInt(e.target.value))}
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 mb-3"
                        >
                          <option value={1}>1 cuota sin interés</option>
                          <option value={3}>3 cuotas (5% interés)</option>
                          <option value={6}>6 cuotas (10% interés)</option>
                          <option value={12}>12 cuotas (20% interés)</option>
                        </select>
                        
                        {/* Información de cuotas */}
                        {installments > 1 && (
                          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                            <p className="text-blue-700 font-medium text-sm mb-1">
                              Pago en {installments} cuotas:
                            </p>
                            <p className="text-blue-600 text-sm">
                              {installments} cuotas de {formatPrice(calculateInstallmentPrice(getTotalPrice() * 1.15, installments))} c/u
                            </p>
                            <p className="text-blue-500 text-xs mt-1">
                              Total con interés: {formatPrice(getTotalPrice() * 1.15 * (1 + (installments === 3 ? 0.05 : installments === 6 ? 0.10 : 0.20)))}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Términos y condiciones */}
                  <div className="mb-6">
                    <label className="flex items-start">
                      <input type="checkbox" className="mr-2 mt-1" />
                      <span className="text-sm text-gray-700">
                        
                        He leído y estoy de acuerdo con los <span className="text-teal-600 underline cursor-pointer">
                          <a 
                          href="/pages/condiciones" 
                          className="text-teal-600 hover:text-orange-500 transition-colors underline font-medium"
                          target="_blank"
                          rel="noopener noreferrer">
                            términos y condiciones de la web
                          </a>
                        </span>
                      </span>
                    </label>
                  </div>

                  {/* Botón de realizar pedido */}
                  <button
                    onClick={handleFinalizePurchase}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-lg font-medium transition-colors duration-200"
                  >
                    REALIZAR EL PEDIDO
                  </button>
                </div>  
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Resumen de Compra */}
      {showOrderSummary && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[100vh] shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b bg-gradient-to-r from-green-50 to-emerald-50">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <span className="text-3xl">✅</span>
                Resumen de tu Pedido
              </h2>
              <button
                onClick={() => setShowOrderSummary(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-160px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Columna izquierda - Información del pedido */}
                <div className="space-y-6">
                  {/* Datos del cliente */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
                      <span className="text-2xl">👤</span>
                      Información del Cliente
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Nombre:</span>
                        <span className="font-medium">{billingData.firstName} {billingData.lastName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Email:</span>
                        <span className="font-medium">{billingData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Teléfono:</span>
                        <span className="font-medium">{billingData.phone}</span>
                      </div>
                      {billingData.company && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Empresa:</span>
                          <span className="font-medium">{billingData.company}</span>
                        </div>
                      )}
                      {billingData.identification && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Identificación:</span>
                          <span className="font-medium">{billingData.identification}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Dirección de envío */}
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
                      <span className="text-2xl">🏠</span>
                      Dirección de Envío
                    </h3>
                    <div className="space-y-2">
                      <p className="font-medium">{billingData.address}</p>
                      {billingData.apartment && (
                        <p className="text-gray-600">{billingData.apartment}</p>
                      )}
                      <p className="text-gray-700">{billingData.city}, {billingData.region}</p>
                      <p className="text-gray-700">{billingData.country}</p>
                      <div className="mt-4 p-3 bg-green-100 rounded-lg">
                        <p className="text-green-800 font-medium flex items-center gap-2">
                          <span>🚚</span>
                          Envío GRATUITO
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Método de pago */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
                      <span className="text-2xl">💳</span>
                      Método de Pago
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Método:</span>
                        <span className="font-medium capitalize">
                          {paymentMethod === 'club_pycca' ? 'Club Pycca' : 'Tarjeta de Crédito/Débito'}
                        </span>
                      </div>
                      
                      {paymentMethod === 'club_pycca' && (
                        <div className="p-3 bg-green-100 rounded-lg">
                          <p className="text-green-800 font-medium">
                            ¡Descuento del 10% aplicado! 🎉
                          </p>
                        </div>
                      )}
                      
                      {paymentMethod === 'tarjeta' && installments > 1 && (
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <p className="text-blue-800 font-medium">
                            Pago en {installments} cuotas de {formatPrice(calculateInstallmentPrice(getTotalPrice() * 1.15, installments))}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Notas del pedido */}
                  {billingData.orderNotes && (
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
                        <span className="text-2xl">📝</span>
                        Notas del Pedido
                      </h3>
                      <p className="text-gray-700 italic">"{billingData.orderNotes}"</p>
                    </div>
                  )}
                </div>

                {/* Columna derecha - Productos y total */}
                <div className="space-y-6">
                  {/* Productos */}
                  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
                      <span className="text-2xl">🛍️</span>
                      Productos ({getTotalItems()} artículos)
                    </h3>
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden">
                              <img 
                                src={item.image} 
                                alt={item.alt}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
                              <p className="text-gray-600 text-sm">
                                {formatPrice(item.price)} × {item.quantity}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-teal-600">
                              {formatPrice(item.price * item.quantity)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Total detallado */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
                      <span className="text-2xl">💰</span>
                      Resumen de Costos
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="font-medium">{formatPrice(getTotalPrice())}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Envío:</span>
                        <span className="font-medium text-green-600">GRATIS</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">IVA (15%):</span>
                        <span className="font-medium">{formatPrice(getTotalPrice() * 0.15)}</span>
                      </div>
                      
                      {paymentMethod === 'club_pycca' && (
                        <div className="flex justify-between text-green-600">
                          <span>Descuento Club Pycca (10%):</span>
                          <span className="font-medium">-{formatPrice(getTotalPrice() * 1.15 * 0.10)}</span>
                        </div>
                      )}
                      
                      {paymentMethod === 'tarjeta' && installments > 1 && (
                        <div className="flex justify-between text-blue-600">
                          <span>Interés ({installments === 3 ? '5' : installments === 6 ? '10' : '20'}%):</span>
                          <span className="font-medium">
                            +{formatPrice(getTotalPrice() * 1.15 * (installments === 3 ? 0.05 : installments === 6 ? 0.10 : 0.20))}
                          </span>
                        </div>
                      )}
                      
                      <div className="border-t pt-3">
                        <div className="flex justify-between text-2xl font-bold">
                          <span className="text-gray-800">Total Final:</span>
                          <span className="text-green-600">{formatPrice(calculateFinalTotal())}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="border-t bg-gradient-to-r from-gray-50 to-gray-100 p-6">
              <div className="flex space-x-4">
                <button
                  onClick={() => {
                    setShowOrderSummary(false);
                    setShowCheckout(true);
                  }}
                  className="flex-1 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  ← Volver a Editar
                </button>
                <button
                  onClick={handleConfirmOrder}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  ✅ Confirmar Pedido
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}