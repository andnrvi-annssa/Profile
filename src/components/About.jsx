import { about, personal } from '../data/portfolioData.js'
import { getIcon } from '../utils/iconMap.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      intro="Dari elektronika industri di SMK menuju otomasi di perguruan tinggi, dengan organisasi dan tulisan sebagai bagian dari perjalanan."
      tone="tint"
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="space-y-5 leading-[1.8] text-ink/90 lg:col-span-7">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <p>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={360}>
            <p className="pt-2 font-display text-lg italic text-accent-ink">{personal.themeLine}</p>
          </Reveal>
        </div>

        <div className="space-y-8 lg:col-span-5">
          <Reveal as="dl" className="divide-y divide-line rounded-2xl border border-line bg-surface px-5">
            {about.summary.map((row) => (
              <div key={row.label} className="grid gap-1 py-3.5 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-semibold text-accent-ink">{row.label}</dt>
                <dd className="text-sm leading-relaxed text-ink/90 sm:col-span-2">{row.value}</dd>
              </div>
            ))}
          </Reveal>

          <Reveal>
            <h3 className="mb-3 text-lg font-semibold">Yang saya tekuni</h3>
            <ul className="flex flex-wrap gap-2">
              {about.interests.map((it) => {
                const Icon = getIcon(it.icon)
                return (
                  <li key={it.title} className="chip gap-2 py-1.5">
                    <Icon size={14} className="text-accent-ink" aria-hidden="true" />
                    {it.title}
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
