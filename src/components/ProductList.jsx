import React, { useEffect, useState, useContext, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../paginas/ProductCard';
import { CartContext } from './CartContext';

/*ESTILO FLECHAS*/
const flechaStyle = (lado) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  [lado === 'left' ? 'left' : 'right']: '5px',
  zIndex: 50,

  width: '40px',
  height: '40px',
  borderRadius: '50%',

  backgroundColor: '#000',
  color: '#fff',
  border: 'none',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontSize: '28px',
  fontWeight: 'bold',

  cursor: 'pointer',
  opacity: 0.8
});

const ProductList = ({ tipo = 'normal', limit = null }) => {
  const [productos, setProductos] = useState([]);
  const { agregarAlCarrito } = useContext(CartContext);
  const carruselRef = useRef(null);

  /*FETCH*/
  useEffect(() => {
    fetch('https://dummyjson.com/products/category/groceries')
      .then(res => res.json())
      .then(data => setProductos(data.products))
      .catch(err => console.error('Error al cargar productos:', err));
  }, []);

  /*CARRITO*/
  const handleAgregarAlCarrito = (producto) => {
    agregarAlCarrito({
      id: producto.id,
      title: producto.title,
      price: producto.price
    });
  };

  /*FILTRADO*/
  let productosFiltrados = productos;

  // Ofertas e Infaltables
  if (tipo === 'ofertas' || tipo === 'infaltables') {
    productosFiltrados = productos.filter(
      p => p.discountPercentage && p.discountPercentage > 10
    );
  }

  if (limit) {
    productosFiltrados = productosFiltrados.slice(0, limit);
  }

  /*SCROLL CARRUSEL*/
  const scroll = (direccion) => {
    const ancho = 280 * 3; // 3 cards
    carruselRef.current.scrollBy({
      left: direccion === 'left' ? -ancho : ancho,
      behavior: 'smooth'
    });
  };

  /*RENDER CARRUSEL*/
  if (tipo === 'ofertas' || tipo === 'infaltables') {
    return (
      <div style={{ position: 'relative'}}>
        <button onClick={() => scroll('left')} style={flechaStyle('left')}>
          ‹
        </button>

        <div
          ref={carruselRef}
          style={{
            display: 'flex',
            overflowX: 'hidden',
            gap: '1rem',
            padding: '1rem'
          }}
        >
          {productosFiltrados.map(product => (
            <div key={product.id} style={{ minWidth: '260px' }}>
              <ProductCard
                product={product}
                handleAgregarAlCarrito={handleAgregarAlCarrito}
              />
            </div>
          ))}
        </div>

        <button onClick={() => scroll('right')} style={flechaStyle('right')}>
          ›
        </button>
      </div>
    );
  }

  /*RENDER GRILLA Productos*/
  return (
    <Row>
      {productosFiltrados.map(product => (
        <Col key={product.id} md={4} lg={3} className="mb-4">
          <ProductCard
            product={product}
            handleAgregarAlCarrito={handleAgregarAlCarrito}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
