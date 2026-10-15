import { useEffect, useRef, useState } from 'react'

// Membungkus elemen agar muncul halus saat di-scroll. Delay (ms) dipakai untuk efek stagger.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (!('IntersectionObserver' in window)) {
      setSeen(true)
      return undefined
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ '--d': `${delay}ms` }}
      className={`reveal ${seen ? 'is-in' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
