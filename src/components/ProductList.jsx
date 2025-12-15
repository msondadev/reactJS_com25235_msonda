import React, { useEffect, useState, useContext } from "react";
import { Row, Col, Toast, ToastContainer } from "react-bootstrap";
import ProductCard from "../paginas/ProductCard";
import { CartContext } from "./CartContext";

const API_URL = "https://68489b9bec44b9f349416b0e.mockapi.io/api/productos";

const ProductList = ({ tipo = "normal", limit = null, category = "", searchTerm = "" }) => {
  const [productos, setProductos] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const { agregarAlCarrito } = useContext(CartContext);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error al cargar productos:", err));
  }, []);

  const handleAgregarAlCarrito = (producto) => {
    agregarAlCarrito({
      id: producto.id,
      title: producto.title,
      price: producto.price,
    });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  /* FILTRADO */
  let productosFiltrados = productos;
  if (category) {
    productosFiltrados = productosFiltrados.filter(
      (p) => p.category?.toLowerCase() === category.toLowerCase()
    );
  }
  if (searchTerm) {
    productosFiltrados = productosFiltrados.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  if (tipo === "ofertas" || tipo === "infaltables") {
    productosFiltrados = productosFiltrados.filter((p) => Number(p.price) < 3000);
  }
  if (limit) {
    productosFiltrados = productosFiltrados.slice(0, limit);
  }

  /* RENDER */
  return (
    <>
      {/* Toast flotante */}
      <ToastContainer position="top-end" className="p-3">
        <Toast bg="success" show={showToast} onClose={() => setShowToast(false)}>
          <Toast.Header>
            <strong className="me-auto">Carrito</strong>
          </Toast.Header>
          <Toast.Body>Producto agregado al carrito ✅</Toast.Body>
        </Toast>
      </ToastContainer>

      {tipo === "ofertas" || tipo === "infaltables" ? (
        <div style={{ display: "flex", gap: "1rem", overflowX: "auto" }}>
          {productosFiltrados.map((product) => (
            <div key={product.id} style={{ minWidth: "260px" }}>
              <ProductCard
                product={product}
                handleAgregarAlCarrito={handleAgregarAlCarrito}
              />
            </div>
          ))}
        </div>
      ) : (
        <Row>
          {productosFiltrados.map((product) => (
            <Col md={4} lg={3} key={product.id} className="mb-4">
              <ProductCard
                product={product}
                handleAgregarAlCarrito={handleAgregarAlCarrito}
              />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default ProductList;

