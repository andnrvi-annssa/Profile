import { useState } from 'react'
import {
  achievementCategories,
  achievements,
  certifications,
  organizations,
  publications,
} from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'
import Certifications from './Certifications.jsx'
import Publications from './Publications.jsx'

// Daftar gabungan: sertifikasi, publikasi, dan jabatan kepemimpinan diambil otomatis
// dari data yang sama, sehingga tidak perlu ditulis dua kali.
function buildLedger() {
  const fromCerts = certifications
    .filter((c) => c.visible !== false)
    .map((c) => ({
      id: `cert-${c.id}`,
      category: 'Certifications',
      title: c.title,
      issuer: c.issuer,
      year: c.year,
      description: c.description,
    }))
  const fromPubs = publications
    .filter((p) => p.visible !== false)
    .map((p) => ({
      id: `pub-${p.id}`,
      category: 'Writing & Publications',
      title: p.title,
      issuer: p.type,
      year: p.year,
      description: '',
    }))
  const fromLeadership = organizations
    .filter((o) => o.visible !== false && o.category === 'leadership')
    .map((o) => ({
      id: `org-${o.id}`,
      category: 'Leadership & Organization',
      title: `${o.role} — ${o.name}`,
      issuer: '',
      year: o.period,
      description: o.description,
    }))
  const manual = achievements.filter((a) => a.visible !== false)
  return [...fromCerts, ...fromPubs, ...fromLeadership, ...manual]
}

const ledger = buildLedger()

export default function Achievements() {
  const [filter, setFilter] = useState('All')
  const categories = achievementCategories.filter((c) => ledger.some((a) => a.category === c))
  const shown = filter === 'All' ? ledger : ledger.filter((a) => a.category === filter)

  return (
    <Section
      id="achievements"
      title="Achievements & Publications"
      intro="Bukti perjalanan saya: sertifikasi, karya tulis, serta pengalaman kompetisi, seleksi, dan kepemimpinan. Hanya yang memiliki data pendukung yang ditampilkan."
    >
      <div className="space-y-20">
        <Certifications />
        <Publications />

        <div>
          <Reveal>
            <h3 className="mb-6 text-2xl font-semibold">Achievements & Activities</h3>
            <div role="group" aria-label="Filter kategori pencapaian" className="mb-6 flex flex-wrap gap-2">
              {['All', ...categories].map((c) => (
                <button key={c} type="button" className="filter-pill" aria-pressed={filter === c} onClick={() => setFilter(c)}>
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <ul className="divide-y divide-line border-y border-line">
            {shown.map((a) => (
              <li key={a.id} className="grid gap-2 py-5 sm:grid-cols-12 sm:gap-6">
                <p className="font-display text-lg font-semibold text-accent-ink sm:col-span-2">{a.year || '—'}</p>
                <div className="sm:col-span-7">
                  <p className="font-semibold">{a.title}</p>
                  {a.issuer && <p className="text-sm text-muted">{a.issuer}</p>}
                  {a.description && <p className="mt-1 text-sm leading-relaxed text-ink/80">{a.description}</p>}
                </div>
                <p className="sm:col-span-3 sm:text-right">
                  <span className="chip">{a.category}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
