import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './paginas/Home';
import Ofertas from './paginas/Ofertas';
import Infaltables from './paginas/Infaltables';
import RutaProtegida from './components/RutaProtegida';
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
            <Route path="/ofertas" element={<Ofertas />} />
            <Route path="/infaltables" element={<Infaltables />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/crud" element={<CrudProductos />} />
            <Route path="/infaltables" element={
              <RutaProtegida>
                <Infaltables />
              </RutaProtegida>
            } />


          </Routes>
        <Footer />
      </Router>
      </CartProvider>
  )
}

export default App