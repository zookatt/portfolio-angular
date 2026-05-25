// ─────────────────────────────────────────────
// PORTFOLIO MODELS
// src/app/core/models/portfolio.models.ts
// ─────────────────────────────────────────────

export interface Language {
  name: string;
  level: string;
}

export interface PersonalInfo {
  name: string;
  alias: string;
  role: string;
  roles: string[]; // para el typewriter del hero
  summary: string;
  location: string;
  availableRemote: boolean;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  cvUrl: string;
  languages: Language[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  badge: string | null;
}

export interface Skill {
  name: string;
  level: 1 | 2 | 3; // 1 básico · 2 medio · 3 avanzado
  iconUrl: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: 'tech' | 'other'; // para filtrar o colorear en el timeline
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  highlights: string[];
  badge: string | null;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  hours: number | null;
  startDate: string;
  endDate: string;
  current: boolean;
  highlights: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  ariaLabel: string;
}
