import { useApp } from '../context/AppContext'
import { useScrollY } from '../hooks/useScrollY'
import styles from './Nav.module.css'

export function Nav() {
  const { t, theme, toggleTheme, lang, toggleLang } = useApp()
  const scrollY = useScrollY()

  return (
    <nav className={`${styles.nav} ${scrollY > 40 ? styles.scrolled : ''}`}>
      <span className={styles.logo}>{'<Hugo />'}</span>

      <ul className={styles.links}>
        <li><a href="#sobre">{t.nav.about}</a></li>
        <li><a href="#trajetoria">{t.nav.timeline}</a></li>
        <li><a href="#certificados">{t.nav.certificates}</a></li>
        <li><a href="#projetos">{t.nav.projects}</a></li>
        <li><a href="#contato">{t.nav.contact}</a></li>
      </ul>

      <div className={styles.controls}>
        <button
          className={styles.toggle}
          onClick={toggleLang}
          title="Switch language"
          aria-label="Switch language"
        >
          {lang === 'pt' ? 'EN' : 'PT'}
        </button>
        <button
          className={styles.toggle}
          onClick={toggleTheme}
          title="Toggle theme"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '○' : '●'}
        </button>
      </div>
    </nav>
  )
}
