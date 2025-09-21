# InnovaSalud: Aplicación Web de Innovación

![InnovaSalud Logo](https://i.imgur.com/your-logo-link.png) **InnovaSalud** es una aplicación web full-stack, informativa y dinámica, desarrollada como propuesta para un concurso de tecnología. El proyecto presenta un catálogo interactivo de innovaciones de vanguardia en los campos de la **salud, la tecnología y el medio ambiente**, ofreciendo una experiencia de usuario fluida y un diseño profesional.

---

## ✨ Características Principales

* **Catálogo Dinámico:** El contenido se carga desde una base de datos MySQL a través de una API RESTful, mostrando las innovaciones agrupadas por categoría.
* **Navegación SPA (Single-Page Application):** Gracias a React Router, la navegación entre las secciones "Inicio", "Innovaciones" y "Contacto" es instantánea y no requiere recargar la página.
* **Interfaz Interactiva:** Al hacer clic en una innovación, se despliega una ventana modal con información detallada, incluyendo una etiqueta de tema principal para una fácil identificación.
* **Diseño Responsivo:** La interfaz se adapta perfectamente a cualquier tamaño de pantalla, desde monitores de escritorio hasta dispositivos móviles.
* **Arquitectura Full-Stack:** Clara separación entre el frontend (React) y el backend (Node.js/Express), siguiendo las mejores prácticas de desarrollo.

---

## 🛠️ Tecnologías Utilizadas

#### **Frontend**
* **React.js:** Para la construcción de la interfaz de usuario basada en componentes.
* **React Router:** Para el manejo de rutas y la navegación SPA.
* **Axios:** Para realizar peticiones HTTP al backend.
* **CSS3:** Para el diseño y la estilización, utilizando Flexbox y CSS Grid para la responsividad.

#### **Backend**
* **Node.js:** Como entorno de ejecución de JavaScript del lado del servidor.
* **Express.js:** Para la construcción de una API RESTful robusta y organizada.
* **MySQL:** Como sistema de gestión de base de datos relacional.
* **CORS:** Para permitir la comunicación segura entre el frontend y el backend.

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

Sigue estos pasos para poner en marcha la aplicación en tu máquina local.

### **Pre-requisitos**
* Tener instalado [Node.js](https://nodejs.org/) (que incluye npm).
* Tener instalado y en ejecución un servidor de [MySQL](https://www.mysql.com/).

### **1. Configuración de la Base de Datos**
1.  Abre tu cliente de MySQL (MySQL Workbench, etc.).
2.  Crea una nueva base de datos llamada `innova_salud_db`.
3.  Ejecuta el script SQL que se encuentra en `backend/database/innova_salud_db.sql` para crear la tabla `innovaciones` y poblarla con los datos iniciales.

### **2. Iniciar el Servidor Backend**
1.  Abre una terminal.
2.  Navega a la carpeta del backend:
    ```bash
    cd ruta/a/tu/proyecto/backend
    ```
3.  Instala las dependencias:
    ```bash
    npm install
    ```
4.  **Importante:** Asegúrate de que las credenciales de tu base de datos en el archivo `server.js` son correctas.
5.  Inicia el servidor:
    ```bash
    npm start
    ```
    El servidor estará escuchando en `http://localhost:3001`.

### **3. Iniciar la Aplicación Frontend**
1.  Abre una **segunda terminal**.
2.  Navega a la carpeta del frontend:
    ```bash
    cd ruta/a/tu/proyecto/frontend
    ```
3.  Instala las dependencias:
    ```bash
    npm install
    ```
4.  Inicia la aplicación:
    ```bash
    npm start
    ```
    La aplicación se abrirá automáticamente en tu navegador en `http://localhost:3000`.

---

## 📸 Capturas de Pantalla

**Página de Inicio**
`![Página de Inicio de InnovaSalud]

**Catálogo de Innovaciones**
`![Catálogo de Innovaciones]

**Ventana Modal**
`![Ventana Modal con Detalles]

---

## 👨‍💻 Autor

* **flinoz**
* **flinoz91@gmail.com**
* **Enlace GitHub pendiente**

---

## 📜 Licencia

Este proyecto se encuentra bajo una licencia de derechos de autor exclusivos.

Copyright (c) 2025 Felipe Lino. Todos los derechos reservados.

Para más detalles, consulta el archivo [LICENSE](LICENSE).

¡Gracias por revisar mi proyecto!
