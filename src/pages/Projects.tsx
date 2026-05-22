import { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects, categories, type FilterCategory } from '../data/projects'
import FadeIn from '../components/FadeIn'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { X, ExternalLink } from 'lucide-react'
import Button from '../components/Button'
import type { Project } from '../types'
import { AnimatePresence, motion } from 'framer-motion'

export default function Projects() {
  const [active, setActive] = useState<FilterCategory>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null)
      }
    }
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown)
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

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
              <ProjectCard
                key={project.slug}
                {...project}
                onViewWalkthrough={() => setSelectedProject(project)}
              />
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

      {/* ── Walkthrough Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative bg-surface border border-border rounded-xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden z-10"
            >
              {/* macOS Window Chrome header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-base shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <span className="ml-3 font-mono text-xs text-syn-comment">
                    <span className="text-syn-keyword">import </span>
                    <span className="text-heading">{'{ '}{selectedProject.title.replace(/\s+/g, '')}{' }'}</span>
                    <span className="text-syn-keyword"> from </span>
                    <span className="text-syn-string">'projects'</span>
                  </span>
                </div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-text hover:text-heading transition-colors p-1 hover:bg-border/30 rounded"
                  aria-label="Close dialog"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Scrollable markdown body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <article className="note-body">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {selectedProject.content_md || ''}
                  </ReactMarkdown>
                </article>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center px-6 py-4 border-t border-border bg-base shrink-0">
                <span className="font-mono text-xs text-syn-comment hidden sm:inline">
                  {'// Press ESC or click backdrop to close'}
                </span>
                <div className="flex gap-3 ml-auto">
                  {selectedProject.demoUrl && (
                    <Button href={selectedProject.demoUrl} variant="outline" className="text-xs px-4 py-2 flex items-center gap-1.5">
                      <ExternalLink size={12} /> Live Demo
                    </Button>
                  )}
                  <Button onClick={() => setSelectedProject(null)} variant="primary" className="text-xs px-4 py-2">
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}
