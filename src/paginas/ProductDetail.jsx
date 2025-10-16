import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

const ProductDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <Container className="my-5">
      <Card className="shadow">
        <Card.Img variant="top" src={producto.thumbnail} style={{ height: '300px', objectFit: 'contain' }} />
        <Card.Body>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text>{producto.description}</Card.Text>
          <Card.Text><strong>${producto.price.toFixed(2)}</strong></Card.Text>
          <Link to="/" className="btn btn-secondary mt-3">Volver al inicio</Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetail;