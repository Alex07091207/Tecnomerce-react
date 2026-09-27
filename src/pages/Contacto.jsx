import React from 'react';

function Contacto() {
  return (
    <main className="container mt-5">
      <h2 className="text-primary mb-4 text-center">Ponte en contacto con nosotros</h2>
      
      <div className="row mb-5 text-center">
        <div className="col-md-3">
          <div className="p-3 border rounded shadow-sm">
            <strong>Contacto:</strong><br /> info@videojuegosexpress.com
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-3 border rounded shadow-sm">
            <strong>Teléfono:</strong><br /> +1 (555) 123-4567
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-3 border rounded shadow-sm">
            <strong>Dirección:</strong><br /> Estado 80, Santiago, Chile
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-3 border rounded shadow-sm">
            <strong>Instagram:</strong><br /> videojuegosexpress_1109
          </div>
        </div>
      </div>

      <section className="col-md-6 mx-auto">
        <h3 className="mb-3">Envíanos un mensaje</h3>
        <form id="formulario-contacto">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Enviar</button>
        </form>
      </section>
    </main>
  );
}

export default Contacto;