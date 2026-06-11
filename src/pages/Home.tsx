import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import QuoteCard from '../components/QuoteCard'
import FadeIn from '../components/FadeIn'
import { siteConfig } from '../data/config'

// Top skills shown in the preview grid — icon class comes from Devicons
const topSkills = [
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain-wordmark colored' },
  { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
  { name: 'Docker', icon: 'devicon-docker-plain colored' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
]

// ─── Code-aesthetic hero block ──────────────────────────────────────────────
function CodeHero() {
  return (
    <div className="glow-hover rounded-lg border border-accent/20 bg-surface overflow-hidden font-mono text-sm shadow-xl shadow-accent/5 ring-1 ring-accent/10">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-base">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-syn-comment text-xs">developer.ts</span>
      </div>
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
            <span className="text-syn-property">roles</span>
            <span className="text-text">: [</span>
            <span className="text-syn-string">"Systems Engineer"</span>
            <span className="text-text">, </span>
            <span className="text-syn-string">"Full Stack Developer"</span>
            <span className="text-text">, </span>
            <span className="text-syn-string">"Data Scientist"</span>
            <span className="text-text">, </span>
            <span className="text-syn-string">"RPA Developer"</span>
            <span className="text-text">, </span>
            <span className="text-syn-string">"ETL Developer"</span>
            <span className="text-text">, </span>
            <span className="text-syn-string"> ... </span>
            <span className="text-text">],</span>
          </div>
          <div>
            <span className="text-syn-property">languages</span>
            <span className="text-text">: [</span>
            <span className="text-syn-string">"PHP"</span>
            <span className="text-text">, </span>
            <span className="text-syn-string">"TypeScript"</span>
            <span className="text-text">, </span>
            <span className="text-syn-string">"Python"</span>
            <span className="text-text">, </span>
            <span className="text-syn-string">"SQL"</span>
            <span className="text-text">],</span>
          </div>
          <div>
            <span className="text-syn-property">status</span>
            <span className="text-text">: </span>
            <span className="text-syn-string">"{siteConfig.status}"</span>
            <span className="text-text">,</span>
            <span className="text-syn-comment ml-3">{siteConfig.statusLabel}</span>
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
    <div className="relative space-y-24">

      {/* ── Hero ── */}
      <FadeIn>
        <section className="relative grid md:grid-cols-2 gap-12 items-center py-8">
          <div className="space-y-6">
            <span className="font-mono text-sm text-accent">
              {'// Systems Engineer - Full Stack Developer - Data Scientist'}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-heading leading-tight">
              José Iván<br />
              <span className="text-accent">Barreno Bulux</span>
            </h1>
            <p className="text-text text-lg leading-relaxed">
              Building reliable web systems and data-driven solutions.
              Focused on clean architecture, process optimization, and shipping things that work.
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
          <CodeHero />
        </section>
      </FadeIn>

      {/* ── Section divider ── */}
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent -my-12" />

      {/* ── About preview ── */}
      <FadeIn delay={0.05}>
        <section className="space-y-4">
          <p className="font-mono text-sm text-syn-comment">{'/** about */'}</p>
          <h2 className="text-2xl font-semibold text-heading">Who I am</h2>
          <p className="text-text leading-relaxed max-w-2xl">
            I'm a Systems Engineer and Full Stack Developer with a passion for building
            end-to-end solutions — from responsive UIs to ETL processes and exploratory data analysis.
            I bring strong expertise in process analysis and automation, and I value clean, maintainable
            code and continuous improvement. Driven by adaptability and a high standard of quality,
            I turn complex problems into reliable systems.
          </p>
          <Button to="/about" variant="ghost" className="pl-0">
            Read More <ArrowRight size={14} />
          </Button>
        </section>
      </FadeIn>

      {/* ── Projects shortcut — terminal-style command that navigates on click ── */}
      <FadeIn delay={0.05}>
        <section className="space-y-4">
          <p className="font-mono text-sm text-syn-comment">{'/** projects */'}</p>
          <Link
            to="/projects"
            className="glow-hover block rounded-lg border border-border bg-surface overflow-hidden
              font-mono text-sm hover:border-accent/50 transition-colors group"
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-base">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-syn-comment text-xs">zsh — portfolio</span>
            </div>

            {/* Prompt line */}
            <div className="flex items-center gap-3 p-5">
              <span className="text-accent">➜</span>
              <span className="text-heading">~/portfolio</span>
              <span className="text-text">
                cd <span className="text-syn-string">./projects</span>
              </span>
              {/* Blinking cursor */}
              <span className="w-2 h-4 bg-accent/80 animate-pulse" />
              <span className="ml-auto hidden sm:flex items-center gap-2 text-xs text-syn-comment
                group-hover:text-accent transition-colors">
                press to run
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </section>
      </FadeIn>


      {/* ── Skills preview ── */}
      <FadeIn delay={0.05}>
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
                className="glow-hover flex flex-col items-center gap-2 p-3 rounded-lg
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
      </FadeIn>

      {/* ── Quote ── */}
      <FadeIn delay={0.05}>
        <section className="space-y-4">
          <p className="font-mono text-sm text-syn-comment">{'/** quote of the day */'}</p>
          <QuoteCard />
        </section>
      </FadeIn>

    </div>
  )
}
