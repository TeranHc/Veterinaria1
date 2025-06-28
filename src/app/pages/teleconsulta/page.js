"use client";
import { useState } from "react";

export default function ServiciosTeleconsulta() {
  const [formData, setFormData] = useState({
    nombreMascota: "",
    nombreDueno: "",
    telefono: "",
    email: "",
    tipoMascota: "",
    edad: "",
    sintomas: "",
    motivoConsulta: "",
    preferenciaContacto: "",
    fecha: "",
    hora: "",
    urgencia: "normal",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
    console.log("Datos de teleconsulta:", formData);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const horarios = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00",
    "14:00", "14:30", "15:00", "15:30", "16:00",
  ];

  const tiposMascota = [
    "Perro", "Gato", "Conejo", "Ave", "Roedor", "Reptil", "Otro",
  ];

  const preferenciasContacto = ["Videollamada (WhatsApp)", "Llamada Telefónica", "Google Meet", "Otro"];

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-gray-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Teleconsulta Agendada!</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Hemos recibido tu solicitud de teleconsulta. Un veterinario se pondrá en contacto contigo según tus preferencias.
            </p>
            <div className="bg-blue-50 rounded-2xl p-6 mb-8 text-left text-sm">
              <p><span className="font-medium">Mascota:</span> {formData.nombreMascota}</p>
              <p><span className="font-medium">Fecha:</span> {formData.fecha}</p>
              <p><span className="font-medium">Hora:</span> {formData.hora}</p>
              <p><span className="font-medium">Contacto:</span> {formData.preferenciaContacto}</p>
              <p><span className="font-medium">Urgencia:</span> {formData.urgencia}</p>
            </div>
            <button
              onClick={() => {
                setShowConfirmation(false);
                setCurrentStep(1);
                setFormData({
                  nombreMascota: "", nombreDueno: "", telefono: "", email: "",
                  tipoMascota: "", edad: "", sintomas: "", motivoConsulta: "",
                  preferenciaContacto: "", fecha: "", hora: "", urgencia: "normal"
                });
              }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
            >
              Agendar Otra Cita
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Servicio de Teleconsulta
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Consulta Veterinaria en Línea</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Atención veterinaria desde la comodidad de tu hogar.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                  currentStep >= step 
                    ? 'bg-blue-500 text-white shadow-lg' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-24 h-1 mx-4 transition-all duration-300 ${
                    currentStep > step ? 'bg-blue-500' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-24 mt-4">
            <span className={`text-sm font-medium ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-500'}`}>
              Datos Básicos
            </span>
            <span className={`text-sm font-medium ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-500'}`}>
              Detalles de Consulta
            </span>
            <span className={`text-sm font-medium ${currentStep >= 3 ? 'text-blue-600' : 'text-gray-500'}`}>
              Fecha y Confirmación
            </span>
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div>
            {/* Paso 1 */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Información del Paciente</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <inputField name="nombreMascota" label="Nombre de la Mascota *" placeholder="Ej: Max, Luna..." />
                  <inputField name="nombreDueno" label="Nombre del Dueño *" placeholder="Tu nombre completo" />
                  <inputField name="telefono" label="Teléfono *" type="tel" placeholder="Ej: +593 99 123 4567" />
                  <inputField name="email" label="Email" type="email" placeholder="tu@email.com" />
                  <selectField name="tipoMascota" label="Tipo de Mascota *" options={tiposMascota} />
                  <inputField name="edad" label="Edad de la Mascota *" placeholder="Ej: 2 años, 6 meses..." />
                </div>
              </div>
            )}

            {/* Paso 2 */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Detalles de la Teleconsulta</h3>
                <textareaField name="motivoConsulta" label="Motivo de la Consulta *" placeholder="Describe brevemente la razón de la consulta..." />
                <textareaField name="sintomas" label="Síntomas que presenta la mascota" placeholder="Ej: Vómitos, falta de apetito, cojera..." />
                <selectField name="preferenciaContacto" label="Preferencia de Contacto *" options={preferenciasContacto} />
                <selectField name="urgencia" label="Nivel de Urgencia" options={["Normal", "Urgente", "Emergencia"]} />
              </div>
            )}

            {/* Paso 3 */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Fecha y Hora</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <inputField name="fecha" label="Fecha Preferida *" type="date" min={new Date().toISOString().split('T')[0]} />
                  <selectField name="hora" label="Hora Preferida *" options={horarios} />
                </div>

                <div className="bg-blue-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Resumen:</h4>
                  <div className="text-sm text-blue-700 space-y-1">
                    <p><strong>Mascota:</strong> {formData.nombreMascota}</p>
                    <p><strong>Dueño:</strong> {formData.nombreDueno}</p>
                    <p><strong>Fecha:</strong> {formData.fecha}</p>
                    <p><strong>Hora:</strong> {formData.hora}</p>
                    <p><strong>Motivo:</strong> {formData.motivoConsulta}</p>
                    <p><strong>Urgencia:</strong> {formData.urgencia}</p>
                    <p><strong>Preferencia:</strong> {formData.preferenciaContacto}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Botones */}
            <div className="flex justify-between pt-8">
              <button
                type="button"
                onClick={prevStep}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  currentStep === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                disabled={currentStep === 1}
              >
                Anterior
              </button>

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Siguiente
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Confirmar Teleconsulta
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Componentes auxiliares
  function inputField({ name, label, type = "text", placeholder = "", min }) {
    return (
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          required={label.includes("*")}
          min={min}
          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
          placeholder={placeholder}
        />
      </div>
    );
  }

  function selectField({ name, label, options }) {
    return (
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
        <select
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          required={label.includes("*")}
          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
        >
          <option value="">Selecciona una opción</option>
          {options.map((op) => (
            <option key={op} value={op}>{op}</option>
          ))}
        </select>
      </div>
    );
  }

  function textareaField({ name, label, placeholder }) {
    return (
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
        <textarea
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          rows={4}
          required={label.includes("*")}
          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
          placeholder={placeholder}
        />
      </div>
    );
  }
}
