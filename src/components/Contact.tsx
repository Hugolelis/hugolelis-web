import { useApp } from '../context/AppContext'
import styles from './Contact.module.css'

export function Contact() {
  const { t } = useApp()

  return (
    <section id="contato" className={styles.contact}>
      <div className={`container ${styles.inner}`}>
        <h2 className="section-title">{t.contact.title}</h2>
        <p className={styles.sub}>{t.contact.sub}</p>
        <a href="mailto:hugodelelis05@gmail.com" className="btn btn--primary btn--lg">
          {t.contact.cta}
        </a>
        <div className={styles.social}>
          <a href="https://github.com/Hugolelis" target="_blank" rel="noreferrer" aria-label="GitHub (opens in new tab)">GitHub</a>
          <span>·</span>
          <a href="https://www.linkedin.com/in/hugolelis/" target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in new tab)">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
