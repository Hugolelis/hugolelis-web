import { useState, useCallback } from 'react'
import { Nav, Hero, About, Timeline, Certificates, Projects, Contact, Footer } from './components'
import LoadingScreen from './components/LoadingScreen'
import { Blog } from './pages/Blog'

const isBlog = window.location.pathname === '/blog'
const alreadySeen = sessionStorage.getItem('loaded') === 'true'

export default function App() {
  const [loaded, setLoaded] = useState(isBlog || alreadySeen)

  const handleDone = useCallback(() => {
    sessionStorage.setItem('loaded', 'true')
    setLoaded(true)
  }, [])

  if (isBlog) return <Blog />

  return (
    <div>
      {!loaded && <LoadingScreen onDone={handleDone} />}
      <div style={{ visibility: loaded ? 'visible' : 'hidden' }}>
        <Nav />
        <Hero />
        <About />
        <Timeline />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
