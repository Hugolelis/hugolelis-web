import { useApp } from '../../context/AppContext'
import { timeline } from '../../data'
import { TimelineItem } from './TimelineItem'
import { useHorizontalPin } from '../../hooks/useHorizontalPin'
import styles from './Timeline.module.css'

// Data is stored newest -> oldest; the horizontal track reads left to right
// as a trajectory, so it's walked in reverse (oldest -> newest).
const orderedTimeline = [...timeline].reverse()

export function Timeline() {
  const { t, lang } = useApp()
  const { sectionRef, trackRef, progress, offset } = useHorizontalPin<HTMLElement, HTMLDivElement>()

  return (
    <section id="timeline" ref={sectionRef} className={styles.timeline}>
      <div className={styles.pin}>
        <div className={styles.trackArea}>
          <div
            ref={trackRef}
            className={styles.track}
            style={{ transform: `translateX(-${offset}px)` }}
          >
            <div className={styles.intro}>
              <span className={styles.count}>{t.timeline.count.replace('{n}', String(orderedTimeline.length))}</span>
              <h2 className={`section-title ${styles.title}`}>{t.timeline.title}</h2>
              <p className={styles.summary}>{t.timeline.summary}</p>
            </div>

            <span className={styles.line} style={{ gridColumn: `2 / ${orderedTimeline.length + 2}` }} />
            <span
              className={styles.lineFill}
              style={{ gridColumn: `2 / ${orderedTimeline.length + 2}`, transform: `scaleX(${progress})` }}
            />

            {orderedTimeline.map((entry, i) => (
              <TimelineItem
                key={entry.id}
                entry={entry}
                lang={lang}
                present={t.timeline.present}
                above={i % 2 === 0}
                column={i + 2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
