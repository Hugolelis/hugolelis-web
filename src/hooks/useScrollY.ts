import { useState, useEffect, useRef } from 'react'

export function useScrollY(): number {
  const [y, setY] = useState(0)
  const ticking = useRef(false)

  useEffect(() => {
    const handler = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setY(window.scrollY)
          ticking.current = false
        })
        ticking.current = true
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return y
}
