import { Container } from 'react-bootstrap';
import ProductList from '../components/ProductList';

export default function Productos() {
  return (
    <Container className="mt-4">
      <h2>Productos</h2>
      <ProductList />
    </Container>
  );
}
