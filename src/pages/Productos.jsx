import React, { useState, useEffect } from 'react';

function Productos({ addToCart, cart }) {
  const base = import.meta.env.BASE_URL;
  
  // Estados de React (useState)
  const [listaProductos, setListaProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  // Carga asíncrona de datos externos mediante useEffect
  useEffect(() => {
    fetch(`${base}data/productos.json`)
      .then((response) => response.json())
      .then((data) => setListaProductos(data))
      .catch((error) => console.error("Error cargando el catálogo:", error));
  }, [base]);

  // Lista única de categorías calculada dinámicamente
  const categorias = ['Todos', 'Acción', 'Aventura', 'Deportes', 'Mundo Abierto', 'Consolas'];

  // Filtrado reactivo de productos según la categoría activa
  const productosFiltrados = categoriaSeleccionada === 'Todos'
    ? listaProductos
    : listaProductos.filter(producto => producto.categoria === categoriaSeleccionada);

  return (
    <main className="container my-4">
      {/* Encabezado semántico */}
      <section className="text-center mb-4">
        <h1 className="fw-bold text-primary">Catálogo de Videojuegos</h1>
        <p className="text-muted">Explora y filtra tus títulos favoritos por categoría.</p>
      </section>

      {/* Barra de botones de filtrado con Bootstrap 5 */}
      <section className="d-flex justify-content-center flex-wrap gap-2 mb-5">
        {categorias.map(cat => (
          <button
            key={cat}
            className={`btn ${categoriaSeleccionada === cat ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setCategoriaSeleccionada(cat)}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Renderizado dinámico de tarjetas */}
      <section className="row g-4">
        {productosFiltrados.length === 0 ? (
          <div className="col-12 text-center text-muted py-5">
            <h5>No hay videojuegos en esta categoría.</h5>
          </div>
        ) : (
          productosFiltrados.map(producto => {
            const enCarrito = cart.some(item => item.id === producto.id);

            return (
              <div className="col-12 col-md-6 col-lg-4" key={producto.id}>
                <div className="card h-100 shadow-sm border-0">
                  <img 
                    src={`${base}${producto.imagen}`} 
                    className="card-img-top p-3" 
                    style={{ height: '240px', objectFit: 'contain' }} 
                    alt={producto.nombre} 
                  />
                  <div className="card-body d-flex flex-column text-center">
                    <span className="badge bg-secondary mb-2 align-self-center">
                      {producto.categoria}
                    </span>
                    <h5 className="card-title fw-bold">{producto.nombre}</h5>
                    <p className="card-text text-muted small">{producto.descripcion}</p>
                    
                    <div className="mt-auto">
                      <p className="text-decoration-line-through text-danger mb-0 small">
                        Normal: ${producto.precioNormal.toLocaleString('es-CL')}
                      </p>
                      <p className="fw-bold text-success fs-5 mb-3">
                        Oferta: ${producto.precioOferta.toLocaleString('es-CL')}
                      </p>
                      
                      {/* Renderizado condicional del botón */}
                      {enCarrito ? (
                        <button className="btn btn-secondary w-100" disabled>
                          En el carrito
                        </button>
                      ) : (
                        <button 
                          className="btn btn-primary w-100" 
                          onClick={() => addToCart(producto)}
                        >
                          Agregar al carrito
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </section>
    </main>
  );
}

export default Productos;