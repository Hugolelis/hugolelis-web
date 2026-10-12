import { useEffect, useState } from 'react'

// How far below the viewport top a section's own top edge has to cross
// before it counts as "current" — roughly the fixed nav's height, so a
// section is marked active once it's actually visible below the nav
// rather than the instant its top touches the very edge of the screen.
const OFFSET = 120

export function useActiveSection(ids: readonly string[], enabled: boolean): string {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    if (!enabled || ids.length === 0) return

    const update = () => {
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= OFFSET) current = id
      }
      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [enabled, ids])

  return active
}
