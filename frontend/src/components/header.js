/*!
 * Sistema: "InnovaSalud"
 * Copyright (c) 2025 Felipe Lino. Todos los derechos reservados.
 * Uso, reproducción o distribución sin autorización expresa está prohibida.
 * Jurisdicción: México
 */

// ruta: frontend/src/components/header.js

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'; // Importamos el logo

function Header() {
    return (
        <header>
            <div className="header-content">
                <Logo />
                <h1><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>InnovaSalud</Link></h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/innovaciones">Innovaciones</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;