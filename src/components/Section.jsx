import Reveal from './Reveal.jsx'

// Pembungkus section: judul, garis halus, dan latar bergantian (tone="tint" = blush).
export default function Section({ id, title, intro, tone = 'plain', children, className = '' }) {
  const titleId = `${id}-title`
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={`${tone === 'tint' ? 'bg-tint' : ''} py-20 sm:py-28 ${className}`}
    >
      <div className="container-page">
        <Reveal className="mb-12 max-w-3xl">
          <div className="flex items-center gap-5">
            <h2 id={titleId} className="text-3xl font-semibold leading-tight sm:text-4xl">
              {title}
            </h2>
            <span aria-hidden="true" className="hidden h-px flex-1 bg-line sm:block" />
          </div>
          {intro && <p className="mt-4 max-w-2xl leading-relaxed text-muted">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
