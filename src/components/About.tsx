import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { certificates } from '../data'
import type { Certificate } from '../types'
import { useShowMore } from '../hooks/useShowMore'
import { getIssuerBadge } from '../utils/issuerBadge'
import { PdfModal } from './PdfModal'
import styles from './About.module.css'

const interests = [
  'Engenharia de Software', 'Algoritmos', 'Estruturas de Dados',
  'Arquitetura de Sistemas', 'Performance', 'Backend', 'Visão Computacional', 'IA',
]
const interestsEn = [
  'Software Engineering', 'Algorithms', 'Data Structures',
  'System Architecture', 'Performance', 'Backend', 'Computer Vision', 'AI',
]

const INITIAL_COUNT = 4

export function About() {
  const { t, lang } = useApp()
  const interestTags = lang === 'pt' ? interests : interestsEn
  const [selected, setSelected] = useState<Certificate | null>(null)
  const certsShown = useShowMore(certificates, INITIAL_COUNT)

  return (
    <section id="sobre" className={styles.about}>
      <div className="container">
        <div className={styles.header}>
          <img
            src="/avatar.jpg"
            alt={lang === 'pt' ? 'Foto de Hugo de Lelis' : 'Photo of Hugo de Lelis'}
            className={styles.avatar}
            width={84}
            height={84}
          />
          <h2 className={`section-title ${styles.title}`}>{t.about.title}</h2>
        </div>

        <div className={styles.body}>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>

        <div className={styles.subsection}>
          <p className={styles.interestsLabel}>{lang === 'pt' ? 'Áreas de interesse' : 'Areas of interest'}</p>
          <div className={styles.interests}>
            {interestTags.map(tag => (
              <span key={tag} className={styles.interest}>{tag}</span>
            ))}
          </div>
        </div>

        <div id="certificados" className={styles.subsection}>
          <div className={styles.sectionHeader}>
            <span className={styles.count}>{t.certificates.count.replace('{n}', String(certificates.length))}</span>
            <h3 className={styles.sectionTitle}>{t.certificates.title}</h3>
          </div>
          <div className={styles.grid}>
            {certsShown.visible.map((cert, i) => {
              const badge = getIssuerBadge(cert.issuer)
              return (
                <button
                  key={i}
                  className={styles.card}
                  style={{ animation: `fadeUp 0.4s ease ${i * 0.06}s both` }}
                  onClick={() => setSelected(cert)}
                >
                  <div className={styles.icon} aria-hidden="true" title={badge.org}>
                    {badge.initials}
                  </div>
                  <div className={styles.info}>
                    <span className={styles.name}>{cert.name}</span>
                    <span className={styles.issuer}>{cert.issuer}</span>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.year}>{cert.year}</span>
                    <span className={styles.arrow} aria-hidden="true">↗</span>
                  </div>
                </button>
              )
            })}
          </div>
          {(certsShown.remaining > 0 || certsShown.canShowLess) && (
            <div className={styles.showMore}>
              {certsShown.remaining > 0 ? (
                <button className="btn btn--ghost" onClick={certsShown.showMore}>
                  {lang === 'pt' ? `Ver mais (${certsShown.remaining})` : `Show more (${certsShown.remaining})`}
                </button>
              ) : (
                <button className="btn btn--ghost" onClick={certsShown.showLess}>
                  {lang === 'pt' ? 'Ver menos' : 'Show less'}
                </button>
              )}
            </div>
          )}
        </div>

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
