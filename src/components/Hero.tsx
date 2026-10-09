import { useState, useEffect } from 'react'
import { useApp } from '../context/AppContext'
import { PdfModal } from './PdfModal'
import ShapeGrid from './ShapeGrid'
import styles from './Hero.module.css'

import cvUrl from '/Hugolelis_cv.pdf'

const email = 'hugodelelis05@gmail.com'

interface Fact {
  key: string
  labelPt: string
  labelEn: string
  valuePt: string
  valueEn: string
}

const facts: Fact[] = [
  { key: 'stack',    labelPt: 'Stack',  labelEn: 'Stack',    valuePt: 'Python · Node.js/TS · C++', valueEn: 'Python · C++ · Node.js/TS' },
  { key: 'data',     labelPt: 'Dados',  labelEn: 'Data',     valuePt: 'PostgreSQL · MySQL',        valueEn: 'PostgreSQL · MySQL' },
  { key: 'infra',    labelPt: 'Infra',  labelEn: 'Infra',    valuePt: 'Docker · Linux · Git',       valueEn: 'Docker · Linux · Git' },
  { key: 'location', labelPt: 'Local',  labelEn: 'Location', valuePt: 'Brasil',                     valueEn: 'Brazil' },
]

function useTypewriter(text: string, speed = 28) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    if (!text) return
    let i = 0
    const id = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => {
      clearInterval(id)
      setDisplayed('')
    }
  }, [text, speed])
  return displayed
}

export function Hero() {
  const { t, lang, theme } = useApp()
  const [cvOpen, setCvOpen] = useState(false)

  const displayedTitle = useTypewriter('Hugo de Lelis', 30)

  return (
    <section className={styles.hero} id='hero'>
      <div className={styles.shapeGrid} aria-hidden>
        <ShapeGrid
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor={theme === 'light' ? 'rgba(66, 66, 66, 0.1)' : 'rgba(255, 255, 255, 0.09)'}
          hoverFillColor={theme === 'light' ? 'rgba(26, 26, 26, 0.15)' : 'rgba(255, 255, 255, 0.15)'}
          shape="square"
          hoverTrailAmount={5}
        />
      </div>
      <div className={`container ${styles.layout}`}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            <span className={styles.accent}>{displayedTitle}</span>
            <span className={styles.cursor}>_</span>
          </h1>
          <p className={styles.role}>{lang === 'pt' ? 'Desenvolvedor de software' : 'Software developer'}</p>

          <div className={styles.cta}>
            <a href="/projetos" className="btn btn--primary">{t.hero.cta_projects}</a>
            <button
              className="btn btn--ghost"
              onClick={() => setCvOpen(true)}
            >
              {t.hero.cta_cv}
            </button>
            <a
              href={`mailto:${email}`}
              className={`btn btn--ghost ${styles.emailCta}`}
              aria-label={`${t.hero.cta_email}: ${email}`}
            >
              <span>{t.hero.cta_email}</span>
              <span className={styles.emailArrow} aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className={styles.facts}>
          {facts.map((fact, i) => (
            <div
              key={fact.key}
              className={styles.fact}
              style={{ animationDelay: `${0.25 + i * 0.06}s` }}
            >
              <span className={styles.factLabel}>{lang === 'pt' ? fact.labelPt : fact.labelEn}</span>
              <span className={styles.factValue}>{lang === 'pt' ? fact.valuePt : fact.valueEn}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollArrow} aria-hidden>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>

      {cvOpen && (
        <PdfModal
          name="Hugolelis_cv.pdf"
          issuer="Hugo de Lelis"
          file={cvUrl}
          onClose={() => setCvOpen(false)}
        />
      )}
    </section>
  )
}
