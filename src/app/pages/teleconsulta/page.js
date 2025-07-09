"use client";
import { useState } from "react";

export default function Teleconsulta() {
  const [formData, setFormData] = useState({
    nombreMascota: "",
    nombreDueno: "",
    telefono: "",
    email: "",
    tipoMascota: "",
    edad: "",
    peso: "",
    raza: "",
    fecha: "",
    hora: "",
    motivoConsulta: "",
    sintomas: "",
    medicamentosActuales: "",
    veterinarioPreferido: "",
    antecedentesMedicos: "",
    urgencia: "normal",
    plataforma: "zoom"
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
    console.log("Datos de la teleconsulta:", formData);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const horarios = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  const tiposMascota = [
    "Perro", "Gato", "Conejo", "Ave", "Roedor", "Reptil", "Otro"
  ];

  const plataformas = [
    "Zoom", "Google Meet", "Microsoft Teams"
  ];

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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Teleconsulta Agendada Exitosamente!</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Hemos recibido tu solicitud de teleconsulta. Te enviaremos un enlace a la plataforma {formData.plataforma} antes de la cita.
            </p>
            <div className="bg-blue-50 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-blue-800 mb-3">Resumen de tu solicitud:</h3>
              <div className="text-left space-y-2 text-sm">
                <p><span className="font-medium">Mascota:</span> {formData.nombreMascota}</p>
                <p><span className="font-medium">Fecha:</span> {formData.fecha}</p>
                <p><span className="font-medium">Hora:</span> {formData.hora}</p>
                <p><span className="font-medium">Plataforma:</span> {formData.plataforma}</p>
                <p><span className="font-medium">Urgencia:</span> {formData.urgencia}</p>
              </div>
            </div>
            <button
              onClick={() => {
                setShowConfirmation(false);
                setCurrentStep(1);
                setFormData({
                  nombreMascota: "", nombreDueno: "", telefono: "", email: "",
                  tipoMascota: "", edad: "", peso: "", raza: "", fecha: "", hora: "",
                  motivoConsulta: "", sintomas: "", medicamentosActuales: "",
                  veterinarioPreferido: "", antecedentesMedicos: "", urgencia: "normal",
                  plataforma: "zoom"
                });
              }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
            >
              Agendar Otra Teleconsulta
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
            Servicios de Teleconsulta
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Consulta Veterinaria Virtual</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Atención veterinaria profesional desde la comodidad de tu hogar
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-2 sm:space-x-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 text-xs sm:text-base ${
                  currentStep >= step 
                    ? 'bg-blue-500 text-white shadow-lg' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-8 sm:w-24 h-1 mx-1 sm:mx-4 transition-all duration-300 ${
                    currentStep > step ? 'bg-blue-500' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-4 sm:space-x-24 mt-4 px-4">
            <span className={`text-xs sm:text-sm font-medium text-center ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-500'}`}>
              Información Básica
            </span>
            <span className={`text-xs sm:text-sm font-medium text-center ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-500'}`}>
              Detalles Médicos
            </span>
            <span className={`text-xs sm:text-sm font-medium text-center ${currentStep >= 3 ? 'text-blue-600' : 'text-gray-500'}`}>
              Fecha y Plataforma
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div>
            {/* Step 1: Información Básica */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Información del Paciente</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre de la Mascota *
                    </label>
                    <input
                      type="text"
                      name="nombreMascota"
                      value={formData.nombreMascota}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="Ej: Max, Luna, Toby..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre del Dueño *
                    </label>
                    <input
                      type="text"
                      name="nombreDueno"
                      value={formData.nombreDueno}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="Ej: +593 99 123 4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tipo de Mascota *
                    </label>
                    <select
                      name="tipoMascota"
                      value={formData.tipoMascota}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Selecciona el tipo</option>
                      {tiposMascota.map(tipo => (
                        <option key={tipo} value={tipo}>{tipo}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Raza
                    </label>
                    <input
                      type="text"
                      name="raza"
                      value={formData.raza}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="Ej: Golden Retriever, Mestizo..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Edad *
                    </label>
                    <input
                      type="text"
                      name="edad"
                      value={formData.edad}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="Ej: 2 años, 6 meses..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Peso (kg)
                    </label>
                    <input
                      type="number"
                      name="peso"
                      value={formData.peso}
                      onChange={handleInputChange}
                      step="0.1"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="Ej: 15.5"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Veterinario Preferido (si aplica)
                  </label>
                  <input
                    type="text"
                    name="veterinarioPreferido"
                    value={formData.veterinarioPreferido}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    placeholder="Nombre del veterinario preferido"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Detalles Médicos */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Detalles de la Consulta</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Motivo de la Consulta *
                    </label>
                    <textarea
                      name="motivoConsulta"
                      value={formData.motivoConsulta}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Describe el motivo de la consulta..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Síntomas Observados
                    </label>
                    <textarea
                      name="sintomas"
                      value={formData.sintomas}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Síntomas que presenta la mascota..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Medicamentos Actuales
                  </label>
                  <textarea
                    name="medicamentosActuales"
                    value={formData.medicamentosActuales}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Lista de medicamentos que está tomando actualmente..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Antecedentes Médicos
                  </label>
                  <textarea
                    name="antecedentesMedicos"
                    value={formData.antecedentesMedicos}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Enfermedades previas, cirugías, alergias..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nivel de Urgencia
                  </label>
                  <select
                    name="urgencia"
                    value={formData.urgencia}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="normal">Normal (2-3 días)</option>
                    <option value="urgente">Urgente (24 horas)</option>
                    <option value="emergencia">Emergencia (Inmediato)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Fecha y Plataforma */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Fecha y Plataforma</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Fecha Preferida *
                    </label>
                    <input
                      type="date"
                      name="fecha"
                      value={formData.fecha}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Hora Preferida *
                    </label>
                    <select
                      name="hora"
                      value={formData.hora}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Selecciona una hora</option>
                      {horarios.map(hora => (
                        <option key={hora} value={hora}>{hora}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Plataforma de Videoconferencia *
                  </label>
                  <select
                    name="plataforma"
                    value={formData.plataforma}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  >
                    {plataformas.map(plataforma => (
                      <option key={plataforma} value={plataforma.toLowerCase()}>{plataforma}</option>
                    ))}
                  </select>
                </div>

                <div className="bg-amber-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-amber-800 mb-3">⚠️ Instrucciones Importantes:</h4>
                  <ul class11Name="space-y-2 text-sm text-amber-700">
                    <li>• Asegúrate de tener una conexión a internet estable</li>
                    <li>• Usa un dispositivo con cámara y micrófono funcionales</li>
                    <li>• Coloca a tu mascota en un lugar tranquilo y bien iluminado</li>
                    <li>• Ten a la mano el historial médico y medicamentos actuales</li>
                    <li>• Recibirás el enlace de la videoconferencia por email</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Resumen de la Teleconsulta:</h4>
                  <div className="space-y-1 text-sm text-blue-700">
                    <p><span className="font-medium">Mascota:</span> {formData.nombreMascota} ({formData.tipoMascota})</p>
                    <p><span className="font-medium">Dueño:</span> {formData.nombreDueno}</p>
                    <p><span className="font-medium">Fecha:</span> {formData.fecha}</p>
                    <p><span className="font-medium">Hora:</span> {formData.hora}</p>
                    <p><span className="font-medium">Plataforma:</span> {formData.plataforma}</p>
                    <p><span className="font-medium">Urgencia:</span> {formData.urgencia}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8">
              <button
                type="button"
                onClick={prevStep}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                disabled={currentStep === 1}
              >
                Anterior
              </button>

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                  Siguiente
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
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
}