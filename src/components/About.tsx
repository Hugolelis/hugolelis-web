import { useApp } from '../context/AppContext'
import { TechMarquee } from './TechMarquee'
import styles from './About.module.css'

export function About() {
  const { t } = useApp()

  return (
    <section id="sobre" className={styles.about}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.avatarCol}>
            <img
              src="/avatar.png"
              alt=""
              className={styles.avatar}
              data-parallax
              data-parallax-speed="0.05"
            />
          </div>
          <div className={styles.textCol}>
            <h2 className="section-title">{t.about.title}</h2>
            <p className={styles.text}>{t.about.p1}</p>
          </div>
        </div>
        <TechMarquee />
      </div>
    </section>
  )
}
