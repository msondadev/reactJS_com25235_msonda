import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <img
            src="/logo_Gringo's.jpg"
            alt="Gringo's Logo"
            style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', padding: '2px' }}
            className="d-inline-block align-top me-2"
          />
          <span>Gringo's Supermercados - Los mejores precios</span>
        </Navbar.Brand>

        <Nav className="ms-auto align-items-center">
          <Nav.Link as={NavLink} to="/" className="me-3">
            Inicio
          </Nav.Link>
          <Nav.Link as={NavLink} to="/ofertas" className="me-3">
            Ofertas
          </Nav.Link>
          <Nav.Link as={NavLink} to="/infaltables" className="me-3">
            Infaltables
          </Nav.Link>

          <div className="d-flex align-items-center">
            <Button variant="outline-light" as={NavLink} to="/administracion" className="me-2">
              Administración
            </Button>
            <NavLink to="/carrito" className="text-white">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </NavLink>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;