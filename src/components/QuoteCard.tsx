import { RefreshCw } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useQuote } from '../hooks/useQuote'

export default function QuoteCard() {
  const { quote, loading, refresh } = useQuote()

  return (
    <div className="rounded-lg border border-border bg-surface p-6 relative overflow-hidden">
      {/* Decorative quote mark */}
      <span className="font-mono text-4xl text-accent/20 select-none leading-none">//</span>

      {/* Perspective wrapper — needed for 3D flip to look correct */}
      <div className="mt-2 min-h-[80px] flex flex-col justify-center" style={{ perspective: '800px' }}>
        {loading ? (
          <div className="space-y-2">
            <div className="h-4 bg-border rounded animate-pulse w-3/4" />
            <div className="h-4 bg-border rounded animate-pulse w-1/2" />
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {quote && (
              <motion.div
                key={quote.content}
                initial={{ rotateX: -90, opacity: 0 }}
                animate={{ rotateX: 0,   opacity: 1 }}
                exit={{    rotateX:  90,  opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' as const }}
                style={{ transformOrigin: 'top center' }}
              >
                <p className="text-heading text-base leading-relaxed italic">
                  "{quote.content}"
                </p>
                <p className="mt-3 font-mono text-sm text-accent">
                  — {quote.author}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>

      {/* Refresh button */}
      <button
        onClick={refresh}
        disabled={loading}
        aria-label="Get new quote"
        className="absolute top-4 right-4 text-text hover:text-accent transition-colors disabled:opacity-40"
      >
        <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
      </button>
    </div>
  )
}
