import { useEffect, useState } from 'react'
import { ImageIcon } from 'lucide-react'
import { assetUrl } from '../utils/assetUrl.js'

// Gambar dengan fallback: jika src kosong atau gagal dimuat, tampil placeholder yang jelas
// (tidak pernah menampilkan ikon gambar rusak).
export default function SafeImage({
  src,
  alt,
  className = '',
  placeholderClassName = '',
  fallbackLabel = 'Foto belum ditambahkan',
  fallbackIcon: Icon = ImageIcon,
  eager = false,
}) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [src])

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={`${alt} — ${fallbackLabel}`}
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-soft to-tint p-4 text-center text-accent-ink ${className} ${placeholderClassName}`}
      >
        <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
        <span className="text-xs font-medium">{fallbackLabel}</span>
      </div>
    )
  }

  return (
    <img
      src={assetUrl(src)}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  )
}
