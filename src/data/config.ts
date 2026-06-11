// ─── Site-wide configuration — edit here to update across all pages ──────────

type Status = 'open_to_work' | 'employed' | 'freelancing' | 'unavailable'

const statusLabels: Record<Status, string> = {
  open_to_work: '// 👋 available!',
  employed: '// currently employed',
  freelancing: '// open to freelance',
  unavailable: '// not available',
}

const status: Status = 'employed'

export const siteConfig = {
  /**
   * Current availability status.
   * Appears in: Home hero, About sidebar, Contact page.
   * Change `status` above — the label updates automatically.
   */
  status,
  statusLabel: statusLabels[status],
  /**
   * Resume file inside /public. Stable name (no version/year) so any
   * shared or bookmarked link keeps working when the PDF is replaced.
   */
  cvFile: 'CV-Jose-Barreno.pdf',
}
