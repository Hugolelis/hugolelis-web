import { useState, useEffect, useRef } from 'react'

export function useActiveSection(ids: string[]): string {
    const [active, setActive] = useState('')
    const observersRef = useRef<IntersectionObserver[]>([])

    useEffect(() => {
        const createObservers = () => {
            observersRef.current.forEach((o) => o.disconnect())
            observersRef.current = []

            ids.forEach((id) => {
                const el = document.getElementById(id)
                if (!el) return

                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) setActive(id)
                    },
                    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
                )

                observer.observe(el)
                observersRef.current.push(observer)
            })
        }

        createObservers()

        const mo = new MutationObserver(createObservers)
        mo.observe(document.body, { childList: true, subtree: true })

        return () => {
            mo.disconnect()
            observersRef.current.forEach((o) => o.disconnect())
        }
    }, [ids])

    return active
}