import React from "react";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="container">

      <h3>🔥 Ofertas</h3>
      <ProductList tipo="ofertas" limit={5} />

      <h3 className="mt-4">🛒 Infaltables</h3>
      <ProductList tipo="infaltables" limit={5} />

    </div>
  );
};

export default Home;
