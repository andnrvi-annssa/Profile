import { useState } from 'react'
import { BookOpen } from 'lucide-react'
import { publications } from '../data/portfolioData.js'
import { useImageStatus } from '../hooks/useImageStatus.js'
import Reveal from './Reveal.jsx'
import SafeImage from './SafeImage.jsx'
import Lightbox from './Lightbox.jsx'

function PublicationCard({ pub }) {
  const [index, setIndex] = useState(null)
  const status = useImageStatus(pub.cover)
  const ready = status !== 'error'

  const cover = (
    <SafeImage
      src={pub.cover}
      alt={`Cover ${pub.title}`}
      fallbackLabel="Cover placeholder"
      fallbackIcon={BookOpen}
      className="aspect-[2/3] w-full rounded-lg object-cover"
    />
  )

  return (
    <article className="flex h-full flex-col">
      {ready ? (
        <button
          type="button"
          onClick={() => setIndex(0)}
          aria-label={`Perbesar cover ${pub.title}`}
          className="block overflow-hidden rounded-lg border border-line shadow-lift transition-transform duration-300 hover:-translate-y-1"
        >
          {cover}
        </button>
      ) : (
        <div className="overflow-hidden rounded-lg border border-dashed border-accent/50">{cover}</div>
      )}
      <div className="mt-4">
        <p className="text-xs font-medium text-accent-ink">
          {pub.type} — {pub.year}
        </p>
        <h4 className="mt-1 font-display text-lg font-semibold leading-snug">{pub.title}</h4>
        {pub.description && <p className="mt-1.5 text-sm leading-relaxed text-ink/80">{pub.description}</p>}
      </div>
      <Lightbox
        items={[{ src: pub.cover, title: pub.title, caption: `${pub.type} — ${pub.year}` }]}
        index={index}
        onClose={() => setIndex(null)}
        onChange={setIndex}
      />
    </article>
  )
}

export default function Publications() {
  const items = publications.filter((p) => p.visible !== false)
  if (!items.length) return null
  return (
    <div>
      <Reveal>
        <h3 className="mb-6 text-2xl font-semibold">Writing & Publications</h3>
      </Reveal>
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((pub, i) => (
          <Reveal as="li" key={pub.id} delay={i * 90}>
            <PublicationCard pub={pub} />
          </Reveal>
        ))}
      </ul>
    </div>
  )
}
