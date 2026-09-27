import React from 'react';

function Home({ addToCart }) {
  const base = import.meta.env.BASE_URL;

  const destacados = [
    { id: 201, nombre: 'Call of Duty', precioOferta: 24990, imagen: `${base}assets/img/CallOfDuty.jpg` },
    { id: 202, nombre: 'FIFA 27', precioOferta: 150000, imagen: `${base}assets/img/fifa27.jpg` },
    { id: 203, nombre: 'God of War', precioOferta: 49990, imagen: `${base}assets/img/god-of-war.jpg` }
  ];

  return (
    <main>
      <p className="description text-center mt-4 mb-4 px-3">Tu tienda de videojuegos favorita. Encuentra los mejores juegos y accesorios para tu consola en esta página.</p>
      
      <section className="text-center mt-4">
        <h2>Productos Destacados</h2>
        <p>Descubre nuestros productos más populares y no te pierdas las ofertas especiales.</p>
        
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="3000">
                    <img src={`${base}assets/img/audifonos-lenovo.jpg`} className="d-block w-100" alt="Audífonos" />
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <img src={`${base}assets/img/ps5.webp`} className="d-block w-100" alt="PS5" />
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <img src={`${base}assets/img/camara.jpg`} className="d-block w-100" alt="Cámara" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 g-4 container mx-auto">
          {destacados.map(producto => (
            <div className="col-md-4" key={producto.id}>
              <div className="card shadow-sm h-100">
                <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                <div className="card-body d-flex flex-column text-center">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text fw-bold">${producto.precioOferta.toLocaleString('es-CL')}</p>
                  <button className="btn btn-primary mt-auto" onClick={() => addToCart(producto)}>Comprar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;