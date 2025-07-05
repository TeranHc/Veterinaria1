"use client";
import React from "react";

export default function Politicas() {
  // Políticas como arreglo para evitar repetir código
  const politicas = [
    {
      titulo: "🐾 Política de Entregas",
      contenido:
        "Realizamos entregas de productos a domicilio en un plazo de 24 a 48 horas dentro de la ciudad. Para zonas rurales, el tiempo puede variar. Se requiere un pedido mínimo de $10 para envío gratuito dentro del área urbana.",
    },
    {
      titulo: "🔄 Cambios y Devoluciones",
      contenido:
        "Aceptamos devoluciones dentro de los 7 días posteriores a la compra, siempre que el producto esté sin abrir y en buenas condiciones. Productos perecibles como alimentos húmedos no aplican. Se requiere comprobante de compra.",
    },
    {
      titulo: "🏥 Servicios Veterinarios",
      contenido:
        "Los servicios veterinarios están disponibles únicamente con cita previa. Se requiere puntualidad. En caso de retraso mayor a 15 minutos, la cita podrá reprogramarse. Cancelaciones deben hacerse al menos 12 horas antes.",
    },
    {
      titulo: "🔐 Privacidad de Datos",
      contenido:
        "La información que nos proporcionas es confidencial. Usamos tus datos únicamente para fines comerciales internos y nunca serán compartidos con terceros sin tu consentimiento.",
    },
    {
      titulo: "✅ Aceptación de Políticas",
      contenido:
        "Al realizar una compra o reservar un servicio, aceptas automáticamente nuestras políticas. Nos reservamos el derecho a modificarlas, informando oportunamente a nuestros clientes.",
    },
  ];

  return (
    <section className="py-12 px-6 bg-white text-gray-800">
      {/* Encabezado decorado */}
      <div className="flex items-center justify-center mb-6">
        <div className="h-px bg-gray-600 w-16"></div>
        <span className="mx-4 text-gray-700 text-lg font-medium">Información Importante</span>
        <div className="h-px bg-gray-600 w-16"></div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4 uppercase">
        Políticas de la Tienda
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto text-center mb-12">
        En nuestra tienda veterinaria nos comprometemos con la transparencia, la calidad del servicio y el respeto hacia nuestros clientes y sus mascotas.
      </p>

      {/* Contenedor de tarjetas */}
      <div className="grid gap-8 max-w-5xl mx-auto">
        {politicas.map((p, index) => (
          <div
            key={index}
            className="bg-cyan-100 border-l-4 border-teal-500 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-teal-700 mb-2">{p.titulo}</h2>
            <p className="text-gray-800 leading-relaxed">{p.contenido}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
