import type { Project } from '../types'

// Load all project descriptions/walkthroughs as raw strings - bundled at build time by Vite
const rawExplanations = import.meta.glob('./projects_explanations/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const projectsData: Project[] = [
  {
    slug: 'portfolio',
    title: 'Personal Portfolio',
    description:
      'This site. A dark-first, code-aesthetic portfolio built with React, TypeScript, and Tailwind CSS. Deployed on GitHub Pages via GitHub Actions.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'GitHub Pages'],
    categories: ['Frontend'],
    repoUrl: 'https://github.com/IvanBarreno/portfolio',
    demoUrl: null,
    description_md_url: null,
    thumbnail: null,
  },
  {
    slug: 'chucknorris-api',
    title: 'Chuck Norris API Consumer',
    description:
      'A web app that fetches and displays random Chuck Norris jokes from the chucknorris.io public API. Built to practice REST API consumption and frontend fundamentals.',
    tags: ['JavaScript', 'HTML', 'CSS', 'REST API'],
    categories: ['Frontend'],
    repoUrl: 'https://github.com/IvanBarreno/chucknorris',
    demoUrl: null,
    description_md_url: null,
    thumbnail: null,
  },
  {
    slug: 'todo-app',
    title: 'ToDo App — Full Stack',
    description:
      'A full-stack task management application with a REST API backend and a responsive frontend. Built as a web frameworks academic project.',
    tags: ['Full Stack', 'REST API', 'Backend', 'Frontend', 'Angular'],
    categories: ['Full Stack', 'Frontend', 'Backend'],
    repoUrl: 'https://github.com/JIvanBarreno/FAW_proyectoBack',
    demoUrl: null,
    description_md_url: null,
    thumbnail: null,
  },
  {
    slug: 'db-distribuidas',
    title: 'Distributed Bank DB — Sync & Backup',
    description:
      'Academic project simulating a distributed database system for a bank entity, with synchronization and automated backup mechanisms across multiple nodes.',
    tags: ['Distributed Systems', 'Databases', 'Backend', 'Frontend', 'SQL', 'Transactions'],
    categories: ['Full Stack', 'Frontend', 'Backend'],
    repoUrl: 'https://github.com/JIvanBarreno/cc6_proyecto_db_distribuida',
    demoUrl: null,
    description_md_url: null,
    thumbnail: null,
  },
  {
    slug: 'sales-manage',
    title: 'Sales Management System',
    description:
      "A sales management system covering product catalogues, orders, and customer tracking. Built as an academic full-stack project, to enforce database design and ACID principles.",
    tags: ['Full Stack', 'Database', 'REST API', 'ER Diagrams'],
    categories: ['Frontend', 'Backend'],
    repoUrl: 'https://github.com/JIvanBarreno/cc5_proyecto',
    demoUrl: null,
    description_md_url: null,
    thumbnail: null,
  },
  {
    slug: 'finify-app',
    title: 'Finify — Rotating Savings Ledger',
    description:
      'A full-stack personal finance and rotating savings circles ledger (Cuchubal/ROSCA) application. Built with Angular 18, NgRx state management, Node.js/Express, and a transactional MySQL backend featuring automated stored procedure calculations.',
    tags: ['Full Stack', 'Backend', 'REST API'],
    categories: ['Full Stack'],
    repoUrl: null,
    demoUrl: null,
    description_md_url: './projects_explanations/PORTFOLIO_WALKTHROUGH.md',
    thumbnail: null,
  },
  {
    slug: 'wfm-management',
    title: 'WFM Control Center',
    description:
      'An enterprise-grade workforce management and operations suite featuring automated overtime auditing, quality assurance scorecard metrics, BI dashboards, and role-based authorization gates. Built with PHP (PDO), MySQL, and asynchronous jQuery APIs.',
    tags: ['Backend', 'JQuery', 'Bootstrap'],
    categories: ['Backend', 'Frontend'],
    repoUrl: null,
    demoUrl: null,
    description_md_url: './projects_explanations/WFM_WALKTHROUGH.md',
    thumbnail: null,
  },
  {
    slug: 'coworking-digital',
    title: 'Co-Working Digital Transformation App',
    description:
      'A centralized management platform for employee rosters, schedules, and other internal processes. Also provides a module for building dynamic forms to collect data from users for specific purposes or questionnaires.',
    tags: ['Full Stack', 'Frontend', 'Backend'],
    categories: ['Full Stack', 'Frontend', 'Backend'],
    repoUrl: null,
    demoUrl: null,
    description_md_url: null,
    thumbnail: null,
  },
  {
    slug: 'etl-medallion',
    title: 'ETL Medallion Data Pipeline',
    description:
      'An ETL process to extract, transform, and load data from different sources into a centralized database. Implemented in Python with Pandas and Spark; some processes were built with Pentaho Data Integration.',
    tags: ['Python', 'ETL', 'Pandas', 'Data Science', 'Pentaho', 'Spark'],
    categories: ['Data Science'],
    repoUrl: null,
    demoUrl: null,
    description_md_url: null,
    thumbnail: null,
  },
]

export const projects: Project[] = projectsData.map(p => {
  if (p.description_md_url && rawExplanations[p.description_md_url]) {
    return {
      ...p,
      content_md: rawExplanations[p.description_md_url],
    }
  }
  return p
})

export const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Data Science'] as const
export type FilterCategory = typeof categories[number]
