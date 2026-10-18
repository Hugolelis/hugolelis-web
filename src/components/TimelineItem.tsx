import type { TimelineEntry, Lang, TimelineCategory } from '../types'
import { BriefcaseIcon, GraduationCapIcon, TrophyIcon } from './icons'
import styles from './Timeline.module.css'

interface Props {
  entry: TimelineEntry
  lang: Lang
  present: string
  above: boolean
  column: number
}

const categoryIcon: Record<TimelineCategory, typeof BriefcaseIcon> = {
  work: BriefcaseIcon,
  education: GraduationCapIcon,
  competition: TrophyIcon,
}

export function TimelineItem({ entry, lang, present, above, column }: Props) {
  const ended = lang === 'pt' ? 'Experiência encerrada' : 'Experience ended'
  const CategoryIcon = categoryIcon[entry.category]

  return (
    <>
      <span
        className={`${styles.dot} ${entry.current ? styles.dotCurrent : ''}`}
        style={{ gridColumn: column }}
      >
        <CategoryIcon size={13} />
      </span>
      <div
        className={`${styles.text} ${above ? styles.textAbove : styles.textBelow}`}
        style={{ gridColumn: column }}
      >
        <span className={styles.period}>{entry.period[lang]}</span>
        <h3 className={styles.org}>{entry.org[lang]}</h3>
        <span className={styles.role}>{entry.role[lang]}</span>
        <ul className={styles.desc}>
          {entry.description[lang].map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        <span className={`${styles.status} ${entry.current ? styles.statusCurrent : ''}`}>
          {entry.current ? present : ended}
        </span>
      </div>
    </>
  )
}
