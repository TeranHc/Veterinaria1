import Link from 'next/link';


export default function Header() {
  return (
    <header className="bg-header">
      {/* Contenedor principal con menos espacio entre logo y menú */}
      <div className="flex flex-col">
        
        {/* Sección superior con logo y título - REDUCIDO PADDING px-11 pt-5 */}
        <div className="flex items-center justify-between px-11 pt-5">
          {/* Logo y título a la izquierda */}
          <div className="flex items-center">
            <h1 className="font-bold text-black flex items-center text-3xl">
              <img 
                src="/images/1.png" 
                alt="SaludPet Logo" 
                className="mr-3 w-24 h-24" 
              />
              SaludPet
            </h1>
          </div>

          {/* Imágenes del gato y perro a la derecha */}
          <div className="flex items-center gap-3">
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

        {/* Contenedor para centrar el menú - REDUCIDO PADDING */}
        <div className="flex justify-center">

          
  {/* Menú de navegación en contenedor redondeado */}
  <nav className="menu-nav">
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Link href="/" className="text-white text-lg font-medium hover:text-teal-200 transition-colors">
        AAA
      </Link>
      <span className="text-white">|</span>
      <Link href="/pages/nosotros" className="text-white text-lg font-medium hover:text-teal-200 transition-colors ">
        Nosotros
      </Link>
      <span className="text-white">|</span>
      <Link href="/informacion-medica" className="text-white text-lg font-medium hover:text-teal-200 transition-colors">
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
</div>

      </div>
    </header>
  );
}