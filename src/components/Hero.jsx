import { User } from 'lucide-react'
import { personal } from '../data/portfolioData.js'
import SafeImage from './SafeImage.jsx'
import LadderRung from './LadderRung.jsx'

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* kilau pink lembut di belakang foto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="container-page relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className="lg:col-span-7">
          <h1 id="hero-title" className="text-4xl font-semibold leading-[1.1] sm:text-5xl xl:text-6xl">
            {personal.headline}
          </h1>
          <p className="mt-5 text-lg font-medium text-accent-ink sm:text-xl">{personal.role}</p>

          <ul className="mt-3 flex flex-wrap text-sm text-muted" aria-label="Positioning">
            {personal.tagline.slice(1).map((t, i) => (
              <li key={t} className={`py-0.5 pr-3 ${i > 0 ? 'border-l border-line pl-3' : ''}`}>
                {t}
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-xl leading-relaxed text-ink/85">{personal.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#about" className="btn btn-primary">
              Explore My Journey
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
            <a
              href="#contact"
              className="px-2 py-3 text-sm font-semibold text-accent-ink underline decoration-accent/50 underline-offset-4 hover:decoration-accent"
            >
              Let&apos;s Connect
            </a>
          </div>

          <div className="mt-10">
            <LadderRung />
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border-2 border-accent/50 sm:translate-x-4 sm:translate-y-4"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface shadow-soft">
              <SafeImage
                src={personal.profileImage}
                alt={personal.profileAlt}
                eager
                fallbackLabel="Foto profil belum ditambahkan"
                fallbackIcon={User}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
