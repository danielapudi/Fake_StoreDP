import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import Carrito from './Carrito'; 

const ProductView = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [carrito, setCarrito] = useState(new Carrito());

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProduct(data);
            })
            .catch((error) => console.error(error));
    }, [id]);

    const agregarAlCarrito = () => {
        if (product) {
            carrito.agregarProducto(product);
            setCarrito(new Carrito());
        }
    };

    return (
        <div className="product-detail">
            {product ? (
                <>
                    
                    <img src={product.image} alt={product.title} />
                    <div className="text-container">
                        <h2>{product.title}</h2>
                        <p className="price">${product.price}</p>
                        <p className="desc">{product.description}</p>
                        <p>{product.category}</p>
                        <button onClick={agregarAlCarrito} className="button">
                            Agregar al Carrito
                        </button>
                    </div>
                </>
            ) : (
                <div>Producto no encontrado</div>
            )}
        </div>
    );
};

export default ProductView;






