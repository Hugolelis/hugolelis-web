import { useEffect } from 'react'
import { useApp } from '../context/AppContext'
import { projects } from '../data'
import { ProjectCard } from './ProjectCard'
import styles from './Projects.module.css'

const LIMIT = 3

export function Projects() {
  const { t } = useApp()
  const visible = projects.slice(0, LIMIT)
  const hasMore = projects.length > LIMIT

  useEffect(() => {
    const target = sessionStorage.getItem('scrollTo')
    if (target === '#projetos') {
      sessionStorage.removeItem('scrollTo')
      const el = document.getElementById('projetos')
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [])

  return (
    <section id="projetos" className={styles.projects}>
      <div className="container">
        <h2 className="section-title">{t.projects.title}</h2>
        <div className={styles.list}>
          {visible.map((project, i) => (
            <div key={project.id} style={{ animation: `fadeUp 0.4s ease ${i * 0.08}s both` }}>
              <ProjectCard
                project={project}
                translations={t.projects}
              />
            </div>
          ))}
        </div>
        {hasMore && (
          <a href="/projetos" className={styles.viewAll} data-parallax data-parallax-speed="0.04">
            <span>{t.projects.viewAll}</span>
            <span className={styles.viewArrow}>→</span>
          </a>
        )}
      </div>
    </section>
  )
}
