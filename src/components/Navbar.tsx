import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/skills',   label: 'Skills'   },
  { to: '/projects', label: 'Projects' },
  { to: '/notes',    label: 'Notes'    },
  { to: '/contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // NavLink gives us isActive — we use it to highlight the current page
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition-colors duration-200 ${
      isActive
        ? 'text-accent font-medium'
        : 'text-text hover:text-heading'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-base/90 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo — styled as a JSX self-closing tag */}
        <NavLink to="/" className="font-mono text-sm select-none">
          <span className="text-accent">&lt;</span>
          <span className="text-heading font-semibold">IvanBarreno</span>
          <span className="text-accent"> /&gt;</span>
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={linkClass}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-text hover:text-heading transition-colors"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="md:hidden list-none m-0 p-0 border-t border-border bg-base">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `block px-6 py-3 text-sm border-b border-border transition-colors ${
                    isActive ? 'text-accent' : 'text-text hover:text-heading'
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
