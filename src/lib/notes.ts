export interface NoteEntry {
  slug: string
  category: string
  title: string
  excerpt: string
  readTime: string
  content: string
}

// Load all .md files as raw strings — bundled at build time by Vite
const rawFiles = import.meta.glob('../notes/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parseNote(path: string, content: string): NoteEntry {
  const parts = path.split('/')
  const filename = parts[parts.length - 1]
  const slug = filename.replace('.md', '')
  const category = parts[parts.length - 2]

  // Title: first # heading
  const titleMatch = content.match(/^# (.+)$/m)
  const title = titleMatch?.[1]?.trim() ?? slug

  // Excerpt: first > blockquote line
  const excerptMatch = content.match(/^> (.+)$/m)
  const excerpt = excerptMatch?.[1]?.trim() ?? ''

  // Estimate read time (~200 wpm)
  const words = content.split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  const readTime = `${minutes} min read`

  return { slug, category, title, excerpt, readTime, content }
}

export const notes: NoteEntry[] = Object.entries(rawFiles)
  .map(([path, content]) => parseNote(path, content))
  .sort((a, b) => a.title.localeCompare(b.title))

export const notesBySlug: Record<string, NoteEntry> = Object.fromEntries(
  notes.map(n => [n.slug, n])
)

// Derive category list from the actual folders, preserving a natural order
const CATEGORY_ORDER = [
  'languages', 'frontend', 'backend', 'databases',
  'cloud', 'concepts', 'tools', 'data-science', 'project-stack',
]

export const categories = [
  'all',
  ...CATEGORY_ORDER.filter(c => notes.some(n => n.category === c)),
]
