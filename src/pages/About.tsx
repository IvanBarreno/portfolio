import { useState } from 'react'
import { MapPin, Download, GraduationCap, Award, ExternalLink, X } from 'lucide-react'
import { siteConfig } from '../data/config'
import { LuGithub, LuLinkedin } from 'react-icons/lu'
import { Mail } from 'lucide-react'
import FadeIn from '../components/FadeIn'

// ─── Certifications — add/remove entries here ────────────────────────────────
const certifications = [
  {
    title: 'AWS Academy Graduate — Introduction to Cloud',
    issuer: 'Amazon Web Services',
    file: '/certifications/AWS_Academy_Graduate_Introduction_Cloud.pdf',
  },
  {
    title: 'Pentaho — 3 Steps to Better Data',
    issuer: 'Udemy',
    file: '/certifications/UC-Pentaho-3Steps.jpg',
  },
  {
    title: 'Scrum Master',
    issuer: 'Udemy',
    file: '/certifications/UC-Scrum Master.jpg',
  },
  {
    title: 'Algoritmos con Python',
    issuer: 'Online Course',
    file: '/certifications/diploma-algoritmos-python.pdf',
  },
  {
    title: 'Introducción a Laravel',
    issuer: 'Online Course',
    file: '/certifications/diploma-intro-laravel-2020.pdf',
  },
  {
    title: 'Python Básico',
    issuer: 'Online Course',
    file: '/certifications/diploma-python-basico.pdf',
  },
  {
    title: 'Python — CS',
    issuer: 'Online Course',
    file: '/certifications/diploma-python-cs.pdf',
  },
]

// ─── Education data — edit this array to add/update entries ─────────────────
const education = [
  {
    degree: 'Systems Engineering',
    institution: 'Universidad GALIELO',
    period: '2023 — present',
    status: 'in_progress' as const,
    notes: 'Interested in AI postgrad & Software Design',
  },
]

// ─── About page ─────────────────────────────────────────────────────────────
export default function About() {
  const [selected, setSelected] = useState<typeof certifications[number] | null>(null)
  const isPdf = selected?.file.endsWith('.pdf')

  return (
    <div className="space-y-20">

      {/* ── Header ── */}
      <FadeIn>
        <div className="space-y-2">
          <p className="font-mono text-sm text-syn-comment">{'/** about.ts */'}</p>
          <h1 className="text-4xl font-bold text-heading">José Iván Barreno Bulux</h1>
          <p className="font-mono text-sm text-accent">{'// Systems Engineer · Full Stack Developer · Data Scientist'}</p>
        </div>
      </FadeIn>

      {/* ── Profile section ── */}
      <FadeIn delay={0.1}>
        <section className="grid md:grid-cols-3 gap-10 items-start">

          {/* Left: photo + status + quick info */}
          <div className="space-y-5">

            {/* Profile photo */}
            <img
              src="/ivan-photo.jpg"
              alt="José Iván Barreno Bulux"
              className="aspect-square w-72 md:w-full mx-auto rounded-xl border border-border object-cover"
            />

            {/* Status badge */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-accent/30 bg-accent/5 w-fit">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs text-accent">{siteConfig.status}</span>
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

            {/* Resume — preview + download */}
            <button
              onClick={() => setSelected({ title: 'Resume', issuer: 'José Iván Barreno Bulux', file: '/CV-Jose-Barreno-2026-v3.pdf' })}
              className="w-full flex items-center gap-3 p-3 rounded-lg border border-accent/40 bg-accent/5
                hover:border-accent hover:bg-accent/10 transition-colors group text-left"
            >
              {/* PDF icon */}
              <div className="h-10 w-10 shrink-0 flex flex-col items-center justify-center rounded border border-accent/40 bg-base gap-0.5">
                <div className="w-4 h-5 relative">
                  <div className="absolute inset-0 border border-accent/60 rounded-sm bg-accent/5" />
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 border-l border-b border-accent/60 bg-surface rounded-bl-sm" />
                </div>
                <span className="font-mono text-[8px] text-accent/70 leading-none">PDF</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-accent leading-snug">View Resume</p>
                <p className="font-mono text-xs text-syn-comment">CV-Jose-Barreno-2026-v3.pdf</p>
              </div>
              <Download size={14} className="text-accent shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
            </button>
            <a
              href="/CV-Jose-Barreno-2026-v3.pdf"
              download
              className="font-mono text-xs text-syn-comment hover:text-accent transition-colors flex items-center gap-1"
            >
              <Download size={11} /> download instead
            </a>

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
                    I'm a Systems Engineer and Full Stack Developer with a passion
                  </span>
                </p>
                <p className="text-syn-comment pl-2">
                  {'* '}
                  <span className="text-text font-sans">
                    for building reliable end-to-end solutions — from responsive UIs to ETL
                  </span>
                </p>
                <p className="text-syn-comment pl-2">
                  {'* '}
                  <span className="text-text font-sans">
                    processes and exploratory data analysis. I bring strong expertise in
                  </span>
                </p>
                <p className="text-syn-comment pl-2">
                  {'* '}
                  <span className="text-text font-sans">
                    process analysis and automation, and I value clean architecture,
                  </span>
                </p>
                <p className="text-syn-comment pl-2">
                  {'* '}
                  <span className="text-text font-sans">
                    continuous improvement, and shipping things that work.
                  </span>
                </p>
                <p className="text-syn-comment pl-2">{'*'}</p>
                <p className="text-syn-comment pl-2">
                  {'* '}
                  <span className="text-text font-sans">
                    Beyond web and data, I have a foundational understanding of networking
                  </span>
                </p>
                <p className="text-syn-comment pl-2">
                  {'* '}
                  <span className="text-text font-sans">
                    and cloud platforms (AWS, Azure, GCP), and I'm exploring prompt
                  </span>
                </p>
                <p className="text-syn-comment pl-2">
                  {'* '}
                  <span className="text-text font-sans">
                    engineering as AI becomes a bigger part of modern software development.
                  </span>
                </p>
                <p className="text-syn-comment pl-2">{'*'}</p>
                <p className="text-syn-comment pl-2">
                  {'* '}
                  <span className="text-text font-sans">
                    Driven by adaptability and a high standard of quality — always learning,
                  </span>
                </p>
                <p className="text-syn-comment pl-2">
                  {'* '}
                  <span className="text-text font-sans">
                    always improving.
                  </span>
                </p>
                <p className="text-syn-comment pl-2">{'*'}</p>
                <p className="text-syn-comment">{'*/'}</p>
              </div>
            </div>
          </div>

        </section>
      </FadeIn>

      {/* ── Education ── */}
      <FadeIn delay={0.15}>
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
      </FadeIn>

      {/* ── Certifications ── */}
      <FadeIn delay={0.2}>
        <section className="space-y-4">
          <p className="font-mono text-sm text-syn-comment">{'/** certifications */'}</p>
          <h2 className="text-2xl font-semibold text-heading flex items-center gap-2">
            <Award size={22} className="text-accent" />
            Certifications
          </h2>

          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert) => {
              const isImage = !cert.file.endsWith('.pdf')
              return (
                <button
                  key={cert.file}
                  onClick={() => setSelected(cert)}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border bg-surface
                    hover:border-accent/40 hover:bg-accent/5 transition-colors group text-left"
                >
                  {/* Left: icon + text */}
                  <ExternalLink size={14} className="text-accent shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="space-y-0.5 min-w-0 flex-1">
                    <p className="text-sm font-medium text-heading leading-snug">{cert.title}</p>
                    <p className="font-mono text-xs text-syn-comment">{cert.issuer}</p>
                  </div>

                  {/* Right: image preview or PDF icon */}
                  {isImage ? (
                    <img
                      src={cert.file}
                      alt={cert.title}
                      className="h-12 w-16 object-cover rounded border border-border shrink-0"
                    />
                  ) : (
                    <div className="h-12 w-12 shrink-0 flex flex-col items-center justify-center rounded border border-border bg-base gap-0.5">
                      <div className="w-5 h-6 relative">
                        <div className="absolute inset-0 border border-accent/60 rounded-sm bg-accent/5" />
                        <div className="absolute top-0 right-0 w-2 h-2 border-l border-b border-accent/60 bg-surface rounded-bl-sm" />
                      </div>
                      <span className="font-mono text-[9px] text-accent/70 leading-none">PDF</span>
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </section>
      </FadeIn>

      {/* ── Certificate modal ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-surface border border-border rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border shrink-0">
              <div>
                <p className="text-sm font-medium text-heading">{selected.title}</p>
                <p className="font-mono text-xs text-syn-comment">{selected.issuer}</p>
              </div>
              <div className="flex items-center gap-3">
                {isPdf && (
                  <a
                    href={selected.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-accent hover:underline flex items-center gap-1"
                  >
                    <ExternalLink size={12} /> Open in new tab
                  </a>
                )}
                <button onClick={() => setSelected(null)} className="text-text hover:text-heading transition-colors">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto">
              {isPdf ? (
                <embed
                  src={selected.file}
                  type="application/pdf"
                  className="w-full h-[75vh]"
                />
              ) : (
                <img
                  src={selected.file}
                  alt={selected.title}
                  className="w-full object-contain max-h-[75vh]"
                />
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
