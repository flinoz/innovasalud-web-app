/*!
 * Sistema: "InnovaSalud"
 * Copyright (c) 2025 Felipe Lino. Todos los derechos reservados.
 * Uso, reproducción o distribución sin autorización expresa está prohibida.
 * Jurisdicción: México
 */

// ruta: frontend/src/components/Inicio.js

import React from 'react';
import './Inicio.css'; 

const Inicio = () => {
    const imageUrl = `${process.env.PUBLIC_URL}/images/hero-innovacion.jpg`;

    return (
        <div className="inicio-container">
            {/* 1. El texto ahora está primero */}
            <h2>Bienvenido a InnovaSalud</h2>
            <p>Donde descubriras las más recientes innovaciones en medio ambiente, tecnología o salud que están moldeando nuestro futuro.</p>

            {/* 2. La imagen ahora está después del texto */}
            <img 
                src={imageUrl} 
                alt="Innovación en tecnología y salud" 
                className="inicio-hero-image" 
            />
        </div>
    );
};

export default Inicio;