import { useState, useCallback, useEffect, lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { Nav, Hero, About, Timeline, Certificates, Projects, Contact, Footer, LoadingScreen } from './components'
import styles from './components/BackToTop.module.css'
import notFoundStyles from './components/NotFound.module.css'

const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })))
const CertificatesPage = lazy(() => import('./pages/CertificatesPage').then(m => ({ default: m.CertificatesPage })))

function BlogFallback() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'var(--bg)',
      color: 'var(--muted)',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.875rem',
      gap: '0.75rem',
    }}>
      <span style={{
        display: 'inline-block',
        width: 16,
        height: 16,
        border: '2px solid var(--border)',
        borderTopColor: 'var(--accent)',
        borderRadius: '50%',
        animation: 'spin 0.6s linear infinite',
      }} />
      loading...
    </div>
  )
}

export default function App() {
  const path = window.location.pathname
  const isBlog = path === '/blog'
  const isProjectsPage = path === '/projetos'
  const isCertificatesPage = path === '/certificados'
  const isUnknown = !isBlog && !isProjectsPage && !isCertificatesPage && path !== '/'

  const isSubPage = isBlog || isProjectsPage || isCertificatesPage

  const [loaded, setLoaded] = useState(() => {
    const seen = sessionStorage.getItem('loaded') === 'true'
    return isSubPage || seen
  })

  const handleDone = useCallback(() => {
    sessionStorage.setItem('loaded', 'true')
    setLoaded(true)
  }, [])

  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (isUnknown) {
    return (
      <>
        <Helmet>
          <title>404 — Página não encontrada</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <Nav />
        <main id="main-content" className={notFoundStyles.notFound}>
          <div className={notFoundStyles.inner}>
            <span className={notFoundStyles.code}>404</span>
            <h1 className={notFoundStyles.title}>Página não encontrada</h1>
            <p className={notFoundStyles.desc}>A página que você procura não existe ou foi movida.</p>
            <a href="/" className={notFoundStyles.link}>Voltar ao início</a>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (isBlog) {
    return (
      <>
        <Helmet>
          <title>{'Blog — Hugo de Lelis'}</title>
          <meta name="description" content="Thoughts on development, systems and technology by Hugo de Lelis." />
          <meta property="og:title" content="Blog — Hugo de Lelis" />
          <meta property="og:description" content="Thoughts on development, systems and technology." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={window.location.href} />
        </Helmet>
        <Suspense fallback={<BlogFallback />}>
          <Blog />
        </Suspense>
      </>
    )
  }

  if (isProjectsPage) {
    return (
      <>
        <Helmet>
          <title>{'Projetos — Hugo de Lelis'}</title>
          <meta name="description" content="Projetos de Hugo de Lelis — Software Developer." />
          <meta property="og:title" content="Projetos — Hugo de Lelis" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={window.location.href} />
        </Helmet>
        <Suspense fallback={<BlogFallback />}>
          <ProjectsPage />
        </Suspense>
      </>
    )
  }

  if (isCertificatesPage) {
    return (
      <>
        <Helmet>
          <title>{'Certificados — Hugo de Lelis'}</title>
          <meta name="description" content="Certificados de Hugo de Lelis — Software Developer." />
          <meta property="og:title" content="Certificados — Hugo de Lelis" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={window.location.href} />
        </Helmet>
        <Suspense fallback={<BlogFallback />}>
          <CertificatesPage />
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
        <title>{'Hugo — Software Developer'}</title>
        <meta name="description" content="Portfolio de Hugo de Lelis — Software Developer especializado em APIs, bancos de dados relacionais e sistemas distribuídos." />
        <meta property="og:title" content="Hugo — Software Developer" />
        <meta property="og:description" content="Portfolio de Hugo de Lelis — Software Developer especializado em APIs, bancos de dados relacionais e sistemas distribuídos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hugolelis.dev" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <div>
        {!loaded && <LoadingScreen onDone={handleDone} />}
        <div style={{ visibility: loaded ? 'visible' : 'hidden' }}>
          <Nav />
          <main id="main-content">
            <Hero />
            <About />
            <Timeline />
            <Certificates />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
        {showBackToTop && (
          <button
            className={styles.backToTop}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Voltar ao topo"
          >
            ↑
          </button>
        )}
      </div>
    </>
  )
}
