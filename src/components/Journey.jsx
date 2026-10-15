import { journey } from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function Journey() {
  return (
    <Section id="journey" title="My Journey" intro="Perjalanan dari 2023 sampai sekarang, dan arah yang saya tuju." tone="tint">
      <ol className="relative mx-auto max-w-3xl border-l-2 border-line">
        {journey.map((step, i) => (
          <Reveal as="li" key={step.year} delay={i * 90} className="relative pb-10 pl-8 last:pb-0 sm:pl-10">
            <span
              aria-hidden="true"
              className={`absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-accent ${
                step.future ? 'border-dashed bg-bg' : 'bg-accent'
              }`}
            />
            <p className="font-display text-2xl font-semibold text-accent-ink">{step.year}</p>
            <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
            {step.detail && <p className="mt-1 text-sm leading-relaxed text-ink/80">{step.detail}</p>}
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
