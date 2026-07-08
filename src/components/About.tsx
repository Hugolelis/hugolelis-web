import { useApp } from '../context/AppContext'
import { skills } from '../data'
import styles from './About.module.css'

const categoryColors: Record<string, string> = {
  backend: 'var(--accent-term)',
  infra: 'var(--accent-blue)',
  tools: 'var(--muted)',
}

export function About() {
  const { t } = useApp()

  return (
    <section id="sobre" className={styles.about}>
      <div className="container">
          <div className={styles.inner}>
          <div className={styles.text}>
            <h2 className="section-title">{t.about.title}</h2>
            <p>{t.about.p1}</p>
          </div>
          <div className={styles.skillsBlock}>
            <p className={styles.skillsLabel}>{t.about.skills_title}</p>
            <div className={styles.skillsGrid}>
              {skills.map((s, i) => (
                <span
                  key={s.name}
                  data-parallax
                  data-parallax-speed="0.05"
                  className={styles.tag}
                  style={{ '--tag-color': categoryColors[s.category], animation: `fadeUp 0.3s ease ${i * 0.04}s both` } as React.CSSProperties}
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
