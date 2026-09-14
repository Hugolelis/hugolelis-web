import { useApp } from '../context/AppContext'
import { timeline } from '../data'
import styles from './Timeline.module.css'

export function Timeline() {
  const { t, lang } = useApp()

  return (
    <section id="trajetoria" className={styles.timeline}>
      <div className="container">
        <h2 className="section-title">{t.timeline.title}</h2>
        <div className={styles.track}>
          {timeline.map((item, i) => {
            const isCurrent = i === 0
            const side = i % 2 === 0 ? styles.itemLeft : styles.itemRight
            return (
              <div
                key={i}
                className={`${styles.item} ${side}`}
                style={{ animation: `fadeUp 0.4s ease ${i * 0.1}s both` }}
              >
                <div className={styles.content}>
                  <div className={styles.contentHead}>
                    <span className={styles.tag}>
                      {item.type[lang]}
                      {isCurrent && <span className={styles.current}>{lang === 'pt' ? ' · atual' : ' · current'}</span>}
                    </span>
                    <span className={styles.year}>{item.year}</span>
                  </div>
                  <h3 className={styles.role}>{item.role[lang]}</h3>
                  <p className={styles.place}>{item.place[lang]}</p>
                  <ul className={styles.desc}>
                    {item.description[lang].map((line, j) => (
                      <li key={j}>{line}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.dotCol}>
                  <span className={`${styles.dot} ${isCurrent ? styles.dotCurrent : ''}`} aria-hidden="true" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
