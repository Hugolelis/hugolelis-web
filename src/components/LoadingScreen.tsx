import { useEffect, useState } from 'react'
import styles from './LoadingScreen.module.css'

export function LoadingScreen({ onDone }: { onDone: () => void }) {
    const [progress, setProgress] = useState(0)
    const [phase, setPhase] = useState(0) // 0=loading 1=done 2=exit

    const lines = [
        'initializing portfolio...',
        'loading projects...',
        'fetching experience...',
        'compiling skills...',
        'ready.',
    ]

    useEffect(() => {
        const duration = 2200
        const interval = 30
        const steps = duration / interval
        let current = 0

        const timer = setInterval(() => {
        current++
        setProgress(Math.min(Math.round((current / steps) * 100), 100))
        if (current >= steps) clearInterval(timer)
        }, interval)

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        if (progress === 100) {
        setTimeout(() => setPhase(1), 300)
        setTimeout(() => setPhase(2), 900)
        setTimeout(() => onDone(), 1300)
        }
    }, [progress, onDone])

    const activeLines = Math.ceil((progress / 100) * (lines.length - 1))

    return (
        <div className={`${styles.overlay} ${phase === 2 ? styles.exit : ''}`}>
        <div className={styles.terminal}>

            <div className={styles.terminalHeader}>
            <span className={styles.dot} style={{ background: '#ff5f57' }} />
            <span className={styles.dot} style={{ background: '#febc2e' }} />
            <span className={styles.dot} style={{ background: '#28c840' }} />
            <span className={styles.terminalTitle}>portfolio.exe</span>
            </div>

            <div className={styles.body}>
            {lines.slice(0, activeLines + 1).map((line, i) => (
                <div key={i} className={styles.line}>
                <span className={styles.prompt}>❯</span>
                <span className={styles.lineText}>
                    {i < activeLines ? line : <Typewriter text={line} />}
                </span>
                </div>
            ))}

            <div className={styles.barWrapper}>
                <div className={styles.bar}>
                <div className={styles.barFill} style={{ width: `${progress}%` }} />
                </div>
                <span className={styles.percent}>{progress}%</span>
            </div>

            {phase >= 1 && (
                <div className={`${styles.line} ${styles.done}`}>
                <span className={styles.prompt}>✓</span>
                <span>all systems go</span>
                </div>
            )}
            </div>

        </div>
        </div>
    )
    }

    function Typewriter({ text }: { text: string }) {
    const [displayed, setDisplayed] = useState('')

    useEffect(() => {
        let i = 0
        const t = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) clearInterval(t)
        }, 28)
        return () => clearInterval(t)
    }, [text])

    return <>{displayed}<span className={styles.cursor}>▋</span></>
}