import type { Project } from '../types'

export const projects: Project[] = [
  {
    slug: 'portfolio',
    title: 'Personal Portfolio',
    description:
      'This site. A dark-first, code-aesthetic portfolio built with React, TypeScript, and Tailwind CSS. Deployed on GitHub Pages via GitHub Actions.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'GitHub Pages'],
    category: 'Frontend',
    repoUrl: 'https://github.com/IvanBarreno/portfolio',
    demoUrl: null,
    thumbnail: null,
  },
  {
    slug: 'fullstack-api',
    title: 'Full Stack REST API',
    description:
      'A RESTful API with JWT authentication, role-based access control, and a React frontend. Built with FastAPI, MongoDB, and deployed on AWS.',
    tags: ['FastAPI', 'React', 'MongoDB', 'JWT', 'AWS', 'Docker'],
    category: 'Full Stack',
    repoUrl: 'https://github.com/IvanBarreno/fullstack-api',
    demoUrl: null,
    thumbnail: null,
  },
  {
    slug: 'data-pipeline',
    title: 'ETL Data Pipeline',
    description:
      'An automated ETL pipeline that extracts data from multiple sources, transforms and cleans it with Pandas, and loads it into a data warehouse for Power BI reporting.',
    tags: ['Python', 'Pandas', 'SQLite', 'Power BI', 'ETL'],
    category: 'Data Science',
    repoUrl: 'https://github.com/IvanBarreno/data-pipeline',
    demoUrl: null,
    thumbnail: null,
  },
  {
    slug: 'ml-classifier',
    title: 'ML Classification Model',
    description:
      'A scikit-learn classification pipeline with feature engineering, cross-validation, and a FastAPI endpoint for inference. Includes a Jupyter notebook walkthrough.',
    tags: ['Python', 'Scikit-learn', 'FastAPI', 'Pandas', 'Jupyter Notebook'],
    category: 'Data Science',
    repoUrl: 'https://github.com/IvanBarreno/ml-classifier',
    demoUrl: null,
    thumbnail: null,
  },
]

export const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Data Science'] as const
export type FilterCategory = typeof categories[number]
