import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import type { NoteEntry } from '../lib/notes'

export default function NoteCard({ slug, category, title, excerpt, readTime }: NoteEntry) {
  // Format category as a nice label
  const categoryLabel = category.replace('-', ' ')

  return (
    <Link
      to={`/notes/${slug}`}
      className="flex flex-col rounded-lg border border-border bg-surface
        hover:border-accent/40 transition-colors overflow-hidden group"
    >
      {/* Fake import header */}
      <div className="px-4 py-2.5 bg-base border-b border-border font-mono text-xs">
        <span className="text-syn-keyword">import </span>
        <span className="text-heading">{'{ '}{title}{' }'}</span>
        <span className="text-syn-keyword"> from </span>
        <span className="text-syn-string">'{categoryLabel}'</span>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-semibold text-heading text-base leading-snug group-hover:text-accent transition-colors">
          {title}
        </h3>

        {excerpt && (
          <p className="text-text text-sm leading-relaxed line-clamp-2">{excerpt}</p>
        )}

        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="flex items-center gap-1.5 font-mono text-xs text-syn-comment">
            <Clock size={12} />
            {readTime}
          </span>
          <span className="flex items-center gap-1 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
            Read <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  )
}
