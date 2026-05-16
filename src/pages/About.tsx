import { MapPin, Download, GraduationCap, User } from 'lucide-react'
import { LuGithub, LuLinkedin } from 'react-icons/lu'
import { Mail } from 'lucide-react'
import Button from '../components/Button'

// ─── Education data — edit this array to add/update entries ─────────────────
const education = [
  {
    degree: 'Systems Engineering',
    institution: 'Universidad [pendiente]', // TODO: add your university name
    period: '2023 — present',
    status: 'in_progress' as const,
    notes: 'Interested in AI postgrad & Software Design',
  },
]

// ─── About page ─────────────────────────────────────────────────────────────
export default function About() {
  return (
    <div className="space-y-20">

      {/* ── Header ── */}
      <div className="space-y-2">
        <p className="font-mono text-sm text-syn-comment">{'/** about.ts */'}</p>
        <h1 className="text-4xl font-bold text-heading">José Iván Barreno Bulux</h1>
        <p className="font-mono text-sm text-accent">{'// Systems Engineer · Full Stack Developer · Data Scientist'}</p>
      </div>

      {/* ── Profile section ── */}
      <section className="grid md:grid-cols-3 gap-10 items-start">

        {/* Left: photo + status + quick info */}
        <div className="space-y-5">

          {/* Photo placeholder */}
          <div className="aspect-square rounded-xl border border-border bg-surface flex flex-col items-center justify-center gap-3 text-syn-comment">
            <User size={56} strokeWidth={1} />
            <span className="font-mono text-xs">{'// photo pending'}</span>
          </div>

          {/* Status badge */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-accent/30 bg-accent/5 w-fit">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-accent">open_to_work</span>
          </div>

          {/* Quick info */}
          <ul className="space-y-2 text-sm text-text">
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-accent shrink-0" />
              Guatemala City, Guatemala
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-accent shrink-0" />
              <a href="mailto:jivan9657@gmail.com" className="hover:text-heading transition-colors">
                jivan9657@gmail.com
              </a>
            </li>
          </ul>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/IvanBarreno"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text hover:text-accent transition-colors"
            >
              <LuGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jos%C3%A9-iv%C3%A1n-barreno-bulux-a64b9493/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text hover:text-accent transition-colors"
            >
              <LuLinkedin size={20} />
            </a>
          </div>

          {/* CV download — disabled until PDF is added to /public */}
          <Button
            href="/cv.pdf"
            variant="outline"
            className="w-full justify-center opacity-50 pointer-events-none"
          >
            <Download size={14} />
            Download CV
          </Button>
          <p className="font-mono text-xs text-syn-comment">{'// cv.pdf pending'}</p>

        </div>

        {/* Right: bio styled as a multi-line code comment */}
        <div className="md:col-span-2">
          <div className="rounded-lg border border-border bg-surface overflow-hidden font-mono text-sm">

            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-base">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-syn-comment text-xs">bio.ts</span>
            </div>

            {/* Comment-style bio */}
            <div className="p-5 leading-8 space-y-1">
              <p className="text-syn-comment">{'/**'}</p>
              <p className="text-syn-comment pl-2">
                {'* '}
                <span className="text-heading">Who I am</span>
              </p>
              <p className="text-syn-comment pl-2">{'*'}</p>
              <p className="text-syn-comment pl-2">
                {'* '}
                <span className="text-text font-sans">
                  I'm a Systems Engineering student with a deep passion for
                </span>
              </p>
              <p className="text-syn-comment pl-2">
                {'* '}
                <span className="text-text font-sans">
                  understanding how things work at a fundamental level. I love
                </span>
              </p>
              <p className="text-syn-comment pl-2">
                {'* '}
                <span className="text-text font-sans">
                  building systems end-to-end — from clean architecture to
                </span>
              </p>
              <p className="text-syn-comment pl-2">
                {'* '}
                <span className="text-text font-sans">
                  the last line of code — and I'm always learning something new.
                </span>
              </p>
              <p className="text-syn-comment pl-2">{'*'}</p>
              <p className="text-syn-comment pl-2">
                {'* '}
                <span className="text-text font-sans">
                  I'm fascinated by the intersection of software and data science:
                </span>
              </p>
              <p className="text-syn-comment pl-2">
                {'* '}
                <span className="text-text font-sans">
                  how raw data, when handled well, can reveal insights and power
                </span>
              </p>
              <p className="text-syn-comment pl-2">
                {'* '}
                <span className="text-text font-sans">
                  real decisions. Committed, curious, and driven to do things right.
                </span>
              </p>
              <p className="text-syn-comment pl-2">{'*'}</p>
              <p className="text-syn-comment">{'*/'}</p>
            </div>
          </div>
        </div>

      </section>

      {/* ── Education ── */}
      <section className="space-y-4">
        <p className="font-mono text-sm text-syn-comment">{'/** education */'}</p>
        <h2 className="text-2xl font-semibold text-heading flex items-center gap-2">
          <GraduationCap size={22} className="text-accent" />
          Education
        </h2>

        {/* Code-aesthetic: education displayed as a TS array */}
        <div className="rounded-lg border border-border bg-surface overflow-hidden font-mono text-sm">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-base">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-syn-comment text-xs">education.ts</span>
          </div>

          <div className="p-5 leading-7 space-y-1">
            <div>
              <span className="text-syn-keyword">const </span>
              <span className="text-heading">education</span>
              <span className="text-text"> = [</span>
            </div>

            {education.map((entry, i) => (
              <div key={i} className="pl-6 space-y-1">
                <div><span className="text-text">{'{'}</span></div>
                <div className="pl-6 space-y-1">
                  <div>
                    <span className="text-syn-property">degree</span>
                    <span className="text-text">: </span>
                    <span className="text-syn-string">"{entry.degree}"</span>
                    <span className="text-text">,</span>
                  </div>
                  <div>
                    <span className="text-syn-property">institution</span>
                    <span className="text-text">: </span>
                    <span className="text-syn-string">"{entry.institution}"</span>
                    <span className="text-text">,</span>
                  </div>
                  <div>
                    <span className="text-syn-property">period</span>
                    <span className="text-text">: </span>
                    <span className="text-syn-string">"{entry.period}"</span>
                    <span className="text-text">,</span>
                  </div>
                  <div>
                    <span className="text-syn-property">status</span>
                    <span className="text-text">: </span>
                    <span className="text-syn-string">"{entry.status}"</span>
                    <span className="text-text">,</span>
                  </div>
                  <div>
                    <span className="text-syn-property">notes</span>
                    <span className="text-text">: </span>
                    <span className="text-syn-string">"{entry.notes}"</span>
                    <span className="text-text">,</span>
                  </div>
                </div>
                <div><span className="text-text">{'},'}</span></div>
              </div>
            ))}

            <div><span className="text-text">]</span></div>
          </div>
        </div>
      </section>

    </div>
  )
}
