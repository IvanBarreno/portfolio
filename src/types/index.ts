export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  categories: Array<'Full Stack' | 'Frontend' | 'Backend' | 'Data Science'>
  repoUrl: string | null
  demoUrl: string | null
  thumbnail: string | null
}

export interface Note {
  slug: string
  title: string
  excerpt: string
  tags: string[]
  readTime: string
  content: string
  category: string
}

export interface Skill {
  name: string
  icon: string        // devicon class name, e.g. "devicon-react-original"
  category: string
}
