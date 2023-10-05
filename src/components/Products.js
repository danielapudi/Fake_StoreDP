import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from './AppContext';
import Categoria from './Categoria';

const Products = () => {
    const { state, dispatch } = useAppContext();
    const { productos, categoriaSeleccionada, mostrarCategoriasMenu } = state;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                dispatch({ type: 'SET_PRODUCTOS', payload: data });
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [dispatch]);

    const toggleCategoriasMenu = () => {
        dispatch({ type: 'TOGGLE_CATEGORIAS_MENU' });
    };

    const toggleProducts = () => {
        dispatch({ type: 'SET_CATEGORIA', payload: null });
    };

    const productosFiltrados = categoriaSeleccionada
        ? productos.filter((product) => product.category === categoriaSeleccionada)
        : productos;

    return (
        <div className="products">
            <div className="categorias">
                <button onClick={toggleProducts} className="button">
                    Ver todos
                </button>
                <button onClick={toggleCategoriasMenu} className="button">
                    Categorias
                </button>
                {mostrarCategoriasMenu && (
                    <div className="categorias-menu">
                        <Categoria nombre="electronics" />
                        <Categoria nombre="women's clothing" />
                        <Categoria nombre="men's clothing" />
                        <Categoria nombre="jewelery" />
                    </div>
                )}
            </div>
            {loading && (
                <div>
                    <h1>Cargando...</h1>
                </div>
            )}
            {productosFiltrados.map((product) => (
                <div key={product.id} className="product-card">
                    <h6 className="title">{product.title}</h6>
                    <div>
                        <img src={product.image} alt="#" />
                    </div>
                    <div className="description">
                        <h6 className="price">{`$${product.price}`}</h6>
                    </div>
                    <Link to={`/product/${product.id}`}>Ver Detalles</Link>
                </div>
            ))}
        </div>
    );
};

export default Products;





