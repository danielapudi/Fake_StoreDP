import React, { useState, useEffect } from 'react';
import Carrito from './Carrito';
import '../App.css';

const CarritoView = () => {
    const [carrito, setCarrito] = useState(new Carrito());

    useEffect(() => {
        setCarrito(new Carrito()); 
    }, []);

    const productosEnCarrito = carrito.obtenerProductos();

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {productosEnCarrito.length > 0 ? (
                <ul>
                    {productosEnCarrito.map((producto, index) => (
                        <li key={index}>
                            <img src={producto.image} alt={producto.title} />
                            <strong>{producto.title}</strong> - ${producto.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay productos en el carrito</p>
            )}
            <button onClick={() => carrito.limpiarCarrito()}>Limpiar Carrito</button>
        </div>
    );
};

export default CarritoView;
