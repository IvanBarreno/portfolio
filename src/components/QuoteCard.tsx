import { RefreshCw } from 'lucide-react'
import { useQuote } from '../hooks/useQuote'

export default function QuoteCard() {
  const { quote, loading, refresh } = useQuote()

  return (
    <div className="rounded-lg border border-border bg-surface p-6 relative">
      {/* Decorative quote mark — code-style double slash */}
      <span className="font-mono text-4xl text-accent/20 select-none leading-none">//</span>

      <div className="mt-2 min-h-[80px] flex flex-col justify-center">
        {loading ? (
          <div className="space-y-2">
            <div className="h-4 bg-border rounded animate-pulse w-3/4" />
            <div className="h-4 bg-border rounded animate-pulse w-1/2" />
          </div>
        ) : quote ? (
          <>
            <p className="text-heading text-base leading-relaxed italic">
              "{quote.content}"
            </p>
            <p className="mt-3 font-mono text-sm text-accent">
              — {quote.author}
            </p>
          </>
        ) : null}
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
