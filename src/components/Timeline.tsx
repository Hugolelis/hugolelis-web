import { useApp } from '../context/AppContext'
import styles from './Timeline.module.css'

export function Timeline() {
  const { t } = useApp()

  return (
    <section id="trajetoria" className={styles.timeline}>
      <div className="container">
        <h2 className="section-title">{t.timeline.title}</h2>
        <div className={styles.track}>
          {t.timeline.items.map((item, i) => (
            <div key={i} className={styles.item} style={{ animation: `fadeUp 0.4s ease ${i * 0.1}s both` }}>
              <span className={styles.year}>{item.year}</span>
              <span className={styles.dot} aria-hidden="true" />
              <div className={styles.content}>
                <span className={styles.tag}>{item.type}</span>
                <h3 className={styles.role}>{item.role}</h3>
                <p className={styles.place}>{item.place}</p>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
