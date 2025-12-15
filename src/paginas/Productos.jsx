import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ProductList from '../components/ProductList';

export default function Productos() {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState("");

  return (
    <Container className="mt-4">
      <h2>Productos</h2>

      {/* FILTROS */}
      <Row className="mb-4">
        <Col md={6}>
          <Form.Control
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </Col>

        <Col md={6}>
          <Form.Select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Todas</option>
            <option value="almacen">Almacén</option>
            <option value="bebidas">Bebidas</option>
            <option value="limpieza">Limpieza</option>
            <option value="lacteos">Lácteos</option>
            <option value="mascotas">Mascotas</option>
          </Form.Select>
        </Col>
      </Row>

      {/* LISTA */}
      <ProductList
        category={categoria}
        searchTerm={busqueda}
      />
    </Container>
  );
}

