// Reemplaza los datos de ejemplo por tu información real.
// Puedes duplicar objetos dentro de cada arreglo para agregar más contenido.

// Repositorios destacados de tu GitHub.
const featuredRepositories = [
    {
        name: 'Agencia de tecnologia',
        description: 'Aplicación que modela dos sedes aplicando bases de datos distribuida.',
        technologies: ['SQL Server'],
        url: 'https://github.com/Erick-1213/BD-Distribuido.git'
    },
    
];

// Intereses personales o profesionales.
const interests = [
    {
        title: 'Desarrollo Web',
        description: 'Interfaces limpias, responsive y centradas en una experiencia clara para el usuario.'
    },
    {
        title: 'Bases de Datos',
        description: 'Modelado, consultas eficientes, organización de información y calidad de datos.'
    },
    {
        title: 'Inteligencia Artificial',
        description: 'Aplicaciones prácticas de automatización, análisis y apoyo a la toma de decisiones.'
    },
    {
        title: 'Redes y Sistemas',
        description: 'Comprensión de infraestructura, conectividad y despliegue de servicios digitales.'
    }
];

// Proyectos del portafolio.
// Para agregar otro proyecto, copia uno de los objetos y cambia sus valores.
const projects = [
    {
        name: 'Portafolio Académico',
        description: 'Sitio web personal para presentar información profesional, proyectos y contacto.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        repository: 'https://github.com/tu-usuario/portafolio-academico',
        demo: 'https://tu-usuario.github.io/portafolio-academico/',
        image: 'assets/project-placeholder.svg'
    },
    {
        name: 'Gestor de Tareas',
        description: 'Aplicación para organizar tareas, asignar prioridades y dar seguimiento a avances.',
        technologies: ['Vue', 'LocalStorage', 'CSS'],
        repository: 'https://github.com/tu-usuario/gestor-tareas',
        demo: 'https://tu-usuario.github.io/gestor-tareas/',
        image: 'assets/project-placeholder.svg'
    },
    {
        name: 'Dashboard de Indicadores',
        description: 'Panel visual con métricas y gráficos para apoyar análisis rápidos.',
        technologies: ['JavaScript', 'Chart.js', 'API REST'],
        repository: 'https://github.com/tu-usuario/dashboard-indicadores',
        demo: '',
        image: 'assets/project-placeholder.svg'
    },
    {
        name: 'Sistema de Reservas',
        description: 'Flujo básico de reservas con formularios, validación y registro de operaciones.',
        technologies: ['PHP', 'MySQL', 'Bootstrap'],
        repository: 'https://github.com/tu-usuario/sistema-reservas',
        demo: '',
        image: 'assets/project-placeholder.svg'
    }
];

// Grupos de habilidades técnicas.
const skillGroups = [
    {
        title: 'Lenguajes',
        items: ['JavaScript', 'Python', 'Java', 'SQL', 'HTML', 'CSS']
    },
    {
        title: 'Frameworks y librerías',
        items: ['React', 'Vue', 'Bootstrap', 'Chart.js']
    },
    {
        title: 'Herramientas',
        items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman']
    },
    {
        title: 'Bases de datos y otros',
        items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Redes básicas']
    }
];

// Barras de nivel visual. Puedes ajustar los porcentajes a tu criterio.
const skillLevels = [
    { label: 'Desarrollo web', value: 88 },
    { label: 'Bases de datos', value: 76 },
    { label: 'Análisis de problemas', value: 84 },
    { label: 'Trabajo en equipo', value: 90 }
];

// Secciones complementarias para formación, certificados y experiencia.
const otherSections = [
    {
        title: 'Formación académica',
        description: 'Bachiller.'
    },
    {
        title: 'Certificados',
        description: 'Cursos de Python, Curso fundamentos de bases de datos, Curso Fudamentos de Redes y Conectividad, Curso de Scrum.'
    },
    {
        title: 'Experiencia',
        description: 'Prácticas , Proyectos, Ayudantías.'
    }
];

// Referencias a elementos del DOM.
const repoGrid = document.getElementById('repoGrid');
const interestGrid = document.getElementById('interestGrid');
const projectGrid = document.getElementById('projectGrid');
const skillGroupsContainer = document.getElementById('skillGroups');
const skillBars = document.getElementById('skillBars');
const otherGrid = document.getElementById('otherGrid');
const currentYear = document.getElementById('currentYear');
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const welcomePanel = document.getElementById('welcomePanel');
const contentSections = document.querySelectorAll('[data-panel]');
const panelLinks = document.querySelectorAll('a[href^="#"]');

const panelByHash = {
    '#inicio': 'acerca',
    '#acerca': 'acerca',
    '#proyectos': 'proyectos',
    '#repositorios': 'repositorios',
    '#habilidades': 'habilidades',
    '#contacto': 'contacto'
};

// Crea etiquetas visuales para tecnologías y habilidades.
function createTagList(items) {
    return items.map((item) => `<span class="tag">${item}</span>`).join('');
}

// Renderiza la sección de repositorios.
function renderRepositories() {
    repoGrid.innerHTML = featuredRepositories
        .map(
            (repo) => `
                <article class="repo-card">
                    <div class="repo-card__header">
                        <h3>${repo.name}</h3>
                        <p>${repo.description}</p>
                    </div>
                    <div class="tag-list">${createTagList(repo.technologies)}</div>
                    <div class="project-links">
                        <a href="${repo.url}" target="_blank" rel="noreferrer">Ver repositorio</a>
                    </div>
                </article>
            `
        )
        .join('');
}

// Renderiza la sección de intereses.
function renderInterests() {
    interestGrid.innerHTML = interests
        .map(
            (interest, index) => `
                <article class="interest-card">
                    <span class="interest-card__index">0${index + 1}</span>
                    <h3>${interest.title}</h3>
                    <p>${interest.description}</p>
                </article>
            `
        )
        .join('');
}

// Renderiza la sección de proyectos.
function renderProjects() {
    projectGrid.innerHTML = projects
        .map(
            (project) => `
                <article class="project-card">
                    <img src="${project.image}" alt="Vista previa de ${project.name}">
                    <div class="project-card__content">
                        <h3>${project.name}</h3>
                        <p>${project.description}</p>
                        <div class="tag-list">${createTagList(project.technologies)}</div>
                        <div class="project-links">
                            <a href="${project.repository}" target="_blank" rel="noreferrer">Repositorio</a>
                            ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noreferrer">Demo</a>` : '<a href="#contacto">Sin demo</a>'}
                        </div>
                    </div>
                </article>
            `
        )
        .join('');
}

// Renderiza los grupos de habilidades.
function renderSkillGroups() {
    skillGroupsContainer.innerHTML = skillGroups
        .map(
            (group) => `
                <article class="skill-group">
                    <h3>${group.title}</h3>
                    <div class="badge-list">
                        ${group.items.map((item) => `<span class="badge">${item}</span>`).join('')}
                    </div>
                </article>
            `
        )
        .join('');
}

// Renderiza las barras de nivel.
function renderSkillBars() {
    skillBars.innerHTML = skillLevels
        .map(
            (skill) => `
                <div class="skill-bar">
                    <span>
                        <strong>${skill.label}</strong>
                        <small>${skill.value}%</small>
                    </span>
                    <div class="skill-bar__track">
                        <div class="skill-bar__fill" style="width: ${skill.value}%"></div>
                    </div>
                </div>
            `
        )
        .join('');
}

// Renderiza las tarjetas de información adicional.
function renderOtherSections() {
    otherGrid.innerHTML = otherSections
        .map(
            (section) => `
                <article class="other-card">
                    <h3>${section.title}</h3>
                    <p>${section.description}</p>
                </article>
            `
        )
        .join('');
}

// Aplica el tema seleccionado y lo guarda en el navegador.
function applyTheme(theme) {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    localStorage.setItem('portfolio-theme', theme);
}

// Detecta el tema guardado o el preferido por el sistema.
function initializeTheme() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme || (preferredDark ? 'dark' : 'light'));
}

// Muestra solo el grupo de secciones correspondiente al panel seleccionado.
function showPanel(panelName) {
    const hasValidPanel = Boolean(panelName);

    contentSections.forEach((section) => {
        section.hidden = section.dataset.panel !== panelName;
    });

    welcomePanel.hidden = hasValidPanel;

    mainNav.querySelectorAll('a').forEach((link) => {
        link.classList.toggle('is-active', panelByHash[link.getAttribute('href')] === panelName);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Abre una sección cuando el enlace apunta a uno de los paneles definidos.
function handlePanelNavigation(event) {
    const href = event.currentTarget.getAttribute('href');
    const panelName = panelByHash[href];

    if (!panelName) {
        return;
    }

    event.preventDefault();
    showPanel(panelName);
    history.replaceState(null, '', href);
    mainNav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
}

// Si la página se abre con hash, muestra directamente la sección correspondiente.
function openPanelFromHash() {
    const panelName = panelByHash[window.location.hash];
    showPanel(panelName || '');
}

// Evento para alternar entre modo claro y oscuro.
themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
    applyTheme(nextTheme);
});

// Evento para mostrar u ocultar el menú en pantallas pequeñas.
menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    document.body.classList.toggle('menu-open', isOpen);
});

// Cierra el menú móvil al hacer clic en un enlace.
mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', handlePanelNavigation);
});

panelLinks.forEach((link) => {
    if (!mainNav.contains(link)) {
        link.addEventListener('click', handlePanelNavigation);
    }
});

// Inicialización general de la página.
currentYear.textContent = new Date().getFullYear();
initializeTheme();
renderRepositories();
renderInterests();
renderProjects();
renderSkillGroups();
renderSkillBars();
renderOtherSections();
openPanelFromHash();