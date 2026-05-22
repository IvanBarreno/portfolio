import { useState } from 'react'
import { skillsByCategory, categories, type SkillEntry } from '../data/skills'
import FadeIn from '../components/FadeIn'

// ─── Expertise dots — filled = reached, gray = not yet ──────────────────────
function ExpertiseDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`w-1.5 h-1.5 rounded-full transition-colors ${
            i < level ? 'bg-accent' : 'bg-border'
          }`}
        />
      ))}
    </div>
  )
}

// ─── Single skill card ───────────────────────────────────────────────────────
function SkillCard({ name, icon, level }: SkillEntry) {
  return (
    <div className="glow-hover flex flex-col items-center gap-2 p-4 rounded-lg
      border border-border bg-surface hover:border-accent/50
      transition-colors group cursor-default"
    >
      {icon ? (
        <i className={`${icon} text-4xl`} title={name} />
      ) : (
        <span className="w-10 h-10 rounded border border-accent/30 bg-accent/10
          flex items-center justify-center text-xs font-mono text-accent font-bold"
        >
          {name.slice(0, 2).toUpperCase()}
        </span>
      )}
      <span className="text-xs text-text group-hover:text-heading transition-colors text-center leading-tight">
        {name}
      </span>
      <ExpertiseDots level={level} />
    </div>
  )
}

// ─── Skills page ─────────────────────────────────────────────────────────────
export default function Skills() {
  const [active, setActive] = useState(categories[0])

  return (
    <div className="space-y-10">

      <FadeIn>
        <div className="space-y-2">
          <p className="font-mono text-sm text-syn-comment">{'/** skills.ts */'}</p>
          <h1 className="text-4xl font-bold text-heading">Skills</h1>
          <p className="font-mono text-sm">
            <span className="text-syn-keyword">const </span>
            <span className="text-heading">skills</span>
            <span className="text-text"> = {'{'} </span>
            {categories.map((cat, i) => (
              <span key={cat}>
                <span className="text-syn-property">{cat}</span>
                <span className="text-text">{i < categories.length - 1 ? ', ' : ' '}</span>
              </span>
            ))}
            <span className="text-text">{'}'}</span>
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
                className={`px-4 py-3 font-mono text-sm border-b-2 transition-colors whitespace-nowrap ${
                  active === cat
                    ? 'border-accent text-accent'
                    : 'border-transparent text-text hover:text-heading'
                }`}
              >
                <span className="text-syn-comment">skills.</span>
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {skillsByCategory[active].map(skill => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="font-mono text-xs text-syn-comment">
          {'// skills without a logo show their initials — same knowledge, just no devicon yet'}
        </p>
      </FadeIn>

    </div>
  )
}
