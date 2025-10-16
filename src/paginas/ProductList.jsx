import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ category = null }) =>
{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>
    {
    let url = 'https://dummyjson.com/products';
    // if (category)
    // {
    //     url = `https://fakestoreapi.com/products/category/${category}`;
    // }    
    
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setProducts(data.products);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching data: ', error);
            setLoading(false);
        }); 

}, [category]);

    const handleAgregarAlCarrito = (product) => {
    alert(`Producto ${product.title} agregado al carrito`);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    const productosFiltrados = products.filter(p =>
        p.category.includes('groceries') ||
        p.title.toLowerCase().includes('oil') ||
        p.title.toLowerCase().includes('soap') ||
        p.title.toLowerCase().includes('cleaner') ||
        p.title.toLowerCase().includes('bread')   
    );


    return (
        <Row>
            {productosFiltrados.map((product) => (
                <Col md={4} key={product.id} className='mb-4'>
                    <ProductCard product={product} handleAgregarAlCarrito={handleAgregarAlCarrito} />
                </Col>
            ))}
        </Row>
    );
};

export default ProductList;

