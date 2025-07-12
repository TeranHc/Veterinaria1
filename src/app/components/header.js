'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../pages/carrito/CartContext';
import CartModal from '../pages/carrito/CartModal';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // Usar el contexto del carrito
  const {
    getTotalItems,
  } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
                <a 
                  href="/" 
                  className="text-teal-600 hover:text-orange-500 transition-colors underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <h1 className="text-white font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-wide drop-shadow-lg">
                  Salud<span className="text-yellow-300">Pet</span>
                </h1>
                </a>
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


      </header>

      {/* Componente del carrito separado */}
      <CartModal showCart={showCart} setShowCart={setShowCart} />
    </>
  );
}