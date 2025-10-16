import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ProductCard = ({ product, handleAgregarAlCarrito }) => {
    return (

        // Armo la card
        <Card className='h-100 d-flex flex-column'>
            <Card.Img
                variant="top"
                src={product.thumbnail}
                alt={product.title}
                className='card-img-top img-fluid'
                style={{ height: '200px', objectFit: 'cover' }}
            />

            <Card.Body className='d-flex flex-column'>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.description.slice(0, 100)}...
                </Card.Text>
                <Card.Text>
                    <strong>{product.price}</strong>
                </Card.Text>
                <Button variant='primary' onClick={() => handleAgregarAlCarrito(product)}>
                    Agregar al carrito
                </Button>
                <Link to={`/producto/${product.id}`} className="btn btn-outline-secondary mt-2">
                    Ver detalle
                </Link>

            </Card.Body>
        </Card>
    );
};

export default ProductCard;