'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-header">
      {/* Contenedor principal */}
      <div className="flex flex-col">
        
        {/* Sección superior con logo y título */}
        <div className="flex items-center justify-between px-4 lg:px-11 pt-5 pb-4 lg:pb-0">
          {/* Logo y título a la izquierda */}
          <div className="flex items-center">
            <h1 className="font-bold text-black flex items-center text-xl lg:text-3xl">
              <img 
                src="/images/1.png" 
                alt="SaludPet Logo" 
                className="mr-2 lg:mr-3 w-12 h-12 lg:w-24 lg:h-24" 
              />
              <span className="hidden sm:block">SaludPet</span>
            </h1>
          </div>

          {/* Botón hamburguesa para móvil */}
          <button 
            className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Imágenes del gato y perro a la derecha - Solo en desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <img 
              src="/images/gato.png" 
              alt="Gato" 
              className="w-24 h-24 brightness-0" 
            />
            <img 
              src="/images/perro fondo.png" 
              alt="Perro" 
              className="w-24 h-24 brightness-0" 
            />
          </div>
        </div>

        {/* Menú de navegación */}
        <div className="flex justify-center">
          {/* Menú desktop */}
          <nav className="hidden lg:block menu-nav">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/" className="text-white text-lg font-medium hover:text-teal-200 transition-colors">
                Inicio
              </Link>
              <span className="text-white">|</span>
              <Link href="/pages/nosotros" className="text-white text-lg font-medium hover:text-teal-200 transition-colors">
                Nosotros
              </Link>
              <span className="text-white">|</span>
              <Link href="/pages/servicio" className="text-white text-lg font-medium hover:text-teal-200 transition-colors">
                Información Médica
              </Link>
              <span className="text-white">|</span>
              <Link href="/pages/tienda-canina" className="text-white text-lg font-medium hover:text-teal-200 transition-colors">
                Tienda Canina
              </Link>
              <span className="text-white">|</span>
              <Link href="/pages/carrito" className="text-white text-lg font-medium hover:text-teal-200 transition-colors">
                Horarios
              </Link>
            </div>
          </nav>

          {/* Menú móvil */}
          <nav className={`lg:hidden w-full transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col bg-teal-600 mx-4 rounded-lg mt-4">
              <Link 
                href="/" 
                className="text-white text-lg font-medium hover:text-teal-200 transition-colors py-4 text-center border-b-2 border-gray first:rounded-t-lg last:border-b-0 last:rounded-b-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/pages/nosotros" 
                className="text-white text-lg font-medium hover:text-teal-200 transition-colors py-4 text-center border-b-2 border-gray last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                href="/informacion-medica" 
                className="text-white text-lg font-medium hover:text-teal-200 transition-colors py-4 text-center border-b-2 border-gray last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Información Médica
              </Link>
              <Link 
                href="/pages/tienda-canina" 
                className="text-white text-lg font-medium hover:text-teal-200 transition-colors py-4 text-center border-b-2 border-gray last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Tienda Canina
              </Link>
              <Link 
                href="/pages/carrito" 
                className="text-white text-lg font-medium hover:text-teal-200 transition-colors py-4 text-center border-b-2 border-gray last:border-b-0 last:rounded-b-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Horarios
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}