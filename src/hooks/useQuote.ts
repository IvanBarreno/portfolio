import { useState, useEffect, useCallback } from 'react'

interface Quote {
  content: string
  author: string
}

const fallbacks: Quote[] = [
  { content: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { content: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { content: "Make it work, make it right, make it fast.", author: "Kent Beck" },
]

export function useQuote() {
  const [quote, setQuote] = useState<Quote | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchQuote = useCallback(async () => {
    setLoading(true)
    try {
      // dummyjson.com supports HTTPS + CORS — works in production on GitHub Pages
      const res = await fetch('https://dummyjson.com/quotes/random')
      if (!res.ok) throw new Error()
      const data = await res.json()
      // dummyjson returns { id, quote, author } — we map "quote" → "content"
      setQuote({ content: data.quote, author: data.author })
    } catch {
      const random = fallbacks[Math.floor(Math.random() * fallbacks.length)]
      setQuote(random)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchQuote() }, [fetchQuote])

  return { quote, loading, refresh: fetchQuote }
}
