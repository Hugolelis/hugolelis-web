import { useEffect, useRef, useState } from 'react'

export function useActiveSection(ids: readonly string[], enabled: boolean) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const intersecting = useRef<Map<string, boolean>>(new Map())

  useEffect(() => {
    if (!enabled) return

    intersecting.current = new Map(ids.map(id => [id, false]))

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

    const observed = new Set<string>()
    const tryObserveNew = () => {
      for (const id of ids) {
        if (observed.has(id)) continue
        const el = document.getElementById(id)
        if (el) {
          observer.observe(el)
          observed.add(id)
        }
      }
      if (observed.size === ids.length) mutationObserver.disconnect()
    }

    // Some sections (e.g. Timeline) mount lazily well after this effect
    // first runs, so keep watching the DOM until every id has been found.
    const mutationObserver = new MutationObserver(tryObserveNew)
    tryObserveNew()
    if (observed.size < ids.length) {
      mutationObserver.observe(document.body, { childList: true, subtree: true })
    }

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [ids, enabled])

  return enabled ? activeId : null
}
