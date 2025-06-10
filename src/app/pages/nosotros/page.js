"use client";
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('compromiso');

  const tabContent = {
    compromiso: {
      text: (
        <>
          <p className="text-gray-800 leading-relaxed">
            Nuestra clínica veterinaria fue fundada con el firme propósito de brindar{" "}
            un cuidado excepcional y compasivo{" "}
            a todos los animales que llegan a nuestras puertas. Con más de{" "}
            4 años de experiencia{" "}
            al servicio de nuestra comunidad, hemos crecido y evolucionado, convirtiéndonos en{" "}
            un referente en el cuidado integral de mascotas.
          </p>
          <br />
          <p className="text-gray-800 leading-relaxed">
            Así mismo Contamos con un equipo de{" "}
            profesionales altamente capacitados, apasionados por el bienestar animal.
          </p>
        </>
      ),
      image: "/images/vete.jpg",
      altText: "Veterinario cuidando mascota"
    },
    mision: {
      text: (
        <>
          <p className="text-gray-800 leading-relaxed mb-4">
            <span className="text-teal-700 font-semibold text-lg">Misión:</span><br />
            Proporcionar atención veterinaria de excelencia, basada en{" "}
            conocimientos científicos actualizados{" "}
            y tecnología de vanguardia, para garantizar la salud y bienestar de nuestros pacientes. 
            Nos comprometemos a ofrecer un{" "}
            servicio personalizado y empático{" "}
            tanto a las mascotas como a sus familias.
          </p>
          <p className="text-gray-800 leading-relaxed">
            <span className="text-teal-700 font-semibold text-lg">Visión:</span><br />
            Ser reconocidos como{" "}
            la clínica veterinaria líder en nuestra región, 
            referente en innovación, calidad y calidez humana. Aspiramos a contribuir activamente en la{" "}
            educación sobre tenencia responsable{" "}
            y en la construcción de una comunidad más consciente sobre el bienestar animal.
          </p>
        </>
      ),
      image: "/images/vete2.jpg",
      altText: "Equipo veterinario profesional"
    }
  };

  return (
    <section className=" text-center py-12 px-6">
      {/* Línea decorativa superior */}
      <div className="flex items-center justify-center mb-4">
        <div className="h-px bg-gray-600 w-16"></div>
        <span className="mx-4 text-gray-700 text-lg font-medium">Conócenos</span>
        <div className="h-px bg-gray-600 w-16"></div>
      </div>
      
      {/* Título principal */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-wide">
        ACERCA DE NOSOTROS
      </h1>
      
      {/* Párrafo descriptivo */}
      <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
        Nos dedicamos al cuidado integral de las mascotas, ofreciendo servicios de 
        calidad que van desde la medicina preventiva hasta tratamientos avanzados.
      </p>
      
      {/* Sección de tabs y contenido */}
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center mb-0">
          <button 
            onClick={() => setActiveTab('compromiso')}
            className={`px-8 py-3 font-semibold uppercase tracking-wide mr-1 transition-colors ${
              activeTab === 'compromiso' 
                ? 'bg-teal-400 text-gray-800' 
                : 'bg-teal-300 text-gray-700 hover:bg-teal-350'
            }`}
          >
            COMPROMISO
          </button>
          <button 
            onClick={() => setActiveTab('mision')}
            className={`px-8 py-3 font-semibold uppercase tracking-wide transition-colors ${
              activeTab === 'mision' 
                ? 'bg-teal-400 text-gray-800' 
                : 'bg-teal-300 text-gray-700 hover:bg-teal-350'
            }`}
          >
            MISIÓN Y VISIÓN
          </button>
        </div>
        
        {/* Contenido */}
        <div className="bg-cyan-200 rounded-none p-8 flex flex-col lg:flex-row items-center gap-8">
          {/* Imagen circular con decoraciones */}
          <div className="relative flex-shrink-0">
            {/* Decoraciones de cruces */}
            <div className="absolute -top-4 -left-4 text-teal-600 text-2xl">+</div>
            <div className="absolute -top-2 left-20 text-teal-600 text-xl">+</div>
            <div className="absolute top-8 -left-6 text-teal-600 text-lg">+</div>
            <div className="absolute top-16 left-24 text-teal-600 text-xl">+</div>
            <div className="absolute bottom-4 -left-2 text-teal-600 text-lg">+</div>
            <div className="absolute -bottom-2 left-16 text-teal-600 text-xl">+</div>
            <div className="absolute bottom-8 left-28 text-teal-600 text-lg">+</div>
            
            {/* Imagen circular */}
            <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-300">
              <img 
                src={tabContent[activeTab].image} 
                alt={tabContent[activeTab].altText}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Texto descriptivo */}
          <div className="flex-1 text-left">
            {tabContent[activeTab].text}
          </div>
        </div>
      </div>
      
      {/* Sección Nuestro Equipo de Trabajo */}
      <div className="mt-16 max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 uppercase tracking-wide">
          NUESTRO EQUIPO DE<br />TRABAJO
        </h2>
        
        {/* Grid de fotos del equipo */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          {/* Miembro 1 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-64 border-4 border-gray-800 overflow-hidden">
              <img 
                src="/images/doctor1.jpg" 
                alt="Doctor veterinario 1"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Dra. Mary Alvarado </h3>

          </div>
          
          {/* Miembro 2 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-64 border-4 border-gray-800 overflow-hidden">
              <img 
                src="/images/doctor2.jpg" 
                alt="Doctora veterinaria 2"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Dra. María González</h3>

          </div>
          
          {/* Miembro 3 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-64 border-4 border-gray-800 overflow-hidden">
              <img 
                src="/images/doctor3.jpg" 
                alt="Doctora veterinaria 3"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Dra. Ana Rodríguez</h3>

          </div>
        </div>
      </div>
    </section>
  );
}
