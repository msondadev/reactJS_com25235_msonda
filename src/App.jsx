import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './paginas/Login';
import Home from './paginas/Home';
import Ofertas from './paginas/Ofertas';
import Infaltables from './paginas/Infaltables';
import RutaProtegida from './components/RutaProtegida';
import ProductDetail from './paginas/ProductDetail';
import CrudProductos from './components/CrudProductos';

function App() {

  return (
    
      <Router>
        <Header />
          <Routes>
            {/* <Route path="/administracion" element={<Login />} /> Esta es la que va */}
            <Route path="/administracion" element={<CrudProductos />} /> Esta es temporal hasta que funcione el Login
            <Route path="/" element={<Home />} />
            <Route path="/ofertas" element={<Ofertas />} />
            <Route path="/infaltables" element={<Infaltables />} />
            <Route path="/infaltables" element={
              <RutaProtegida>
                <Infaltables />
              </RutaProtegida>
            } />
            <Route path="/producto/:id" element={<ProductDetail />} />


          </Routes>
        <Footer />
      </Router>
  )
}

export default App