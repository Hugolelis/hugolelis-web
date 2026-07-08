import { useEffect, useRef } from 'react'

function isTouchDevice(): boolean {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 900
}

export function Particles() {
  const posRef = useRef({ x: 0.3, y: 0.2 })
  const mounted = useRef(false)

  useEffect(() => {
    if (isTouchDevice()) return
    mounted.current = true

    let frame = 0

    const onMouse = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      posRef.current = {
        x: (e.clientX - cx) / cx,
        y: (e.clientY - cy) / cy,
      }
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    const update = () => {
      if (!mounted.current) return
      const { x, y } = posRef.current
      const els = document.querySelectorAll<HTMLElement>('[data-parallax]')
      for (const el of els) {
        const speed = parseFloat(el.dataset.parallaxSpeed ?? '0.03')
        el.style.translate = `${x * speed * 100}px ${y * speed * 100}px`
      }
    }

    const reset = () => {
      const els = document.querySelectorAll<HTMLElement>('[data-parallax]')
      for (const el of els) {
        el.style.translate = ''
      }
    }

    window.addEventListener('mousemove', onMouse, { passive: true })
    window.addEventListener('scroll', update, { passive: true })
    frame = requestAnimationFrame(update)

    return () => {
      mounted.current = false
      cancelAnimationFrame(frame)
      reset()
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('scroll', update)
    }
  }, [])

  return null
}
