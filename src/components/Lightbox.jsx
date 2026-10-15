import { useCallback, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import SafeImage from './SafeImage.jsx'

/**
 * Lightbox / modal gambar.
 * items  : [{ src, title, caption }]
 * index  : nomor gambar yang dibuka (null = tertutup)
 * onClose, onChange(newIndex)
 */
export default function Lightbox({ items, index, onClose, onChange }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const touchX = useRef(null)
  const isOpen = index !== null && index !== undefined && Boolean(items[index])
  const count = items.length

  const go = useCallback(
    (step) => {
      if (count < 2) return
      onChange((index + step + count) % count)
    },
    [count, index, onChange],
  )

  useEffect(() => {
    if (!isOpen) return undefined
    const previouslyFocused = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll('button, a[href]')
        if (!focusables.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      previouslyFocused?.focus?.()
    }
  }, [isOpen, go, onClose])

  if (!isOpen) return null
  const item = items[index]

  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
  }

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={item.title || 'Pratinjau gambar'}
      className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX
      }}
      onTouchEnd={onTouchEnd}
    >
      <div className="flex items-center justify-between px-4 py-3 text-white sm:px-8">
        <p className="text-sm text-white/80" aria-live="polite">
          {count > 1 ? `${index + 1} / ${count}` : ''}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Tutup pratinjau"
          className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
        >
          <X size={22} aria-hidden="true" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16">
        {count > 1 && (
          <button
            type="button"
            aria-label="Foto sebelumnya"
            onClick={(e) => {
              e.stopPropagation()
              go(-1)
            }}
            className="absolute left-2 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/25 sm:left-5"
          >
            <ChevronLeft size={26} aria-hidden="true" />
          </button>
        )}

        <SafeImage
          key={item.src}
          src={item.src}
          alt={item.title || 'Gambar'}
          eager
          className="max-h-full max-w-full rounded-xl object-contain"
          placeholderClassName="h-64 w-full max-w-md rounded-xl"
        />

        {count > 1 && (
          <button
            type="button"
            aria-label="Foto berikutnya"
            onClick={(e) => {
              e.stopPropagation()
              go(1)
            }}
            className="absolute right-2 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/25 sm:right-5"
          >
            <ChevronRight size={26} aria-hidden="true" />
          </button>
        )}
      </div>

      <div className="px-4 pb-6 pt-4 text-center text-white sm:px-8" onClick={(e) => e.stopPropagation()}>
        {item.title && <p className="font-display text-lg">{item.title}</p>}
        {item.caption && <p className="mx-auto mt-1 max-w-2xl text-sm text-white/75">{item.caption}</p>}
      </div>
    </div>
  )
}
