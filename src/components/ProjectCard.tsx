import { useState } from 'react'
import type { Project } from '../types'
import type { Translations } from '../i18n'
import styles from './ProjectCard.module.css'

interface Props {
  project: Project
  translations: Translations['projects']
}

const TYPE_CLASS: Record<Project['type'], string> = {
  API:   styles.tagApi,
  CLI:   styles.tagCli,
  WEB:   styles.tagWeb,
  LIB:   styles.tagLib,
  OTHER: styles.tagOther,
}

export function ProjectCard({ project, translations }: Props) {
  const [hovered, setHovered] = useState(false)

  const title = translations[project.titleKey as keyof typeof translations]
  const description = translations[project.descriptionKey as keyof typeof translations]
  const typeClass = TYPE_CLASS[project.type] ?? styles.tagOther

  return (
    <a href={project.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
      <article
        className={`${styles.card} ${hovered ? styles.active : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={styles.top}>
          <span className={`${styles.typeBadge} ${typeClass}`}>{project.type}</span>
          <span className={styles.tag}>{project.tag}</span>
          <span className={styles.year}>{project.year}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <span className={styles.arrow}>→</span>
      </article>
    </a>
  )
}
