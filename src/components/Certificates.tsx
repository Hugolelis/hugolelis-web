import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Pdfmodal } from './Pdfmodal'
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
        <Pdfmodal
          name={selected.name}
          issuer={`${selected.issuer} · ${selected.year}`}
          file={selected.file}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}