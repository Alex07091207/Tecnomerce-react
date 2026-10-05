import React, { useState, useEffect } from 'react';

// Se recibe 'cart' como prop para poder verificar si un producto ya está agregado
function Productos({ addToCart, cart }) {
  const base = import.meta.env.BASE_URL;
  
  // 1. Uso de useState para gestionar el estado del catálogo
  const [listaProductos, setListaProductos] = useState([]);

  // 2. Uso de useEffect para cargar datos externos (JSON) al montar el componente
  useEffect(() => {
    fetch(`${base}data/productos.json`)
      .then((response) => response.json())
      .then((data) => setListaProductos(data))
      .catch((error) => console.error("Error cargando los productos:", error));
  }, [base]);

  return (
    <main className="container">
      <div className="text-center mt-4 mb-5">
        <h2>Lista de Productos</h2>
        <p>Aquí puedes encontrar todos nuestros productos disponibles al mejor precio.</p>
      </div>
      
      <div className="row mt-5 g-4">
        {listaProductos.map(producto => {
          // 3. Lógica condicional: Verificar si el producto ya está en el carrito
          const enCarrito = cart.some(item => item.id === producto.id);

          return (
            <div className="col-md-4" key={producto.id}>
              <div className="card shadow-sm h-100">
                <img 
                  src={`${base}${producto.imagen}`} 
                  className="card-img-top p-3" 
                  style={{ height: '240px', objectFit: 'contain' }} 
                  alt={producto.nombre} 
                />
                <div className="card-body d-flex flex-column text-center">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text text-muted mb-2 small">{producto.descripcion}</p>
                  <p className="text-decoration-line-through text-danger mb-1 small">
                    Normal: ${producto.precioNormal.toLocaleString('es-CL')}
                  </p>
                  <p className="card-text fw-bold text-success fs-5">
                    Oferta: ${producto.precioOferta.toLocaleString('es-CL')}
                  </p>
                  
                  {/* 4. Renderizado condicional en la interfaz (botón) */}
                  {enCarrito ? (
                    <button className="btn btn-secondary mt-auto" disabled>
                      En el carrito
                    </button>
                  ) : (
                    <button className="btn btn-primary mt-auto" onClick={() => addToCart(producto)}>
                      Agregar al carrito
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Productos;