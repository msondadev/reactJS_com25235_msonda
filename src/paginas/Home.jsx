import React from 'react';
import { Container } from 'react-bootstrap';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <Container className="mt-4">

      {/* OFERTAS */}
      <h2 className="mb-3">🔥 Ofertas</h2>
      <ProductList
        tipo="ofertas"
        limit={6}
      />

      {/* INFALTABLES */}
      <h2 className="mt-5 mb-3">🛒 Infaltables</h2>
      <ProductList
        tipo="infaltables"
        limit={6}
      />

    </Container>
  );
};

export default Home;
