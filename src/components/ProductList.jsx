import React from 'react';

const products = [
  {
    id: 1,
    nombre: 'Audífonos Lenovo',
    descripcion: 'Audífonos Bluetooth con cancelación de ruido activa.',
    precioNormal: 35000,
    precioOferta: 24990,
    imagen: '/assets/img/audifonos-lenovo.jpg' 
  },
  {
    id: 2,
    nombre: 'Consola PS5',
    descripcion: 'Consola de última generación con lector de discos.',
    precioNormal: 520000,
    precioOferta: 450000,
    imagen: '/assets/img/ps5.webp'
  }
];

function ProductList({ addToCart }) {
  return (
    <div className="row g-4">
      {products.map(product => (
        <div className="col-md-6" key={product.id}>
          <div className="card h-100 shadow-sm">
            <img src={product.imagen} className="card-img-top p-3" alt={product.nombre} style={{height: '250px', objectFit: 'contain'}} />
            <div className="card-body d-flex flex-column text-center">
              <h5 className="card-title">{product.nombre}</h5>
              <p className="card-text text-muted mb-2">{product.descripcion}</p>
              <p className="text-decoration-line-through text-danger mb-0">Normal: ${product.precioNormal.toLocaleString('es-CL')}</p>
              <p className="fw-bold text-success fs-5">Oferta: ${product.precioOferta.toLocaleString('es-CL')}</p>
              <button className="btn btn-primary mt-auto" onClick={() => addToCart(product)}>Agregar al Carrito</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ProductList;