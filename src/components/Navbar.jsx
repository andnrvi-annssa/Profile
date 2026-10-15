import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { navItems, personal } from '../data/portfolioData.js'
import { useActiveSection } from '../hooks/useActiveSection.js'

const ids = navItems.map((n) => n.id)

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const linkClass = (id) =>
    `relative py-2 text-sm font-medium transition-colors hover:text-accent-ink ${
      active === id ? 'text-accent-ink' : 'text-ink/80'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/75 backdrop-blur-md">
      <nav aria-label="Navigasi utama" className="container-page flex h-16 items-center justify-between gap-4">
        <a
          href="#home"
          className="font-display text-base font-semibold tracking-wide text-ink sm:text-lg"
          onClick={() => setOpen(false)}
        >
          {personal.shortName.toUpperCase()}
        </a>

        <ul className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={linkClass(item.id)}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-accent transition-transform duration-300 ${
                    active === item.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
            className="rounded-full border border-line p-2 text-ink transition-colors hover:border-accent hover:text-accent-ink"
          >
            {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <a href="#contact" className="btn btn-primary hidden !py-2 xl:inline-flex">
            Let&apos;s Connect
          </a>
          <button
            type="button"
            className="rounded-full border border-line p-2 text-ink xl:hidden"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line/70 bg-bg/95 backdrop-blur-md xl:hidden">
          <ul className="container-page grid gap-1 py-4 sm:grid-cols-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`block rounded-lg px-3 py-3 text-base font-medium ${
                    active === item.id ? 'bg-accent/10 text-accent-ink' : 'text-ink/85 hover:bg-accent/10'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:col-span-2">
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Let&apos;s Connect
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
