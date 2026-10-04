import type { TimelineEntry, Lang } from '../types'
import { useScrollFade } from '../hooks/useScrollFade'
import styles from './Timeline.module.css'

interface Props {
  entry: TimelineEntry
  lang: Lang
  present: string
  reverse: boolean
}

export function TimelineItem({ entry, lang, present, reverse }: Props) {
  const { ref, visible } = useScrollFade<HTMLDivElement>(0.15)

  return (
    <div className={`${styles.item} ${reverse ? styles.itemReverse : ''}`}>
      <div className={styles.dotCol}>
        <span className={`${styles.dot} ${entry.current ? styles.dotCurrent : ''}`} />
      </div>
      <div
        ref={ref}
        className={styles.card}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(18px)',
          transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className={styles.cardTop}>
          <span className={styles.period}>
            {entry.period[lang]}
            {entry.current && <span className={styles.current}> — {present}</span>}
          </span>
        </div>
        <h3 className={styles.role}>{entry.role[lang]}</h3>
        <span className={styles.org}>{entry.org[lang]}</span>
        <ul className={styles.desc}>
          {entry.description[lang].map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
