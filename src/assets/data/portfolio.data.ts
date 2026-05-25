import {
  PersonalInfo,
  Project,
  SkillGroup,
  Experience,
  Education,
  Stat,
  SocialLink,
} from '../../app/core/models/portfolio.models';

// ─────────────────────────────────────────────
// PERSONAL INFO
// ─────────────────────────────────────────────

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Ekaterina Zotova',
  alias: 'Katia',
  role: 'Frontend Developer',
  roles: ['Frontend Developer', 'React & Next.js', 'MWC 2025 Speaker'],
  summary:
    'Combino desarrollo frontend, marketing digital y visión de negocio para crear productos orientados al usuario y a resultados. Rápida adaptación, autonomía y experiencia real en proyectos con React y Next.js.',
  location: 'Gijón, España',
  availableRemote: true,
  email: 'zotova.ea@gmail.com',
  phone: '+34 653 539 287',
  linkedin: 'https://linkedin.com/in/zotovaea',
  github: 'https://github.com/zookatt',
  cvUrl: '/assets/cv/ekaterina-zotova-cv.pdf',
  languages: [
    { name: 'Ruso', level: 'Nativo' },
    { name: 'Español', level: 'Avanzado (C1)' },
    { name: 'Inglés', level: 'Intermedio (B2)' },
  ],
};

// ─────────────────────────────────────────────
// ABOUT — bio y timeline personal
// ─────────────────────────────────────────────

export const BIO_PARAGRAPHS: string[] = [
  'Hace 11 años me mudé sola a España y pasé de estudiante extranjera a trabajar oficialmente en marketing, adaptándome al idioma y a la cultura mientras construía mi carrera y mi vida.',
  'Durante la pandemia desarrollé una gran autonomía gestionando situaciones complejas. Después amplié mi perfil técnico: aprendí WordPress, creé una landing para un negocio de alquiler de bicicletas y conseguí los primeros clientes mediante SEO y SEM.',
  'Tras el bootcamp de desarrollo frontend, participé como expositora en el Mobile World Congress 2025 con la startup MindChef, colaborando como Frontend Developer y ampliando mi visión tecnológica.',
];

export const TIMELINE: { year: string; label: string; icon: string }[] = [
  { year: '2014', label: 'Llegada a España', icon: '✈️' },
  { year: '2018', label: 'Barcelona · Recepcionista internacional', icon: '🏨' },
  { year: '2022', label: 'Xarifit · Project Manager & WordPress', icon: '💼' },
  { year: '2023', label: 'Bootcamp IT Academy · React & Frontend', icon: '🎓' },
  { year: '2024', label: 'IT Academy · Frontend Developer', icon: '💻' },
  { year: '2025', label: 'MindChef · MWC Barcelona', icon: '🚀' },
  { year: '2025', label: 'Factoría F5 · Gijón · Angular & AWS', icon: '⚡' },
];

// ─────────────────────────────────────────────
// STATS
// ─────────────────────────────────────────────

export const STATS: Stat[] = [
  { value: 4, suffix: '', label: 'Másteres completados' },
  { value: 3, suffix: '+', label: 'Años en tech' },
  { value: 30, suffix: '%', label: 'Mejora de rendimiento en MindChef' },
  { value: 1, suffix: '', label: 'Mobile World Congress' },
];

// ─────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: 'mindchef',
    title: 'MindChef',
    description:
      'MVP de startup presentado en el Mobile World Congress 2025. Lideré el frontend desde cero: arquitectura, stack y despliegue. Reducción del tiempo de carga en un 30% y mejora de eficiencia del 20% mediante componentes reutilizables.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'AWS'],
    imageUrl: '/assets/images/projects/mindchef.webp',
    demoUrl: '',
    githubUrl: '',
    featured: true,
    badge: 'MWC 2025 ✦',
  },
  {
    id: 'tech-shop',
    title: 'Tech Shop',
    description:
      'Modernización de web ecommerce tecnológica. Rediseño UX/UI en Figma, desarrollo frontend con HTML5 semántico, enfoque Mobile First, JavaScript y Tailwind CSS. Optimización de accesibilidad.',
    tags: ['HTML5', 'JavaScript', 'Tailwind CSS', 'Figma'],
    imageUrl: '/assets/images/projects/tech-shop.webp',
    demoUrl: '',
    githubUrl: 'https://github.com/zookatt/tech-shop',
    featured: false,
    badge: null,
  },
  {
    id: 'clon-spotify',
    title: 'Clon Spotify',
    description:
      'Landing page replicando la interfaz de Spotify. Maquetación con HTML semántico, diseño responsive con CSS Flexbox e implementación de funcionalidades interactivas con JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: '/assets/images/projects/spotify-clone.webp',
    demoUrl: '',
    githubUrl: 'https://github.com/zookatt/clon-spotify',
    featured: false,
    badge: null,
  },
];

export const PROJECT_FILTER_TAGS: string[] = [
  'Todos',
  'React',
  'Next.js',
  'JavaScript',
  'HTML5',
  'Tailwind CSS',
  'AWS',
  'Figma',
];

// ─────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML & CSS', level: 3, iconUrl: '/assets/icons/html.svg' },
      { name: 'JavaScript', level: 3, iconUrl: '/assets/icons/javascript.svg' },
      { name: 'TypeScript', level: 2, iconUrl: '/assets/icons/typescript.svg' },
      { name: 'React', level: 3, iconUrl: '/assets/icons/react.svg' },
      { name: 'Next.js', level: 3, iconUrl: '/assets/icons/nextjs.svg' },
      { name: 'Angular', level: 2, iconUrl: '/assets/icons/angular.svg' },
      { name: 'Three.js', level: 1, iconUrl: '/assets/icons/threejs.svg' },
      { name: 'Tailwind CSS', level: 3, iconUrl: '/assets/icons/tailwind.svg' },
    ],
  },
  {
    category: 'Testing & QA',
    skills: [
      { name: 'Jest', level: 2, iconUrl: '/assets/icons/jest.svg' },
      { name: 'Vitest', level: 2, iconUrl: '/assets/icons/vitest.svg' },
      { name: 'Testing Library', level: 2, iconUrl: '/assets/icons/testing-library.svg' },
      { name: 'Playwright', level: 1, iconUrl: '/assets/icons/playwright.svg' },
    ],
  },
  {
    category: 'Backend & Cloud',
    skills: [
      { name: 'Firebase', level: 2, iconUrl: '/assets/icons/firebase.svg' },
      { name: 'AWS', level: 1, iconUrl: '/assets/icons/aws.svg' },
    ],
  },
  {
    category: 'Herramientas',
    skills: [
      { name: 'Git & GitHub', level: 3, iconUrl: '/assets/icons/git.svg' },
      { name: 'Figma', level: 3, iconUrl: '/assets/icons/figma.svg' },
      { name: 'ESLint & Prettier', level: 2, iconUrl: '/assets/icons/eslint.svg' },
      { name: 'WordPress', level: 2, iconUrl: '/assets/icons/wordpress.svg' },
      { name: 'Storybook', level: 2, iconUrl: '/assets/icons/storybook.svg' },
    ],
  },
  {
    category: 'Diseño',
    skills: [
      { name: 'Figma', level: 3, iconUrl: '/assets/icons/figma.svg' },
      { name: 'Photoshop', level: 2, iconUrl: '/assets/icons/photoshop.svg' },
      { name: 'Illustrator', level: 1, iconUrl: '/assets/icons/illustrator.svg' },
      { name: 'Canva', level: 3, iconUrl: '/assets/icons/canva.svg' },
    ],
  },
];

// Nivel: 1 = básico · 2 = medio · 3 = avanzado
export const SKILL_LEVEL_LABELS: Record<number, string> = {
  1: 'Básico',
  2: 'Medio',
  3: 'Avanzado',
};

// ─────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────

export const EXPERIENCES: Experience[] = [
  {
    id: 'mindchef',
    company: 'MindChef',
    role: 'Frontend Developer',
    type: 'tech',
    location: 'Remoto · Barcelona',
    startDate: 'Ene 2025',
    endDate: 'Presente',
    current: true,
    highlights: [
      'Lideré el desarrollo del frontend desde cero, definiendo arquitectura y stack (React, Next.js, Tailwind)',
      'Desarrollé el MVP en 1 mes, presentado en el Mobile World Congress 2025',
      'Implementé buenas prácticas de código y despliegues en AWS',
      'Reduje el tiempo de carga en un 30% y mejoré la eficiencia del desarrollo en un 20%',
    ],
    badge: 'MWC 2025',
  },
  {
    id: 'itacademy',
    company: 'IT Academy',
    role: 'Frontend Developer',
    type: 'tech',
    location: 'Remoto · Barcelona',
    startDate: 'Nov 2024',
    endDate: 'Ene 2026',
    current: false,
    highlights: [
      'Desarrollé aplicaciones frontend con React, TypeScript y Storybook',
      'Implementé testing con Vitest, Jest y Testing Library',
      'Trabajé en equipo bajo metodología ágil con gestión de versiones en GitHub',
    ],
    badge: null,
  },
  {
    id: 'xarifit',
    company: 'Xarifit SL',
    role: 'Project Manager',
    type: 'other',
    location: 'Presencial · Barcelona',
    startDate: 'Jun 2024',
    endDate: 'Sep 2024',
    current: false,
    highlights: [
      'Gestión de proyectos digitales y coordinación de equipos en entorno startup',
      'Desarrollo y mantenimiento de la web corporativa en WordPress',
      'Incremento de la visibilidad online en un 30% mediante mejoras SEO',
    ],
    badge: null,
  },
  {
    id: 'costa-mediterranea',
    company: 'Costa Mediterranea Almar SL',
    role: 'Recepcionista',
    type: 'other',
    location: 'Presencial · Barcelona',
    startDate: 'Mar 2018',
    endDate: 'Mar 2022',
    current: false,
    highlights: [
      'Gestión de atención al cliente en entorno internacional (español, inglés, ruso)',
      'Coordinación de reservas y operaciones diarias',
      'Reducción del tiempo de check-in en un 15% mediante optimización de procesos',
    ],
    badge: null,
  },
];

// ─────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────

export const EDUCATION: Education[] = [
  {
    id: 'factoria-f5',
    institution: 'Factoría F5 · SEPEPA · Ayuntamiento de Gijón',
    degree: 'Certificado de Profesionalidad — Confección y Publicación de Páginas Web',
    hours: 560,
    startDate: 'Feb 2025',
    endDate: 'Jun 2026',
    current: true,
    highlights: [
      'Interfaces web dinámicas con HTML, CSS, JavaScript',
      'Diseño y prototipado en Figma',
      'Despliegue en entornos cloud con AWS',
      'Metodologías ágiles (Scrum y Kanban)',
    ],
  },
  {
    id: 'uoc',
    institution: 'Universitat Oberta de Catalunya · SOC · Generalitat de Catalunya',
    degree: 'Front End Web Developer',
    hours: 240,
    startDate: 'Oct 2024',
    endDate: 'Dic 2024',
    current: false,
    highlights: [
      'HTML, CSS y JavaScript con buenas prácticas',
      'Lógica de programación y manipulación del DOM',
      'Introducción a React y React Native (Expo)',
    ],
  },
  {
    id: 'it-academy',
    institution: 'IT Academy · Barcelona Activa',
    degree: 'Bootcamp Desarrollo Frontend con React',
    hours: null,
    startDate: 'Sep 2023',
    endDate: 'Abr 2024',
    current: false,
    highlights: [
      'HTML, CSS, JavaScript — interfaces dinámicas',
      'Aplicaciones completas con Firebase como backend',
      'Testing con Jest, Vitest y Testing Library',
      'Metodologías ágiles en proyectos reales',
    ],
  },
];

// ─────────────────────────────────────────────
// SOCIAL LINKS
// ─────────────────────────────────────────────

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/zookatt',
    icon: 'github',
    ariaLabel: 'Perfil de GitHub de Ekaterina Zotova',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/zotovaea',
    icon: 'linkedin',
    ariaLabel: 'Perfil de LinkedIn de Ekaterina Zotova',
  },
  {
    platform: 'Email',
    url: 'mailto:zotova.ea@gmail.com',
    icon: 'mail',
    ariaLabel: 'Enviar email a Ekaterina Zotova',
  },
];

// ─────────────────────────────────────────────
// SEO / METADATA
// ─────────────────────────────────────────────

export const SEO = {
  title: 'Ekaterina Zotova · Frontend Developer',
  description:
    'Portfolio de Ekaterina Zotova, Frontend Developer con experiencia en React, Next.js y Angular. Expositora en el Mobile World Congress 2025.',
  url: 'https://zookatt.github.io',
  image: '/assets/images/og-image.webp',
  twitterHandle: '',
};
