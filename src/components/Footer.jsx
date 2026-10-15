import { ArrowUp } from 'lucide-react'
import { navItems, personal } from '../data/portfolioData.js'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">{personal.shortName.toUpperCase()}</p>
          <p className="mt-1 text-sm text-muted">{personal.themeLine}</p>
          <p className="mt-3 text-xs text-muted">
            © {new Date().getFullYear()} {personal.fullName}. Dibuat dengan React, Vite, dan Tailwind CSS.
          </p>
        </div>
        <nav aria-label="Navigasi footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {navItems.slice(1).map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-ink/80 hover:text-accent-ink">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#home" className="inline-flex items-center gap-1 font-medium text-accent-ink">
                <ArrowUp size={14} aria-hidden="true" /> Kembali ke atas
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
