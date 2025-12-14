import React, { useEffect, useState, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../paginas/ProductCard';
import { CartContext } from './CartContext';

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const { agregarAlCarrito } = useContext(CartContext);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/groceries')
      .then(res => res.json())
      .then(data => setProductos(data.products))
      .catch(err => console.error(err));
  }, []);

  const handleAgregarAlCarrito = (producto) => {
    agregarAlCarrito({
      id: producto.id,
      title: producto.title,
      price: producto.price
    });
  };

  return (
    <Row>
      {productos.map(product => (
        <Col md={4} key={product.id} className="mb-4">
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
