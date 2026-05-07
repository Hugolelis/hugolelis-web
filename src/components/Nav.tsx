import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { useScrollY } from '../hooks/useScrollY'
import { useActiveSection } from '../hooks/useActiveSection'
import styles from './Nav.module.css'

const SECTIONS = ['hero', 'sobre', 'trajetoria', 'certificados', 'projetos', 'contato']

export function Nav() {
  const { t, theme, toggleTheme, lang, toggleLang } = useApp()
  const scrollY = useScrollY()
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(SECTIONS)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`${styles.nav} ${scrollY > 40 ? styles.scrolled : ''}`}>
        <a href="#hero" className={styles.logo}>{'<Hugo />'}</a>

        <ul className={styles.links}>
          <li><a href="#hero"         className={active === 'hero'         ? styles.activeLink : ''}>{t.nav.hero}</a></li>
          <li><a href="#sobre"        className={active === 'sobre'        ? styles.activeLink : ''}>{t.nav.about}</a></li>
          <li><a href="#trajetoria"   className={active === 'trajetoria'   ? styles.activeLink : ''}>{t.nav.timeline}</a></li>
          <li><a href="#certificados" className={active === 'certificados' ? styles.activeLink : ''}>{t.nav.certificates}</a></li>
          <li><a href="#projetos"     className={active === 'projetos'     ? styles.activeLink : ''}>{t.nav.projects}</a></li>
          <li><a href="#contato"      className={active === 'contato'      ? styles.activeLink : ''}>{t.nav.contact}</a></li>
          <li><a href="/blog"         className={styles.blogLink}>Blog</a></li>
        </ul>

        <div className={styles.controls}>
          <button className={styles.toggle} onClick={toggleLang} title="Switch language" aria-label="Switch language">
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
          <button className={styles.toggle} onClick={toggleTheme} title="Toggle theme" aria-label="Toggle theme">
            {theme === 'dark' ? '○' : '●'}
          </button>
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          <li><a href="#hero"         onClick={closeMenu} className={active === 'hero' ? styles.activeLink : ''}>{t.nav.hero}</a></li>
          <li><a href="#sobre"        onClick={closeMenu} className={active === 'sobre'        ? styles.activeLink : ''}>{t.nav.about}</a></li>
          <li><a href="#trajetoria"   onClick={closeMenu} className={active === 'trajetoria'   ? styles.activeLink : ''}>{t.nav.timeline}</a></li>
          <li><a href="#certificados" onClick={closeMenu} className={active === 'certificados' ? styles.activeLink : ''}>{t.nav.certificates}</a></li>
          <li><a href="#projetos"     onClick={closeMenu} className={active === 'projetos'     ? styles.activeLink : ''}>{t.nav.projects}</a></li>
          <li><a href="#contato"      onClick={closeMenu} className={active === 'contato'      ? styles.activeLink : ''}>{t.nav.contact}</a></li>
          <li><a href="/blog"         className={styles.blogLink}>Blog</a></li>
        </ul>
      </div>

      {menuOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </>
  )
}