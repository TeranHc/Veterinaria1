export default function Footer() {
  return (
    <>
      {/* CDN de Font Awesome y Tailwind */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <script src="https://cdn.tailwindcss.com"></script>
      
      <footer className="bg-footer text-black">
        {/* 
        Opciones de color de fondo (cambia bg-teal-400 por):
        - bg-blue-500 (azul)
        - bg-green-500 (verde)
        - bg-purple-500 (morado)
        - bg-red-500 (rojo)
        - bg-yellow-500 (amarillo)
        - bg-pink-500 (rosa)
        - bg-indigo-500 (índigo)
        - bg-gray-800 (gris oscuro)
        - bg-slate-700 (gris azulado)
        - bg-orange-500 (naranja)
        
        Para el texto cambia text-black por:
        - text-white (blanco)
        - text-gray-800 (gris oscuro)
        - text-slate-200 (gris claro)
        */}
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo y nombre */}
            <div className="flex flex-col items-center md:items-start">
              <img 
                src="/images/1.png" 
                alt="SaludPet Logo" 
                className="mr-3"
                style={{ width: '90px', height: '90px' }}
              />
              <h2 className="text-2xl font-bold text-black">SaludPet</h2>
            </div>

            {/* Sección INDEX */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-orange-500">INDEX</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="/" className="hover:text-orange-500 transition-colors">
                    Inicio
                  </a>
                </div>
                <div>
                  <a href="/pages/tienda-canina" className="hover:text-orange-500 transition-colors">
                    Tienda
                  </a>
                </div>
                <div>
                  <a href="/pages/nosotros" className="hover:text-orange-500 transition-colors">
                    Nosotros
                  </a>
                </div>
                <div>
                  <a href="/contacto" className="hover:text-orange-500 transition-colors">
                    Contacto
                  </a>
                </div>
              </div>
            </div>

            {/* Sección SERVICIO */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-orange-500">SERVICIO</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="/faq" className="hover:text-orange-500 transition-colors">
                    FAQ
                  </a>
                </div>
                <div>
                  <a href="/pages/devoluciones" className="hover:text-orange-500 transition-colors">
                    Envío y devoluciones
                  </a>
                </div>
                <div>
                  <a href="/pages/politicas" className="hover:text-orange-500 transition-colors">
                    Política de la tienda
                  </a>
                </div>
                <div>
                  <a href="/politica-privacidad" className="hover:text-orange-500 transition-colors">
                    Políticas de privacidad
                  </a>
                </div>
                <div>
                  <a href="/terminos-condiciones" className="hover:text-orange-500 transition-colors">
                    Términos y condiciones
                  </a>
                </div>
                <div>
                  <a href="/metodos-pago" className="hover:text-orange-500 transition-colors">
                    Métodos de pago
                  </a>
                </div>
              </div>
            </div>

            {/* Información de contacto */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <i className="fas fa-phone"></i>
                  <span>xxx-xxx-xxx</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <i className="fas fa-envelope"></i>
                  <span>xxxx@hotmail.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>xxxxx #xx</span>
                </div>
              </div>
              
              {/* Redes sociales */}
              <div className="flex justify-center md:justify-start gap-4 mt-6">
                <a href="/pages/devoluciones" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <i className="fab fa-facebook-f text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <i className="fab fa-instagram text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <i className="fab fa-tiktok text-white"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="bg-gray-800 text-white text-center py-4">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} SaludPet | Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}