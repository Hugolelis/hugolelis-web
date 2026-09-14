import { useState } from 'react'

export function useShowMore<T>(items: T[], initialCount: number) {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? items : items.slice(0, initialCount)
  const remaining = items.length - visible.length
  const canShowLess = expanded && items.length > initialCount

  return {
    visible,
    remaining,
    expanded,
    canShowLess,
    showMore: () => setExpanded(true),
    showLess: () => setExpanded(false),
  }
}
