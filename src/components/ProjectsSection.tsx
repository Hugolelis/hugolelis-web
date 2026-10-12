import { useApp } from '../context/AppContext'
import { projects } from '../data'
import { ProjectCard } from './ProjectCard'
import styles from './ProjectsSection.module.css'

export function ProjectsSection() {
  const { t, lang } = useApp()

  return (
    <section id="projetos" className={styles.projects}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.sidebar}>
            <span className={styles.count}>{t.projects.count.replace('{n}', String(projects.length))}</span>
            <h2 className={`section-title ${styles.title}`}>{t.projects.title}</h2>
            <p className={styles.summary}>{t.projects.summary}</p>
          </div>

          <div className={styles.list}>
            <div className={styles.cards}>
              {projects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  lang={lang}
                  translations={t.projects}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
