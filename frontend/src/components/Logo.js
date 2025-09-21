/*!
 * Sistema: "InnovaSalud"
 * Copyright (c) 2025 Felipe Lino. Todos los derechos reservados.
 * Uso, reproducción o distribución sin autorización expresa está prohibida.
 * Jurisdicción: México
 */

// ruta: frontend/src/components/Logo.js

import React from 'react';

const Logo = () => (
    <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ marginTop: '5px' }}
    >
        <path
            d="M50,90 C10,50 30,10 50,30 C70,10 90,50 50,90 Z"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
        />
        <path
            d="M25 55 H 40 L 48 45 L 56 65 L 64 50 H 75"
            fill="none"
            stroke="#1dc8cd"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default Logo;