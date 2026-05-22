import { Mail } from 'lucide-react'
import { LuGithub, LuLinkedin } from 'react-icons/lu'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Code-style comment */}
        <p className="font-mono text-sm text-syn-comment">
          {'// built with React + Tailwind — José Iván Barreno Bulux © 2025'}
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/IvanBarreno"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text hover:text-accent transition-colors"
          >
            <LuGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/jos%C3%A9-iv%C3%A1n-barreno-bulux-a64b9493/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text hover:text-accent transition-colors"
          >
            <LuLinkedin size={18} />
          </a>
          <a
            href="mailto:jivan9657@gmail.com"
            aria-label="Email"
            className="text-text hover:text-accent transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

      </div>
    </footer>
  )
}
