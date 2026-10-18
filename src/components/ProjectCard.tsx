import { useState } from 'react'
import type { Project } from '../types'
import type { Lang } from '../types'
import type { Translations } from '../i18n'
import { ProjectModal } from './ProjectModal'
import styles from './ProjectCard.module.css'

interface Props {
  project: Project
  lang: Lang
  translations: Translations['projects']
}

export function ProjectCard({ project, lang, translations }: Props) {
  const title = project.title[lang]
  const description = project.description[lang][0]
  const [open, setOpen] = useState(false)

  return (
    <article className={styles.card} onClick={() => setOpen(true)}>
      {project.image ? (
        <img src={project.image} alt="" className={styles.thumb} />
      ) : (
        <div className={styles.thumbFallback} aria-hidden="true">
          <span>{project.type}</span>
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.top}>
          <span className={styles.typeBadge}>{project.type}</span>
          <span className={styles.year}>{project.year}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.tag}>{project.tag}</span>
        <p className={styles.description}>{description}</p>
        <button type="button" className={styles.viewMore} onClick={(e) => { e.stopPropagation(); setOpen(true) }}>
          {lang === 'pt' ? 'Ver mais' : 'View more'}
          <span aria-hidden="true">→</span>
        </button>
      </div>

      {open && (
        <ProjectModal
          project={project}
          lang={lang}
          translations={translations}
          onClose={() => setOpen(false)}
        />
      )}
    </article>
  )
}
