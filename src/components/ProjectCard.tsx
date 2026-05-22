import { ExternalLink, Lock } from 'lucide-react'
import { LuGithub } from 'react-icons/lu'
import Tag from './Tag'
import Button from './Button'
import type { Project } from '../types'

// ─── Fake code-window thumbnail (used when no screenshot is provided) ─────────
function CodeThumbnail({ title, tags }: { title: string; tags: string[] }) {
  const filename = title.toLowerCase().replace(/\s+/g, '-') + '.ts'
  const preview = tags.slice(0, 3)

  return (
    <div className="font-mono text-xs bg-base border-b border-border">
      {/* macOS-style window chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-surface border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 text-syn-comment truncate">{filename}</span>
      </div>

      {/* Fake code content */}
      <div className="px-4 py-3 space-y-0.5 leading-6 text-[11px]">
        <div>
          <span className="text-syn-keyword">export const </span>
          <span className="text-heading">project</span>
          <span className="text-text"> = {'{'}</span>
        </div>
        <div className="pl-4">
          <span className="text-syn-property">stack</span>
          <span className="text-text">: [</span>
          {preview.map((t, i) => (
            <span key={t}>
              <span className="text-syn-string">"{t}"</span>
              {i < preview.length - 1 && <span className="text-text">, </span>}
            </span>
          ))}
          {tags.length > 3 && <span className="text-syn-comment">, ...{tags.length - 3} more</span>}
          <span className="text-text">],</span>
        </div>
        <div><span className="text-text">{'}'}</span></div>
      </div>
    </div>
  )
}

interface ProjectCardProps extends Project {
  onViewWalkthrough?: () => void
}

// ─── Project card ─────────────────────────────────────────────────────────────
export default function ProjectCard({
  title,
  description,
  tags,
  repoUrl,
  demoUrl,
  thumbnail,
  description_md_url,
  onViewWalkthrough,
}: ProjectCardProps) {
  return (
    <div className="glow-hover flex flex-col rounded-lg border border-border bg-surface
      hover:border-accent/40 transition-colors overflow-hidden"
    >
      {/* Thumbnail or code placeholder */}
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-40 object-cover border-b border-border"
        />
      ) : (
        <CodeThumbnail title={title} tags={tags} />
      )}

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div className="space-y-1.5">
          <h3 className="font-semibold text-heading text-base leading-snug">{title}</h3>
          <p className="text-text text-sm leading-relaxed">{description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {/* Action buttons — pushed to bottom */}
        <div className="flex gap-2 mt-auto pt-1">
          {repoUrl ? (
            <Button href={repoUrl} variant="outline" className="flex-1 justify-center text-xs px-3 py-2">
              <LuGithub size={14} /> GitHub
            </Button>
          ) : description_md_url && onViewWalkthrough ? (
            <Button onClick={onViewWalkthrough} variant="outline" className="flex-1 justify-center text-xs px-3 py-2">
              <Lock size={12} /> Read Walkthrough
            </Button>
          ) : (
            <span className="flex flex-1 items-center justify-center gap-1.5 text-xs font-mono text-syn-comment px-3 py-2 rounded border border-border">
              <Lock size={12} /> private
            </span>
          )}
          {demoUrl && (
            <Button href={demoUrl} variant="primary" className="flex-1 justify-center text-xs px-3 py-2">
              <ExternalLink size={14} /> Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
