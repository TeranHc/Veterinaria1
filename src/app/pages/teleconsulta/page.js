import { useState } from "react";

export default function AgendarTeleconsulta() {
  const [formData, setFormData] = useState({
    nombrePropietario: "",
    telefono: "",
    email: "",
    nombreMascota: "",
    especie: "",
    raza: "",
    edad: "",
    sexo: "",
    fecha: "",
    hora: "",
    motivoConsulta: "",
    descripcionSintomas: "",
    medicamentos: "",
    consultaUrgente: false
  });

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isBooked, setIsBooked] = useState(false);

  const horarios = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", 
    "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30", "18:00"
  ];

  const especies = ["Perro", "Gato", "Ave", "Conejo", "Hámster", "Otro"];
  const sexos = ["Macho", "Hembra"];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateStep = (stepNumber) => {
    const newErrors = {};
    
    if (stepNumber === 1) {
      if (!formData.nombrePropietario) newErrors.nombrePropietario = "Nombre requerido";
      if (!formData.telefono) newErrors.telefono = "Teléfono requerido";
      if (!formData.email) newErrors.email = "Email requerido";
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email inválido";
      }
    }
    
    if (stepNumber === 2) {
      if (!formData.nombreMascota) newErrors.nombreMascota = "Nombre de mascota requerido";
      if (!formData.especie) newErrors.especie = "Especie requerida";
      if (!formData.edad) newErrors.edad = "Edad requerida";
      if (!formData.sexo) newErrors.sexo = "Sexo requerido";
    }
    
    if (stepNumber === 3) {
      if (!formData.fecha) newErrors.fecha = "Fecha requerida";
      if (!formData.hora) newErrors.hora = "Hora requerida";
      if (!formData.motivoConsulta) newErrors.motivoConsulta = "Motivo de consulta requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      console.log("Datos de teleconsulta:", formData);
      setIsBooked(true);
    }
  };

  const resetForm = () => {
    setFormData({
      nombrePropietario: "",
      telefono: "",
      email: "",
      nombreMascota: "",
      especie: "",
      raza: "",
      edad: "",
      sexo: "",
      fecha: "",
      hora: "",
      motivoConsulta: "",
      descripcionSintomas: "",
      medicamentos: "",
      consultaUrgente: false
    });
    setStep(1);
    setIsBooked(false);
    setErrors({});
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getMinDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {!isBooked ? (
          <>
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Agendar Teleconsulta
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Consulta Veterinaria Virtual
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Programa tu consulta veterinaria desde casa. Atención profesional a través de videollamada.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between max-w-md mx-auto">
                {[1, 2, 3].map((number) => (
                  <div key={number} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      step >= number 
                        ? 'bg-teal-500 text-white shadow-lg' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {number}
                    </div>
                    {number < 3 && (
                      <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
                        step > number ? 'bg-teal-500' : 'bg-gray-200'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between max-w-md mx-auto mt-2 text-sm">
                <span className={step >= 1 ? 'text-teal-600 font-semibold' : 'text-gray-500'}>
                  Datos Personales
                </span>
                <span className={step >= 2 ? 'text-teal-600 font-semibold' : 'text-gray-500'}>
                  Información Mascota
                </span>
                <span className={step >= 3 ? 'text-teal-600 font-semibold' : 'text-gray-500'}>
                  Cita y Motivo
                </span>
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div>
            {/* Step 1: Datos Personales */}
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Información del Propietario</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="nombrePropietario"
                      value={formData.nombrePropietario}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                        errors.nombrePropietario ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.nombrePropietario && (
                      <p className="text-red-500 text-sm mt-1">{errors.nombrePropietario}</p>
                    )}
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
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                        errors.telefono ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+593 99 123 4567"
                    />
                    {errors.telefono && (
                      <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                  <p className="text-sm text-gray-500 mt-1">
                    Te enviaremos el enlace de la videollamada a este correo
                  </p>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Información de la Mascota */}
            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de tu Mascota</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre de la Mascota *
                    </label>
                    <input
                      type="text"
                      name="nombreMascota"
                      value={formData.nombreMascota}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                        errors.nombreMascota ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Nombre de tu mascota"
                    />
                    {errors.nombreMascota && (
                      <p className="text-red-500 text-sm mt-1">{errors.nombreMascota}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Especie *
                    </label>
                    <select
                      name="especie"
                      value={formData.especie}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                        errors.especie ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecciona la especie</option>
                      {especies.map(especie => (
                        <option key={especie} value={especie}>{especie}</option>
                      ))}
                    </select>
                    {errors.especie && (
                      <p className="text-red-500 text-sm mt-1">{errors.especie}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Raza
                    </label>
                    <input
                      type="text"
                      name="raza"
                      value={formData.raza}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="Raza (opcional)"
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
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                        errors.edad ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Ej: 2 años, 6 meses"
                    />
                    {errors.edad && (
                      <p className="text-red-500 text-sm mt-1">{errors.edad}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Sexo *
                    </label>
                    <select
                      name="sexo"
                      value={formData.sexo}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                        errors.sexo ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecciona</option>
                      {sexos.map(sexo => (
                        <option key={sexo} value={sexo}>{sexo}</option>
                      ))}
                    </select>
                    {errors.sexo && (
                      <p className="text-red-500 text-sm mt-1">{errors.sexo}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Medicamentos Actuales
                  </label>
                  <textarea
                    name="medicamentos"
                    value={formData.medicamentos}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    rows="3"
                    placeholder="Lista cualquier medicamento que esté tomando actualmente (opcional)"
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-200 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300"
                  >
                    Anterior
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Programar Cita */}
            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Programar tu Teleconsulta</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Fecha *
                    </label>
                    <input
                      type="date"
                      name="fecha"
                      value={formData.fecha}
                      onChange={handleInputChange}
                      min={getMinDate()}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                        errors.fecha ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.fecha && (
                      <p className="text-red-500 text-sm mt-1">{errors.fecha}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Hora *
                    </label>
                    <select
                      name="hora"
                      value={formData.hora}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                        errors.hora ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecciona la hora</option>
                      {horarios.map(hora => (
                        <option key={hora} value={hora}>{hora}</option>
                      ))}
                    </select>
                    {errors.hora && (
                      <p className="text-red-500 text-sm mt-1">{errors.hora}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Motivo de la Consulta *
                  </label>
                  <select
                    name="motivoConsulta"
                    value={formData.motivoConsulta}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                      errors.motivoConsulta ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecciona el motivo</option>
                    <option value="chequeo-rutina">Chequeo de rutina</option>
                    <option value="seguimiento-tratamiento">Seguimiento de tratamiento</option>
                    <option value="comportamiento">Problemas de comportamiento</option>
                    <option value="nutricional">Consulta nutricional</option>
                    <option value="sintomas-leves">Síntomas leves</option>
                    <option value="segunda-opinion">Segunda opinión</option>
                    <option value="vacunacion">Consulta sobre vacunación</option>
                    <option value="otro">Otro</option>
                  </select>
                  {errors.motivoConsulta && (
                    <p className="text-red-500 text-sm mt-1">{errors.motivoConsulta}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Descripción de Síntomas o Motivo
                  </label>
                  <textarea
                    name="descripcionSintomas"
                    value={formData.descripcionSintomas}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    rows="4"
                    placeholder="Describe detalladamente los síntomas, comportamientos o situación que quieres consultar..."
                  />
                </div>

                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="consultaUrgente"
                      checked={formData.consultaUrgente}
                      onChange={handleInputChange}
                      className="mt-1 h-5 w-5 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                    <div>
                      <label className="font-semibold text-teal-800">
                        ¿Es una consulta urgente?
                      </label>
                      <p className="text-sm text-teal-700 mt-1">
                        Para emergencias, recomendamos acudir directamente a nuestra clínica. 
                        Las teleconsultas son ideales para seguimientos y consultas no urgentes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Antes de tu teleconsulta:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Asegúrate de tener buena conexión a internet</li>
                    <li>• Ten a mano el historial médico de tu mascota</li>
                    <li>• Prepara una lista de preguntas</li>
                    <li>• Mantén a tu mascota calmada durante la llamada</li>
                  </ul>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-200 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300"
                  >
                    Anterior
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Agendar Teleconsulta
                  </button>
                </div>
              </div>
            )}
          </div>
            </div>

            {/* Information Card */}
            <div className="mt-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Teleconsulta Veterinaria</h3>
                  <p className="text-teal-100">
                    Duración: 30 minutos | Costo: $25 | Incluye: Diagnóstico inicial y recomendaciones
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Confirmation Screen */
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                ¡Cita Agendada Exitosamente!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Hemos recibido tu solicitud para una teleconsulta. Te contactaremos pronto para confirmar los detalles.
              </p>
            </div>

            {/* Appointment Summary */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-green-800 mb-6">Resumen de tu cita:</h3>
              
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-green-700">Propietario:</span>
                  <span className="text-green-800">{formData.nombrePropietario}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-green-700">Mascota:</span>
                  <span className="text-green-800">{formData.nombreMascota}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-green-700">Especie:</span>
                  <span className="text-green-800">{formData.especie}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-green-700">Fecha:</span>
                  <span className="text-green-800">{formatDate(formData.fecha)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-green-700">Hora:</span>
                  <span className="text-green-800">{formData.hora}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-green-700">Teléfono:</span>
                  <span className="text-green-800">{formData.telefono}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-green-700">Email:</span>
                  <span className="text-green-800">{formData.email}</span>
                </div>
                
                {formData.motivoConsulta && (
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-green-700">Motivo:</span>
                    <span className="text-green-800 text-right max-w-xs">
                      {formData.motivoConsulta.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
              <h4 className="font-bold text-blue-800 mb-3">Próximos pasos:</h4>
              <ul className="text-sm text-blue-700 text-left space-y-2">
                <li>• Recibirás un email de confirmación en los próximos minutos</li>
                <li>• Te enviaremos el enlace de la videollamada 30 minutos antes</li>
                <li>• Nuestro equipo te contactará si necesita información adicional</li>
                <li>• Prepara el historial médico de tu mascota para la consulta</li>
              </ul>
            </div>

            {/* Action Button */}
            <button
              onClick={resetForm}
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Agendar Otra Cita
            </button>

            {/* Contact Info */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                ¿Tienes alguna pregunta? Contáctanos al{' '}
                <span className="font-semibold text-teal-600">(04) 123-4567</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}