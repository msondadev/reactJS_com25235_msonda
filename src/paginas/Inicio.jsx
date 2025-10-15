import React from "react";
import ProductList from './ProductList';

const Inicio = () => {
  return (
    <div className="container">
        <h1>Todos los productos</h1>
        <ProductList />
    </div>
  );
};

export default Inicio;