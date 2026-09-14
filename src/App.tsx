import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { Footer, Loading, Nav, Hero, About, CertificatesSection, LinkedInSection, Reveal } from './components'
import { useApp } from './context/AppContext'
import styles from './components/BackToTop.module.css'
import deferredStyles from './components/DeferredTimeline.module.css'
import notFoundStyles from './components/NotFound.module.css'

const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })))

const Timeline = lazy(() => import('./components/Timeline').then(m => ({ default: m.Timeline })))

function DeferredTimeline() {
  const [shouldRender, setShouldRender] = useState(
    () => typeof window !== 'undefined' && !('IntersectionObserver' in window),
  )
  const slotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slot = slotRef.current
    if (!slot) return

    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShouldRender(true)
        observer.disconnect()
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.01 },
    )

    observer.observe(slot)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={slotRef} className={deferredStyles.slot} aria-busy={!shouldRender}>
      {!shouldRender && <div className={deferredStyles.loading}><Loading /></div>}
      {shouldRender && (
        <Suspense fallback={<div className={deferredStyles.loading}><Loading /></div>}>
          <Reveal delay={0.05}><Timeline /></Reveal>
        </Suspense>
      )}
    </div>
  )
}

export default function App() {
  const { lang } = useApp()
  const path = window.location.pathname
  const isProjectsPage = path === '/projetos'
  const isUnknown = !isProjectsPage && path !== '/'

  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const hash = window.location.hash
    const target = hash ? document.getElementById(hash.slice(1)) : null
    if (!target) {
      window.scrollTo(0, 0)
      return
    }

    target.scrollIntoView({ behavior: 'instant' })

    // Hero's typewriter/reveal animation keeps growing the page for ~1.2s,
    // which can push the target out of place after the jump above. Correct
    // once more, but only if the user hasn't taken the wheel in the meantime.
    let userScrolled = false
    const markScrolled = () => { userScrolled = true }
    window.addEventListener('wheel', markScrolled, { once: true, passive: true })
    window.addEventListener('touchstart', markScrolled, { once: true, passive: true })
    window.addEventListener('keydown', markScrolled, { once: true })

    const timeoutId = window.setTimeout(() => {
      if (!userScrolled) target.scrollIntoView({ behavior: 'instant' })
    }, 1300)

    return () => {
      window.clearTimeout(timeoutId)
      window.removeEventListener('wheel', markScrolled)
      window.removeEventListener('touchstart', markScrolled)
      window.removeEventListener('keydown', markScrolled)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (isUnknown) {
    return (
      <>
        <Helmet>
          <title>404 — Page not found</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <Nav />
        <main id="main-content" className={notFoundStyles.notFound}>
          <div className={notFoundStyles.inner}>
            <span className={notFoundStyles.code}>404</span>
            <h1 className={notFoundStyles.title}>Page not found</h1>
            <p className={notFoundStyles.desc}>The page you are looking for does not exist or has been moved.</p>
            <a href="/" className={notFoundStyles.link}>Back to home</a>
          </div>
        </main>
      </>
    )
  }

  if (isProjectsPage) {
    return (
      <>
        <Helmet>
          <title>{'Hugo | Projects'}</title>
          <meta name="description" content="Projects by Hugo de Lelis | Software Developer." />
          <meta property="og:title" content="Hugo | Projects" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={window.location.href} />
        </Helmet>
        <Suspense fallback={<Loading fullScreen />}>
          <ProjectsPage />
        </Suspense>
      </>
    )
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hugo de Lelis',
    jobTitle: 'Software Developer',
    url: 'https://hugolelis.dev',
    sameAs: [
      'https://github.com/Hugolelis',
      'https://www.linkedin.com/in/hugolelis/',
    ],
  }

  return (
    <>
      <Helmet>
        <title>{'Hugo | Software Developer'}</title>
        <meta name="description" content="Portfolio de Hugo de Lelis | Software Developer especializado em APIs, bancos de dados relacionais e sistemas distribuídos." />
        <meta property="og:title" content="Hugo | Software Developer" />
        <meta property="og:description" content="Portfolio de Hugo de Lelis | Software Developer especializado em APIs, bancos de dados relacionais e sistemas distribuídos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hugolelis.dev" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <div style={{ overflowX: 'hidden' }}>
        <Nav />
        <main id="main-content">
          <Hero />
          <Reveal><About /></Reveal>
          <DeferredTimeline />
          <Reveal><CertificatesSection /></Reveal>
          <Reveal><LinkedInSection /></Reveal>
        </main>
        {showBackToTop && (
          <button
            className={styles.backToTop}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label={lang === 'pt' ? 'Voltar ao topo' : 'Back to top'}
          >
            ↑
          </button>
        )}
        <Footer />
      </div>
    </>
  )
}
