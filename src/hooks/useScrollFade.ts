import { useEffect, useRef, useState } from 'react'

// Shows as soon as the element crosses the threshold, but debounces hiding —
// without that, a single scroll tick right at the threshold line flips
// isIntersecting back and forth and the fade visibly flickers.
const HIDE_DELAY = 220

export function useScrollFade<T extends HTMLElement>(threshold = 0) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let hideTimeout: number | undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.clearTimeout(hideTimeout)
          setVisible(true)
        } else {
          window.clearTimeout(hideTimeout)
          hideTimeout = window.setTimeout(() => setVisible(false), HIDE_DELAY)
        }
      },
      // No shrink on the root: for tall elements, a shrunk root can leave a
      // scroll range where neither the outgoing nor the incoming item reads
      // as "intersecting" at once, and everything blinks off together.
      { threshold }
    )

    observer.observe(el)
    return () => {
      window.clearTimeout(hideTimeout)
      observer.disconnect()
    }
  }, [threshold])

  return { ref, visible }
}
