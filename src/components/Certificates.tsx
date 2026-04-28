import { useApp } from '../context/AppContext'
import styles from './Certificates.module.css'

export function Certificates() {
  const { t } = useApp()

  return (
    <section id="certificados" className={styles.certificates}>
      <div className="container">
        <h2 className="section-title">{t.certificates.title}</h2>
        <div className={styles.grid}>
          {t.certificates.items.map((cert, i) => (
            <a
              key={i}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.icon}>⟨/⟩</div>
              <div className={styles.info}>
                <span className={styles.name}>{cert.name}</span>
                <span className={styles.issuer}>{cert.issuer}</span>
              </div>
              <div className={styles.meta}>
                <span className={styles.year}>{cert.year}</span>
                <span className={styles.arrow}>↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}