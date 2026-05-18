import type { Project } from '../types'

export const projects: Project[] = [
  {
    slug: 'portfolio',
    title: 'Personal Portfolio',
    description:
      'This site. A dark-first, code-aesthetic portfolio built with React, TypeScript, and Tailwind CSS. Deployed on GitHub Pages via GitHub Actions.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'GitHub Pages'],
    categories: ['Frontend'],
    repoUrl: 'https://github.com/IvanBarreno/portfolio',
    demoUrl: null,
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
    thumbnail: null,
  },
  {
    slug: 'finify-app',
    title: 'Co-Working FinifyAPP',
    description:
      'An academic project involving to solve a financial problems by providing a platform to manage expenses, bills, income and more. And provide ways to save money like making deals with a group of people to create like a pool of money and by turns all can get the money for an specific purpose (Cuchubal).',
    tags: ['Full Stack', 'Backend', 'REST API'],
    categories: ['Full Stack'],
    repoUrl: null,
    demoUrl: null,
    thumbnail: null,
  },
  {
    slug: 'wfm-management',
    title: 'WFM Management',
    description:
      'An administrative platform to manage data uploads to a database, it provides also forms like QA evaluations for processes, one on one feedback, a section to have centraliced list of Dashboards and task assignment.',
    tags: ['Backend', 'JQuery', 'Bootstrap'],
    categories: ['Backend', 'Frontend'],
    repoUrl: null,
    demoUrl: null,
    thumbnail: null,
  },
  {
    slug: 'coworking-digital',
    title: 'Co-Working Digital Transformation App',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    tags: ['Full Stack', 'Frontend', 'Backend'],
    categories: ['Full Stack', 'Frontend', 'Backend'],
    repoUrl: null,
    demoUrl: null,
    thumbnail: null,
  },
  {
    slug: 'etl-medallion',
    title: 'ETL Medallion Data Pipeline',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tags: ['Python', 'ETL', 'Pandas', 'Data Science'],
    categories: ['Data Science'],
    repoUrl: null,
    demoUrl: null,
    thumbnail: null,
  },
]

export const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Data Science'] as const
export type FilterCategory = typeof categories[number]
