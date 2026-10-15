import { goals } from '../data/portfolioData.js'
import { getIcon } from '../utils/iconMap.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function Goals() {
  return (
    <Section id="goals" title="Where I'm Heading">
      <Reveal as="blockquote" className="max-w-3xl border-l-4 border-accent pl-6 font-display text-xl italic leading-relaxed sm:text-2xl">
        “{goals.statement}”
      </Reveal>

      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {goals.cards.map((card, i) => {
          const Icon = getIcon(card.icon)
          return (
            <Reveal as="li" key={card.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-line bg-surface p-7">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-ink">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="text-xl font-semibold tracking-wide">{card.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/85">{card.text}</p>
              </div>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
