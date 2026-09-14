import { useEffect, useRef, useState } from 'react'

export function useActiveSection(ids: readonly string[], enabled: boolean) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const intersecting = useRef<Map<string, boolean>>(new Map())

  useEffect(() => {
    if (!enabled) return

    const elements = ids
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)
    if (elements.length === 0) return

    intersecting.current = new Map(elements.map(el => [el.id, false]))

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          intersecting.current.set(entry.target.id, entry.isIntersecting)
        }
        // Sections can nest (e.g. Certificates lives inside About), so more
        // than one id may be intersecting at once. The last id in document
        // order that's still intersecting is the most specific match.
        let next: string | null = null
        for (const id of ids) {
          if (intersecting.current.get(id)) next = id
        }
        setActiveId(next)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, enabled])

  return enabled ? activeId : null
}
