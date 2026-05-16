import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import QuoteCard from '../components/QuoteCard'

// Top skills shown in the preview grid — icon class comes from Devicons
const topSkills = [
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'Python',     icon: 'devicon-python-plain colored' },
  { name: 'React',      icon: 'devicon-react-original colored' },
  { name: 'Node.js',    icon: 'devicon-nodejs-plain-wordmark colored' },
  { name: 'FastAPI',    icon: 'devicon-fastapi-plain colored' },
  { name: 'Docker',     icon: 'devicon-docker-plain colored' },
  { name: 'MongoDB',    icon: 'devicon-mongodb-plain colored' },
  { name: 'AWS',        icon: 'devicon-amazonwebservices-plain-wordmark colored' },
]

// ─── Code-aesthetic hero block ──────────────────────────────────────────────
// Renders a fake VS Code window showing a typed JS object about the developer
function CodeHero() {
  return (
    <div className="rounded-lg border border-border bg-surface overflow-hidden font-mono text-sm shadow-xl">
      {/* Window chrome — macOS-style dots + filename */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-base">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-syn-comment text-xs">developer.ts</span>
      </div>

      {/* Code content */}
      <div className="p-5 space-y-1 text-sm leading-7">
        <div>
          <span className="text-syn-keyword">const </span>
          <span className="text-heading">developer</span>
          <span className="text-text"> = {'{'}</span>
        </div>

        <div className="pl-6 space-y-1">
          <div>
            <span className="text-syn-property">name</span>
            <span className="text-text">: </span>
            <span className="text-syn-string">"José Iván Barreno Bulux"</span>
            <span className="text-text">,</span>
          </div>
          <div>
            <span className="text-syn-property">role</span>
            <span className="text-text">: [</span>
            <span className="text-syn-string">"Full Stack Dev"</span>
            <span className="text-text">, </span>
            <span className="text-syn-string">"Data Scientist"</span>
            <span className="text-text">],</span>
          </div>
          <div>
            <span className="text-syn-property">languages</span>
            <span className="text-text">: [</span>
            <span className="text-syn-string">"TypeScript"</span>
            <span className="text-text">, </span>
            <span className="text-syn-string">"Python"</span>
            <span className="text-text">, </span>
            <span className="text-syn-string">"Java"</span>
            <span className="text-text">],</span>
          </div>
          <div>
            <span className="text-syn-property">status</span>
            <span className="text-text">: </span>
            <span className="text-syn-string">"open_to_work"</span>
            <span className="text-text">,</span>
            <span className="text-syn-comment ml-3">{'// 👋 available!'}</span>
          </div>
        </div>

        <div><span className="text-text">{'}'}</span></div>
      </div>
    </div>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="space-y-24">

      {/* ── Hero ── */}
      <section className="grid md:grid-cols-2 gap-12 items-center py-8">
        {/* Left: text content */}
        <div className="space-y-6">
          <span className="font-mono text-sm text-accent">
            {'// Full Stack Developer & Data Scientist'}
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-heading leading-tight">
            José Iván<br />
            <span className="text-accent">Barreno Bulux</span>
          </h1>

          <p className="text-text text-lg leading-relaxed">
            Building reliable web systems and data-driven solutions.
            Focused on clean code, good architecture, and shipping things that work.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button to="/projects">
              View My Work <ArrowRight size={16} />
            </Button>
            <Button to="/contact" variant="outline">
              Contact Me
            </Button>
          </div>
        </div>

        {/* Right: code block */}
        <CodeHero />
      </section>

      {/* ── About preview ── */}
      <section className="space-y-4">
        <p className="font-mono text-sm text-syn-comment">{'/** about */'}</p>
        <h2 className="text-2xl font-semibold text-heading">Who I am</h2>
        <p className="text-text leading-relaxed max-w-2xl">
          I'm a Full Stack Developer and Data Science student passionate about building
          end-to-end solutions — from responsive UIs to data pipelines and ML models.
          I enjoy turning complex problems into clean, maintainable code.
        </p>
        <Button to="/about" variant="ghost" className="pl-0">
          Read More <ArrowRight size={14} />
        </Button>
      </section>

      {/* ── Skills preview ── */}
      <section className="space-y-4">
        <p className="font-mono text-sm text-syn-comment">{'/** skills[] */'}</p>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-heading">Tech I use</h2>
          <Button to="/skills" variant="ghost">
            See All <ArrowRight size={14} />
          </Button>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
          {topSkills.map(({ name, icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 p-3 rounded-lg
                border border-border bg-surface hover:border-accent/50
                transition-colors group"
            >
              <i className={`${icon} text-3xl`} title={name} />
              <span className="text-xs text-text group-hover:text-heading transition-colors text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="space-y-4">
        <p className="font-mono text-sm text-syn-comment">{'/** quote of the day */'}</p>
        <QuoteCard />
      </section>

    </div>
  )
}
