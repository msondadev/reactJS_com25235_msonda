import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button, Toast, ToastContainer } from 'react-bootstrap';
import { CartContext } from '../components/CartContext';

const API_URL = "https://68489b9bec44b9f349416b0e.mockapi.io/api/productos";

const ProductDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);

  const { agregarAlCarrito } = useContext(CartContext);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
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
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
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
          src={
            producto.image && producto.image.startsWith("http")
              ? producto.image
              : "https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
          }
          style={{ height: '300px', objectFit: 'contain' }}
          alt={producto.title}
        />
        <Card.Body>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text>{producto.description}</Card.Text>
          <Card.Text><strong>${Number(producto.price).toFixed(2)}</strong></Card.Text>
          <Card.Text><strong>Stock:</strong> {producto.stock}</Card.Text>
          <Card.Text><strong>Categoría:</strong> {producto.category}</Card.Text>

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

