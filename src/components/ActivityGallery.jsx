import { useState } from 'react'
import { Images } from 'lucide-react'
import { gallery, galleryCategories } from '../data/portfolioData.js'
import { useImageStatus } from '../hooks/useImageStatus.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'
import SafeImage from './SafeImage.jsx'
import Lightbox from './Lightbox.jsx'

// Rasio placeholder bervariasi agar grid terasa editorial saat foto belum tersedia.
// Foto asli memakai tinggi alaminya (masonry).
const placeholderRatios = ['aspect-[4/5]', 'aspect-[4/3]', 'aspect-square', 'aspect-[3/4]', 'aspect-[5/4]']

function GalleryTile({ item, ratio, onOpen }) {
  const first = item.images?.[0]
  const status = useImageStatus(first)
  const hasPhoto = status !== 'error'

  const media = (
    <SafeImage
      src={first}
      alt={`${item.title}${item.year ? ` (${item.year})` : ''}`}
      className="h-auto w-full object-cover"
      placeholderClassName={`${ratio} w-full`}
    />
  )

  return (
    <figure className="mb-6 break-inside-avoid">
      {hasPhoto ? (
        <button
          type="button"
          onClick={onOpen}
          aria-label={`Buka foto: ${item.title}`}
          className="group relative block w-full overflow-hidden rounded-2xl border border-line"
        >
          <span className="block transition-transform duration-500 group-hover:scale-[1.03]">{media}</span>
          {item.images.length > 1 && (
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
              <Images size={13} aria-hidden="true" /> {item.images.length} foto
            </span>
          )}
        </button>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-line">{media}</div>
      )}
      <figcaption className="mt-3 px-1">
        <p className="font-display text-lg font-semibold leading-snug">{item.title}</p>
        <p className="mt-0.5 text-xs text-muted">
          <span>{item.category}</span>
          {item.year && <span> — {item.year}</span>}
        </p>
        {item.description && <p className="mt-1.5 text-sm leading-relaxed text-ink/80">{item.description}</p>}
      </figcaption>
    </figure>
  )
}

export default function ActivityGallery() {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState({ id: null, index: null })

  const visible = gallery.filter((g) => g.visible !== false)
  const categories = galleryCategories.filter((c) => visible.some((g) => g.category === c))
  const shown = filter === 'All' ? visible : visible.filter((g) => g.category === filter)

  const activeItem = visible.find((g) => g.id === active.id)
  const lightboxItems = activeItem
    ? activeItem.images.map((src, i) => ({
        src,
        title: activeItem.title,
        caption: activeItem.captions?.[i] || activeItem.description,
      }))
    : []

  return (
    <Section
      id="gallery"
      title="Moments & Experiences"
      intro="Dokumentasi perjalanan saya: organisasi, kepanitiaan, PKL, kuliah, dan project. Klik foto untuk memperbesar."
      tone="tint"
    >
      <div role="group" aria-label="Filter kategori galeri" className="mb-10 flex flex-wrap gap-2">
        {['All', ...categories].map((c) => (
          <button key={c} type="button" className="filter-pill" aria-pressed={filter === c} onClick={() => setFilter(c)}>
            {c}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {shown.map((item, i) => (
          <Reveal key={item.id} delay={(i % 3) * 70} className="break-inside-avoid">
            <GalleryTile
              item={item}
              ratio={placeholderRatios[i % placeholderRatios.length]}
              onOpen={() => setActive({ id: item.id, index: 0 })}
            />
          </Reveal>
        ))}
      </div>

      <Lightbox
        items={lightboxItems}
        index={active.id ? active.index : null}
        onClose={() => setActive({ id: null, index: null })}
        onChange={(index) => setActive((a) => ({ ...a, index }))}
      />
    </Section>
  )
}
