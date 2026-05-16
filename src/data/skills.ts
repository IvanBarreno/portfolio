// Each skill has a name, a devicon class, and an expertise level 1–5.
// level: 1 = familiar  2 = basic  3 = comfortable  4 = proficient  5 = expert
// If a skill has no devicon, leave icon as "" — the UI will show initials instead.
// Full devicon reference: https://devicon.dev
//
// ⚠️  Review the levels — they are starting points, adjust to match your honest self-assessment.

export interface SkillEntry {
  name: string
  icon: string
  level: number // 1–5
}

export const skillsByCategory: Record<string, SkillEntry[]> = {
  languages: [
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored',  level: 3 },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored',  level: 4 },
    { name: 'Python',     icon: 'devicon-python-plain colored',      level: 4 },
    { name: 'Java',       icon: 'devicon-java-plain colored',        level: 2 },
    { name: 'PHP',        icon: 'devicon-php-plain colored',         level: 2 },
  ],
  frontend: [
    { name: 'React',       icon: 'devicon-react-original colored',    level: 3 },
    { name: 'Angular',     icon: 'devicon-angularjs-plain colored',   level: 2 },
    { name: 'HTML',        icon: 'devicon-html5-plain colored',       level: 5 },
    { name: 'CSS',         icon: 'devicon-css3-plain colored',        level: 4 },
    { name: 'Bootstrap',   icon: 'devicon-bootstrap-plain colored',   level: 3 },
    { name: 'SweetAlert2', icon: '',                                  level: 3 },
  ],
  backend: [
    { name: 'Node.js',  icon: 'devicon-nodejs-plain colored',        level: 3 },
    { name: 'Express',  icon: 'devicon-express-original colored',    level: 3 },
    { name: 'NestJS',   icon: 'devicon-nestjs-plain colored',        level: 2 },
    { name: 'Django',   icon: 'devicon-django-plain colored',        level: 2 },
    { name: 'Flask',    icon: 'devicon-flask-original colored',      level: 3 },
    { name: 'FastAPI',  icon: 'devicon-fastapi-plain colored',       level: 3 },
    { name: 'Laravel',  icon: 'devicon-laravel-plain colored',       level: 2 },
  ],
  databases: [
    { name: 'MySQL',      icon: 'devicon-mysql-plain colored',                  level: 4 },
    { name: 'MariaDB',    icon: 'devicon-mariadb-plain colored',                level: 3 },
    { name: 'MongoDB',    icon: 'devicon-mongodb-plain colored',                level: 3 },
    { name: 'SQLite',     icon: 'devicon-sqlite-plain colored',                 level: 3 },
    { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain colored',     level: 2 },
  ],
  cloud: [
    { name: 'AWS',   icon: 'devicon-amazonwebservices-plain-wordmark colored',  level: 2 },
    { name: 'Azure', icon: 'devicon-azure-plain colored',                       level: 2 },
    { name: 'GCP',   icon: 'devicon-googlecloud-plain colored',                 level: 2 },
  ],
  'data science': [
    { name: 'Pandas',       icon: 'devicon-pandas-plain colored',         level: 3 },
    { name: 'NumPy',        icon: 'devicon-numpy-plain colored',          level: 3 },
    { name: 'Matplotlib',   icon: 'devicon-matplotlib-plain colored',     level: 3 },
    { name: 'Seaborn',      icon: '',                                      level: 3 },
    { name: 'Scikit-learn', icon: 'devicon-scikitlearn-plain colored',    level: 2 },
    { name: 'TensorFlow',   icon: 'devicon-tensorflow-original colored',  level: 2 },
    { name: 'PyTorch',      icon: 'devicon-pytorch-plain colored',        level: 2 },
    { name: 'Keras',        icon: 'devicon-keras-plain colored',          level: 2 },
    { name: 'SciPy',        icon: '',                                      level: 2 },
    { name: 'Statsmodels',  icon: '',                                      level: 2 },
    { name: 'Jupyter',      icon: 'devicon-jupyter-plain colored',        level: 4 },
    { name: 'Google Colab', icon: '',                                      level: 4 },
    { name: 'Pentaho',      icon: '',                                      level: 2 },
    { name: 'ETL',          icon: '',                                      level: 2 },
  ],
  tools: [
    { name: 'Docker',         icon: 'devicon-docker-plain colored',    level: 2 },
    { name: 'Git',            icon: 'devicon-git-plain colored',       level: 4 },
    { name: 'GitHub',         icon: 'devicon-github-original colored', level: 4 },
    { name: 'Linux',          icon: 'devicon-linux-plain colored',     level: 3 },
    { name: 'Windows',        icon: 'devicon-windows8-original colored', level: 4 },
    { name: 'Postman',        icon: 'devicon-postman-plain colored',   level: 4 },
    { name: 'Swagger',        icon: 'devicon-swagger-plain colored',   level: 3 },
    { name: 'Power BI',       icon: '',                                level: 2 },
    { name: 'Power Automate', icon: '',                                level: 2 },
    { name: 'Bruno',          icon: '',                                level: 3 },
    { name: 'Excel',          icon: '',                                level: 3 },
    { name: 'REST API',       icon: '',                                level: 4 },
    { name: 'JWT',            icon: '',                                level: 3 },
    { name: 'SOLID',          icon: '',                                level: 3 },
    { name: 'OOP',            icon: '',                                level: 3 },
    { name: 'MVC',            icon: '',                                level: 3 },
  ],
}

export const categories = Object.keys(skillsByCategory)
