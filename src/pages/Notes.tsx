import { useState } from 'react'
import NoteCard from '../components/NoteCard'
import { notes, categories } from '../lib/notes'

export default function Notes() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? notes
    : notes.filter(n => n.category === active)

  return (
    <div className="space-y-10">

      {/* ── Header ── */}
      <div className="space-y-2">
        <p className="font-mono text-sm text-syn-comment">{'/** notes — interesting things you can read here */'}</p>
        <h1 className="text-4xl font-bold text-heading">Tech Notes</h1>
        <p className="font-mono text-sm">
          <span className="text-syn-keyword">import </span>
          <span className="text-heading">notes</span>
          <span className="text-text"> from </span>
          <span className="text-syn-string">'{active}'</span>
          <span className="text-syn-comment ml-3">
            {'// '}{filtered.length} {filtered.length === 1 ? 'note' : 'notes'}
          </span>
        </p>
      </div>

      {/* ── Category filter tabs ── */}
      <div className="border-b border-border overflow-x-auto">
        <div className="flex gap-0 min-w-max">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-3 font-mono text-sm border-b-2 transition-colors whitespace-nowrap ${
                active === cat
                  ? 'border-accent text-accent'
                  : 'border-transparent text-text hover:text-heading'
              }`}
            >
              <span className="text-syn-comment">notes/</span>
              <span>{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Notes grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(note => (
          <NoteCard key={note.slug} {...note} />
        ))}
      </div>

    </div>
  )
}
