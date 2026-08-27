import { Nav, ProjectCard, Reveal } from '../components'
import { useApp } from '../context/AppContext'
import { projects } from '../data'
import styles from './ProjectsPage.module.css'

export function ProjectsPage() {
  const { t, lang } = useApp()

  return (
    <div className={styles.page}>
      <Nav />
        <main className={styles.main}>
          <Reveal>
            <header className={styles.header}>
              <span className={styles.count}>{t.projects.count.replace('{n}', String(projects.length))}</span>
              <h1 className={styles.title}>{t.projects.title}</h1>
            </header>
          </Reveal>
          <div className={styles.list}>
            {projects.map((project, i) => (
              <div key={project.id} style={{ animation: `fadeUp 0.4s ease ${i * 0.06}s both` }}>
                <ProjectCard
                  project={project}
                  lang={lang}
                  translations={t.projects}
                />
              </div>
            ))}
          </div>
          <div className={styles.profileCta}>
            <span>{lang === 'pt' ? 'Quer ver meu perfil?' : 'Want to see my profile?'}</span>
            <a href="https://github.com/Hugolelis" target="_blank" rel="noreferrer">
              {lang === 'pt' ? 'Acessar GitHub' : 'Visit GitHub'} <span aria-hidden="true">↗</span>
            </a>
          </div>
      </main>
    </div>
  )
}
