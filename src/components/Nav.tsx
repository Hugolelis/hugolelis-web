import { useState, useRef, useEffect } from 'react'
import { useApp } from '../context/AppContext'
import { useScrollY } from '../hooks/useScrollY'
import { useActiveSection } from '../hooks/useActiveSection'
import styles from './Nav.module.css'

const SECTIONS = ['hero', 'sobre', 'trajetoria', 'certificados', 'projetos', 'contato']

const SUB_PAGES = ['/projetos', '/certificados'] as const

export function Nav() {
  const { t, theme, toggleTheme, lang, toggleLang } = useApp()
  const scrollY = useScrollY()
  const [menuOpen, setMenuOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
  const pagesRef = useRef<HTMLLIElement>(null)
  const active = useActiveSection(SECTIONS)

  const path = window.location.pathname
  const onSubPage = SUB_PAGES.some(p => path === p)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!pagesOpen) return
    const handleClick = (e: MouseEvent) => {
      if (pagesRef.current && !pagesRef.current.contains(e.target as Node)) {
        setPagesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [pagesOpen])

  const handleNav = (hash: string) => {
    closeMenu()
    if (onSubPage) {
      sessionStorage.setItem('scrollTo', hash)
      window.location.href = `/${hash}`
    }
  }

  const menuLabel = menuOpen
    ? (lang === 'pt' ? 'Fechar menu' : 'Close menu')
    : (lang === 'pt' ? 'Abrir menu' : 'Open menu')

  const pageLabel = lang === 'pt' ? 'Páginas' : 'Pages'

  const isPageActive = (p: string) => path === p

  return (
    <>
      <a href="#main-content" className={styles.skipLink}>
        {lang === 'pt' ? 'Pular para o conteúdo' : 'Skip to content'}
      </a>
      <nav className={`${styles.nav} ${scrollY > 40 || onSubPage ? styles.scrolled : ''}`} aria-label={lang === 'pt' ? 'Navegação principal' : 'Main navigation'}>
        <a href={onSubPage ? '/' : '#hero'} className={styles.logo} aria-label="Voltar ao início">
          <svg viewBox="0 0 32 32" width="26" height="26" fill="none" style={{ display: 'block', color: 'var(--accent)' }}>
            <rect x="6" y="7" width="5" height="18" rx="1" fill="currentColor" opacity="0.15" />
            <rect x="21" y="7" width="5" height="18" rx="1" fill="currentColor" opacity="0.15" />
            <rect x="6" y="13" width="20" height="6" rx="1" fill="currentColor" />
            <rect x="6" y="7" width="5" height="6" rx="1" fill="currentColor" opacity="0.35" />
            <rect x="6" y="19" width="5" height="6" rx="1" fill="currentColor" opacity="0.35" />
            <rect x="21" y="7" width="5" height="6" rx="1" fill="currentColor" opacity="0.35" />
            <rect x="21" y="19" width="5" height="6" rx="1" fill="currentColor" opacity="0.35" />
            <circle cx="27" cy="26" r="1.5" fill="currentColor" />
          </svg>
        </a>

        <ul className={styles.links} role="list">
          <li><a href={onSubPage ? '/#hero'         : '#hero'}         onClick={() => handleNav('#hero')}         className={active === 'hero'         ? styles.activeLink : ''}>{t.nav.hero}</a></li>
          <li><a href={onSubPage ? '/#sobre'        : '#sobre'}        onClick={() => handleNav('#sobre')}        className={active === 'sobre'        ? styles.activeLink : ''}>{t.nav.about}</a></li>
          <li><a href={onSubPage ? '/#trajetoria'   : '#trajetoria'}   onClick={() => handleNav('#trajetoria')}   className={active === 'trajetoria'   ? styles.activeLink : ''}>{t.nav.timeline}</a></li>
          <li><a href={onSubPage ? '/#certificados' : '#certificados'} onClick={() => handleNav('#certificados')} className={active === 'certificados' ? styles.activeLink : ''}>{t.nav.certificates}</a></li>
          <li><a href={onSubPage ? '/#projetos'     : '#projetos'}     onClick={() => handleNav('#projetos')}     className={active === 'projetos'     ? styles.activeLink : ''}>{t.nav.projects}</a></li>
          <li><a href={onSubPage ? '/#contato'      : '#contato'}      onClick={() => handleNav('#contato')}      className={active === 'contato'      ? styles.activeLink : ''}>{t.nav.contact}</a></li>

          {/* accordion pages */}
          <li className={styles.pagesItem} ref={pagesRef}>
            <button
              className={`${styles.pagesTrigger} ${pagesOpen ? styles.pagesTriggerOpen : ''}`}
              onClick={() => setPagesOpen(prev => !prev)}
              aria-expanded={pagesOpen}
            >
              {t.nav.pages}
              <span className={styles.pagesChevron}>↓</span>
            </button>
            <div className={`${styles.pagesDropdown} ${pagesOpen ? styles.pagesDropdownOpen : ''}`}>
              <a
                href="/certificados"
                className={`${styles.pageLink} ${isPageActive('/certificados') ? styles.pageLinkActive : ''}`}
                onClick={closeMenu}
              >
                {t.nav.certificates}
              </a>
              <a
                href="/projetos"
                className={`${styles.pageLink} ${isPageActive('/projetos') ? styles.pageLinkActive : ''}`}
                onClick={closeMenu}
              >
                {t.nav.projects}
              </a>
            </div>
          </li>
        </ul>

        <div className={styles.controls}>
          <button className={styles.toggle} onClick={toggleLang} title={lang === 'pt' ? 'Switch language' : 'Trocar idioma'} aria-label={lang === 'pt' ? 'Switch language' : 'Trocar idioma'}>
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
          <button className={styles.toggle} onClick={toggleTheme} title={lang === 'pt' ? 'Alternar tema' : 'Toggle theme'} aria-label={lang === 'pt' ? 'Alternar tema' : 'Toggle theme'}>
            {theme === 'dark' ? '○' : '●'}
          </button>
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuLabel}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        role="dialog"
        aria-modal={menuOpen}
        aria-label={lang === 'pt' ? 'Menu de navegação' : 'Navigation menu'}
      >
        <ul className={styles.mobileLinks}>
          <li><a href={onSubPage ? '/#hero'         : '#hero'}         onClick={() => handleNav('#hero')}         className={active === 'hero'         ? styles.activeLink : ''}>{t.nav.hero}</a></li>
          <li><a href={onSubPage ? '/#sobre'        : '#sobre'}        onClick={() => handleNav('#sobre')}        className={active === 'sobre'        ? styles.activeLink : ''}>{t.nav.about}</a></li>
          <li><a href={onSubPage ? '/#trajetoria'   : '#trajetoria'}   onClick={() => handleNav('#trajetoria')}   className={active === 'trajetoria'   ? styles.activeLink : ''}>{t.nav.timeline}</a></li>
          <li><a href={onSubPage ? '/#certificados' : '#certificados'} onClick={() => handleNav('#certificados')} className={active === 'certificados' ? styles.activeLink : ''}>{t.nav.certificates}</a></li>
          <li><a href={onSubPage ? '/#projetos'     : '#projetos'}     onClick={() => handleNav('#projetos')}     className={active === 'projetos'     ? styles.activeLink : ''}>{t.nav.projects}</a></li>
          <li><a href={onSubPage ? '/#contato'      : '#contato'}      onClick={() => handleNav('#contato')}      className={active === 'contato'      ? styles.activeLink : ''}>{t.nav.contact}</a></li>
        </ul>

        <div className={styles.mobilePagesSection}>
          <span className={styles.mobilePagesLabel}>{pageLabel}</span>
          <div className={styles.mobilePagesLinks}>
            <a href="/certificados" className={isPageActive('/certificados') ? styles.pageLinkActive : ''} onClick={closeMenu}>{t.nav.certificates}</a>
            <a href="/projetos" className={isPageActive('/projetos') ? styles.pageLinkActive : ''} onClick={closeMenu}>{t.nav.projects}</a>
          </div>
        </div>
      </div>

      {menuOpen && <div className={styles.overlay} onClick={closeMenu} aria-hidden />}
    </>
  )
}
