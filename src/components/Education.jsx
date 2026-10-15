import { education } from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

// Timeline pendidikan: urutan waktu memang sebuah urutan, jadi penanda tahun dipakai di sini.
export default function Education() {
  return (
    <Section id="education" title="Education" intro="Dua jenjang pendidikan yang saling menyambung di bidang teknologi dan otomasi.">
      <ol className="relative ml-2 border-l-2 border-line sm:ml-4">
        {education.map((item, i) => (
          <Reveal as="li" key={item.id} delay={i * 120} className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
            <span
              aria-hidden="true"
              className={`absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 ${
                item.current ? 'border-accent bg-accent' : 'border-accent bg-bg'
              }`}
            />
            <p className="font-display text-2xl font-semibold text-accent-ink sm:text-3xl">{item.period}</p>
            <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{item.institution}</h3>
            <p className="mt-1 font-medium">{item.program}</p>
            <p className="text-sm text-muted">
              {item.programEn}
              {item.faculty ? ` — ${item.faculty}` : ''}
            </p>
            {item.current && (
              <span className="chip mt-3 border-accent/40 bg-accent/10 text-accent-ink">Sedang berjalan</span>
            )}
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
