import { useEffect, useRef } from 'react'

function isTouchDevice(): boolean {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

export function Particles() {
  const elRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    if (isTouchDevice()) return

    const el = elRef.current
    if (!el) return

    let frame = 0
    const onMouse = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    const update = () => {
      const { x, y } = posRef.current
      const target = document.elementFromPoint(x, y)
      const tag = target?.tagName?.toLowerCase() ?? ''
      const isInteractive = ['a', 'button', 'input', 'textarea', 'select'].includes(tag) ||
        (target instanceof HTMLElement && getComputedStyle(target).cursor === 'pointer')

      if (isInteractive) {
        el.style.background = ''
        return
      }

      const theme = document.documentElement.getAttribute('data-theme')
      const tint = theme === 'light' ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.065)'
      el.style.background = `radial-gradient(120px at ${x}px ${y}px, ${tint} 0%, transparent 70%)`
    }

    window.addEventListener('mousemove', onMouse, { passive: true })
    update()

    const mo = new MutationObserver(update)
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    return () => {
      cancelAnimationFrame(frame)
      mo.disconnect()
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <div
      ref={elRef}
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 3,
        pointerEvents: 'none',
      }}
    />
  )
}
