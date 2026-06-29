import { useState } from 'react'
import { Nav, PdfModal, Reveal } from '../components'
import { useApp } from '../context/AppContext'
import styles from './CertificatesPage.module.css'

export function CertificatesPage() {
  const { t } = useApp()
  const [selected, setSelected] = useState<{ name: string; issuer: string; year: string; file: string } | null>(null)

  return (
    <div className={styles.page}>
      <Nav />
        <main className={styles.main}>
          <Reveal>
            <header className={styles.header}>
              <span className={styles.count}>{t.certificates.count.replace('{n}', String(t.certificates.items.length))}</span>
              <h1 className={styles.title}>{t.certificates.title}</h1>
            </header>
          </Reveal>
          <div className={styles.grid}>
            {t.certificates.items.map((cert, i) => (
              <button
                key={i}
                className={styles.card}
                style={{ animation: `fadeUp 0.4s ease ${i * 0.06}s both` }}
                onClick={() => setSelected(cert)}
              >
              <div className={styles.icon}>⟨/⟩</div>
              <div className={styles.info}>
                <span className={styles.name}>{cert.name}</span>
                <span className={styles.issuer}>{cert.issuer}</span>
              </div>
              <div className={styles.meta}>
                <span className={styles.year}>{cert.year}</span>
                <span className={styles.arrow}>→</span>
              </div>
            </button>
          ))}
        </div>
      </main>

      {selected && (
        <PdfModal
          name={selected.name}
          issuer={`${selected.issuer} · ${selected.year}`}
          file={selected.file}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}
