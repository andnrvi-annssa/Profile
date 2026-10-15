import { skillGroups } from '../data/portfolioData.js'
import { getIcon } from '../utils/iconMap.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

// Tanpa progress bar persentase: tiap skill diberi label tingkat yang jujur.
export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      intro="Kemampuan dikelompokkan berdasarkan bidang. Label di sebelah kanan menunjukkan seberapa jauh saya memakainya saat ini."
      tone="tint"
    >
      <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => {
          const Icon = getIcon(group.icon)
          const skills = group.skills.filter((s) => s.visible !== false)
          if (!skills.length) return null
          return (
            <Reveal key={group.id} delay={(gi % 3) * 80}>
              <h3 className="flex items-center gap-3 border-b border-line pb-3 text-xl font-semibold">
                <Icon size={20} className="text-accent-ink" aria-hidden="true" />
                {group.title}
              </h3>
              <ul className="divide-y divide-line/70">
                {skills.map((s) => (
                  <li key={s.name} className="flex items-baseline justify-between gap-4 py-2.5">
                    <span className="font-medium">{s.name}</span>
                    {s.level && <span className="text-right text-xs text-muted">{s.level}</span>}
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
