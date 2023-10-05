import { createContext, useContext, useReducer } from 'react';
import Carrito from './Carrito';

const AppContext = createContext();

const initialState = {
    productos: [],
    usuario: null,
    carrito: new Carrito(),
    categoriaSeleccionada: null,
};

const appReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTOS':
            return { ...state, productos: action.payload };
        case 'SET_USUARIO':
            return { ...state, usuario: action.payload };
        case 'SET_CARRITO':
            return { ...state, carrito: action.payload };
        case 'SET_CATEGORIA':
            return { ...state, categoriaSeleccionada: action.payload };
        case 'TOGGLE_CATEGORIAS_MENU':
            return { ...state, mostrarCategoriasMenu: !state.mostrarCategoriasMenu };
        default:
            return state;
    }
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('Error al utilizar useAppContext');
    }
    return context;
};

export { AppProvider, useAppContext };
