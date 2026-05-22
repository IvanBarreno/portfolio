interface TagProps {
  children: React.ReactNode
  className?: string
}

export default function Tag({ children, className = '' }: TagProps) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded text-xs font-mono
        bg-accent/10 text-accent border border-accent/20 ${className}`}
    >
      {children}
    </span>
  )
}
