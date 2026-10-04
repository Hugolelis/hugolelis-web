import { useApp } from '../context/AppContext'
import { timeline } from '../data'
import { TimelineItem } from './TimelineItem'
import styles from './Timeline.module.css'

export function Timeline() {
  const { t, lang } = useApp()

  return (
    <section id="timeline" className={styles.timeline}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.count}>{t.timeline.count.replace('{n}', String(timeline.length))}</span>
          <h2 className={`section-title ${styles.title}`}>{t.timeline.title}</h2>
        </div>

        <div className={styles.list}>
          {timeline.map((entry, i) => (
            <TimelineItem
              key={entry.id}
              entry={entry}
              lang={lang}
              present={t.timeline.present}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
