import { Link } from 'react-router-dom'

interface ButtonProps {
  children: React.ReactNode
  to?: string           // internal route — renders as <Link>
  href?: string         // external URL — renders as <a>
  variant?: 'primary' | 'outline' | 'ghost'
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  disabled?: boolean
  download?: boolean
}

const base = 'inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer'

const variants = {
  primary: 'bg-accent text-base hover:bg-accent-dim',
  outline: 'border border-accent text-accent hover:bg-accent/10',
  ghost:   'text-text hover:text-heading hover:bg-surface',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  download = false,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} download={download || undefined}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
