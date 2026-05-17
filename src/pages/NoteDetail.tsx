import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ArrowLeft, Clock } from 'lucide-react'
import { notesBySlug, notes } from '../lib/notes'

export default function NoteDetail() {
  const { slug } = useParams<{ slug: string }>()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])
  const note = slug ? notesBySlug[slug] : undefined

  if (!note) return <Navigate to="/notes" replace />

  // Related notes: same category, excluding this one (max 3)
  const related = notes
    .filter(n => n.category === note.category && n.slug !== note.slug)
    .slice(0, 3)

  const categoryLabel = note.category.replace('-', ' ')

  return (
    <div className="space-y-10 max-w-3xl">

      {/* ── Back link ── */}
      <Link
        to="/notes"
        className="inline-flex items-center gap-2 font-mono text-sm text-syn-comment
          hover:text-accent transition-colors"
      >
        <ArrowLeft size={14} />
        {'// back to notes'}
      </Link>

      {/* ── Header ── */}
      <div className="space-y-3">
        <p className="font-mono text-xs text-syn-comment">
          <span className="text-syn-keyword">import </span>
          <span className="text-heading">{'{ '}{note.title}{' }'}</span>
          <span className="text-syn-keyword"> from </span>
          <span className="text-syn-string">'{categoryLabel}'</span>
        </p>

        <h1 className="text-4xl font-bold text-heading">{note.title}</h1>

        {note.excerpt && (
          <p className="text-text text-lg leading-relaxed">{note.excerpt}</p>
        )}

        <div className="flex items-center gap-1.5 font-mono text-xs text-syn-comment">
          <Clock size={12} />
          {note.readTime}
        </div>
      </div>

      {/* ── Markdown content ── */}
      <article className="note-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {note.content}
        </ReactMarkdown>
      </article>

      {/* ── Related notes ── */}
      {related.length > 0 && (
        <div className="space-y-4 border-t border-border pt-8">
          <p className="font-mono text-sm text-syn-comment">
            {'// more from '}
            <span className="text-syn-string">'{categoryLabel}'</span>
          </p>
          <div className="flex flex-col gap-2">
            {related.map(n => (
              <Link
                key={n.slug}
                to={`/notes/${n.slug}`}
                className="flex items-center justify-between p-3 rounded-lg border border-border
                  bg-surface hover:border-accent/40 transition-colors group"
              >
                <span className="text-text group-hover:text-heading transition-colors text-sm">
                  {n.title}
                </span>
                <span className="font-mono text-xs text-syn-comment">{n.readTime}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}
