import { motion } from 'framer-motion'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

/*
  Reveals children when they scroll into view.
  Use `delay` (in seconds) to stagger sibling sections.
*/
export default function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  return (
    <motion.div
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' as const, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
