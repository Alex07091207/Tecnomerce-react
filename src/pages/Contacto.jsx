import React, { useState } from 'react';

function Contacto() {
  // Estados para controlar los campos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  // Estados para mensajes de validación
  const [error, setError] = useState('');
  const [exito, setExito] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setExito(false);

    // 1. Validación de campos vacíos
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    // 2. Validación de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    // Si pasa las validaciones
    setExito(true);
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <main className="container my-5" style={{ maxWidth: '650px' }}>
      <section className="card shadow-sm p-4 border-0">
        <h2 className="text-center text-primary mb-3 fw-bold">Contacto</h2>
        <p className="text-center text-muted mb-4">
          Comunícate con el administrador de Tecnomerce para resolver tus consultas.
        </p>

        {/* Mensajes de retroalimentación con Bootstrap */}
        {error && <div className="alert alert-danger text-center">{error}</div>}
        {exito && <div className="alert alert-success text-center">¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label fw-semibold">Nombre Completo</label>
            <input 
              type="text" 
              className="form-control" 
              id="nombre" 
              name="nombre" 
              placeholder="Ej: Alexander Díaz" 
              value={formData.nombre} 
              onChange={handleChange} 
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Correo Electrónico</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              name="email" 
              placeholder="nombre@ejemplo.com" 
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mensaje" className="form-label fw-semibold">Mensaje</label>
            <textarea 
              className="form-control" 
              id="mensaje" 
              name="mensaje" 
              rows="4" 
              placeholder="Escribe tu consulta aquí..." 
              value={formData.mensaje} 
              onChange={handleChange} 
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">
            Enviar Mensaje
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contacto;