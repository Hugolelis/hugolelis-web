import { useState, useEffect } from 'react'
import { useApp } from '../context/AppContext'
import { PdfModal } from './PdfModal'
import styles from './Certificates.module.css'

interface CertItem {
  name: string
  issuer: string
  year: string
  file: string
}

const LIMIT = 3

export function Certificates() {
  const { t } = useApp()
  const [selected, setSelected] = useState<CertItem | null>(null)
  const items = t.certificates.items
  const visible = items.slice(0, LIMIT)
  const hasMore = items.length > LIMIT

  useEffect(() => {
    const target = sessionStorage.getItem('scrollTo')
    if (target === '#certificados') {
      sessionStorage.removeItem('scrollTo')
      const el = document.getElementById('certificados')
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [])

  return (
    <section id="certificados" className={styles.certificates}>
      <div className="container">
        <h2 className="section-title">{t.certificates.title}</h2>
        <div className={styles.grid}>
          {visible.map((cert, i) => (
            <button
              key={i}
              data-parallax
              data-parallax-speed="0.06"
              className={styles.card}
              style={{ animation: `fadeUp 0.4s ease ${i * 0.08}s both` }}
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
        {hasMore && (
          <a href="/certificados" className={styles.viewAll} data-parallax data-parallax-speed="0.04">
            <span>{t.certificates.viewAll}</span>
            <span className={styles.viewArrow}>→</span>
          </a>
        )}
      </div>

      {selected && (
        <PdfModal
          name={selected.name}
          issuer={`${selected.issuer} · ${selected.year}`}
          file={selected.file}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}
