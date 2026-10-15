import { Check } from 'lucide-react'
import { experiences } from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'
import GalleryStrip from './GalleryStrip.jsx'

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Industrial Experience"
      intro="Enam bulan di lingkungan produksi industri elektronik."
      tone="tint"
    >
      <div className="space-y-10">
        {experiences.map((exp) => (
          <Reveal key={exp.id} className="grid gap-8 rounded-3xl border border-line bg-surface p-6 shadow-soft sm:p-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="chip border-accent/40 bg-accent/10 text-accent-ink">Durasi {exp.duration}</span>
              <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">{exp.company}</h3>
              <p className="mt-2 font-medium text-accent-ink">{exp.role}</p>
              <p className="mt-4 leading-relaxed text-ink/85">{exp.summary}</p>
            </div>
            <div className="lg:col-span-7">
              <h4 className="mb-4 text-lg font-semibold">Tanggung jawab</h4>
              <ul className="space-y-3">
                {exp.responsibilities.map((r) => (
                  <li key={r} className="flex gap-3 leading-relaxed">
                    <Check size={18} className="mt-1 shrink-0 text-accent-ink" aria-hidden="true" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              {exp.galleryId && <GalleryStrip galleryId={exp.galleryId} className="mt-8" />}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
