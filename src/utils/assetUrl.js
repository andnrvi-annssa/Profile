// Mengubah path "/images/..." menjadi URL yang benar sesuai `base` di vite.config.js.
// Dengan begini data di portfolioData.js cukup memakai path sederhana "/images/...".
export function assetUrl(path) {
  if (!path) return ''
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  return path.startsWith('/') ? `${base}${path}` : `${base}/${path}`
}
