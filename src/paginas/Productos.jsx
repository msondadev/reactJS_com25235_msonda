import React, { useEffect, useState, useContext } from 'react';
import { Container, ListGroup, Button, Toast, ToastContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext';

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const { agregarAlCarrito } = useContext(CartContext);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=5')
      .then(res => res.json())
      .then(data => setProductos(data.products))
      .catch(err => console.error('Error al cargar productos:', err));
  }, []);

  const handleAgregar = (producto) => {
    agregarAlCarrito({
      id: Number(producto.id),
      title: producto.title,
      price: producto.price
    });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <Container className="mt-4">
      {/* Toast flotante */}
      <ToastContainer position="top-end" className="p-3">
        <Toast bg="success" show={showToast} onClose={() => setShowToast(false)}>
          <Toast.Header>
            <strong className="me-auto">Carrito</strong>
          </Toast.Header>
          <Toast.Body>Producto agregado al carrito ✅</Toast.Body>
        </Toast>
      </ToastContainer>

      <h2>Productos Disponibles</h2>
      <ListGroup>
        {productos.map(prod => (
          <ListGroup.Item
            key={prod.id}
            className="d-flex justify-content-between align-items-center"
          >
            {prod.title} - ${prod.price}
            <div>
              <Link
                to={`/producto/${prod.id}`}
                className="btn btn-sm btn-primary me-2"
              >
                Ver detalle
              </Link>
              <Button
                variant="success"
                size="sm"
                onClick={() => handleAgregar(prod)} 
              >
                Agregar al carrito
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

