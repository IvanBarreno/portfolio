import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects, categories, type FilterCategory } from '../data/projects'
import FadeIn from '../components/FadeIn'

export default function Projects() {
  const [active, setActive] = useState<FilterCategory>('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.categories.includes(active))

  return (
    <div className="space-y-10">

      <FadeIn>
        <div className="space-y-2">
          <p className="font-mono text-sm text-syn-comment">{'/** projects.ts */'}</p>
          <h1 className="text-4xl font-bold text-heading">Projects</h1>
          <p className="font-mono text-sm">
            <span className="text-syn-keyword">const </span>
            <span className="text-heading">projects</span>
            <span className="text-text"> = </span>
            <span className="text-syn-string">data</span>
            <span className="text-text">.filter(p {'=> '}p.category</span>
            <span className="text-text"> === </span>
            <span className="text-syn-string">"{active}"</span>
            <span className="text-text">)</span>
            <span className="text-syn-comment ml-3">
              {'// '}
              {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
            </span>
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="border-b border-border overflow-x-auto">
          <div className="flex gap-0 min-w-max">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-3 font-mono text-sm border-b-2 transition-colors whitespace-nowrap ${active === cat
                  ? 'border-accent text-accent'
                  : 'border-transparent text-text hover:text-heading'
                  }`}
              >
                <span className="text-syn-comment">projects.</span>
                <span>{cat === 'All' ? 'all' : cat.toLowerCase().replace(' ', '_')}</span>
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(project => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        ) : (
          <p className="font-mono text-sm text-syn-comment py-8 text-center">
            {'// no projects in this category yet — check back soon'}
          </p>
        )}
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="font-mono text-xs text-syn-comment">
          {'// Just a little reminder: you can\'t give up on your dreams :D'}
          <br />
          {'// Your the best keep it up.'}
          <br />
          {'// ******** Don\'t forget to turn off the EC2 instance!!!!'}
        </p>
      </FadeIn>

    </div>
  )
}
