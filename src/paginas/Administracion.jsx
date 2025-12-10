import { useState } from 'react';
import { Container } from 'react-bootstrap';
import ProductoForm from '../components/ProductoForm';
import ListaProductos from '../components/ListaProductos';

export default function Administracion() {
  const [productos, setProductos] = useState([]);
  const [productoAEditar, setProductoAEditar] = useState(null);
  const [contadorId, setContadorId] = useState(1);

  const agregarProducto = (producto) => {
    const nuevoProducto = { ...producto, id: contadorId };
    setProductos([...productos, nuevoProducto]);
    setContadorId(contadorId + 1);
  };

  const actualizarProducto = (productoActualizado) => {
    setProductos(productos.map(p =>
      p.id === productoActualizado.id ? productoActualizado : p
    ));
    setProductoAEditar(null);
  };

  const borrarProducto = (id) => {
    setProductos(productos.filter(p => p.id !== id));
  };

  const editarProducto = (producto) => {
    setProductoAEditar(producto);
  };

  return (
    <Container className="mt-4">
      <h2>Panel de Administración</h2>
      <p>Acceso exclusivo para usuarios autenticados.</p>

      <ProductoForm
        onSubmit={productoAEditar ? actualizarProducto : agregarProducto}
        productoAEditar={productoAEditar}
        onCancel={() => setProductoAEditar(null)}
      />
      <hr />
      <ListaProductos
        productos={productos}
        onEdit={editarProducto}
        onDelete={borrarProducto}
      />
    </Container>
  );
}

