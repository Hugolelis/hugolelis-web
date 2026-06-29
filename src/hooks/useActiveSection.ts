import { useState, useEffect } from 'react'

export function useActiveSection(ids: string[]): string {
    const [active, setActive] = useState('')

    useEffect(() => {
        const onScroll = () => {
            const midY = window.scrollY + window.innerHeight * 0.35
            let found = ''
            for (const id of ids) {
                const el = document.getElementById(id)
                if (!el) continue
                const top = el.getBoundingClientRect().top + window.scrollY
                if (top <= midY) found = id
            }
            setActive(found)
        }

        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [ids])

    return active
}