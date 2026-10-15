import { useState } from 'react'
import { organizationCategories, organizations } from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'
import GalleryStrip from './GalleryStrip.jsx'

const categoryLabel = Object.fromEntries(organizationCategories.map((c) => [c.id, c.label]))

export default function Organization() {
  const [filter, setFilter] = useState('all')
  const visible = organizations.filter((o) => o.visible !== false)
  const shown = filter === 'all' ? visible : visible.filter((o) => o.category === filter)
  const available = organizationCategories.filter((c) => visible.some((o) => o.category === c.id))

  return (
    <Section
      id="organization"
      title="Organization & Leadership"
      intro="Jabatan dan peran saya ditampilkan apa adanya: ada yang memimpin, ada yang mengelola administrasi, dan ada yang berpartisipasi sebagai anggota."
    >
      <div role="group" aria-label="Filter kategori organisasi" className="mb-8 flex flex-wrap gap-2">
        <button type="button" className="filter-pill" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
          Semua
        </button>
        {available.map((c) => (
          <button
            key={c.id}
            type="button"
            className="filter-pill"
            aria-pressed={filter === c.id}
            onClick={() => setFilter(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <ul className="space-y-5">
        {shown.map((org, i) => {
          const hasPhotos = Boolean(org.images?.length || org.galleryId)
          return (
            <Reveal as="li" key={org.id} delay={Math.min(i, 3) * 70}>
              <article className="rounded-2xl border border-line bg-surface p-6 transition-shadow hover:shadow-lift sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold sm:text-2xl">{org.name}</h3>
                    <p className="mt-1 font-medium text-accent-ink">{org.role}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {org.period && <span className="chip">{org.period}</span>}
                    <span className="chip border-accent/40 bg-accent/10 text-accent-ink">
                      {categoryLabel[org.category]}
                    </span>
                  </div>
                </div>

                <p className="mt-4 max-w-3xl leading-relaxed text-ink/85">{org.description}</p>

                {org.responsibilities?.length > 0 && (
                  <ul className="mt-4 max-w-3xl list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink/85 marker:text-accent">
                    {org.responsibilities.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                )}

                {hasPhotos && (
                  <GalleryStrip galleryId={org.galleryId} images={org.images} title={`${org.name} — ${org.role}`} className="mt-6" />
                )}
              </article>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
