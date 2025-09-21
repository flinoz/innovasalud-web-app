/*
 * Sistema: "InnovaSalud"
 * Copyright (c) 2025 Felipe Lino. Todos los derechos reservados.
 * Uso, reproducción o distribución sin autorización expresa está prohibida.
 * Jurisdicción: México
 */

-- 1. CREACIÓN DE LA BASE DE DATOS
-- Se crea la base de datos `innova_salud_db` solo si no existe, para evitar errores.
CREATE DATABASE IF NOT EXISTS innova_salud_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- 2. SELECCIÓN DE LA BASE DE DATOS
-- Indica a MySQL que todas las siguientes instrucciones se ejecutarán dentro de esta base de datos.
USE innova_salud_db;
-- 3. CREACIÓN DE LA TABLA `innovaciones`
-- Se elimina la tabla si ya existe para empezar desde cero y evitar conflictos.
DROP TABLE IF EXISTS innovaciones;
-- Se define la estructura de la tabla con tipos de datos adecuados.
CREATE TABLE innovaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    categoria VARCHAR(100),
    descripcion TEXT NOT NULL,
    imagen_url VARCHAR(255),
    impacto VARCHAR(255),
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- 4. INSERCIÓN DE DATOS COMPLETOS
-- Se insertan 6 registros detallados para poblar la aplicación.
INSERT INTO innovaciones (
        nombre,
        categoria,
        descripcion,
        imagen_url,
        impacto
    )
VALUES (
        'Terapia de ARNm',
        'Biotecnología',
        'Utiliza ARN mensajero para enseñar a nuestras células a producir una proteína específica que desencadena una respuesta inmunitaria, revolucionando el desarrollo de vacunas.',
        'https://imgur.com/3gJ4g9A.png',
        'Prevención acelerada de enfermedades infecciosas.'
    ),
    (
        'Sensores de Glucosa Continuos (CGM)',
        'Dispositivos Médicos',
        'Pequeños sensores portátiles, a menudo adheridos a la piel, que miden los niveles de glucosa intersticial en tiempo real, eliminando la necesidad de pinchazos constantes en los dedos.',
        'https://imgur.com/xI8a1fW.png',
        'Mejora radical en el manejo de la diabetes.'
    ),
    (
        'Cirugía Asistida por Robot (Da Vinci)',
        'Robótica y Cirugía',
        'Sistemas avanzados que permiten a los cirujanos realizar procedimientos complejos con mayor precisión, flexibilidad y control a través de brazos robóticos que minimizan la invasión.',
        'https://imgur.com/nN6iZ5s.png',
        'Cirugías menos invasivas y recuperación más rápida.'
    ),
    (
        'IA para Diagnóstico por Imagen',
        'Inteligencia Artificial',
        'Algoritmos de inteligencia artificial que analizan imágenes médicas como radiografías, tomografías y resonancias magnéticas para detectar anomalías y enfermedades como el cáncer de forma temprana y precisa.',
        'https://imgur.com/Mh7yvOQ.png',
        'Aumento de la precisión y velocidad del diagnóstico.'
    ),
    (
        'Bioimpresión 3D de Órganos',
        'Ingeniería de Tejidos',
        'Tecnología emergente que utiliza "biotintas" compuestas por células vivas para imprimir capa por capa estructuras biológicas, con el objetivo a largo plazo de crear órganos funcionales para trasplantes.',
        'https://imgur.com/1k2xS1j.png',
        'Potencial solución a la escasez de órganos.'
    ),
    (
        'Terapia Génica CRISPR-Cas9',
        'Edición Genética',
        'Una herramienta de edición genética que permite a los científicos modificar partes del genoma cortando, reemplazando o añadiendo secciones de la secuencia de ADN para tratar enfermedades genéticas.',
        'https://imgur.com/OzA4f8z.png',
        'Tratamiento de enfermedades hereditarias y genéticas.'
    );