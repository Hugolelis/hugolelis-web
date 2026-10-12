import { useEffect, useState } from 'react'

// Caps how long the loading screen can hold the page — document.fonts.ready
// should resolve almost immediately, but this is the fallback if a browser
// or a flaky connection never fires it.
const MAX_WAIT_MS = 2500

// True once the custom web fonts have loaded, so the page doesn't render
// its first frame in the fallback font and then swap — most noticeable on
// the Hero title, which leans on the display serif.
export function useAppReady() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    const markReady = () => {
      if (!cancelled) setReady(true)
    }

    const fontsReady = document.fonts?.ready ?? Promise.resolve()
    const timeout = new Promise<void>((resolve) => window.setTimeout(resolve, MAX_WAIT_MS))
    Promise.race([fontsReady, timeout]).then(markReady)

    return () => {
      cancelled = true
    }
  }, [])

  return ready
}
