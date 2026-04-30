import { useState, useCallback } from 'react'
import { Nav, Hero, About, Timeline, Certificates, Projects, Contact, Footer } from './components'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  const handleDone = useCallback(() => setLoaded(true), [])

  return (
    <div>
      {!loaded && <LoadingScreen onDone={handleDone} />}
      <Nav />
      <Hero />
      <About />
      <Timeline />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}