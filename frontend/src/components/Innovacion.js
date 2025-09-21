/*!
 * Sistema: "InnovaSalud"
 * Copyright (c) 2025 Felipe Lino. Todos los derechos reservados.
 * Uso, reproducción o distribución sin autorización expresa está prohibida.
 * Jurisdicción: México
 */

// ruta: frontend/src/components/Innovacion.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import './Innovacion.css';

// --- NUEVA FUNCIÓN ---
// Esta función determina el tema principal basado en la categoría específica.
const getTheme = (category) => {
    const healthCategories = ['Biotecnología', 'Dispositivos Médicos', 'Ingeniería de Tejidos', 'Edición Genética'];
    const techCategories = ['Robótica y Cirugía', 'Inteligencia Artificial'];
    const environmentCategories = ['Medio Ambiente', 'Tecnología Climática'];

    if (healthCategories.includes(category)) return 'Salud';
    if (techCategories.includes(category)) return 'Tecnología';
    if (environmentCategories.includes(category)) return 'Medio Ambiente';
    
    return 'Innovación'; // Un valor por defecto
};
// --------------------


// Componente Modal (con la nueva etiqueta de tema)
const Modal = ({ innovacion, onClose }) => {
    if (!innovacion) return null;

    const imageUrl = `http://localhost:3001/images/${innovacion.imagen_url}`;
    const theme = getTheme(innovacion.categoria); // Obtenemos el tema principal
    const themeClassName = `modal-theme theme-${theme.toLowerCase().replace(' ', '-')}`; // Creamos una clase CSS dinámica

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <img src={imageUrl} alt={innovacion.nombre} className="modal-img" />
                
                {/* --- SECCIÓN MODIFICADA --- */}
                <div className="modal-header">
                    <span className={themeClassName}>{theme}</span>
                    <h2 className="modal-title">{innovacion.nombre}</h2>
                </div>
                {/* --------------------------- */}

                <p className="modal-description">{innovacion.descripcion}</p>
                <div className="modal-impact">
                    <strong>Impacto Principal:</strong> {innovacion.impacto}
                </div>
            </div>
        </div>
    );
};


// Componente Innovaciones (sin cambios en la lógica principal)
const Innovaciones = () => {
    const [innovacionSeleccionada, setInnovacionSeleccionada] = useState(null);
    const [innovacionesAgrupadas, setInnovacionesAgrupadas] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/api/innovaciones')
            .then(response => {
                const agrupado = response.data.reduce((acc, innovacion) => {
                    const categoria = innovacion.categoria || 'Sin Categoría';
                    if (!acc[categoria]) acc[categoria] = [];
                    acc[categoria].push(innovacion);
                    return acc;
                }, {});
                setInnovacionesAgrupadas(agrupado);
            })
            .catch(error => {
                console.error('Error al obtener los datos!', error);
                setError('No se pudo conectar con el servidor.');
            });
    }, []);

    if (error) return <p className="error-message">{error}</p>;

    return (
        <div>
            {Object.entries(innovacionesAgrupadas).map(([categoria, items]) => (
                <section key={categoria} className="category-section">
                    <h2 className="category-title">{categoria}</h2>
                    <div className="innovacion-grid">
                        {items.map(item => {
                            const imageUrl = `http://localhost:3001/images/${item.imagen_url}`;
                            return (
                                <div key={item.id} className="innovacion-card" onClick={() => setInnovacionSeleccionada(item)}>
                                    <div className="card-image-container">
                                        <img src={imageUrl} alt={item.nombre} />
                                    </div>
                                    <div className="card-content">
                                        <h3>{item.nombre}</h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            ))}
            <Modal innovacion={innovacionSeleccionada} onClose={() => setInnovacionSeleccionada(null)} />
        </div>
    );
}

export default Innovaciones;