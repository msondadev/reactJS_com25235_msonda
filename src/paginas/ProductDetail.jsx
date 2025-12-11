import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button, Toast, ToastContainer } from 'react-bootstrap'; // importamos Toast y ToastContainer
import { CartContext } from '../components/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false); // agregamos el toast

  const { agregarAlCarrito } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProducto(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar el producto:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center my-5">Cargando...</div>;
  if (!producto) return <div className="text-center my-5">Producto no encontrado</div>;

  const handleAgregar = () => {
    agregarAlCarrito({
      id: producto.id,
      title: producto.title,
      price: producto.price
    });
    setShowToast(true); // mostrar Toast
    setTimeout(() => setShowToast(false), 2000); // ocultar automáticamente
  };

  return (
    <Container className="my-5">
      {/* Toast flotante */}
      <ToastContainer position="top-end" className="p-3">
        <Toast bg="success" show={showToast} onClose={() => setShowToast(false)}>
          <Toast.Header>
            <strong className="me-auto">Carrito</strong>
          </Toast.Header>
          <Toast.Body>Producto agregado al carrito ✅</Toast.Body>
        </Toast>
      </ToastContainer>

      <Card className="shadow">
        <Card.Img
          variant="top"
          src={producto.thumbnail}
          style={{ height: '300px', objectFit: 'contain' }}
        />
        <Card.Body>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text>{producto.description}</Card.Text>
          <Card.Text><strong>${producto.price.toFixed(2)}</strong></Card.Text>

          <Button variant="success" className="me-2" onClick={handleAgregar}>
            Agregar al carrito
          </Button>

          <Link to="/" className="btn btn-secondary mt-3">Volver al inicio</Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetail;
