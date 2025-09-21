// Espera a que todo el HTML esté cargado antes de ejecutar cualquier código
document.addEventListener('DOMContentLoaded', () => {

    // --- ELEMENTOS PRINCIPALES ---
    const mainContent = document.getElementById('main-content');
    const modalContainer = document.getElementById('modal-container');
    const apiUrl = 'http://localhost:3001/api/innovaciones';

    // --- NAVEGACIÓN ---
    document.getElementById('nav-inicio').addEventListener('click', (e) => {
        e.preventDefault();
        showInicio();
    });
    document.getElementById('nav-innovaciones').addEventListener('click', (e) => {
        e.preventDefault();
        showInnovaciones();
    });
    document.getElementById('nav-contacto').addEventListener('click', (e) => {
        e.preventDefault();
        showContacto();
    });
    document.getElementById('nav-home-logo').addEventListener('click', (e) => {
        e.preventDefault();
        showInicio();
    });

    // --- FUNCIONES PARA MOSTRAR CADA PÁGINA ---

    function showInicio() {
        const heroImageUrl = 'images/hero-inicio.jpg'; // Ruta local
        mainContent.innerHTML = `
            <div class="page-container">
                <h2>Bienvenido a InnovaSalud</h2>
                <p>Tu portal para descubrir las más recientes innovaciones en tecnología y salud que están moldeando nuestro futuro.</p>
                <img src="${heroImageUrl}" alt="Innovación en tecnología y salud" class="hero-image">
            </div>
        `;
    }

    function showInnovaciones() {
        mainContent.innerHTML = `<p>Cargando innovaciones...</p>`; // Mensaje de carga
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) throw new Error('Error de red');
                return response.json();
            })
            .then(data => {
                const innovacionesAgrupadas = data.reduce((acc, innovacion) => {
                    const categoria = innovacion.categoria || 'Sin Categoría';
                    if (!acc[categoria]) acc[categoria] = [];
                    acc[categoria].push(innovacion);
                    return acc;
                }, {});

                mainContent.innerHTML = '';
                for (const categoria in innovacionesAgrupadas) {
                    const section = document.createElement('section');
                    section.className = 'category-section';
                    section.innerHTML = `<h2 class="category-title">${categoria}</h2>`;
                    
                    const grid = document.createElement('div');
                    grid.className = 'innovacion-grid';

                    innovacionesAgrupadas[categoria].forEach(item => {
                        const imageUrl = `http://localhost:3001/images/${item.imagen_url}`;
                        const card = document.createElement('div');
                        card.className = 'innovacion-card';
                        card.innerHTML = `
                            <div class="card-image-container"><img src="${imageUrl}" alt="${item.nombre}"></div>
                            <div class="card-content"><h3>${item.nombre}</h3></div>
                        `;
                        card.addEventListener('click', () => mostrarModal(item));
                        grid.appendChild(card);
                    });
                    section.appendChild(grid);
                    mainContent.appendChild(section);
                }
            })
            .catch(error => {
                console.error('Error al obtener las innovaciones:', error);
                mainContent.innerHTML = `<div class="page-container"><p><strong>Error al cargar los datos.</strong><br>Por favor, asegúrate de que el servidor backend esté funcionando en el puerto 3001.</p></div>`;
            });
    }

    function showContacto() {
        mainContent.innerHTML = `
            <div class="page-container">
                <h2>Contacto</h2>
                <p>¿Tienes alguna pregunta o sugerencia? Contáctanos en:</p>
                <p><strong>email:</strong> contacto@innovasalud.dev</p>
            </div>
        `;
    }

    // --- FUNCIONES DEL MODAL ---
    function getTheme(category) {
        const healthCategories = ['Biotecnología', 'Dispositivos Médicos', 'Ingeniería de Tejidos', 'Edición Genética'];
        const techCategories = ['Robótica y Cirugía', 'Inteligencia Artificial'];
        const environmentCategories = ['Medio Ambiente', 'Tecnología Climática'];
        if (healthCategories.includes(category)) return 'Salud';
        if (techCategories.includes(category)) return 'Tecnología';
        if (environmentCategories.includes(category)) return 'Medio Ambiente';
        return 'Innovación';
    }

    function mostrarModal(innovacion) {
        const imageUrl = `http://localhost:3001/images/${innovacion.imagen_url}`;
        const theme = getTheme(innovacion.categoria);
        
        document.getElementById('modal-img').src = imageUrl;
        document.getElementById('modal-title').textContent = innovacion.nombre;
        document.getElementById('modal-description').textContent = innovacion.descripcion;
        document.getElementById('modal-impact').innerHTML = `<strong>Impacto Principal:</strong> ${innovacion.impacto}`;
        
        const themeElement = document.getElementById('modal-theme');
        themeElement.textContent = theme;
        themeElement.className = 'modal-theme';
        themeElement.classList.add(`theme-${theme.toLowerCase().replace(' ', '-')}`);

        modalContainer.style.display = 'flex';

        document.getElementById('modal-close').onclick = () => {
            modalContainer.style.display = 'none';
        };
        modalContainer.onclick = (event) => {
            if (event.target === modalContainer) {
                modalContainer.style.display = 'none';
            }
        };
    }

    // --- CARGA INICIAL ---
    showInicio(); // Carga la página de Inicio por defecto.
});