import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  char: string
  size: number
  alpha: number
  life: number
  maxLife: number
}

function getCSSVar(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

function isTouchDevice(): boolean {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const colorRef = useRef('#4ade80')
  const trailRef = useRef<Particle[]>([])
  const lastRef = useRef({ x: -9999, y: -9999 })
  const activeRef = useRef(false)

  useEffect(() => {
    if (isTouchDevice()) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let spawnTimer = 0
    let idleTimer = 0
    let running = false

    const updateColor = () => {
      colorRef.current = getCSSVar('--accent-term') || '#4ade80'
    }
    updateColor()

    const mo = new MutationObserver(updateColor)
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      activeRef.current = true
      idleTimer = 0
      if (!running) {
        running = true
        animId = requestAnimationFrame(draw)
      }
    }
    window.addEventListener('mousemove', onMouse, { passive: true })

    const draw = () => {
      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      const color = colorRef.current
      const trail = trailRef.current

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (mx > -9000) {
        spawnTimer++
        const dx = mx - lastRef.current.x
        const dy = my - lastRef.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (spawnTimer % 3 === 0 && dist > 3) {
          for (let i = 0; i < 2; i++) {
            trail.push({
              x: mx + (Math.random() - 0.5) * 16,
              y: my + (Math.random() - 0.5) * 16,
              char: Math.random() > 0.5 ? '0' : '1',
              size: 12 + Math.random() * 4,
              alpha: 0.5 + Math.random() * 0.25,
              life: 0,
              maxLife: 40 + Math.random() * 30,
            })
          }
          lastRef.current = { x: mx, y: my }
        }

        if (trail.length > 100) trail.splice(0, trail.length - 100)
      }

      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i]
        p.life++
        p.alpha *= 0.98

        if (p.life >= p.maxLife || p.alpha < 0.01) {
          trail.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.font = `${p.size}px "JetBrains Mono", monospace`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        const glowA = Math.max(0, 1 - p.life / p.maxLife)
        if (glowA > 0.1) {
          ctx.shadowColor = color
          ctx.shadowBlur = 8 * glowA
        }

        ctx.globalAlpha = p.alpha
        ctx.fillStyle = color
        ctx.fillText(p.char, p.x, p.y)
        ctx.restore()
      }

      idleTimer++

      if (trail.length > 0 || idleTimer < 30) {
        animId = requestAnimationFrame(draw)
      } else {
        running = false
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }

    return () => {
      cancelAnimationFrame(animId)
      mo.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
