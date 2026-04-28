import { useState, useEffect } from 'react'
import { useApp } from '../context/AppContext'
import { useScrollY } from '../hooks/useScrollY'
import styles from './Nav.module.css'

export function Nav() {
  const { t, theme, toggleTheme, lang, toggleLang } = useApp()
  const scrollY = useScrollY()
  const [menuOpen, setMenuOpen] = useState(false)

  // Fecha menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Bloqueia scroll do body quando menu aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`${styles.nav} ${scrollY > 40 ? styles.scrolled : ''}`}>
      <span className={styles.logo}>{'<Hugo />'}</span>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <li><a href="#sobre"       onClick={closeMenu}>{t.nav.about}</a></li>
        <li><a href="#trajetoria"  onClick={closeMenu}>{t.nav.timeline}</a></li>
        <li><a href="#certificados" onClick={closeMenu}>{t.nav.certificates}</a></li>
        <li><a href="#projetos"    onClick={closeMenu}>{t.nav.projects}</a></li>
        <li><a href="#contato"     onClick={closeMenu}>{t.nav.contact}</a></li>
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
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
