/*!
 * Sistema: "InnovaSalud"
 * Copyright (c) 2025 Felipe Lino. Todos los derechos reservados.
 * Uso, reproducción o distribución sin autorización expresa está prohibida.
 * Jurisdicción: México
 */

// ruta/a/tu/proyecto/frontend/src/App.js

import React from 'react';
// 1. Importar los componentes necesarios de react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 2. Importar todos los componentes/páginas
import Header from './components/header';
import Footer from './components/Footer';
import Innovaciones from './components/Innovacion';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import './App.css';

function App() {
  return (
    // 3. Envolver toda la aplicación en el componente Router
    <Router>
      <div className="App">
        <Header />
        <main>
          {/* 4. Definir el área donde cambiará el contenido de la página */}
          <Routes>
            {/* Ruta para la página de Inicio */}
            <Route path="/" element={<Inicio />} />

            {/* Ruta para la página de Innovaciones */}
            <Route path="/innovaciones" element={<Innovaciones />} />
            
            {/* Ruta para la página de Contacto */}
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;