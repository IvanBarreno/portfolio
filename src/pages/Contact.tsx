import { useState } from 'react'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { LuGithub, LuLinkedin } from 'react-icons/lu'
import Button from '../components/Button'
import FadeIn from '../components/FadeIn'
import { siteConfig } from '../data/config'

const FORMSPREE_URL = 'https://formspree.io/f/mojbagrk'

type Status = 'idle' | 'sending' | 'success' | 'error'

const socials = [
  {
    label: 'GitHub',
    value: 'IvanBarreno',
    href: 'https://github.com/IvanBarreno',
    icon: LuGithub,
  },
  {
    label: 'LinkedIn',
    value: 'José Iván Barreno Bulux',
    href: 'https://www.linkedin.com/in/jos%C3%A9-iv%C3%A1n-barreno-bulux-a64b9493/',
    icon: LuLinkedin,
  },
  {
    label: 'Email',
    value: 'jivan9657@gmail.com',
    href: 'mailto:jivan9657@gmail.com',
    icon: Mail,
  },
]

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="space-y-10">

      <FadeIn>
        <div className="space-y-2">
          <p className="font-mono text-sm text-syn-comment">{'/** contact.ts */'}</p>
          <h1 className="text-4xl font-bold text-heading">Get in touch</h1>
          <p className="font-mono text-sm">
            <span className="text-syn-keyword">const </span>
            <span className="text-heading">status</span>
            <span className="text-text"> = </span>
            <span className="text-syn-string">"{siteConfig.status}"</span>
            <span className="text-syn-comment ml-3">{'// feel free to reach out'}</span>
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="grid md:grid-cols-[1fr_auto] gap-12">

          {/* ── Contact form ── */}
          <div className="space-y-6">
            {status === 'success' ? (
              <div className="flex flex-col items-start gap-3 p-6 rounded-lg border border-accent/30 bg-accent/5">
                <div className="flex items-center gap-2 text-accent">
                  <CheckCircle size={20} />
                  <span className="font-semibold text-heading">Message sent!</span>
                </div>
                <p className="text-text text-sm">Thanks for reaching out — I'll get back to you soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="font-mono text-xs text-syn-comment hover:text-accent transition-colors"
                >
                  {'// send another message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-syn-comment" htmlFor="name">
                      name<span className="text-syn-number">: string</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-surface border border-border rounded-md px-4 py-2.5
                        text-sm text-heading placeholder:text-syn-comment
                        focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-syn-comment" htmlFor="email">
                      email<span className="text-syn-number">: email</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-surface border border-border rounded-md px-4 py-2.5
                        text-sm text-heading placeholder:text-syn-comment
                        focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-syn-comment" htmlFor="message">
                    message<span className="text-syn-number">: textarea</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    className="w-full bg-surface border border-border rounded-md px-4 py-2.5
                      text-sm text-heading placeholder:text-syn-comment resize-none
                      focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={15} />
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}
                <Button type="submit" disabled={status === 'sending'}>
                  <Send size={15} />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>

          {/* ── Social links ── */}
          <div className="space-y-6 md:min-w-[220px]">
            <p className="font-mono text-sm text-syn-comment">{'// find me here'}</p>
            <div className="space-y-3">
              {socials.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="glow-hover flex items-start gap-3 p-3 rounded-lg border border-border bg-surface
                    hover:border-accent/40 transition-colors group"
                >
                  <Icon size={18} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-mono text-xs text-syn-comment">{label}</p>
                    <p className="text-sm text-text group-hover:text-heading transition-colors break-all">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </FadeIn>

    </div>
  )
}
