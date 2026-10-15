import { useState } from 'react'
import { gallery } from '../data/portfolioData.js'
import { useImageStatus } from '../hooks/useImageStatus.js'
import SafeImage from './SafeImage.jsx'
import Lightbox from './Lightbox.jsx'

function Thumb({ src, alt, onOpen }) {
  const status = useImageStatus(src)
  const base = 'h-20 w-28 shrink-0 rounded-xl object-cover sm:h-24 sm:w-32'
  if (status === 'error') {
    return (
      <SafeImage
        src=""
        alt={alt}
        fallbackLabel="Foto belum ditambahkan"
        className={base}
        placeholderClassName="!p-2 [&_span]:text-[10px] [&_svg]:h-5 [&_svg]:w-5"
      />
    )
  }
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Perbesar foto: ${alt}`}
      className="shrink-0 overflow-hidden rounded-xl border border-line transition-transform duration-200 hover:scale-[1.03]"
    >
      <SafeImage src={src} alt={alt} className={base} />
    </button>
  )
}

/**
 * Deretan thumbnail dokumentasi untuk satu kegiatan.
 * Foto diambil dari item galeri (galleryId) atau dari prop `images`.
 */
export default function GalleryStrip({ galleryId, images: imagesProp, title, className = '' }) {
  const [index, setIndex] = useState(null)
  const item = galleryId ? gallery.find((g) => g.id === galleryId) : null
  const images = imagesProp || item?.images || []
  if (!images.length) return null

  const label = title || item?.title || 'Dokumentasi kegiatan'
  const lightboxItems = images.map((src, i) => ({
    src,
    title: label,
    caption: item?.captions?.[i] || item?.description || '',
  }))

  return (
    <div className={className}>
      <p className="mb-3 text-sm font-semibold text-accent-ink">Dokumentasi</p>
      <div className="flex gap-3 overflow-x-auto pb-1">
        {images.map((src, i) => (
          <Thumb key={src} src={src} alt={`${label}, foto ${i + 1}`} onOpen={() => setIndex(i)} />
        ))}
      </div>
      <Lightbox items={lightboxItems} index={index} onClose={() => setIndex(null)} onChange={setIndex} />
    </div>
  )
}
