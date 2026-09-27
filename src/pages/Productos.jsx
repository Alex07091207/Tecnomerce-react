import React from 'react';

function Productos({ addToCart }) {
  const base = import.meta.env.BASE_URL;

  const listaProductos = [
    { id: 101, nombre: 'Audífonos Lenovo', precioOferta: 24990, imagen: `${base}assets/img/audifonos-lenovo.jpg` },
    { id: 102, nombre: 'Cámara Olympus E-330', precioOferta: 150000, imagen: `${base}assets/img/camara.jpg` },
    { id: 103, nombre: 'God of War', precioOferta: 49990, imagen: `${base}assets/img/god-of-war.jpg` },
    { id: 104, nombre: 'Consola PS5', precioOferta: 450000, imagen: `${base}assets/img/ps5.webp` }
  ];

  return (
    <main className="container">
      <div className="text-center mt-4 mb-5">
        <h2>Lista de Productos</h2>
        <p>Aquí puedes encontrar todos nuestros productos disponibles al mejor precio.</p>
      </div>
      
      <div className="row mt-5 g-4">
        {listaProductos.map(producto => (
          <div className="col-md-4" key={producto.id}>
            <div className="card shadow-sm h-100">
              <img src={producto.imagen} className="card-img-top p-3" style={{height: '250px', objectFit: 'contain'}} alt={producto.nombre} />
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text fw-bold">${producto.precioOferta.toLocaleString('es-CL')}</p>
                <button className="btn btn-primary mt-auto" onClick={() => addToCart(producto)}>Comprar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Productos;