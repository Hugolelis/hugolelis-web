import { Nav, ProjectCard } from '../components'
import { useApp } from '../context/AppContext'
import { projects } from '../data'
import styles from './ProjectsPage.module.css'

export function ProjectsPage() {
  const { t } = useApp()

  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <header className={styles.header}>
          <span className={styles.count}>{t.projects.count.replace('{n}', String(projects.length))}</span>
          <h1 className={styles.title}>{t.projects.title}</h1>
        </header>
        <div className={styles.list}>
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              translations={t.projects}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
