'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar si ya se aceptaron las cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
    
    // Opcional: Recargar para activar Google Analytics
    window.location.reload();
  };

  const rejectCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowBanner(false);
    
    // Opcional: Desactivar Google Analytics
    window['ga-disable-G-LTR1CZ4WQY'] = true;
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-teal-500 shadow-2xl z-50 p-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
            <h3 className="text-xl font-semibold text-gray-800">Utilizamos cookies</h3>
          </div>
          <p className="text-base text-gray-700 leading-relaxed">
            Utilizamos cookies para mejorar tu experiencia, analizar el tráfico del sitio y personalizar el contenido. 
            Al continuar navegando, aceptas nuestro uso de cookies.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Para ver más información accede a{' '}
            <a 
              href="/pages/cookies" 
              className="text-teal-600 hover:text-orange-500 transition-colors underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Políticas de cookies
            </a>
          </p>
        </div>
        
        <div className="flex gap-4 flex-shrink-0">
          <button
            onClick={rejectCookies}
            className="px-8 py-3 text-base font-medium text-gray-700 bg-gray-100 border-2 border-gray-300 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={acceptCookies}
            className="px-8 py-3 text-base font-medium bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors shadow-md"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}