import { useEffect, useState } from 'react'

// Menandai section yang sedang terlihat agar menu navbar ikut menyala.
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  const key = ids.join('|')

  useEffect(() => {
    const elements = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!elements.length || !('IntersectionObserver' in window)) return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])

  return active
}
