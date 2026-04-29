import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { useScrollY } from '../hooks/useScrollY'
import styles from './Nav.module.css'

export function Nav() {
  const { t, theme, toggleTheme, lang, toggleLang } = useApp()
  const scrollY = useScrollY()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`${styles.nav} ${scrollY > 40 ? styles.scrolled : ''}`}>
        <a href="#hero" className={styles.logo}>{'<Hugo />'}</a>

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

      {/* Mobile menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
      >
        <ul className={styles.mobileLinks}>
          <li><a href="#sobre" onClick={closeMenu}>{t.nav.about}</a></li>
          <li><a href="#trajetoria" onClick={closeMenu}>{t.nav.timeline}</a></li>
          <li><a href="#certificados" onClick={closeMenu}>{t.nav.certificates}</a></li>
          <li><a href="#projetos" onClick={closeMenu}>{t.nav.projects}</a></li>
          <li><a href="#contato" onClick={closeMenu}>{t.nav.contact}</a></li>
        </ul>
      </div>

      {/* Overlay para fechar ao clicar fora */}
      {menuOpen && (
        <div className={styles.overlay} onClick={closeMenu} />
      )}
    </>
  )
}