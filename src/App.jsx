import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './paginas/Home';
import ProductDetail from './paginas/ProductDetail';
import CrudProductos from './components/CrudProductos';
import { CartProvider } from './components/CartContext';
import Carrito from './components/Carrito'; 
import Productos from './paginas/Productos';


function App() {

  return (
      <CartProvider>
      <Router>
        <Header />
          <Routes>
            <Route path="/administracion" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/crud" element={<CrudProductos />} />
            
          </Routes>
        <Footer />
      </Router>
      </CartProvider>
  )
}

export default App