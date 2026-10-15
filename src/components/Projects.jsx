import { useState } from 'react'
import { ExternalLink, Images } from 'lucide-react'
import { projectCategories, projects } from '../data/portfolioData.js'
import { useImageStatus } from '../hooks/useImageStatus.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'
import SafeImage from './SafeImage.jsx'
import Lightbox from './Lightbox.jsx'

function ProjectCard({ project }) {
  const [index, setIndex] = useState(null)
  const cover = project.images?.[0]
  const status = useImageStatus(cover)
  const canOpen = status !== 'error'
  const lightboxItems = (project.images || []).map((src, i) => ({
    src,
    title: project.title,
    caption: project.captions?.[i] || project.description,
  }))

  const cover$ = (
    <SafeImage
      src={cover}
      alt={`Dokumentasi project ${project.title}`}
      fallbackLabel="Foto / screenshot belum ditambahkan"
      className="aspect-[16/10] w-full object-cover"
    />
  )

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-shadow hover:shadow-lift">
      {canOpen ? (
        <button
          type="button"
          onClick={() => setIndex(0)}
          aria-label={`Lihat foto project ${project.title}`}
          className="group relative block overflow-hidden"
        >
          {cover$}
          {project.images.length > 1 && (
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
              <Images size={13} aria-hidden="true" /> {project.images.length} foto
            </span>
          )}
        </button>
      ) : (
        cover$
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="chip border-accent/40 bg-accent/10 text-accent-ink">{project.kind}</span>
          <span className="chip">{project.category}</span>
        </div>
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/85">{project.description}</p>

        {project.techNote && <p className="mt-3 text-xs italic leading-relaxed text-muted">{project.techNote}</p>}

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Teknologi yang digunakan">
          {project.tech.map((t) => (
            <li key={t} className="rounded-md bg-soft/70 px-2 py-1 text-xs font-medium text-ink">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          <p className="text-xs text-muted">
            <span className="font-semibold text-ink">Status:</span> {project.status}
          </p>
          {(project.repoUrl || project.demoUrl) && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline !px-4 !py-2">
                  Repository <ExternalLink size={14} aria-hidden="true" />
                </a>
              )}
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary !px-4 !py-2">
                  Live demo <ExternalLink size={14} aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <Lightbox items={lightboxItems} index={index} onClose={() => setIndex(null)} onChange={setIndex} />
    </article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = projects.filter((p) => p.visible !== false)
  const shown = filter === 'All' ? visible : visible.filter((p) => p.category === filter)
  const categories = projectCategories.filter((c) => visible.some((p) => p.category === c))

  return (
    <Section
      id="projects"
      title="Selected Projects"
      intro="Project dan praktikum yang saya kerjakan selama belajar. Praktikum ditandai sebagai pembelajaran, bukan project industri."
    >
      <div role="group" aria-label="Filter kategori project" className="mb-8 flex flex-wrap gap-2">
        {['All', ...categories].map((c) => (
          <button key={c} type="button" className="filter-pill" aria-pressed={filter === c} onClick={() => setFilter(c)}>
            {c}
          </button>
        ))}
      </div>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <Reveal as="li" key={p.id} delay={(i % 3) * 80}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
