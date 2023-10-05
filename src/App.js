// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Usuario from './components/Usuario';
import ProductView from './components/ProductView';
import CarritoView from './components/CarritoView';
import { AppProvider } from './components/AppContext';

function App() {
    return (
        <AppProvider>
            <Router>
                <div className="App">
                    <Usuario />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Products />} />
                        <Route path="/product/:id" element={<ProductView />} />
                        <Route path="/carrito" element={<CarritoView />} />
                    </Routes>
                </div>
            </Router>
        </AppProvider>
    );
}

export default App;







