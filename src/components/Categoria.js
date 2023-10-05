import React from 'react';
import { useAppContext } from './AppContext';

const Categoria = ({ nombre }) => {
    const { dispatch } = useAppContext();

    const filtrarPorCategoria = (categoria) => {
        dispatch({ type: 'SET_CATEGORIA', payload: categoria });
        dispatch({ type: 'TOGGLE_CATEGORIAS_MENU' });
    };

    return (
        <button onClick={() => filtrarPorCategoria(nombre)} className="button">
            {nombre}
        </button>
    );
};

export default Categoria;





