import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Componentes
import Navbar from './components/Navbar';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';

// Páginas
import Home from './pages/Home';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';

function App() {
  // Estado global del carrito
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, uniqueId: Date.now() }]);
  };

  const removeFromCart = (uniqueId) => {
    setCart(cart.filter(item => item.uniqueId !== uniqueId));
  };

  return (
    <Router>
      {/* El Navbar se mantiene fijo arriba en todas las vistas */}
      <Navbar cartCount={cart.length} />
      
      {/* Contenedor principal donde cambian las vistas */}
      <div className="container mt-4" style={{ minHeight: '70vh' }}>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/productos" element={<Productos addToCart={addToCart} />} />
          <Route path="/carrito" element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>

      {/* El Footer se mantiene fijo abajo en todas las vistas */}
      <Footer />
    </Router>
  );
}

export default App;