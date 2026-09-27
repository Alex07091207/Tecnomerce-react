import React from 'react';

function ShoppingCart({ cart, removeFromCart }) {
  const totalPrecio = cart.reduce((sum, item) => sum + item.precioOferta, 0);
  const totalProductos = cart.length;

  return (
    <div className="card shadow-sm position-sticky" style={{top: '20px'}}>
      <div className="card-body">
        <h4 className="card-title mb-3">Mi Carrito</h4>
        <p className="mb-4"><strong>Total Productos:</strong> {totalProductos}</p>

        {totalProductos === 0 ? (
          <div className="alert alert-secondary text-center">El carrito está vacío.</div>
        ) : (
          <ul className="list-group mb-3">
            {cart.map(item => (
              <li key={item.uniqueId} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="my-0">{item.nombre}</h6>
                  <small className="text-muted">${item.precioOferta.toLocaleString('es-CL')}</small>
                </div>
                <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(item.uniqueId)}>X</button>
              </li>
            ))}
          </ul>
        )}

        <div className="d-flex justify-content-between mt-3 border-top pt-3">
          <span className="fs-5">Total:</span>
          <span className="fs-5 fw-bold text-primary">${totalPrecio.toLocaleString('es-CL')}</span>
        </div>
      </div>
    </div>
  );
}
export default ShoppingCart;