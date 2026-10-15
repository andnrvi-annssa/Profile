import { useEffect, useState } from 'react'
import { assetUrl } from '../utils/assetUrl.js'

// Mengecek apakah sebuah gambar benar-benar ada/dapat dimuat.
// Mengembalikan 'loading' | 'ok' | 'error'.
export function useImageStatus(src) {
  const [status, setStatus] = useState(src ? 'loading' : 'error')

  useEffect(() => {
    if (!src) {
      setStatus('error')
      return undefined
    }
    let alive = true
    setStatus('loading')
    const img = new Image()
    img.onload = () => alive && setStatus('ok')
    img.onerror = () => alive && setStatus('error')
    img.src = assetUrl(src)
    return () => {
      alive = false
    }
  }, [src])

  return status
}
