import { useState, useEffect } from 'react'
import { useApp } from '../context/AppContext'
import { PdfModal } from './PdfModal'
import styles from './Hero.module.css'

import cvUrl from '/Hugolelis_cv.pdf'

interface TerminalField {
  key: string
  labelPt: string
  labelEn: string
  valuePt: string
  valueEn: string
}

const fields: TerminalField[] = [
  { key: 'name',     labelPt: 'nome',        labelEn: 'name',     valuePt: 'Hugo de Lelis',            valueEn: 'Hugo de Lelis' },
  { key: 'role',     labelPt: 'cargo',       labelEn: 'role',     valuePt: 'Desenvolvedor de Software', valueEn: 'Software Developer' },
  { key: 'stack',    labelPt: 'stack',       labelEn: 'stack',    valuePt: 'Python · Node · C++',       valueEn: 'Python · Node · C++' },
  { key: 'location', labelPt: 'localizacao', labelEn: 'location', valuePt: 'Brasil',                    valueEn: 'Brazil' },
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
  const { t, lang } = useApp()
  const [animStep, setAnimStep] = useState(0)
  const [cvOpen, setCvOpen] = useState(false)

  const roleValue = lang === 'pt' ? fields[1].valuePt : fields[1].valueEn
  const displayedTitle = useTypewriter(
    lang === 'pt' ? 'Código que escala.' : 'Code that scales.',
    30
  )

  useEffect(() => {
    const timers = fields.map((_, i) =>
      setTimeout(() => setAnimStep(i + 1), i * 150 + 400)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className={styles.hero} id='hero'>
      <div className={styles.gridBg} aria-hidden />
      <div className={styles.layout}>

        <div className={styles.leftCol}>
          <p className={styles.label}>{roleValue}</p>
          <h1 className={styles.title}>
            <span className={styles.accent}>{displayedTitle}</span>
            <span className={styles.cursor}>_</span>
          </h1>
          <p className={styles.sub}>{t.hero.sub}</p>
          <div className={styles.cta} data-parallax data-parallax-speed="0.04">
            <a href="/projetos" className="btn btn--primary">{t.hero.cta_projects}</a>
            <a href="#contato" className="btn btn--ghost">{t.hero.cta_contact}</a>
            <button
              className="btn btn--ghost"
              onClick={() => setCvOpen(true)}
            >
              {t.hero.cta_cv}
            </button>
          </div>
        </div>

        <div className={styles.terminal} data-parallax data-parallax-speed="0.07">
          <div className={styles.termBar}>
            <span className={styles.termDot} style={{ background: '#ff5f57' }} />
            <span className={styles.termDot} style={{ background: '#ffbd2e' }} />
            <span className={styles.termDot} style={{ background: '#28c840' }} />
            <span className={styles.termTitle}>portfolio.config</span>
          </div>

          <div className={styles.termBody}>
            <p className={styles.termComment}>{lang === 'pt' ? '# configuração do portfólio' : '# portfolio config'}</p>
            <p className={styles.termComment}>export default {'{'}</p>

            {fields.map((field, i) => {
              const label = lang === 'pt' ? field.labelPt : field.labelEn
              const value = lang === 'pt' ? field.valuePt : field.valueEn

              return (
                <div
                  key={field.key}
                  className={`${styles.termLine} ${animStep > i ? styles.termLineVisible : ''}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className={styles.termKey}>&nbsp;&nbsp;{label}</span>
                  <span className={styles.termColon}>:</span>
                  <span className={styles.termQuote}>"</span>
                  <span className={styles.termValue}>{value}</span>
                  <span className={styles.termQuote}>"</span>
                  <span className={styles.termComma}>,</span>
                </div>
              )
            })}

            <p className={styles.termComment}>{'}'}</p>

            <div className={styles.termFooter}>
              <span className={styles.termSuccess}>
                <span className={styles.termSuccessDot} />
                {lang === 'pt' ? 'configuração carregada' : 'config loaded'}
              </span>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.badge} aria-hidden>
        <span>{t.hero.available}</span>
        <span className={styles.dot} />
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