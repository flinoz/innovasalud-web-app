**InnovaSalud** es una aplicación web full-stack, informativa y dinámica, desarrollada como propuesta para un concurso de tecnología. El proyecto presenta un catálogo interactivo de innovaciones de vanguardia en los campos de la **salud, la tecnología y el medio ambiente**, ofreciendo una experiencia de usuario fluida y un diseño profesional.

![Captura de pantalla de la página de inicio de InnovaSalud](https://i.imgur.com/gI2i2G5.jpg) ---

## ✨ Características Clave

-   **Catálogo Dinámico:** El contenido se carga desde una base de datos MySQL a través de una API RESTful, mostrando las innovaciones agrupadas por categoría.
-   **Navegación Fluida (SPA):** Gracias a React Router, la navegación entre las secciones "Inicio", "Innovaciones" y "Contacto" es instantánea y no requiere recargar la página.
-   **Interfaz Interactiva:** Al hacer clic en una innovación, se despliega una ventana modal con información detallada, incluyendo una etiqueta de tema principal para una fácil identificación.
-   **Diseño Responsivo:** La interfaz se adapta perfectamente a cualquier tamaño de pantalla, desde monitores de escritorio hasta dispositivos móviles.
-   **Arquitectura Full-Stack:** Clara separación entre el frontend (React) y el backend (Node.js/Express), siguiendo las mejores prácticas de desarrollo.

---

## 🛠️ Stack Tecnológico

| Área      | Tecnología                               | Propósito                                      |
| :-------- | :--------------------------------------- | :--------------------------------------------- |
| **Frontend** | [React.js](https://reactjs.org/)       | Construcción de la interfaz de usuario.        |
|           | [React Router](https://reactrouter.com/) | Manejo de rutas y navegación SPA.              |
|           | [Axios](https://axios-http.com/)       | Peticiones HTTP al backend.                    |
| **Backend** | [Node.js](https://nodejs.org/)         | Entorno de ejecución del servidor.             |
|           | [Express.js](https://expressjs.com/)   | Creación de la API RESTful.                    |
|           | [dotenv](https://www.npmjs.com/package/dotenv) | Manejo seguro de variables de entorno.       |
| **Base de Datos** | [MySQL](https://www.mysql.com/)        | Almacenamiento y gestión de datos relacionales. |

---

## 🚀 Instalación y Ejecución Local

Sigue estos pasos para poner en marcha la aplicación en tu máquina local.

#### **Pre-requisitos**
-   Tener instalado [Node.js](https://nodejs.org/) (versión 16 o superior).
-   Tener instalado y en ejecución un servidor de [MySQL](https://www.mysql.com/).

#### **1. Configuración de la Base de Datos**
1.  Abre tu cliente de MySQL (MySQL Workbench, DBeaver, etc.).
2.  Ejecuta el script SQL ubicado en `backend/database/innova_salud_db.sql`. Este script creará la base de datos, la tabla `innovaciones` y la poblará con los datos iniciales.

#### **2. Configuración del Backend**
1.  Navega a la carpeta del backend en una terminal:
    ```bash
    cd ruta/a/tu/proyecto/backend
    ```
2.  Crea un archivo `.env` en la raíz de la carpeta `backend` y añade tus credenciales:
    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=tu_contraseña_secreta
    DB_DATABASE=innova_salud_db
    ```
3.  Instala las dependencias y ejecuta el servidor:
    ```bash
    npm install
    npm start
    ```
    El servidor estará escuchando en `http://localhost:3001`.

#### **3. Configuración del Frontend**
1.  Abre una **segunda terminal**.
2.  Navega a la carpeta del frontend:
    ```bash
    cd ruta/a/tu/proyecto/frontend
    ```
3.  Instala las dependencias y ejecuta la aplicación:
    ```bash
    npm install
    npm start
    ```
    La aplicación se abrirá automáticamente en tu navegador en `http://localhost:3000`.

---

## 📸 Capturas de Pantalla Adicionales

**Catálogo de Innovaciones**
`![Catálogo de Innovaciones]`

**Ventana Modal**
`![Ventana Modal con Detalles]`

---

## 📜 Licencia

Este proyecto se encuentra bajo una licencia de derechos de autor exclusivos.
Copyright (c) 2025 Felipe Lino. Todos los derechos reservados.

Para más detalles, consulta el archivo LICENSE.

---

## 👨‍💻 Autor

-   **Contacto:** flinoz91@gmail.com
-   **GitHub:** `[Enlace a tu perfil de GitHub]`

¡Gracias por revisar este proyecto!