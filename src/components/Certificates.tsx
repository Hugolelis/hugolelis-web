import { useState } from 'react'
import { useApp } from '../context/AppContext'
import styles from './Certificates.module.css'

interface CertItem {
  name: string
  issuer: string
  year: string
  file: string
}

export function Certificates() {
  const { t } = useApp()
  const [selected, setSelected] = useState<CertItem | null>(null)

  return (
    <section id="certificados" className={styles.certificates}>
      <div className="container">
        <h2 className="section-title">{t.certificates.title}</h2>
        <div className={styles.grid}>
          {t.certificates.items.map((cert, i) => (
            <button
              key={i}
              className={styles.card}
              onClick={() => setSelected(cert)}
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
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className={styles.overlay} onClick={() => setSelected(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalInfo}>
                <span className={styles.modalName}>{selected.name}</span>
                <span className={styles.modalIssuer}>{selected.issuer} · {selected.year}</span>
              </div>
              <div className={styles.modalActions}>
                <a
                  href={selected.file}
                  download
                  className={styles.downloadBtn}
                  title="Download"
                >
                  ↓
                </a>
                <button
                  className={styles.closeBtn}
                  onClick={() => setSelected(null)}
                  title="Fechar"
                >
                  ✕
                </button>
              </div>
            </div>
            <embed
              src={selected.file}
              className={styles.viewer}
              title={selected.name}
            />
          </div>
        </div>
      )}
    </section>
  )
}