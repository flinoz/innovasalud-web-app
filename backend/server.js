/*
 * Sistema: "InnovaSalud"
 * Copyright (c) 2025 Felipe Lino. Todos los derechos reservados.
 * Uso, reproducción o distribución sin autorización expresa está prohibida.
 * Jurisdicción: México
 */

// ruta: backend/server.js

// 1. Importar y configurar dotenv al principio de todo
require('dotenv').config();

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

const imagesPath = path.join(__dirname, 'public/images');
console.log(`El servidor intentará servir imágenes desde esta ruta: ${imagesPath}`);

app.use('/images', express.static(imagesPath));

// 2. Usar las variables de entorno para la conexión a la base de datos
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect(error => {
    if (error) {
        console.error("Error al conectar a la base de datos:", error);
        return;
    }
    console.log("Conexión exitosa a la base de datos MySQL.");
});

app.get('/api/innovaciones', (req, res) => {
    const query = 'SELECT * FROM innovaciones ORDER BY categoria';
    connection.query(query, (error, results) => {
        if (error) {
            return res.status(500).send("Error en el servidor.");
        }
        res.json(results);
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor de 'InnovaSalud' corriendo en puerto ${PORT}`);
});